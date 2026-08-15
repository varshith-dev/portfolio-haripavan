"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "top", label: "Hero", num: "01" },
  { id: "initiatives", label: "Case Studies", num: "02" },
  { id: "practice", label: "Practice", num: "03" },
  { id: "experience", label: "Experience", num: "04" },
  { id: "recognition", label: "Honors", num: "05" },
  { id: "highlights", label: "Media", num: "06" },
  { id: "contact", label: "Contact", num: "07" },
];

export function ScrollSidebar() {
  const [activeId, setActiveId] = useState<string>("top");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Default to Hero when near top of page
      if (window.scrollY < 200) {
        setActiveId("top");
      }

      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver for active section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.scrollY >= 200) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -40% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Scroll position navigation"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex pointer-events-auto"
    >
      {sections.map((s) => {
        const isActive = activeId === s.id;
        const showTitle = isScrolling && isActive;

        return (
          <button
            key={s.id}
            onClick={() => scrollToSection(s.id)}
            aria-label={`Scroll to ${s.label}`}
            className="group relative flex items-center gap-3 py-1 outline-none cursor-pointer"
          >
            {/* Clean Floating Badge Label */}
            <span
              className={`pointer-events-none whitespace-nowrap rounded-[4px] border border-border bg-card px-2.5 py-1 font-mono text-[11px] font-semibold transition-all duration-200 shadow-lg ${
                showTitle
                  ? "opacity-100 text-foreground border-foreground translate-x-0"
                  : "opacity-0 group-hover:opacity-100 text-muted-foreground translate-x-1 group-hover:translate-x-0"
              }`}
            >
              <span className="text-muted-foreground mr-1.5">{s.num}</span>
              {s.label}
            </span>

            {/* Crisp Minimal Indicator Dot */}
            <div className="flex h-4 w-4 items-center justify-center">
              <span
                className={`transition-all duration-300 ${
                  isActive
                    ? "h-2.5 w-2.5 rounded-full bg-foreground ring-4 ring-foreground/20"
                    : "h-2 w-2 rounded-full bg-muted-foreground/30 group-hover:bg-foreground group-hover:scale-125"
                }`}
              />
            </div>
          </button>
        );
      })}
    </aside>
  );
}
