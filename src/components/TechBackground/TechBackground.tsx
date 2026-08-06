"use client";

import { TechBackgroundProps } from "@/types/tech-background";
import React from "react";
import { BackgroundGrid } from "./BackgroundGrid";
import GlassPanels from "./GlassPanels";
import LightRays from "./LightRays";
import { ParticleField } from "./ParticleField";

/**
 * TechBackground Component
 * Production-ready background section component for landing pages.
 * Combines 5 stacked layers:
 * 1. Base Gradient Layer (#123A53 -> #17398F)
 * 2. Background Grid Pattern SVG
 * 3. Particle Network Canvas (60fps data nodes)
 * 4. Glassmorphic Floating Panels (Framer Motion / Motion)
 * 5. Light Rays Beams Layer
 */
export const TechBackground: React.FC<TechBackgroundProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <section
      className={`relative w-full overflow-hidden bg-deep-navy ${className}`}
      style={{
        background:
          "radial-gradient(ellipse 120% 100% at 50% 0%, #123A53 0%, #17398F 65%, #0B1F2D 100%)",
        ...style,
      }}
    >
      {/* Layer 1: Base Radial Gradient Accent */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-80"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(32,149,173,0.15) 0deg, rgba(23,57,143,0.2) 120deg, rgba(56,207,200,0.12) 240deg, rgba(32,149,173,0.15) 360deg)",
        }}
        aria-hidden="true"
      />

      {/* Layer 2: SVG Isometric/Square Grid */}
      <BackgroundGrid gridSize={40} opacity={0.06} />

      {/* Layer 3: Data Node Particle Field */}
      <ParticleField />

      {/* Layer 4: Floating Glassmorphic Cards */}
      <GlassPanels />

      {/* Layer 5: Diagonal Light Rays */}
      <LightRays />

      {/* Foreground Content Layer */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </section>
  );
};

export default TechBackground;
