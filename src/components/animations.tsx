"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Animations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Top scroll progress bar
      const progressBar = document.createElement("div");
      progressBar.className = "scroll-progress";
      document.body.appendChild(progressBar);

      gsap.to(progressBar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.1,
        },
      });

      // 2. Hero entrance cascade — smooth agency text reveal
      const heroElements = gsap.utils.toArray<HTMLElement>("[data-hero]");
      if (heroElements.length) {
        gsap.from(heroElements, {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.05,
        });
      }

      // 2b. High-impact Pixel-by-Pixel Clip Reveal for Portrait Photo
      gsap.utils.toArray<HTMLElement>("[data-img-reveal]").forEach((container) => {
        const img = container.querySelector("img");
        gsap.fromTo(
          container,
          { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.2,
            ease: "power4.inOut",
            delay: 0.1,
          }
        );
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15 },
            { scale: 1, duration: 1.4, ease: "power3.out", delay: 0.1 }
          );
        }
      });

      // 3. Scroll reveals — sections rise & fade with stagger
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const children = el.querySelectorAll("[data-reveal-child]");
        if (children.length > 0) {
          gsap.from(children, {
            y: 24,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: "top 84%", once: true },
          });
        } else {
          gsap.from(el, {
            y: 28,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
          });
        }
      });

      // 4. Subtle magnetic hover effect on buttons & cards with hardware acceleration
      gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((btn) => {
        btn.style.willChange = "transform";
        const xTo = gsap.quickTo(btn, "x", { duration: 0.3, ease: "power2.out" });
        const yTo = gsap.quickTo(btn, "y", { duration: 0.3, ease: "power2.out" });

        const handleMouseMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          xTo((e.clientX - centerX) * 0.15);
          yTo((e.clientY - centerY) * 0.15);
        };

        const handleMouseLeave = () => {
          xTo(0);
          yTo(0);
        };

        btn.addEventListener("mousemove", handleMouseMove, { passive: true });
        btn.addEventListener("mouseleave", handleMouseLeave, { passive: true });
      });

      // 5. Count-up stat numbers
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
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => (el.textContent = render(obj.v)),
        });
      });
    });

    return () => {
      ctx.revert();
      const bar = document.querySelector(".scroll-progress");
      if (bar) bar.remove();
    };
  }, []);

  return null;
}


