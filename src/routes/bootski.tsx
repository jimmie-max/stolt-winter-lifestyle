import { createFileRoute } from "@tanstack/react-router";

import bootskiInHand from "@/assets/bootski-in-hand.jpg";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHead } from "@/components/site/Sections";
import { BUNDLE_TIERS } from "@/lib/cart";
import { BOOTSKI } from "@/lib/products";

const TITLE = "Short skis for adults & kids — BootSki | Stolt of Sweden";
const DESCRIPTION =
  "Shop BootSki short skis — fun, compact skis not much longer than the sole of a ski boot. Adult and kids sizes, universal fit for all DIN-type ski boots. Shipped from Sweden.";


export const Route = createFileRoute("/bootski")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/bootski" },
    ],
    links: [{ rel: "canonical", href: "/bootski" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "BootSki short skis",
          itemListElement: BOOTSKI.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: `Stolt of Sweden ${p.title}`,
              image: p.image,
              brand: { "@type": "Brand", name: "Stolt of Sweden" },
              offers: {
                "@type": "Offer",
                price: p.price,
                priceCurrency: "SEK",
                availability: p.available
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock",
              },
            },
          })),
        }),
      },
    ],
  }),
  component: BootskiPage,
});

function BootskiPage() {
  const adult = BOOTSKI.filter((p) => p.fit === "ADULT");
  const kids = BOOTSKI.filter((p) => p.fit === "KIDS");

  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="shell grid items-center gap-12 py-16 lg:grid-cols-2">
          <SectionHead eyebrow="Short skis · Bootski" title={<>Short skis.<br />Big fun.</>}>
            <p className="text-ink-foreground/75">
              BootSki is the world&apos;s smallest ski with a design patented design — a short
              ski not much longer than the sole of a ski boot. Universal fit, compatible with
              all DIN-type ski boots. Every pair ships with a storage bag and two extra metal
              strings for binding adjustment.
            </p>

          </SectionHead>
          <img
            src={bootskiInHand}
            alt="A skier carrying a pair of black BootSki short skis in one hand on a sunny groomed slope — each ski barely longer than the sole of a ski boot"
            width={1600}
            height={1200}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-primary/10">
        <div className="shell flex flex-wrap items-center gap-x-10 gap-y-3 py-5">
          <p className="eyebrow text-primary">Bundle &amp; save</p>
          {BUNDLE_TIERS.map((t) => (
            <p key={t.minItems} className="text-sm">
              {t.label} — <strong>save {Math.round(t.rate * 100)}%</strong>
            </p>
          ))}
          <p className="text-sm">
            Ski + goggle — <strong>save at least 15%</strong>
          </p>
        </div>
      </section>

      <section className="shell py-16">
        <h2 className="eyebrow">Adult &amp; teen</h2>
        <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {adult.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>

        <h2 className="eyebrow mt-20">Kids</h2>
        <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {kids.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          VAT is included in EU countries. For countries outside the EU, VAT and customs may
          apply.
        </p>
      </section>
    </>
  );
}
