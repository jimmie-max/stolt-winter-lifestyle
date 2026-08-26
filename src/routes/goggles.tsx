import { Link, createFileRoute } from "@tanstack/react-router";

import lensBright from "@/assets/lens-brightsun.jpg";
import lensLow from "@/assets/lens-lowlight.jpg";
import { SectionHead } from "@/components/site/Sections";
import { ST50, formatSEK, productUrl } from "@/lib/products";

const TITLE = "ST-50 ski goggles with spare lens — Stolt of Sweden";
const DESCRIPTION =
  "ST-50 ski goggles: Double Lens Toric, S3 mirror lens fitted, S1 clear grey spare lens included, magnetic Lens Quick Change System, UV400 and anti-fog. Arriving October 2026.";

export const Route = createFileRoute("/goggles")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/goggles" },
      { property: "og:image", content: ST50.image },
      { name: "twitter:image", content: ST50.image },
    ],
    links: [{ rel: "canonical", href: "/goggles" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Stolt of Sweden ST-50 Black Ski Goggles with Spare Lens",
          image: ST50.image,
          sku: "2050-31",
          gtin13: "7350114020009",
          brand: { "@type": "Brand", name: "Stolt of Sweden" },
          description:
            "ST-50 is built for long days on the mountain. Double Lens Toric, S3 Grey/Silver Mirror main lens fitted, S1 Clear Grey spare lens included, 100% UV400 protection, anti-fog coating and OTG design.",
          offers: {
            "@type": "Offer",
            price: ST50.price,
            priceCurrency: "SEK",
            availability: "https://schema.org/PreOrder",
            url: productUrl(ST50),
          },
        }),
      },
    ],
  }),
  component: GogglesPage,
});

const HIGHLIGHTS = [
  {
    title: "Double Lens Toric",
    body: "A dual-curved lens that gives a wider, more natural field of view with less distortion at the edges.",
  },
  {
    title: "S3 Grey/Silver Mirror main lens",
    body: "Fitted as standard — dark and sharp, built for bright sun and white snow.",
  },
  {
    title: "S1 Clear Grey spare lens included",
    body: "A lighter lens for fog or flat light, swapped in seconds with the magnetic Lens Quick Change System.",
  },
  {
    title: "UV400 and anti-fog",
    body: "100% UV400 protection and anti-fog coating for clear vision all day.",
  },
  {
    title: "OTG design",
    body: "Over-The-Glasses — room for your own glasses underneath.",
  },
  {
    title: "Stolt strap",
    body: 'Black strap with a white "Stolt of Sweden" logo.',
  },
];

const INCLUDED = [
  "ST-50 ski goggles with S3 mirror lens fitted",
  "S1 Clear Grey spare lens for fog/low light",
  "Hard EVA case for safe storage and transport",
  "Two-compartment pouch — bring the goggles and spare lens out on the mountain",
];

function GogglesPage() {
  return (
    <>
      <section className="bg-bone">
        <div className="shell grid items-center gap-12 py-16 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="ST-50" title={<>One goggle.<br />That&apos;s it.</>}>
              <p className="text-muted-foreground">
                Two lenses. One goggle. Ready for the whole day. ST-50 is built for long days
                on the mountain — clean, minimal design meets premium materials and simple,
                dependable function, developed and carefully tested by us at Stolt of Sweden.
              </p>
            </SectionHead>
            <p className="mt-8 font-display text-2xl font-semibold">{formatSEK(ST50.price)}</p>
            <p className="mt-1 text-sm text-primary">
              Arriving October 2026. You can explore ST-50 now — ordering opens once stock
              lands.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={productUrl(ST50)} className="btn-brand">
                Notify me
              </a>
              <Link to="/manuals/st-50" className="btn-outline-dark">
                ST-50 manual
              </Link>
            </div>
          </div>
          <img
            src={ST50.image}
            alt={ST50.imageAlt}
            width={900}
            height={700}
            className="w-full object-contain"
          />
        </div>
      </section>

      <section className="shell grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <h2 className="eyebrow text-primary">Highlights</h2>
          <dl className="mt-6 divide-y divide-border border-t border-border">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="py-5">
                <dt className="font-display text-sm font-semibold">{h.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.body}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="eyebrow text-primary">What&apos;s included</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {INCLUDED.map((i) => (
              <li key={i} className="border-b border-border pb-3">
                {i}
              </li>
            ))}
          </ul>

          <h2 className="eyebrow mt-12 text-primary">Specifications</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">Article no.</dt>
              <dd>2050-31</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">EAN</dt>
              <dd>7350114020009</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">Origin</dt>
              <dd>Designed in Sweden, made in China</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="shell grid gap-4 pb-20 sm:grid-cols-2">
        {[
          { src: lensBright, label: "S3 mirror — bright sun", alt: "Sunlit alpine ridge in bright light" },
          { src: lensLow, label: "S1 clear grey — fog and flat light", alt: "Foggy alpine forest in flat light" },
        ].map((img) => (
          <figure key={img.label} className="relative">
            <img
              src={img.src}
              alt={img.alt}
              width={1024}
              height={640}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
            <figcaption className="eyebrow absolute bottom-4 left-4 text-ink-foreground drop-shadow">
              {img.label}
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
