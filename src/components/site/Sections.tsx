import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";

export function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div>
      {eyebrow && <p className="eyebrow text-primary">{eyebrow}</p>}
      <h2 className="display-xl mt-4 text-4xl sm:text-5xl">{title}</h2>
      {children && <div className="mt-5 max-w-md text-base leading-relaxed">{children}</div>}
    </div>
  );
}

export function ArrowLink({
  to,
  children,
  light,
}: {
  to: "/bootski" | "/goggles" | "/faq" | "/about" | "/manuals/st-50" | "/size-guide";
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link to={to} className={`link-arrow ${light ? "text-ink-foreground" : ""}`}>
      {children}
      <ArrowRight className="h-4 w-4" strokeWidth={2} />
    </Link>
  );
}

export type FaqItem = { q: string; a: ReactNode };

export function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border border-t border-border">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-6 py-5 text-left"
          >
            <span className="font-display text-sm font-semibold sm:text-base">{item.q}</span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
