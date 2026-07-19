"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// CSS scroll-snap carousel. Swipe/drag native; buttons + optional autoplay nudge it.
export function Carousel({
  children,
  autoplay = false,
  interval = 3500,
  dark = false,
}: {
  children: React.ReactNode;
  autoplay?: boolean;
  interval?: number;
  dark?: boolean;
}) {
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  const nudge = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      const el = track.current;
      if (!el || paused.current) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({
        left: atEnd ? 0 : el.scrollLeft + el.clientWidth * 0.8,
        behavior: "smooth",
      });
    }, interval);
    return () => clearInterval(id);
  }, [autoplay, interval]);

  const btn = dark
    ? "border-white/40 text-white hover:border-white"
    : "border-border text-foreground hover:border-foreground";

  return (
    <div
      className="relative"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 py-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          aria-label="Previous"
          onClick={() => nudge(-1)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${btn}`}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          aria-label="Next"
          onClick={() => nudge(1)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${btn}`}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
