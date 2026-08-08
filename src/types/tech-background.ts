import React from "react";

export interface BackgroundGridProps {
  /** Grid cell size in pixels (default: 40) */
  gridSize?: number;
  /** Opacity level (default: 0.06 for 6%) */
  opacity?: number;
}

export interface TechBackgroundProps {
  /** Section content rendered above all background layers */
  children?: React.ReactNode;
  /** Optional custom CSS classes for the outer section container */
  className?: string;
  /** Custom base background style override */
  style?: React.CSSProperties;
}

export interface TechParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}
export type Particle = TechParticle;
