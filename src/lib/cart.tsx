import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { PRODUCTS, STORE_ORIGIN, type Product } from "./products";

export type CartLine = {
  handle: string;
  size: string;
  qty: number;
};

export type BundleTier = {
  /** Minimum number of items in the cart. */
  minItems: number;
  /** Discount as a fraction, e.g. 0.1 = 10%. */
  rate: number;
  label: string;
};

/**
 * Bundle pricing ladder. Purely presentational here — the real discount has to
 * be mirrored by an automatic discount / Shopify Function in the store so the
 * checkout total matches what the customer sees in this drawer.
 */
export const BUNDLE_TIERS: BundleTier[] = [
  { minItems: 2, rate: 0.1, label: "Bundle of 2" },
  { minItems: 3, rate: 0.15, label: "Bundle of 3" },
  { minItems: 4, rate: 0.2, label: "Bundle of 4+" },
];

/** Extra floor when the cart mixes skis and goggles. */
export const COMPLETE_KIT_RATE = 0.15;

export type CartTotals = {
  items: number;
  subtotal: number;
  rate: number;
  discount: number;
  total: number;
  tierLabel: string | null;
  nextTier: { tier: BundleTier; itemsAway: number } | null;
};

const byHandle = new Map(PRODUCTS.map((p) => [p.handle, p]));

export function lineProduct(line: CartLine): Product | undefined {
  return byHandle.get(line.handle);
}

export function computeTotals(lines: CartLine[]): CartTotals {
  const items = lines.reduce((n, l) => n + l.qty, 0);
  const subtotal = lines.reduce(
    (sum, l) => sum + (lineProduct(l)?.price ?? 0) * l.qty,
    0,
  );

  const matched = [...BUNDLE_TIERS].reverse().find((t) => items >= t.minItems);
  let rate = matched?.rate ?? 0;
  let tierLabel = matched?.label ?? null;

  const hasSki = lines.some((l) => lineProduct(l)?.category === "bootski");
  const hasGoggle = lines.some((l) => lineProduct(l)?.category === "goggles");
  if (hasSki && hasGoggle && COMPLETE_KIT_RATE > rate) {
    rate = COMPLETE_KIT_RATE;
    tierLabel = "Complete kit";
  }

  const upcoming = BUNDLE_TIERS.find((t) => t.minItems > items);

  const discount = Math.round(subtotal * rate);

  return {
    items,
    subtotal,
    rate,
    discount,
    total: subtotal - discount,
    tierLabel,
    nextTier: upcoming
      ? { tier: upcoming, itemsAway: upcoming.minItems - items }
      : null,
  };
}

type CartContextValue = {
  lines: CartLine[];
  totals: CartTotals;
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (product: Product, size: string) => void;
  setQty: (handle: string, size: string, qty: number) => void;
  remove: (handle: string, size: string) => void;
  clear: () => void;
  /** Shopify cart permalink for the current lines. */
  checkoutUrl: string;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "stolt-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  const add = useCallback((product: Product, size: string) => {
    setLines((prev) => {
      const idx = prev.findIndex(
        (l) => l.handle === product.handle && l.size === size,
      );
      if (idx === -1)
        return [...prev, { handle: product.handle, size, qty: 1 }];
      const next = [...prev];
      next[idx] = { ...next[idx]!, qty: next[idx]!.qty + 1 };
      return next;
    });
    setOpen(true);
  }, []);

  const setQty = useCallback((handle: string, size: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => !(l.handle === handle && l.size === size))
        : prev.map((l) =>
            l.handle === handle && l.size === size ? { ...l, qty } : l,
          ),
    );
  }, []);

  const remove = useCallback((handle: string, size: string) => {
    setLines((prev) =>
      prev.filter((l) => !(l.handle === handle && l.size === size)),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const totals = useMemo(() => computeTotals(lines), [lines]);

  /**
   * Handoff to the live store. Variant IDs are not public in this draft, so we
   * hand the customer to the product pages; swap this for a
   * `/cart/<variantId>:<qty>,...` permalink once variant IDs are wired in.
   */
  const checkoutUrl = useMemo(() => {
    if (lines.length === 0) return `${STORE_ORIGIN}/collections/all`;
    if (lines.length === 1) return `${STORE_ORIGIN}/products/${lines[0]!.handle}`;
    return `${STORE_ORIGIN}/cart`;
  }, [lines]);

  const value = useMemo(
    () => ({ lines, totals, open, setOpen, add, setQty, remove, clear, checkoutUrl }),
    [lines, totals, open, add, setQty, remove, clear, checkoutUrl],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
