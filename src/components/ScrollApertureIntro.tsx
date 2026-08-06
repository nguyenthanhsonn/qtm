"use client";

/**
 * QTM PREMIUM INTRO PRELOADER — 60fps Optimized
 *
 * Performance principles applied:
 * 1. ONE Canvas for ALL particle+surge+scanline effects (no DOM particles)
 * 2. deltaTime-based animation → frame-rate independent
 * 3. Only animate: transform + opacity (GPU composited, no reflow)
 * 4. Object pooling for particles — no per-frame allocation
 * 5. Pause on visibilitychange (tab switch) to avoid frame debt
 * 6. Hardware concurrency detection → adaptive particle count
 * 7. will-change applied only during active animation, removed after
 * 8. No filter:blur() on large areas at runtime — pre-built SVG glow
 * 9. Iris wipe via clip-path: circle() — GPU layer, zero reflow
 * 10. All timers cleared on unmount; single RAF loop shared across phases
 *
 * Timeline:
 *   0.0–0.7s  Particle network + perspective grid + scanline
 *   0.7–1.1s  Energy surge ring (drawn on same canvas)
 *   1.1–2.1s  Logo cross-fade + glitch pulse (transform+opacity only)
 *   2.1–2.9s  Wordmark stagger (transform+opacity)
 *   2.9–3.7s  Slogan typewriter (opacity)
 *   3.7–4.5s  Iris wipe exit (clip-path: circle → CSS transition)
 */

import React, { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import "@/scss/aperture-intro.scss";

const SESSION_KEY = "qtm_intro_v3";
const PHASES = { BG: 0, SURGE: 1, LOGO: 2, WORD: 3, SLOGAN: 4, EXIT: 5 } as const;
type Phase = (typeof PHASES)[keyof typeof PHASES];

const WORDMARK = ["Q", "T", "M"];
const SLOGAN_TOKENS = ["QUALITY", "•", "TECHNOLOGY", "•", "MINDSET"];

// ── Adaptive particle count based on hardware ─────────────────
function getParticleCount(): number {
  if (typeof navigator === "undefined") return 60;
  const cores = navigator.hardwareConcurrency ?? 2;
  if (cores <= 2) return 30;   // Very low-end
  if (cores <= 4) return 50;   // Mid-range mobile
  if (cores <= 8) return 90;   // Desktop/high-end mobile
  return 130;                   // High-end desktop
}

// ── Particle type (no allocation per frame — mutated in place) ─
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  z: number;   // depth 0=far, 1=near (affects size/alpha)
  r: number;   // base radius
}

