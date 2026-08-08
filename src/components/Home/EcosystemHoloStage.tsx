"use client";

import React, { useEffect, useRef } from "react";
import styles from "./EcosystemHoloStage.module.scss";

interface HoloParticle {
  x: number;
  y: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  maxAlpha: number;
}

export default function EcosystemHoloStage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let lastTime = performance.now();
    let isPaused = false;
    let rotationAngle = 0;
    let ringPulse = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Ascending Hologram Projector Particles
    let particles: HoloParticle[] = [];
    const colors = ["#00D4FF", "#38CFC8", "#6366F1", "#FFFFFF", "#EA0029"];

    const initParticles = (w: number, h: number) => {
      particles = [];
      const count = w < 768 ? 25 : 55;
      const stageCenterX = w / 2;
      const stageCenterY = h * 0.72;
      const radiusX = Math.min(w * 0.42, 460);

      for (let i = 0; i < count; i++) {
        // Distribute within the elliptical stage floor
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * radiusX;
        const px = stageCenterX + Math.cos(angle) * dist;
        const py = stageCenterY + Math.sin(angle) * (dist * 0.28) - Math.random() * (h * 0.45);

        particles.push({
          x: px,
          y: py,
          vy: Math.random() * 0.6 + 0.35,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.6 + 0.2,
          maxAlpha: Math.random() * 0.6 + 0.3,
        });
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.parentElement?.clientWidth || window.innerWidth;
      const h = canvas.parentElement?.clientHeight || window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.scale(dpr, dpr);
      initParticles(w, h);
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

    const render = (now: number) => {
      if (isPaused) {
        animId = requestAnimationFrame(render);
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const w = canvas.parentElement?.clientWidth || window.innerWidth;
      const h = canvas.parentElement?.clientHeight || window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      if (!prefersReducedMotion) {
        rotationAngle += dt * 0.35; // Continuous smooth rotation
        ringPulse += dt * 1.5;
      }

      const cx = w / 2;
      const cy = h * 0.72; // Centered floor below 3D Carousel
      const rx = Math.min(w * 0.44, 480);
      const ry = rx * 0.26; // 3D Perspective compression

      // --- 1. DRAW PERSPECTIVE HOLOGRAPHIC STAGE FLOOR RINGS ---
      ctx.save();

      // Outer Ambient Glowing Aura under the stage
      const floorGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, rx * 1.2);
      floorGrad.addColorStop(0, "rgba(0, 212, 255, 0.22)");
      floorGrad.addColorStop(0.4, "rgba(56, 207, 200, 0.12)");
      floorGrad.addColorStop(0.7, "rgba(99, 102, 241, 0.06)");
      floorGrad.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.ellipse(cx, cy, rx * 1.25, ry * 1.25, 0, 0, Math.PI * 2);
      ctx.fillStyle = floorGrad;
      ctx.fill();

      // Outer Main Neon Ring
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(56, 207, 200, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "#38CFC8";
      ctx.shadowBlur = 12;
      ctx.stroke();

      // Middle Radar Ring with Rotating Laser Ticks
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx * 0.72, ry * 0.72, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 212, 255, 0.35)";
      ctx.lineWidth = 1;
      ctx.shadowColor = "#00D4FF";
      ctx.shadowBlur = 8;
      ctx.stroke();

      // Inner Core Ring
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx * 0.42, ry * 0.42, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(99, 102, 241, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "#6366F1";
      ctx.shadowBlur = 10;
      ctx.stroke();

      // Pulsing Ripple Wave Radiating Outward
      const pulseProgress = (Math.sin(ringPulse) + 1) / 2;
      const rippleRx = rx * 0.35 + pulseProgress * (rx * 0.65);
      const rippleRy = rippleRx * 0.26;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rippleRx, rippleRy, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(56, 207, 200, ${0.45 * (1 - pulseProgress)})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Rotating Laser Ticks along the outer perimeter
      const tickCount = 36;
      for (let i = 0; i < tickCount; i++) {
        const tickAngle = (i / tickCount) * Math.PI * 2 + rotationAngle;
        const cos = Math.cos(tickAngle);
        const sin = Math.sin(tickAngle);

        const x1 = cx + cos * rx;
        const y1 = cy + sin * ry;
        const x2 = cx + cos * (rx + (i % 4 === 0 ? 8 : 4));
        const y2 = cy + sin * (ry + (i % 4 === 0 ? 3 : 1.5));

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = i % 4 === 0 ? "#00D4FF" : "rgba(56, 207, 200, 0.3)";
        ctx.lineWidth = i % 4 === 0 ? 1.5 : 1;
        ctx.stroke();
      }

      // Compass Degree Labels (N, E, S, W, 0°, 180°)
      if (w > 768) {
        ctx.font = "9px var(--font-geist-mono, monospace)";
        ctx.fillStyle = "rgba(56, 207, 200, 0.7)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const labels = [
          { text: "000°", angle: 0 },
          { text: "090°", angle: Math.PI * 0.5 },
          { text: "180°", angle: Math.PI },
          { text: "270°", angle: Math.PI * 1.5 },
        ];

        for (const lbl of labels) {
          const a = lbl.angle + rotationAngle;
          const lx = cx + Math.cos(a) * (rx + 22);
          const ly = cy + Math.sin(a) * (ry + 8);
          ctx.fillText(lbl.text, lx, ly);
        }
      }

      ctx.restore();

      // --- 2. DRAW ASCENDING HOLOGRAPHIC PROJECTOR PARTICLES ---
      const stageFloorTop = cy - h * 0.45;

      for (const p of particles) {
        p.y -= p.vy * (prefersReducedMotion ? 0 : 1);

        // Fade out as it ascends toward the top
        const progressFromFloor = (cy - p.y) / (cy - stageFloorTop);
        p.alpha = Math.max(0, p.maxAlpha * (1 - progressFromFloor));

        // Respawn when exceeding ceiling
        if (p.y < stageFloorTop || p.alpha <= 0.01) {
          const angle = Math.random() * Math.PI * 2;
          const dist = Math.random() * rx;
          p.x = cx + Math.cos(angle) * dist;
          p.y = cy + Math.sin(angle) * (dist * 0.26);
          p.alpha = p.maxAlpha;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();

        // Optional micro vertical light streak
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + p.radius * 3.5);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 0.75;
        ctx.stroke();

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
    <div className={styles.holoStageRoot} aria-hidden="true">
      <div className={styles.ambientGlowLayer} />
      <div className={styles.floorPerspectiveGrid} />
      <canvas ref={canvasRef} className={styles.holoCanvas} />

      {/* Cyber HUD Telemetry Overlays */}
      <div className={styles.hudTopLeft}>
        <span>
          <span className={styles.pulseDot} />
          QTM // 3D_ECOSYSTEM_MATRIX
        </span>
        <span>STATUS: ONLINE | STAGE_3D: ACTIVE</span>
      </div>

      <div className={styles.hudTopRight}>
        <span>ORBITAL_NODES: 6_ROTATING</span>
        <span>LATENCY: &lt; 1ms | 60FPS</span>
      </div>
    </div>
  );
}
