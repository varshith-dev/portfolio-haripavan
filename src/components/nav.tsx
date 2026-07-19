import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Recognition", href: "/#recognition" },
  { label: "Highlights", href: "/#highlights" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="/#top" className="text-[14px] font-medium tracking-tight">
          Hari Pavan
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-5 sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-1.5 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Mobile nav — scrollable */}
      <nav className="flex gap-5 overflow-x-auto border-t border-border px-5 py-2.5 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="shrink-0 text-[13px] text-muted-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
