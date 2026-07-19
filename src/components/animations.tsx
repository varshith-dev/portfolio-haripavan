"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// One client island that drives all GSAP animations via data-attributes,
// so the rest of the page can stay server-rendered.
export function Animations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero — stagger in on load
      const hero = gsap.utils.toArray<HTMLElement>("[data-hero]");
      if (hero.length) {
        gsap.from(hero, {
          y: 26,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
        });
      }

      // Sketchy squiggle — draw the hand-drawn underline
      gsap.utils.toArray<SVGPathElement>("[data-squiggle] path").forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(p, {
          strokeDashoffset: 0,
          duration: 1.2,
          delay: 0.55,
          ease: "power2.inOut",
        });
      });

      // Scroll reveals — sections rise + fade as they enter
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 34,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      // Count-up stats
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const to = Number(el.dataset.to || "0");
        const suffix = el.dataset.suffix || "";
        const pad = Number(el.dataset.pad || "0");
        const comma = el.dataset.format === "comma";
        const render = (v: number) => {
          let s = comma ? Math.round(v).toLocaleString("en-US") : String(Math.round(v));
          if (pad) s = s.padStart(pad, "0");
          return s + suffix;
        };
        el.textContent = render(0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: to,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => (el.textContent = render(obj.v)),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
