import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/stolt-logo.png.asset.json";
import { useCart } from "@/lib/cart";

const NAV = [
  { to: "/bootski", label: "Bootski" },
  { to: "/goggles", label: "Goggles" },
  { to: "/manuals/st-50", label: "Manuals" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const { totals, setOpen } = useCart();
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link to="/" className="shrink-0" aria-label="Stolt of Sweden — home">
          <img
            src={logo.url}
            alt="Stolt of Sweden"
            width={140}
            height={44}
            className="h-6 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="eyebrow text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative flex h-10 w-10 items-center justify-center transition-colors hover:text-primary"
            aria-label={`Open cart, ${totals.items} items`}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {totals.items > 0 && (
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                {totals.items}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobile((v) => !v)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobile}
          >
            {mobile ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {mobile && (
        <nav className="border-t border-border bg-background md:hidden" aria-label="Mobile">
          <div className="shell flex flex-col py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobile(false)}
                className="eyebrow border-b border-border/60 py-4 last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
