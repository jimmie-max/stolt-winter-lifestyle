import { useState } from "react";

import { useCart } from "@/lib/cart";
import { formatSEK, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0]!);

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <img
          src={product.image}
          alt={product.imageAlt}
          width={600}
          height={750}
          loading="lazy"
          className="h-full w-full object-contain p-6 transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={product.hoverImage ?? product.image}
          alt=""
          aria-hidden="true"
          width={600}
          height={750}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        {!product.available && (
          <span className="eyebrow absolute left-4 top-4 bg-ink px-2.5 py-1 text-ink-foreground">
            {product.note ?? "Sold out"}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <h3 className="font-display text-sm font-semibold">
          {product.shortTitle} — {product.colour}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{formatSEK(product.price)}</p>

        {product.sizes.length > 1 && (
          <div className="mt-3 flex gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                aria-pressed={size === s}
                className={`border px-3 py-1.5 text-xs transition-colors ${
                  size === s
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="mt-auto pt-4">
          {product.available ? (
            <button
              type="button"
              onClick={() => add(product, size)}
              className="btn-brand w-full"
            >
              Add to bag
            </button>
          ) : (
            <span className="btn-outline-dark w-full cursor-not-allowed opacity-50">
              {product.note ?? "Sold out"}
            </span>
          )}
          {product.note && product.available && (
            <p className="mt-2 text-xs text-muted-foreground">{product.note}</p>
          )}
        </div>
      </div>
    </article>
  );
}
