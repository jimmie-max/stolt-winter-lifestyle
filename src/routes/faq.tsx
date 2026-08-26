import { createFileRoute } from "@tanstack/react-router";

import { FaqList, SectionHead } from "@/components/site/Sections";

const TITLE = "FAQ — Stolt of Sweden";
const DESCRIPTION =
  "Answers about BootSki short skis, ST-50 goggles, sizing, shipping from Sweden and orders.";

const ITEMS = [
  {
    q: "Where are you located?",
    a: "We're based in Sweden.",
  },
  {
    q: "How long does shipping take?",
    a: "Once your order has been placed, it will be dispatched from Sweden within 1-2 working days. Delivery usually takes about 2-5 days to most countries in Europe. For orders outside Europe delivery usually takes a bit longer. But it´s worth the wait!",
  },
  {
    q: "Where are my items shipped from?",
    a: "We ship directly from Sweden, and will make sure that we will ship as fast as possible. Customs duty may apply in some countries.",
  },
  {
    q: "What is BootSki?",
    a: "The world's smallest ski with a design patented design. A perfect add-on and a fun alternative to traditional skis, enhancing your slope experience.",
  },
  {
    q: "Do BootSki work with regular ski boots?",
    a: "Universal fit — compatible with all DIN-type ski boots.",
  },
  {
    q: "What is included with a pair of BootSki?",
    a: "1 pair of BootSkis, 1 ultra-flexible storage bag, 2 extra metal strings for perfect binding adjustment — and some good tips!",
  },
  {
    q: "Which size should I buy?",
    a: "The BootSkis are available in 3 sizes in total. Are you an adult or a teenager, then it's most likely size Adult Medium or Adult Large you should buy. Are you a younger kid, then it's most likely size Kids you should buy. In the size chart \"Small\" is the same as \"Kids\".",
  },
  {
    q: "What lenses are included with the ST-50 goggles?",
    a: "An S3 Grey/Silver Mirror main lens fitted as standard, and an S1 Clear Grey spare lens for fog or flat light — swapped in seconds with the magnetic Lens Quick Change System.",
  },
  {
    q: "Questions on your order or our products?",
    a: "Send us an email at info@stoltski.com with your order number.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: ITEMS.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <section className="shell grid gap-12 py-20 lg:grid-cols-[1fr_1.6fr]">
      <SectionHead eyebrow="FAQ" title="Got questions?">
        <p className="text-muted-foreground">
          Still stuck? Email <a href="mailto:info@stoltski.com" className="underline">info@stoltski.com</a>.
        </p>
      </SectionHead>
      <FaqList items={ITEMS} />
    </section>
  );
}
