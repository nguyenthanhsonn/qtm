"use client";

import React, { useEffect, useRef } from "react";
import styles from "./AboutBackground.module.scss";

interface NetworkNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

interface ClickRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
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
    let lastTime = performance.now();
    let isPaused = false;
    let time = 0;

    let mouseActive = false;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let cursorRadarAngle = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Tech network node colors: Electric Cyan, Cyber Turquoise, Indigo Blue, Pure White
    const colors = ["#00D4FF", "#38CFC8", "#6366F1", "#3B82F6", "#FFFFFF"];

    let nodes: NetworkNode[] = [];
    let packets: DataPacket[] = [];
    let ripples: ClickRipple[] = [];

    const getNodeCount = (w: number) => {
      if (w < 640) return 45;
      if (w < 1024) return 80;
      return 120;
    };

    const initNetwork = (w: number, h: number) => {
      const count = getNodeCount(w);
      nodes = [];
      packets = [];

      for (let i = 0; i < count; i++) {
        const rad = Math.random() * 2.2 + 2.0;
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.45),
          vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.45),
          radius: rad,
          baseRadius: rad,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.45 + 0.5,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.003 + 0.002,
        });
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.scale(dpr, dpr);
      initNetwork(w, h);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse Tracking for Immediate Interactive Constellation Links
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseActive) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseActive = true;
      }
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseActive = false;
    };

    const handleMouseDown = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 180,
        alpha: 0.85,
      });

      // Push nearby nodes on click
      for (const n of nodes) {
        const dx = n.x - e.clientX;
        const dy = n.y - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          const force = (1 - dist / 180) * 12;
          n.x += (dx / dist) * force;
          n.y += (dy / dist) * force;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);

    const onVisibilityChange = () => {
      isPaused = document.hidden;
      if (!isPaused) {
        lastTime = performance.now();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Main 60fps Render Loop: Interactive Tech Network Connection (Plexus Mesh)
    const render = (now: number) => {
      if (isPaused) {
        animId = requestAnimationFrame(render);
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      time += (prefersReducedMotion ? 0 : dt) * 1000;
      cursorRadarAngle += dt * 1.8;

      // Responsive Mouse Interpolation
      if (mouseActive) {
        mouseX += (targetMouseX - mouseX) * 0.18;
        mouseY += (targetMouseY - mouseY) * 0.18;
      }

      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      const maxDist = w < 768 ? 100 : 140;
      const maxDistSq = maxDist * maxDist;
      const mouseMaxDist = 220;
      const mouseMaxDistSq = mouseMaxDist * mouseMaxDist;

      // 1. Update Node Positions & Draw Glowing Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (!prefersReducedMotion) {
          n.x += n.vx * dt * 60;
          n.y += n.vy * dt * 60;

          // Screen edge wrap
          if (n.x < -15) n.x = w + 15;
          if (n.x > w + 15) n.x = -15;
          if (n.y < -15) n.y = h + 15;
          if (n.y > h + 15) n.y = -15;

          // Mouse Gravitational Field
          if (mouseActive) {
            const mdx = n.x - mouseX;
            const mdy = n.y - mouseY;
            const mdistSq = mdx * mdx + mdy * mdy;
            if (mdistSq < mouseMaxDistSq && mdistSq > 100) {
              const mdist = Math.sqrt(mdistSq);
              const force = (1 - mdist / mouseMaxDist) * 0.65;
              n.x += (mdx / mdist) * force * 1.4;
              n.y += (mdy / mdist) * force * 1.4;
            }
          }
        }

        // Pulsing radius & halo
        const pulse = Math.sin(time * n.pulseSpeed + n.pulsePhase);
        n.radius = n.baseRadius + pulse * 0.6;

        ctx.save();
        ctx.globalAlpha = n.alpha;
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing Halo for key nodes
        if (n.baseRadius > 2.8) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(56, 207, 200, 0.12)";
          ctx.fill();
        }
        ctx.restore();
      }

      // 2. Draw Network Connection Links Between Nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxDist) * 0.42;

            ctx.save();
            ctx.globalAlpha = lineAlpha;
            const lineGrad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            lineGrad.addColorStop(0, nodes[i].color);
            lineGrad.addColorStop(1, nodes[j].color);

            ctx.strokeStyle = lineGrad;
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.restore();

            // Spawn Data Packets along active links
            if (!prefersReducedMotion && Math.random() < 0.00045 && packets.length < 24) {
              packets.push({
                fromNode: i,
                toNode: j,
                progress: 0,
                speed: Math.random() * 0.014 + 0.008,
                color: Math.random() > 0.4 ? "#00D4FF" : "#38CFC8",
              });
            }
          }
        }

        // 3. Connect Nodes directly to Mouse Cursor Hub with Vivid Laser Beams
        if (mouseActive) {
          const mdx = nodes[i].x - mouseX;
          const mdy = nodes[i].y - mouseY;
          const mdistSq = mdx * mdx + mdy * mdy;

          if (mdistSq < mouseMaxDistSq) {
            const mdist = Math.sqrt(mdistSq);
            const mAlpha = (1 - mdist / mouseMaxDist) * 0.75;

            ctx.save();
            ctx.globalAlpha = mAlpha;
            const mouseBeamGrad = ctx.createLinearGradient(mouseX, mouseY, nodes[i].x, nodes[i].y);
            mouseBeamGrad.addColorStop(0, "#00D4FF");
            mouseBeamGrad.addColorStop(1, nodes[i].color);

            ctx.strokeStyle = mouseBeamGrad;
            ctx.shadowColor = "#38CFC8";
            ctx.shadowBlur = 10;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // 4. Update & Draw Traveling Data Packets
      for (let pIdx = packets.length - 1; pIdx >= 0; pIdx--) {
        const p = packets[pIdx];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(pIdx, 1);
          continue;
        }

        const nodeA = nodes[p.fromNode];
        const nodeB = nodes[p.toNode];
        if (!nodeA || !nodeB) {
          packets.splice(pIdx, 1);
          continue;
        }

        const px = nodeA.x + (nodeB.x - nodeA.x) * p.progress;
        const py = nodeA.y + (nodeB.y - nodeA.y) * p.progress;

        ctx.save();
        ctx.globalAlpha = 0.95;
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(px, py, 2.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 5. Draw Expanding Click Shockwave Ripples
      for (let rIdx = ripples.length - 1; rIdx >= 0; rIdx--) {
        const r = ripples[rIdx];
        r.radius += dt * 240;
        r.alpha = Math.max(0, 0.85 * (1 - r.radius / r.maxRadius));

        if (r.radius >= r.maxRadius || r.alpha <= 0.01) {
          ripples.splice(rIdx, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = r.alpha;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "#00D4FF";
        ctx.shadowColor = "#38CFC8";
        ctx.shadowBlur = 15;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }

      // 6. Draw High-Tech Master Hub on Mouse Position
      if (mouseActive) {
        ctx.save();
        // Inner Core Glow
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = "#00D4FF";
        ctx.shadowBlur = 18;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Outer Rotating Radar Ring
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 15, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56, 207, 200, 0.65)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // 4 Radar Crosshair Ticks
        for (let t = 0; t < 4; t++) {
          const angle = cursorRadarAngle + (t * Math.PI) / 2;
          const x1 = mouseX + Math.cos(angle) * 12;
          const y1 = mouseY + Math.sin(angle) * 12;
          const x2 = mouseX + Math.cos(angle) * 18;
          const y2 = mouseY + Math.sin(angle) * 18;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = "#00D4FF";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
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