export default function ScrollApertureIntro() {
  const [show,      setShow]      = useState(false);
  const [phase,     setPhase]     = useState<Phase>(PHASES.BG);
  const [logoReady, setLogoReady] = useState(false);
  const [sloganIdx, setSloganIdx] = useState(-1);
  const [irisOn,    setIrisOn]    = useState(false);

  // Refs — never trigger re-renders
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const rafRef      = useRef<number>(0);
  const timersRef   = useRef<ReturnType<typeof setTimeout>[]>([]);
  const doneRef     = useRef(false);
  const pausedRef   = useRef(false);
  const phaseRef    = useRef<Phase>(PHASES.BG); // mirror of phase for canvas loop

  // ── Session check ────────────────────────────────────────────
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        window.dispatchEvent(new CustomEvent("intro-finished"));
        return;
      }
    } catch {}
    setShow(true);
  }, []);

  // ── Iris + finish ────────────────────────────────────────────
  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    timersRef.current.forEach(clearTimeout);
    cancelAnimationFrame(rafRef.current);

    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}

    // Trigger iris CSS transition (clip-path: circle 0%→150%)
    setPhase(PHASES.EXIT);
    phaseRef.current = PHASES.EXIT;
    setIrisOn(true);

    // Unmount after iris completes (900ms CSS transition)
    const t = setTimeout(() => {
      setShow(false);
      window.dispatchEvent(new CustomEvent("intro-finished"));
    }, 950);
    timersRef.current.push(t);
  }, []);

  // ── Phase timeline ───────────────────────────────────────────
  useEffect(() => {
    if (!show) return;

    const T = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timersRef.current.push(t);
    };

    T(() => { setPhase(PHASES.SURGE);  phaseRef.current = PHASES.SURGE; },  700);
    T(() => { setPhase(PHASES.LOGO);   phaseRef.current = PHASES.LOGO; },   1100);
    T(() => setLogoReady(true),                                              1650);
    T(() => { setPhase(PHASES.WORD);   phaseRef.current = PHASES.WORD; },   2100);
    T(() => { setPhase(PHASES.SLOGAN); phaseRef.current = PHASES.SLOGAN; }, 2900);

    // Stagger slogan tokens
    SLOGAN_TOKENS.forEach((_, i) =>
      T(() => setSloganIdx(i), 2900 + i * 160)
    );

    // Auto-finish: fire immediately after last slogan token appears (~200ms buffer to read)
    const lastTokenAt = 2900 + (SLOGAN_TOKENS.length - 1) * 160;
    T(() => finish(), lastTokenAt + 200);

    return () => timersRef.current.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  // ── Visibility change → pause RAF when tab hidden ────────────
  useEffect(() => {
    const onVisible = () => { pausedRef.current = document.hidden; };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);

  // ── SINGLE Canvas RAF loop — all effects ────────────────────
  useEffect(() => {
    if (!show) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Performance: tell the compositor this canvas composites on its own layer
    // (will-change is set in CSS, not here, to avoid flash)
    const COUNT = getParticleCount();
    const MAX_DIST = COUNT > 80 ? 145 : 120;

    let W = 0, H = 0;

    // ── Object pool — created once, mutated each frame ─────────
    const pts: Particle[] = [];
    const initParticles = () => {
      pts.length = 0;
      for (let i = 0; i < COUNT; i++) {
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.28,   // slow drift — speed independent
          vy: (Math.random() - 0.5) * 0.28,
          z:  Math.random(),
          r:  0.8 + Math.random() * 1.8,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2); // cap at 2× for perf
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    // ── Scanline state ─────────────────────────────────────────
    let scanY = -80;

    // ── Surge ring state ───────────────────────────────────────
    let surgeFrame = 0;
    const SURGE_FRAMES = 40;

    // ── deltaTime tracking ─────────────────────────────────────
    // Normalize speed to 60fps regardless of actual refresh rate
    let lastTime = performance.now();

    // ── Main draw loop ─────────────────────────────────────────
    const draw = (now: number) => {
      rafRef.current = requestAnimationFrame(draw);

      // Pause when tab hidden — prevents frame debt on resume
      if (pausedRef.current) {
        lastTime = now; // reset so deltaTime = 0 on resume
        return;
      }

      // deltaTime in 60fps units (1.0 = one 60fps frame)
      const dt = Math.min((now - lastTime) / (1000 / 60), 3); // clamp at 3× to avoid spiral
      lastTime = now;

      // ── PERF: clearRect is faster than canvas.width reassign ─
      ctx.clearRect(0, 0, W, H);

      const cur = phaseRef.current;

      // ── 1. Scanline laser trail (canvas drawn, no DOM) ────────
      // Only animate transform-equivalent (Y position) — no allocations
      scanY += 2.0 * dt;
      if (scanY > H + 80) scanY = -80;

      // Reuse linear gradient — only create once per frame (not per particle)
      const sg = ctx.createLinearGradient(0, scanY - 55, 0, scanY + 55);
      sg.addColorStop(0,   "rgba(56,207,200,0)");
      sg.addColorStop(0.5, "rgba(56,207,200,0.08)");
      sg.addColorStop(1,   "rgba(56,207,200,0)");
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 55, W, 110);

      // ── 2. Energy Surge Ring (SURGE phase only) ───────────────
      if (cur === PHASES.SURGE && surgeFrame < SURGE_FRAMES) {
        const t      = surgeFrame / SURGE_FRAMES;
        const radius = t * Math.max(W, H) * 0.7;
        const alpha  = (1 - t) * 0.7;

        ctx.beginPath();
        ctx.arc(W / 2, H / 2, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56,207,200,${alpha})`;
        ctx.lineWidth   = 2.5 * (1 - t);
        ctx.stroke();

        // Inner ring (half radius)
        if (radius > 20) {
          ctx.beginPath();
          ctx.arc(W / 2, H / 2, radius * 0.55, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(45,212,191,${alpha * 0.45})`;
          ctx.lineWidth   = 1;
          ctx.stroke();
        }

        surgeFrame += dt;
      } else if (cur === PHASES.LOGO && surgeFrame < SURGE_FRAMES) {
        // Reset surge when we move past it
        surgeFrame = SURGE_FRAMES;
      }

      // ── 3. Particle Network (3D depth, object pool) ───────────
      // PERF: save/restore avoided — manually set needed ctx props
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];

        // deltaTime-normalized velocity (stable at any fps)
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Wrap — cheaper than bounce (no conditional velocity flip)
        if (p.x < -5)    p.x = W + 5;
        else if (p.x > W + 5) p.x = -5;
        if (p.y < -5)    p.y = H + 5;
        else if (p.y > H + 5) p.y = -5;

        // Depth-based appearance (PERF: multiplication faster than pow)
        const radius = p.r * (0.5 + p.z * 0.5);
        const alpha  = 0.3  + p.z * 0.7;

        // ── Draw constellation lines (inner loop — most expensive) ─
        // PERF: skip line check every other frame on low-end devices
        if (COUNT <= 50 && (i % 2 !== 0)) {
          // On low-end: only check even-indexed particles for connections
        } else {
          for (let j = i + 1; j < pts.length; j++) {
            const q = pts[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            // PERF: distSq comparison avoids sqrt (only sqrt when needed for lineAlpha)
            const distSq = dx * dx + dy * dy;
            if (distSq < MAX_DIST * MAX_DIST) {
              const dist      = Math.sqrt(distSq);
              const lineAlpha = (1 - dist / MAX_DIST) * ((p.z + q.z) * 0.5) * 0.5;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(56,207,200,${lineAlpha.toFixed(3)})`;
              ctx.lineWidth   = 0.5 + (p.z + q.z) * 0.35;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.stroke();
            }
          }
        }

        // ── Draw particle dot (no gradient per dot — solid faster) ─
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        // PERF: solid color + globalAlpha is faster than per-particle radialGradient
        ctx.fillStyle   = p.z > 0.6 ? "#38CFC8" : "#2095AD";
        ctx.globalAlpha = alpha;
        ctx.fill();
      }

      // Reset globalAlpha after particle loop (PERF: don't call save/restore)
      ctx.globalAlpha = 1;
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [show]);

  if (!show) return null;

  const showLogo   = phase >= PHASES.LOGO;
  const showWord   = phase >= PHASES.WORD;
  const showSlogan = phase >= PHASES.SLOGAN;
  const isExiting  = phase === PHASES.EXIT;

  return (
    <div className="qi-root" aria-modal="true" role="dialog" aria-label="QTM Intro">

      {/* ── LAYER 1: Navy background (static — no animation cost) ── */}
      <div className="qi-bg" />

      {/* ── LAYER 2: Perspective grid (CSS-only, GPU layer) ──────── */}
      <div className="qi-grid-wrap" aria-hidden="true">
        <div className="qi-grid-floor" />
      </div>

      {/* ── LAYER 3: Film grain (CSS background-position shift) ───── */}
      <div className="qi-noise" aria-hidden="true" />

      {/* ── LAYER 4: Radial glow heartbeat (opacity+scale only) ────── */}
      <div className="qi-glow-pulse" aria-hidden="true" />

      {/* ── LAYER 5: SINGLE Canvas — particles + surge + scanline ─── */}
      {/*    will-change set in CSS (not inline) for clean compositing  */}
      <canvas className="qi-canvas" ref={canvasRef} aria-hidden="true" />

      {/* ── LAYER 6: Content stage ───────────────────────────────── */}
      <div className="qi-stage">

        {/* Logo reveal — transform+opacity only, no box-shadow animate */}
        <AnimatePresence>
          {showLogo && !isExiting && (
            <motion.div
              key="logo"
              className="qi-logo-wrap"
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              // will-change managed by Framer Motion internally
            >
              {/* Static SVG glow ring (no runtime filter:blur) */}
              <div className="qi-logo-glow-ring" aria-hidden="true" />

              {/* Tech corner brackets (transform animation, GPU) */}
              {(["tl", "tr", "bl", "br"] as const).map((c, i) => (
                <span
                  key={c}
                  className={`qi-corner qi-corner--${c}`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                  aria-hidden="true"
                />
              ))}

              {/* Logo image — pulse via scale+filter (NOT box-shadow) */}
              <motion.div
                className="qi-logo-inner"
                animate={logoReady ? {
                  scale: [1, 1.045, 1],
                } : {}}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="/logo.png"
                  alt="QTM Logo"
                  width={280}
                  height={65}
                  priority
                  className={`qi-logo-img${logoReady ? " qi-logo-img--active" : ""}`}
                />
              </motion.div>

              {/* Glitch: RGB channel shift via transform translate only */}
              {logoReady && (
                <>
                  <div className="qi-glitch-r" aria-hidden="true" />
                  <div className="qi-glitch-b" aria-hidden="true" />
                </>
              )}

              {/* Shine sweep — translateX only (GPU) */}
              <div className="qi-shine" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wordmark — translateY + opacity (no width/height animate) */}
        <AnimatePresence>
          {showWord && !isExiting && (
            <motion.div
              key="wordmark"
              className="qi-wordmark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {WORDMARK.map((ch, i) => (
                <motion.span
                  key={ch + i}
                  className="qi-wordmark__letter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.42,
                    delay: i * 0.12,
                    ease: [0.16, 1, 0.3, 1], // ease-out-expo
                  }}
                >
                  {ch}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slogan — opacity only, zero layout impact */}
        <AnimatePresence>
          {showSlogan && !isExiting && (
            <motion.div
              key="slogan"
              className="qi-slogan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {SLOGAN_TOKENS.map((token, i) => (
                <motion.span
                  key={token + i}
                  className={token === "•" ? "qi-slogan__dot" : "qi-slogan__word"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: sloganIdx >= i ? 1 : 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  {token}
                </motion.span>
              ))}
              {sloganIdx < SLOGAN_TOKENS.length - 1 && (
                <span className="qi-slogan__cursor" aria-hidden="true">_</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Accent line — scaleX only (GPU transform) */}
        <AnimatePresence>
          {showSlogan && !isExiting && (
            <motion.div
              key="accentline"
              className="qi-accent-line"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "center" }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* ── LAYER 7: Iris wipe exit ──────────────────────────────────
           Uses clip-path: circle() — pure GPU compositing, zero reflow.
           CSS transition handles the animation (not JS RAF).           */}
      <div
        className={`qi-iris${irisOn ? " qi-iris--open" : ""}`}
        aria-hidden="true"
      />

      {/* ── Eyebrow hint (phase 0) — opacity only ─────────────────── */}
      <AnimatePresence>
        {phase === PHASES.BG && (
          <motion.p
            className="qi-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            STRATEGIC MEDIATECH PARTNER
          </motion.p>
        )}
      </AnimatePresence>

      {/* ── Skip button (bottom-right, subtle) ───────────────────── */}
      <button
        className="qi-skip"
        onClick={finish}
        aria-label="Bỏ qua intro"
      >
        SKIP <span className="qi-skip__arrow" aria-hidden="true">▶</span>
      </button>
    </div>
  );
}
