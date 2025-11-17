"use client";

import React from "react";

interface BackgroundRippleEffectProps {
  rows?: number;
  cols?: number;
  cellSize?: number;
}

export function BackgroundRippleEffect({
  rows = 8,
  cols = 27,
  cellSize = 56,
}: BackgroundRippleEffectProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: `${cellSize}px ${cellSize}px`,
          width: `${cols * cellSize}px`,
          height: `${rows * cellSize}px`,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Animated ripple effects */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-indigo-400/30 dark:border-indigo-500/20"
              style={{
                width: `${(i + 1) * 200}px`,
                height: `${(i + 1) * 200}px`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                animation: `ripple ${3 + i * 2}s ease-out infinite`,
                animationDelay: `${i * 1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

