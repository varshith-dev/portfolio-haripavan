"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PixelImageRevealProps {
  src: string;
  alt: string;
  className?: string;
}

export function PixelImageReveal({ src, alt, className = "" }: PixelImageRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      setLoaded(true);

      const render = (pixelSize: number, opacity: number) => {
        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);

        if (pixelSize <= 1) {
          ctx.globalAlpha = opacity;
          ctx.drawImage(img, 0, 0, width, height);
          return;
        }

        // Offscreen scaled-down draw to achieve true hardware pixelation
        const w = Math.max(1, Math.floor(width / pixelSize));
        const h = Math.max(1, Math.floor(height / pixelSize));

        const offscreen = document.createElement("canvas");
        offscreen.width = w;
        offscreen.height = h;
        const offCtx = offscreen.getContext("2d");
        if (!offCtx) return;

        offCtx.drawImage(img, 0, 0, w, h);

        ctx.imageSmoothingEnabled = false;
        ctx.globalAlpha = opacity;
        ctx.drawImage(offscreen, 0, 0, w, h, 0, 0, width, height);
      };

      // Set canvas dimension based on container size
      const updateSize = () => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width || 340;
        canvas.height = rect.height || 425;
      };

      updateSize();

      // GSAP Timeline to animate pixel size from 32px block down to 1px crisp resolution
      const state = { pixelSize: 36, opacity: 0 };

      gsap.to(state, {
        pixelSize: 1,
        opacity: 1,
        duration: 1.4,
        ease: "power2.inOut",
        onUpdate: () => {
          render(state.pixelSize, state.opacity);
        },
      });
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/5] w-full overflow-hidden rounded-[3px] border border-border bg-card shadow-xl ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-103"
        aria-label={alt}
      />
    </div>
  );
}
