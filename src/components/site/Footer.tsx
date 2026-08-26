import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";

import logo from "@/assets/stolt-logo.png.asset.json";
import { STORE_ORIGIN } from "@/lib/products";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Short skis", to: "/bootski" as const },
      { label: "Ski goggles", to: "/goggles" as const },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Manuals", to: "/manuals/st-50" as const },
      { label: "Size guide", to: "/size-guide" as const },
      { label: "FAQ", to: "/faq" as const },
    ],
  },
  {
    title: "Company",
    links: [{ label: "About Stolt", to: "/about" as const }],
  },
];

const EXTERNAL = [
  { label: "Terms and conditions", href: `${STORE_ORIGIN}/pages/terms-and-conditions` },
  { label: "Refund policy", href: `${STORE_ORIGIN}/policies/refund-policy` },
  { label: "Privacy policy", href: `${STORE_ORIGIN}/policies/privacy-policy` },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <img
            src={logo.url}
            alt="Stolt of Sweden"
            width={160}
            height={50}
            loading="lazy"
            className="h-7 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-xs text-sm text-ink-foreground/65">
            Compact skiing, designed in Sweden. Shipped directly from Sweden.
          </p>
          <div className="mt-6 flex gap-4 text-ink-foreground/70">
            <a href="https://www.instagram.com/stolt.ski/" aria-label="Instagram" className="hover:text-primary">
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a href="https://www.facebook.com/stoltofsweden" aria-label="Facebook" className="hover:text-primary">
              <Facebook className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a href="https://www.youtube.com/@stoltofsweden" aria-label="YouTube" className="hover:text-primary">
              <Youtube className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h2 className="eyebrow text-ink-foreground/55">{col.title}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-ink-foreground/80 hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink-foreground/15">
        <div className="shell flex flex-col gap-4 py-6 text-xs text-ink-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Stolt of Sweden. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="mailto:info@stoltski.com" className="hover:text-primary">
              info@stoltski.com
            </a>
            {EXTERNAL.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-primary">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
