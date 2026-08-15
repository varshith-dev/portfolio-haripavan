"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LinkedInWebIcon } from "@/components/icons";
import { profile } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Recognition", href: "/#recognition" },
  { label: "Highlights", href: "/#highlights" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <div className="flex items-center gap-3">
          {/* Hamburger — mobile only, top-left */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-border bg-card text-foreground sm:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <a href="/#top" className="group flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
            <span className="h-2 w-2 rounded-[1px] bg-emerald-500" />
            <span className="font-display text-foreground font-semibold lowercase">hari pavan</span>
          </a>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden items-center gap-6 sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13.5px] font-medium text-muted-foreground transition-all duration-200 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              data-magnetic
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[4px] bg-primary px-4 py-1.5 text-[13px] font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:opacity-90"
            >
              <LinkedInWebIcon className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="flex flex-col border-t border-border px-5 py-2 sm:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-[15px] text-foreground/80 last:border-b-0 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
