import { Link, createFileRoute } from "@tanstack/react-router";
import { Eye, Magnet, MountainSnow, Package, Smile, Sparkles } from "lucide-react";

import ctaMountains from "@/assets/cta-mountains.jpg";
import heroImage from "@/assets/hero-justgo.jpg";
import lensBright from "@/assets/lens-brightsun.jpg";
import lensLow from "@/assets/lens-lowlight.jpg";
import { ArrowLink, FaqList, SectionHead } from "@/components/site/Sections";
import { BOOTSKI, ST50, formatSEK } from "@/lib/products";

const TITLE = "Short skis & fun skis — BootSki by Stolt of Sweden";
const DESCRIPTION =
  "Just go. BootSki is a short ski barely longer than the sole of a ski boot — a fun, compact ski that fits all DIN-type ski boots. Plus ST-50 goggles with two lenses. Designed in Sweden.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is a short ski?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A short ski is a ski that is far shorter than a traditional ski. BootSki is a short ski that is not much longer than the sole of a ski boot, which makes it small and light enough to bring anywhere.",
              },
            },
            {
              "@type": "Question",
              name: "What is BootSki?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "BootSki is the world's smallest ski with a design patented design — a short ski not much longer than the sole of a ski boot. It works as a fun add-on to your slope experience.",
              },
            },
            {
              "@type": "Question",
              name: "Do BootSki short skis work with regular ski boots?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. BootSki has a universal fit and is compatible with all DIN-type ski boots.",
              },
            },

            {
              "@type": "Question",
              name: "What lenses are included with the ST-50 goggles?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ST-50 ships with an S3 Grey/Silver Mirror main lens fitted and an S1 Clear Grey spare lens for fog or flat light, swapped in seconds with the magnetic Lens Quick Change System.",
              },
            },
            {
              "@type": "Question",
              name: "How long does shipping take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Orders are dispatched from Sweden within 1-2 working days. Delivery usually takes about 2-5 days to most countries in Europe. Orders outside Europe usually take a bit longer.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const PILLARS = [
  {
    icon: Package,
    title: "Grab and go.",
    body: "Small, light and easy to bring anywhere.",
  },
  {
    icon: MountainSnow,
    title: "Click in.",
    body: "Universal fit — compatible with all DIN-type ski boots.",
  },
  {
    icon: Smile,
    title: "Have fun.",
    body: "A fun alternative to traditional skis, enhancing your slope experience.",
  },
];

const GOGGLE_FEATURES = [
  { icon: Eye, title: "Two lenses", body: "S3 mirror fitted, S1 clear spare included." },
  { icon: Magnet, title: "Magnetic swap", body: "Lens Quick Change System, in seconds." },
  { icon: Sparkles, title: "Anti-fog", body: "100% UV400 protection and anti-fog coating." },
  { icon: MountainSnow, title: "Wide view", body: "Double Lens Toric for a wider field of view." },
];

const FAQ = [
  {
    q: "What is a short ski?",
    a: "A short ski is a ski that is far shorter than a traditional ski. BootSki is a short ski that is not much longer than the sole of a ski boot — small and light enough to bring anywhere.",
  },
  {
    q: "What is BootSki?",
    a: "The world's smallest ski with a design patented design. A perfect add-on and a fun alternative to traditional skis, enhancing your slope experience.",
  },
  {
    q: "Do BootSki short skis work with regular ski boots?",
    a: "Universal fit — compatible with all DIN-type ski boots.",
  },

  {
    q: "Which size should I buy?",
    a: "BootSkis come in three sizes. Adults and teenagers most likely need Adult Medium or Adult Large. Younger kids most likely need Kids size (the same as Small in the size chart).",
  },
  {
    q: "What lenses are included with the ST-50 goggles?",
    a: "An S3 Grey/Silver Mirror main lens fitted as standard, plus an S1 Clear Grey spare lens for fog or flat light — swapped in seconds with the magnetic Lens Quick Change System.",
  },
  {
    q: "How long does shipping take?",
    a: "Dispatched from Sweden within 1-2 working days. Delivery usually takes about 2-5 days to most countries in Europe; outside Europe it usually takes a bit longer.",
  },
];

