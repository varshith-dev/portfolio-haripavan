"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface PixelGridRevealProps {
  src: string;
  alt: string;
  className?: string;
}

export function PixelGridReveal({ src, alt, className = "" }: PixelGridRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width || 320;
      const height = rect.height || 400;

      canvas.width = width;
      canvas.height = height;

      // Offscreen canvas to draw full image and extract sampled colors
      const offscreen = document.createElement("canvas");
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, width, height);

      // Sample full image data once into memory buffer
      const fullImgData = offCtx.getImageData(0, 0, width, height).data;

      // Grid settings: 8px x 8px pixel blocks
      const BLOCK_SIZE = 8;
      const cols = Math.ceil(width / BLOCK_SIZE);
      const rows = Math.ceil(height / BLOCK_SIZE);

      // Extract all grid block positions
      const blocks: { x: number; y: number }[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          blocks.push({ x: c * BLOCK_SIZE, y: r * BLOCK_SIZE });
        }
      }

      // Shuffle blocks for pseudo-random pixel-by-pixel coloring effect
      for (let i = blocks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
      }

      // Clear main canvas (start blank)
      ctx.clearRect(0, 0, width, height);

      let currentIndex = 0;
      const totalBlocks = blocks.length;
      const blocksPerFrame = Math.max(16, Math.ceil(totalBlocks / 40));

      let animationFrameId: number;

      const drawNextBatch = () => {
        const end = Math.min(currentIndex + blocksPerFrame, totalBlocks);

        for (let i = currentIndex; i < end; i++) {
          const { x, y } = blocks[i];
          const sampleX = Math.min(x + Math.floor(BLOCK_SIZE / 2), width - 1);
          const sampleY = Math.min(y + Math.floor(BLOCK_SIZE / 2), height - 1);
          const pixelIndex = (sampleY * width + sampleX) * 4;

          const r = fullImgData[pixelIndex];
          const g = fullImgData[pixelIndex + 1];
          const b = fullImgData[pixelIndex + 2];

          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.fillRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
        }

        currentIndex = end;

        if (currentIndex < totalBlocks) {
          animationFrameId = requestAnimationFrame(drawNextBatch);
        } else {
          // Draw full high-res image once all pixels are colored
          ctx.drawImage(img, 0, 0, width, height);
          setComplete(true);
        }
      };

      animationFrameId = requestAnimationFrame(drawNextBatch);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={`agency-card relative aspect-[4/5] w-full overflow-hidden rounded-[3px] border border-border bg-card shadow-xl ${className}`}
    >
      <canvas
        ref={canvasRef}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          complete ? "opacity-0 absolute inset-0 pointer-events-none" : "opacity-100"
        }`}
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 320px, 340px"
        className={`object-cover transition-opacity duration-300 ${
          complete ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
    </div>
  );
}
