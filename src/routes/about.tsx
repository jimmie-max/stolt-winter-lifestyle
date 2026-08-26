import { Link, createFileRoute } from "@tanstack/react-router";

import { SectionHead } from "@/components/site/Sections";

const TITLE = "About Stolt of Sweden — the BootSki story from Sweden";
const DESCRIPTION =
  "Stolt of Sweden is the Swedish brand behind BootSki, created by skiers Tobias and Oskar. Read how a childhood experiment — sawing off skis and selling them to friends — became a design-patented short ski built for freedom and fun.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const PRESS = [
  {
    quote:
      "I have been skiing for four hours now, loving the Stolts. I haven´t taken them off so that's a good sign. Superfast learning curve!",
    author: "Tyler Kramer",
    source: "Palisades Tahoe, USA",
  },
  {
    quote:
      "Leading the way with Stolt of Sweden: With 80,000 followers, the revolutionary Swedish Short Skis launch the new season.",
    author: "Angelo Bonorino",
    source: "Neve Italia",
    url: "https://www.neveitalia.it/test/news/in-cima-alla-curva-con-stolt-of-sweden-con-80-000-followers-i-rivoluzionari-sci-corti-svedesi-lanciano-la-nuova-stagione",
  },
];

function AboutPage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="shell py-20">
          <SectionHead eyebrow="About" title={<>Compact skiing,<br />from Sweden.</>}>
            <p className="text-ink-foreground/75">
              Experience the moment. Compact skiing has never been easier. We are based in
              Sweden and ship directly from Sweden.
            </p>
          </SectionHead>
        </div>
      </section>

      <section className="shell grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <h2 className="eyebrow text-primary">What we make</h2>
          <p className="mt-5 text-base leading-relaxed">
            BootSki — the world&apos;s smallest ski with a design patented design. Universal
            fit, compatible with all DIN-type ski boots. A perfect add-on and a fun
            alternative to traditional skis, minimalistic yet carefully engineered for
            function, flexibility and performance. They can be both waxed and sharpened.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Ski Goggles model ST-50 — one goggle, two lenses. Built for long days on the mountain, developed
            and carefully tested by us at Stolt of Sweden.
          </p>
          <div className="mt-8 flex gap-3">
            <Link to="/bootski" className="btn-brand">
              Shop short skis
            </Link>
            <Link to="/goggles" className="btn-outline-dark">
              Shop goggles
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          {PRESS.map((p) => (
            <figure key={p.author} className="bg-sand p-8">
              <blockquote className="font-display text-lg font-semibold leading-snug">
                “{p.quote}”
              </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              {p.author} —{" "}
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-primary"
                >
                  {p.source}
                </a>
              ) : (
                p.source
              )}
            </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