function Home() {
  const featured = BOOTSKI.filter((p) => p.available).slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroImage}
          alt="Four friends sitting in the snow at sunset with short skis beside them"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-[62vh] min-h-[420px] w-full object-cover md:h-[76vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="shell">
            <h1 className="display-xl text-6xl text-ink-foreground sm:text-7xl md:text-8xl">
              Just go.
            </h1>
            <p className="mt-5 max-w-sm text-lg text-ink-foreground/90">
              A simpler way to enjoy winter. Short skis barely longer than your boot,
              and one goggle for every light.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/bootski" className="btn-brand">
                Shop short skis
              </Link>
              <Link to="/goggles" className="btn-outline-light">
                Shop goggles
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-sand">
        <div className="shell grid gap-10 py-14 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/25">
                <Icon className="h-5 w-5" strokeWidth={1.4} />
              </span>
              <div>
                <h2 className="eyebrow">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bootski */}
      <section className="bg-ink text-ink-foreground">
        <div className="shell grid items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Short skis · Bootski" title={<>Short skis.<br />Big fun.</>}>
              <p className="text-ink-foreground/75">
                BootSki is the world&apos;s smallest ski with a design patented design — a short
                ski not much longer than the sole of a ski boot. Minimalistic yet carefully
                engineered for function, flexibility and performance, and they can be both
                waxed and sharpened.
              </p>
            </SectionHead>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link to="/bootski" className="btn-brand">
                Shop short skis
              </Link>

              <ArrowLink to="/size-guide" light>
                Size guide
              </ArrowLink>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {featured.map((p) => (
              <Link
                key={p.handle}
                to="/bootski"
                className="group bg-ink-foreground/5 p-2 transition-colors hover:bg-ink-foreground/10"
                aria-label={`Shop ${p.shortTitle} ${p.colour}`}
              >
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={240}
                  height={320}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-contain"
                />
                <p className="mt-2 text-center text-[10px] uppercase tracking-wider text-ink-foreground/60">
                  {p.colour}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Goggles */}
      <section className="bg-bone">
        <div className="shell grid items-start gap-12 py-20 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Goggles" title={<>One goggle.<br />That&apos;s it.</>}>
              <p className="text-muted-foreground">
                Two lenses included. Ready for whatever the mountain brings.
              </p>
            </SectionHead>
            <p className="mt-6 font-display text-sm font-semibold">
              {formatSEK(ST50.price)} · {ST50.note}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link to="/goggles" className="btn-brand">
                Shop goggles
              </Link>
              <ArrowLink to="/manuals/st-50">Manual</ArrowLink>
            </div>
          </div>

          <div>
            <img
              src={ST50.image}
              alt={ST50.imageAlt}
              width={900}
              height={600}
              loading="lazy"
              className="w-full object-contain"
            />
            <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {GOGGLE_FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon className="h-5 w-5" strokeWidth={1.4} />
                  <dt className="eyebrow mt-3">{title}</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="shell grid gap-4 pb-20 sm:grid-cols-2">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHead eyebrow="FAQ" title="Got questions?" />
            <div className="mt-8">
              <ArrowLink to="/faq">View all FAQs</ArrowLink>
            </div>
          </div>
          <FaqList items={FAQ} />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative">
        <img
          src={ctaMountains}
          alt="Snow covered mountain valley at dusk"
          width={1920}
          height={700}
          loading="lazy"
          className="h-[340px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="display-xl text-3xl text-ink-foreground sm:text-4xl">
            Winter is out there.
            <br />
            <span className="text-primary">Just go.</span>
          </h2>
          <Link to="/bootski" className="btn-brand mt-8">
            Shop short skis
          </Link>
        </div>
      </section>
    </>
  );
}
