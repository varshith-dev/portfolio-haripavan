"use client";

import React from "react";
import "./GradientText.css";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: "horizontal" | "vertical" | "diagonal";
  pauseOnHover?: boolean;
  yoyo?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["var(--foreground)", "#64748b", "var(--foreground)", "#94a3b8", "var(--foreground)"],
  animationSpeed = 6,
  showBorder = false,
  direction = "horizontal",
}: GradientTextProps) {
  const gradientAngle =
    direction === "horizontal"
      ? "to right"
      : direction === "vertical"
      ? "to bottom"
      : "to bottom right";

  const gradientColors = [...colors, colors[0]].join(", ");

  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: direction === "horizontal" ? "200% 100%" : "100% 200%",
    backgroundRepeat: "repeat",
    "--speed": `${animationSpeed}s`,
  } as React.CSSProperties;

  return (
    <div
      className={`animated-gradient-text ${showBorder ? "with-border" : ""} ${className}`}
    >
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle} />
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
