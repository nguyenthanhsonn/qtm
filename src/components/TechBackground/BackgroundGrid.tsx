"use client";

import React from "react";

interface BackgroundGridProps {
  /** Grid cell size in pixels (default: 40) */
  gridSize?: number;
  /** Opacity level (default: 0.06 for 6%) */
  opacity?: number;
}

/**
 * BackgroundGrid Component
 * Renders a lightweight, responsive SVG grid pattern across the full background container.
 */
export const BackgroundGrid: React.FC<BackgroundGridProps> = ({
  gridSize = 40,
  opacity = 0.06,
}) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="tech-grid-pattern"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            {/* Outer square cell */}
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke="#38CFC8"
              strokeWidth="1"
            />
            {/* Corner node dot */}
            <circle cx="0" cy="0" r="1.5" fill="#2095AD" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-grid-pattern)" />
      </svg>
    </div>
  );
};

export default BackgroundGrid;
