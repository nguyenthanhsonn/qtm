"use client";

import { useRef, useEffect } from 'react';
import type { Falloff, CursorGridProps, GridConfig, Pulse } from "@/types/uiux";
export type { Falloff, CursorGridProps };

const FALLOFF_CURVES: Record<Falloff, (t: number) => number> = {
  linear: t => t,
  smooth: t => t * t * (3 - 2 * t),
  sharp: t => t * t * t
};

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace('#', '');
  const v = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const num = parseInt(v.slice(0, 6), 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
};

const CursorGrid = ({
  cellSize = 60,
  color = '#38CFC8',
  radius = 150,
  falloff = 'smooth',
  holdTime = 200,
  fadeDuration = 500,
  lineWidth = 1,
  maxOpacity = 0.4,
  fillOpacity = 0.12,
  gridOpacity = 0.05,
  cellRadius = 4,
  clickPulse = true,
  pulseSpeed = 400,
  className = ''
}: CursorGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const propsRef = useRef<GridConfig>({
    cellSize,
    color,
    radius,
    falloff,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    cellRadius,
    clickPulse,
    pulseSpeed
  });

  useEffect(() => {
    propsRef.current = {
      cellSize,
      color,
      radius,
      falloff,
      holdTime,
      fadeDuration,
      lineWidth,
      maxOpacity,
      fillOpacity,
      gridOpacity,
      cellRadius,
      clickPulse,
      pulseSpeed
    };
  }, [
    cellSize,
    color,
    radius,
    falloff,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    cellRadius,
    clickPulse,
    pulseSpeed
  ]);

  const wakeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cols = 0;
    let rows = 0;
    let grid: { energy: number; targetEnergy: number; lastTime: number }[][] = [];

    let offscreenCanvas: HTMLCanvasElement | null = null;
    let offscreenCtx: CanvasRenderingContext2D | null = null;

    let pulses: Pulse[] = [];
    let raf = 0;
    let running = false;
    let lastFrame = performance.now();

    const buildOffscreen = (w: number, h: number, cs: number) => {
      offscreenCanvas = document.createElement('canvas');
      offscreenCanvas.width = w;
      offscreenCanvas.height = h;
      offscreenCtx = offscreenCanvas.getContext('2d');
      if (!offscreenCtx) return;

      const p = propsRef.current;
      if (p.gridOpacity <= 0) return;

      const [r, g, b] = hexToRgb(p.color);
      offscreenCtx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${p.gridOpacity})`;
      offscreenCtx.lineWidth = p.lineWidth;

      offscreenCtx.beginPath();
      for (let x = 0; x <= w; x += cs) {
        offscreenCtx.moveTo(x, 0);
        offscreenCtx.lineTo(x, h);
      }
      for (let y = 0; y <= h; y += cs) {
        offscreenCtx.moveTo(0, y);
        offscreenCtx.lineTo(w, y);
      }
      offscreenCtx.stroke();
    };

    const rebuild = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const w = rect.width;
      const h = rect.height;

      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cs = propsRef.current.cellSize;
      cols = Math.ceil(w / cs);
      rows = Math.ceil(h / cs);

      grid = Array.from({ length: cols }, () =>
        Array.from({ length: rows }, () => ({
          energy: 0,
          targetEnergy: 0,
          lastTime: 0
        }))
      );

      buildOffscreen(w, h, cs);
    };

    const energize = (x: number, y: number) => {
      const p = propsRef.current;
      const cs = p.cellSize;
      const r = p.radius;
      const rSq = r * r;
      const curve = FALLOFF_CURVES[p.falloff] || FALLOFF_CURVES.smooth;
      const now = performance.now();

      const minC = Math.max(0, Math.floor((x - r) / cs));
      const maxC = Math.min(cols - 1, Math.floor((x + r) / cs));
      const minR = Math.max(0, Math.floor((y - r) / cs));
      const maxR = Math.min(rows - 1, Math.floor((y + r) / cs));

      for (let c = minC; c <= maxC; c++) {
        for (let row = minR; row <= maxR; row++) {
          const cx = c * cs + cs / 2;
          const cy = row * cs + cs / 2;
          const dSq = (x - cx) ** 2 + (y - cy) ** 2;

          if (dSq <= rSq) {
            const dist = Math.sqrt(dSq);
            const t = 1 - dist / r;
            const targetVal = curve(t);
            const cell = grid[c]?.[row];
            if (cell && targetVal > cell.targetEnergy) {
              cell.targetEnergy = targetVal;
              cell.lastTime = now;
            }
          }
        }
      }
    };

    const draw = (now: number) => {
      const dt = now - lastFrame;
      lastFrame = now;

      const p = propsRef.current;
      const cs = p.cellSize;
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      if (offscreenCanvas && p.gridOpacity > 0) {
        ctx.drawImage(offscreenCanvas, 0, 0, w, h);
      }

      if (pulses.length > 0) {
        const maxDist = Math.hypot(w, h);
        pulses = pulses.filter(pulse => {
          const elapsed = now - pulse.t0;
          const pr = (elapsed / 1000) * p.pulseSpeed;
          if (pr - 200 > maxDist) return false;

          const minC = Math.max(0, Math.floor((pulse.x - pr - 100) / cs));
          const maxC = Math.min(cols - 1, Math.floor((pulse.x + pr + 100) / cs));
          const minR = Math.max(0, Math.floor((pulse.y - pr - 100) / cs));
          const maxR = Math.min(rows - 1, Math.floor((pulse.y + pr + 100) / cs));

          for (let c = minC; c <= maxC; c++) {
            for (let row = minR; row <= maxR; row++) {
              const cx = c * cs + cs / 2;
              const cy = row * cs + cs / 2;
              const dist = Math.hypot(pulse.x - cx, pulse.y - cy);
              const diff = Math.abs(dist - pr);
              if (diff < 100) {
                const t = 1 - diff / 100;
                const cell = grid[c]?.[row];
                if (cell && t > cell.targetEnergy) {
                  cell.targetEnergy = t;
                  cell.lastTime = now;
                }
              }
            }
          }
          return true;
        });
      }

      let anyVisible = pulses.length > 0;
      const [cr, cg, cb] = hexToRgb(p.color);

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const cell = grid[c][r];
          if (cell.targetEnergy > 0) {
            const timeSinceTarget = now - cell.lastTime;
            if (timeSinceTarget > p.holdTime) {
              const fadeElapsed = timeSinceTarget - p.holdTime;
              const decay = Math.max(0, 1 - fadeElapsed / p.fadeDuration);
              cell.energy = cell.targetEnergy * decay;
              if (decay <= 0) {
                cell.targetEnergy = 0;
                cell.energy = 0;
              }
            } else {
              cell.energy = cell.targetEnergy;
            }
          }

          if (cell.energy > 0) {
            anyVisible = true;
            const a = cell.energy * p.maxOpacity;
            const x = c * cs;
            const y = r * cs;

            const gradient = ctx.createRadialGradient(
              x + cs / 2,
              y + cs / 2,
              0,
              x + cs / 2,
              y + cs / 2,
              cs
            );
            gradient.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${a})`);
            gradient.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, ${a * 0.2})`);

            ctx.beginPath();
            if (p.cellRadius > 0 && ctx.roundRect) {
              ctx.roundRect(x + 1, y + 1, cs - 2, cs - 2, p.cellRadius);
            } else {
              ctx.rect(x + 1, y + 1, cs - 2, cs - 2);
            }
            if (p.fillOpacity > 0) {
              ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${a * p.fillOpacity})`;
              ctx.fill();
            }
            ctx.strokeStyle = gradient;
            ctx.lineWidth = p.lineWidth;
            ctx.stroke();
          }
        }
      }

      if (anyVisible) {
        raf = requestAnimationFrame(draw);
      } else {
        running = false;
        if (propsRef.current.gridOpacity <= 0) ctx.clearRect(0, 0, w, h);
      }
    };

    const wake = () => {
      if (running) return;
      running = true;
      lastFrame = performance.now();
      raf = requestAnimationFrame(draw);
    };
    wakeRef.current = wake;

    const toLocal = (e: PointerEvent): [number, number] => {
      const rect = canvas.getBoundingClientRect();
      return [e.clientX - rect.left, e.clientY - rect.top];
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left - 150 &&
        e.clientX <= rect.right + 150 &&
        e.clientY >= rect.top - 150 &&
        e.clientY <= rect.bottom + 150
      ) {
        const [x, y] = toLocal(e);
        energize(x, y);
        wake();
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!propsRef.current.clickPulse) return;
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const [x, y] = toLocal(e);
        pulses.push({ x, y, t0: performance.now() });
        wake();
      }
    };

    const ro = new ResizeObserver(() => {
      rebuild();
      wake();
    });
    ro.observe(container);
    rebuild();
    wake();

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cellSize]);

  useEffect(() => {
    wakeRef.current?.();
  }, [gridOpacity, color, lineWidth, maxOpacity, fillOpacity, cellRadius]);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden${className ? ` ${className}` : ''}`}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
};

export default CursorGrid;
