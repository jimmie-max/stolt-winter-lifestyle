import { Minus, Plus, X } from "lucide-react";

import { BUNDLE_TIERS, lineProduct, useCart } from "@/lib/cart";
import { formatSEK } from "@/lib/products";

export function CartDrawer() {
  const { lines, totals, open, setOpen, setQty, remove, checkoutUrl } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <button
        type="button"
        aria-label="Close cart"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-ink/50"
      />
      <aside className="relative flex h-full w-full max-w-md flex-col bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="eyebrow">Your bag ({totals.items})</h2>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close cart">
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <p className="text-sm text-muted-foreground">Your bag is empty.</p>
            <button type="button" className="btn-brand" onClick={() => setOpen(false)}>
              Keep browsing
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-5">
            <ul className="space-y-5">
              {lines.map((line) => {
                const product = lineProduct(line);
                if (!product) return null;
                return (
                  <li key={`${line.handle}-${line.size}`} className="flex gap-4">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      width={80}
                      height={80}
                      loading="lazy"
                      className="h-20 w-20 shrink-0 bg-sand object-contain"
                    />
                    <div className="flex-1">
                      <p className="font-display text-sm font-semibold">
                        {product.shortTitle}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {product.colour} · {line.size}
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="flex items-center border border-border">
                          <button
                            type="button"
                            className="p-1.5"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(line.handle, line.size, line.qty - 1)}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-7 text-center text-xs">{line.qty}</span>
                          <button
                            type="button"
                            className="p-1.5"
                            aria-label="Increase quantity"
                            onClick={() => setQty(line.handle, line.size, line.qty + 1)}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(line.handle, line.size)}
                          className="text-xs text-muted-foreground underline underline-offset-4"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <p className="font-display text-sm font-semibold">
                      {formatSEK(product.price * line.qty)}
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 bg-sand p-5">
              <h3 className="eyebrow text-primary">Bundle &amp; save</h3>
              <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                {BUNDLE_TIERS.map((t) => (
                  <li
                    key={t.minItems}
                    className={totals.items >= t.minItems ? "text-foreground" : undefined}
                  >
                    {t.label} — save {Math.round(t.rate * 100)}%
                  </li>
                ))}
                <li>Any ski + any goggle — save at least 15%</li>
              </ul>
              {totals.nextTier && (
                <p className="mt-4 font-display text-xs font-semibold">
                  Add {totals.nextTier.itemsAway} more to save{" "}
                  {Math.round(totals.nextTier.tier.rate * 100)}%.
                </p>
              )}
            </div>
          </div>
        )}

        {lines.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd>{formatSEK(totals.subtotal)}</dd>
              </div>
              {totals.discount > 0 && (
                <div className="flex justify-between text-primary">
                  <dt>
                    {totals.tierLabel} discount ({Math.round(totals.rate * 100)}%)
                  </dt>
                  <dd>−{formatSEK(totals.discount)}</dd>
                </div>
              )}
              <div className="flex justify-between border-t border-border pt-2 font-display text-base font-semibold">
                <dt>Total</dt>
                <dd>{formatSEK(totals.total)}</dd>
              </div>
            </dl>
            <p className="mt-2 text-xs text-muted-foreground">
              VAT included in EU countries, shipping calculated at checkout.
            </p>
            <a href={checkoutUrl} className="btn-brand mt-4 w-full">
              Checkout
            </a>
          </div>
        )}
      </aside>
    </div>
  );
}
