import { Link, createFileRoute } from "@tanstack/react-router";

import { SectionHead } from "@/components/site/Sections";
import st50CeInstructions from "@/assets/st-50-ce-instructions.pdf.asset.json";
import { ST50 } from "@/lib/products";

const TITLE = "ST-50 manual & support — Stolt of Sweden";
const DESCRIPTION =
  "Manual and support page for the Stolt of Sweden ST-50 ski goggles: what's in the box, lens swap with the magnetic Lens Quick Change System, specifications and contact.";

export const Route = createFileRoute("/manuals/st-50")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/manuals/st-50" },
      { property: "og:image", content: ST50.image },
      { name: "twitter:image", content: ST50.image },
    ],
    links: [{ rel: "canonical", href: "/manuals/st-50" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "ST-50 ski goggles — manual and support",
          about: "Stolt of Sweden ST-50 Black Ski Goggles with Spare Lens",
          image: ST50.image,
          publisher: { "@type": "Organization", name: "Stolt of Sweden" },
          url: "https://stoltofsweden.com/manuals/st-50",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Manuals", item: "/manuals/st-50" },
            { "@type": "ListItem", position: 2, name: "ST-50", item: "/manuals/st-50" },
          ],
        }),
      },
    ],
  }),
  component: ManualPage,
});

const IN_THE_BOX = [
  "ST-50 ski goggles with S3 mirror lens fitted",
  "S1 Clear Grey spare lens for fog/low light",
  "Hard EVA case for safe storage and transport",
  "Two-compartment pouch — bring the goggles and spare lens out on the mountain",
];

const SPECS: [string, string][] = [
  ["Product", "ST-50 Black Ski Goggles with Spare Lens"],
  ["Article no.", "2050-31"],
  ["EAN", "7350114020009"],
  ["Lens system", "Double Lens Toric"],
  ["Main lens", "S3 Grey/Silver Mirror"],
  ["Spare lens", "S1 Clear Grey"],
  ["Lens change", "Magnetic Lens Quick Change System"],
  ["Protection", "100% UV400, anti-fog coating"],
  ["Fit", "OTG (Over-The-Glasses)"],
  ["Strap", 'Black with white "Stolt of Sweden" logo'],
  ["Origin", "Designed in Sweden, made in China"],
];

function ManualPage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="shell grid items-center gap-10 py-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHead eyebrow="Manuals · ST-50" title="ST-50 support.">
              <p className="text-ink-foreground/75">
                Everything for your ST-50 goggles: what&apos;s in the box, how the lenses swap
                and the full specification.
              </p>
            </SectionHead>
          </div>
          <img
            src={ST50.image}
            alt={ST50.imageAlt}
            width={700}
            height={520}
            className="w-full object-contain"
          />
        </div>
      </section>

      <section className="shell grid gap-14 py-16 lg:grid-cols-2">
        <div>
          <h2 className="eyebrow text-primary">What&apos;s in the box</h2>
          <ul className="mt-6 divide-y divide-border border-y border-border text-sm">
            {IN_THE_BOX.map((i) => (
              <li key={i} className="py-4">
                {i}
              </li>
            ))}
          </ul>

          <h2 className="eyebrow mt-14 text-primary">Changing the lens</h2>
          <ol className="mt-6 space-y-4 text-sm leading-relaxed">
            <li>
              <strong className="font-display">1.</strong> The S1 Clear Grey spare lens is a
              lighter lens for fog or flat light.
            </li>
            <li>
              <strong className="font-display">2.</strong> It is swapped in seconds with the
              magnetic Lens Quick Change System.
            </li>
            <li>
              <strong className="font-display">3.</strong> Store the lens you are not using in
              the two-compartment pouch, or the goggles in the hard EVA case.
            </li>
          </ol>
          <p className="mt-6 bg-sand p-4 text-xs leading-relaxed text-muted-foreground">
            The full printed manual PDF will be linked here — upload the file and link it from
            this section.
          </p>
        </div>

        <div>
          <h2 className="eyebrow text-primary">Specifications</h2>
          <dl className="mt-6 divide-y divide-border border-y border-border text-sm">
            {SPECS.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 py-4">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>

          <h2 className="eyebrow mt-14 text-primary">Need help?</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Send us an email at{" "}
            <a href="mailto:info@stoltski.com" className="underline underline-offset-4">
              info@stoltski.com
            </a>{" "}
            with your order number. We&apos;re based in Sweden.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/goggles" className="btn-brand">
              ST-50 product page
            </Link>
            <Link to="/faq" className="btn-outline-dark">
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
