"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

/**
 * ParticleField Component
 * Renders a data-node particle constellation canvas with connecting lines.
 * Uses HTML5 Canvas 60fps animation loop, low density, and automatic cleanup on unmount.
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

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Resize canvas and re-initialize particle density based on screen width
    const resizeCanvas = () => {
      if (!canvas) return;
      const width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
      const height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

      // Low density count: Mobile ~18 particles, Desktop ~40 particles
      const count = width < 768 ? 18 : 40;
      const colors = ["#2095AD", "#38CFC8"];

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        // Low velocity movement (0.15 to 0.35 px/frame)
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.4),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.4),
        radius: Math.random() * 1.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Main animation loop
    const render = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const maxDistance = 140; // Max line connection distance

      // Update positions and render particle dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Bounce off canvas boundaries
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect nearby particles with thin data-node lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineOpacity = (1 - dist / maxDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 207, 200, ${lineOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
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
      className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
      aria-hidden="true"
    />
  );
};

export default ParticleField;
