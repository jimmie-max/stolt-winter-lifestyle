import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";

import { ProductCard } from "@/components/site/ProductCard";
import { useCart } from "@/lib/cart";
import {
  BOOTSKI,
  PRODUCTS,
  formatSEK,
  getProductGallery,
  type Product,
} from "@/lib/products";

export const Route = createFileRoute("/products/$handle")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((item) => item.handle === params.handle);
    if (!product || product.category !== "bootski") throw notFound();
    return product;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable — Stolt of Sweden" }, { name: "robots", content: "noindex" }] };
    }

    const description = `${loaderData.title}: a design-patented short ski compatible with DIN-type ski boots. See product details, sizing and images.`;
    return {
      meta: [
        { title: `${loaderData.title} | Stolt of Sweden` },
        { name: "description", content: description },
        { property: "og:title", content: `${loaderData.title} | Stolt of Sweden` },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${loaderData.handle}` },
        { property: "og:image", content: loaderData.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: loaderData.image },
      ],
      links: [{ rel: "canonical", href: `/products/${loaderData.handle}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: loaderData.title,
            image: getProductGallery(loaderData),
            brand: { "@type": "Brand", name: "Stolt of Sweden" },
            description,
            offers: {
              "@type": "Offer",
              price: loaderData.price,
              priceCurrency: loaderData.currency,
              availability: loaderData.available
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            },
          }),
        },
      ],
    };
  },
  component: ProductDetailPage,
});

const INCLUDED = [
  "1 pair of BootSkis",
  "1 ultra-flexible storage bag",
  "2 extra metal strings for binding adjustment",
  "Tips from Stolt of Sweden",
];

const FEATURES = [
  ["Universal fit", "Compatible with all DIN-type ski boots."],
  ["A fun alternative", "A compact alternative to traditional skis for the slopes."],
  ["Smart design", "Minimalistic and engineered for function, flexibility and performance."],
  ["Maintainable", "BootSki can be waxed and sharpened."],
];

function ProductDetailPage() {
  const product = Route.useLoaderData();
  const gallery = getProductGallery(product);
  const { add } = useCart();
  const initialSize = product.sizes[0] ?? "One size";
  const [size, setSize] = useState(initialSize);
  const [activeImage, setActiveImage] = useState(gallery[0] ?? product.image);
  const related = BOOTSKI.filter(
    (item) => item.fit === product.fit && item.handle !== product.handle,
  ).slice(0, 3);

  return (
    <>
      <section className="bg-bone">
        <div className="shell py-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/bootski" className="hover:text-foreground">Short skis</Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{product.colour}</span>
          </nav>
        </div>
      </section>

      <section className="shell grid gap-12 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
        <ProductGallery
          product={product}
          images={gallery}
          activeImage={activeImage}
          onSelect={setActiveImage}
        />

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-primary">{product.fit === "KIDS" ? "Kids short skis" : "Adult & teen short skis"}</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{product.title}</h1>
          <p className="mt-5 font-display text-2xl font-semibold">{formatSEK(product.price)}</p>
          {product.note && <p className="mt-2 text-sm text-primary">{product.note}</p>}

          <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">
            {product.fit === "KIDS" && "This kids short BootSki is made for beginners on the slopes. "}
            BootSki is a design-patented short ski, not much longer than the sole of a ski boot.
            It is a compact, fun alternative to traditional skis.
          </p>

          {product.sizes.length > 1 && (
            <fieldset className="mt-8">
              <legend className="eyebrow">Size</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSize(option)}
                    aria-pressed={size === option}
                    className={`border px-4 py-2 text-sm transition-colors ${
                      size === option
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          <div className="mt-8">
            {product.available ? (
              <button type="button" onClick={() => add(product, size)} className="btn-brand w-full sm:w-auto">
                Add to bag
              </button>
            ) : (
              <span className="btn-outline-dark inline-flex cursor-not-allowed opacity-50">
                {product.note ?? "Sold out"}
              </span>
            )}
          </div>

          <div className="mt-10 border-t border-border">
            <DetailBlock title="How BootSki works">
              <dl className="divide-y divide-border">
                {FEATURES.map(([title, body]) => (
                  <div key={title} className="py-4">
                    <dt className="font-display text-sm font-semibold">{title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</dd>
                  </div>
                ))}
              </dl>
            </DetailBlock>
            <DetailBlock title="Sizing">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.fit === "KIDS"
                  ? "Kids size equals size S. See the size guide for the published fit guidance."
                  : "Adult/teen equals size L. This product is offered in the selectable sizes shown above."}
              </p>
              <Link to="/size-guide" className="mt-3 inline-block text-sm font-semibold text-primary underline underline-offset-4">
                View size guide
              </Link>
            </DetailBlock>
            <DetailBlock title="What's included">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {INCLUDED.map((item) => <li key={item}>— {item}</li>)}
              </ul>
            </DetailBlock>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border">
          <div className="shell py-16">
            <h2 className="font-display text-3xl font-bold">More {product.fit === "KIDS" ? "kids" : "adult"} BootSkis</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => <ProductCard key={item.handle} product={item} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function ProductGallery({
  product,
  images,
  activeImage,
  onSelect,
}: {
  product: Product;
  images: string[];
  activeImage: string;
  onSelect: (image: string) => void;
}) {
  return (
    <div>
      <div className="aspect-[4/5] overflow-hidden bg-sand">
        <img src={activeImage} alt={product.imageAlt} width={900} height={1125} className="h-full w-full object-contain p-6" />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => onSelect(image)}
            aria-label={`View product image ${index + 1}`}
            aria-pressed={activeImage === image}
            className={`aspect-square overflow-hidden border bg-sand ${activeImage === image ? "border-foreground" : "border-transparent"}`}
          >
            <img src={image} alt="" aria-hidden="true" width={180} height={180} loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-border py-6">
      <h2 className="eyebrow mb-4">{title}</h2>
      {children}
    </section>
  );
}