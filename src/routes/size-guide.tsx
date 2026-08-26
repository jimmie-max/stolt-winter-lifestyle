import { Link, createFileRoute } from "@tanstack/react-router";

import { SectionHead } from "@/components/site/Sections";

const TITLE = "BootSki size guide — Stolt of Sweden";
const DESCRIPTION =
  "BootSki comes in three sizes. Adults and teens usually need Adult Medium or Adult Large, younger kids need Kids size (Small in the chart).";

export const Route = createFileRoute("/size-guide")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/size-guide" },
    ],
    links: [{ rel: "canonical", href: "/size-guide" }],
  }),
  component: SizeGuidePage,
});

function SizeGuidePage() {
  return (
    <section className="shell grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr]">
      <SectionHead eyebrow="Size guide" title="Which size?">
        <p className="text-muted-foreground">
          The BootSkis are available in 3 sizes in total.
        </p>
      </SectionHead>

      <div>
        <ul className="divide-y divide-border border-y border-border text-sm">
          <li className="flex items-baseline justify-between gap-6 py-5">
            <span className="font-display font-semibold">Adult Medium</span>
            <span className="text-muted-foreground">Adults and teenagers</span>
          </li>
          <li className="flex items-baseline justify-between gap-6 py-5">
            <span className="font-display font-semibold">Adult Large</span>
            <span className="text-muted-foreground">Adults and teenagers</span>
          </li>
          <li className="flex items-baseline justify-between gap-6 py-5">
            <span className="font-display font-semibold">Kids (= Small)</span>
            <span className="text-muted-foreground">Younger kids</span>
          </li>
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Size Medium and Large are found in the adult section. In the size chart
          &ldquo;Small&rdquo; is the same as &ldquo;Kids&rdquo;. BootSki has a universal fit
          and is compatible with all DIN-type ski boots — every pair includes 2 extra metal
          strings for perfect binding adjustment.
        </p>
        <div className="mt-8 flex gap-3">
          <Link to="/bootski" className="btn-brand">
            Shop Bootski
          </Link>
          <Link to="/manuals/st-50" className="btn-outline-dark">
            Manuals
          </Link>
        </div>
      </div>
    </section>
  );
}
