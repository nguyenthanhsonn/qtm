"use client";

import React, { useEffect, useRef } from "react";
import type { TechParticle as Particle } from "@/types/tech-background";

/**
 * ParticleField Component
 * High-performance HTML5 Canvas animated background layer.
 * Features:
 * - Bold, high-visibility particle network constellation with light blue / cyan dots (#17398F, #2095AD, #38CFC8, #0284C7).
 * - High contrast connecting lines with opacity up to ~0.7.
 * - Prominent horizontal data wave effect (gradient cyan -> transparent).
 * - Responsive density adjustment (mobile: 32, tablet: 55, desktop: 90).
 * - Non-blocking pointer-events: none over bright background.
 */
export const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    let wavePhase = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Resize canvas to parent boundaries and recalculate particle count
    const resizeCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      const width = (canvas.width = canvas.parentElement.clientWidth || window.innerWidth);
      const height = (canvas.height = canvas.parentElement.clientHeight || window.innerHeight);

      // Responsive particle count based on screen width
      let count = 90; // Desktop default (bold density)
      if (width < 640) {
        count = 32; // Mobile
      } else if (width < 1024) {
        count = 55; // Tablet
      }

      // Site brand theme colors (deep ocean, vibrant teal, electric cyan)
      const colors = ["#17398F", "#2095AD", "#38CFC8", "#0284C7", "#0080FF"];

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        // Slow, smooth velocities (0.15 to 0.4 px/frame)
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.4),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.4),
        radius: Math.random() * 2.3 + 2.5, // Larger bolder dots (2.5px to 4.8px)
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.25 + 0.75, // High alpha (0.75 to 1.0)
      }));
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Render loop
    const render = () => {
      if (!canvas || !ctx) return;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // --- 1. Ambient Data Wave Layer (Sóng động mờ trôi ngang - Bolder) ---
      wavePhase += 0.008;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.6);

      for (let x = 0; x <= width; x += 15) {
        const y = height * 0.6 + Math.sin(x * 0.008 + wavePhase) * 24 + Math.cos(x * 0.004 - wavePhase * 0.5) * 14;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const waveGradient = ctx.createLinearGradient(0, height * 0.5, 0, height);
      waveGradient.addColorStop(0, "rgba(56, 207, 200, 0.24)");
      waveGradient.addColorStop(0.5, "rgba(32, 149, 173, 0.12)");
      waveGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = waveGradient;
      ctx.fill();

      // Second secondary wave for depth
      ctx.beginPath();
      ctx.moveTo(0, height * 0.68);
      for (let x = 0; x <= width; x += 20) {
        const y = height * 0.68 + Math.cos(x * 0.006 + wavePhase * 0.8) * 28;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const waveGradient2 = ctx.createLinearGradient(0, height * 0.6, 0, height);
      waveGradient2.addColorStop(0, "rgba(23, 57, 143, 0.16)");
      waveGradient2.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = waveGradient2;
      ctx.fill();

      // --- 2. Particle Network Constellation (Các chấm & Đường nối Đậm Rõ Rệt) ---
      const maxDistance = 165; // Distance threshold for connecting lines
      const maxDistSq = maxDistance * maxDistance;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap smoothly around canvas edges
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }

        // Draw particle dot with high contrast
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby dots with bold, crisp lines (up to opacity ~0.65)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineOpacity = (1 - dist / maxDistance) * 0.65; // High line opacity up to 0.65

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(32, 149, 173, " + lineOpacity + ")";
            ctx.lineWidth = 1.75; // Thick crisp line
            ctx.globalAlpha = 1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
};

export default ParticleField;
