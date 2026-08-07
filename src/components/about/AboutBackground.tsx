"use client";

import React, { useEffect, useRef } from "react";
import styles from "./AboutBackground.module.scss";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export default function AboutBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    let lastTime = performance.now();
    let isPaused = false;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const getParticleCount = () => {
      if (typeof window === "undefined") return 60;
      const w = window.innerWidth;
      const cores = typeof navigator !== "undefined" ? (navigator.hardwareConcurrency ?? 4) : 4;
      if (w < 768 || cores <= 2) return 32; // Mobile / Low-end device (~45% density)
      if (cores <= 4) return 50;
      return 75;
    };

    const colors = ["#38CFC8", "#2095AD", "#00D4FF", "#6366F1", "#3B82F6"];

    const initParticles = (w: number, h: number) => {
      const count = getParticleCount();
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.45),
          vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.45),
          radius: Math.random() * 2.2 + 1.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.35 + 0.45,
        });
      }
    };

    const resizeCanvas = () => {
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);
      initParticles(width, height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const onVisibilityChange = () => {
      isPaused = document.hidden;
      if (!isPaused) {
        lastTime = performance.now();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    let scanlineY = 0;

    const render = (now: number) => {
      if (isPaused) {
        animId = requestAnimationFrame(render);
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * dt * 60;
        p.y += p.vy * dt * 60;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Constellation Lines
      const maxDist = w < 768 ? 100 : 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.18;
            ctx.save();
            ctx.globalAlpha = lineAlpha;
            ctx.strokeStyle = "#38CFC8";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Subtle Scanline Sweep Effect
      if (!prefersReducedMotion) {
        scanlineY += 0.8;
        if (scanlineY > h) scanlineY = 0;

        ctx.save();
        ctx.globalAlpha = 0.04;
        const grad = ctx.createLinearGradient(0, scanlineY - 40, 0, scanlineY + 40);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.5, "#38CFC8");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, scanlineY - 40, w, 80);
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div className={styles.aboutGlobalBgRoot} aria-hidden="true">
      <div className={styles.aboutGlobalBgGradient} />
      <div className={styles.aboutGlobalBgGrid} />
      <canvas ref={canvasRef} className={styles.aboutGlobalBgCanvas} />
    </div>
  );
}
