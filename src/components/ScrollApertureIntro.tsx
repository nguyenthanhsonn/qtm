"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import styles from "./ScrollApertureIntro.module.scss";

const SESSION_KEY = "qtm_intro_v3";
const PHASES = { BG: 0, SURGE: 1, LOGO: 2, WORD: 3, SLOGAN: 4, EXIT: 5 } as const;
type Phase = (typeof PHASES)[keyof typeof PHASES];

const WORDMARK = ["Q", "T", "M"];
const SLOGAN_TOKENS = ["QUALITY", "•", "TECHNOLOGY", "•", "MINDSET"];

// ── Adaptive particle count based on hardware ─────────────────
function getParticleCount(): number {
  if (typeof navigator === "undefined") return 60;
  const cores = navigator.hardwareConcurrency ?? 2;
  if (cores <= 2) return 30;
  if (cores <= 4) return 50;
  if (cores <= 8) return 90;
  return 130;
}

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  z: number;
  r: number;
}

export default function ScrollApertureIntro() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<Phase>(PHASES.BG);
  const [logoReady, setLogoReady] = useState(false);
  const [sloganIdx, setSloganIdx] = useState(-1);
  const [irisOn, setIrisOn] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const doneRef = useRef(false);
  const pausedRef = useRef(false);
  const phaseRef = useRef<Phase>(PHASES.BG);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        window.dispatchEvent(new CustomEvent("intro-finished"));
        return;
      }
    } catch { }
    setShow(true);
  }, []);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    timersRef.current.forEach(clearTimeout);
    cancelAnimationFrame(rafRef.current);

    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { }

    setPhase(PHASES.EXIT);
    phaseRef.current = PHASES.EXIT;
    setIrisOn(true);

    const t = setTimeout(() => {
      setShow(false);
      window.dispatchEvent(new CustomEvent("intro-finished"));
    }, 950);
    timersRef.current.push(t);
  }, []);

  useEffect(() => {
    if (!show) return;

    const T = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timersRef.current.push(t);
    };

    T(() => { setPhase(PHASES.SURGE); phaseRef.current = PHASES.SURGE; }, 700);
    T(() => { setPhase(PHASES.LOGO); phaseRef.current = PHASES.LOGO; }, 1100);
    T(() => setLogoReady(true), 1650);
    T(() => { setPhase(PHASES.WORD); phaseRef.current = PHASES.WORD; }, 2100);
    T(() => { setPhase(PHASES.SLOGAN); phaseRef.current = PHASES.SLOGAN; }, 2900);

    SLOGAN_TOKENS.forEach((_, i) =>
      T(() => setSloganIdx(i), 2900 + i * 160)
    );

    const lastTokenAt = 2900 + (SLOGAN_TOKENS.length - 1) * 160;
    T(() => finish(), lastTokenAt + 200);

    return () => timersRef.current.forEach(clearTimeout);
  }, [show, finish]);

  useEffect(() => {
    const onVisible = () => { pausedRef.current = document.hidden; };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);

  useEffect(() => {
    if (!show) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const COUNT = getParticleCount();
    const MAX_DIST = COUNT > 80 ? 145 : 120;

    let W = 0, H = 0;

    const pts: Particle[] = [];
    const initParticles = () => {
      pts.length = 0;
      for (let i = 0; i < COUNT; i++) {
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          z: Math.random(),
          r: 0.8 + Math.random() * 1.8,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    let scanY = -80;
    let surgeFrame = 0;
    const SURGE_FRAMES = 40;
    let lastTime = performance.now();

    const draw = (now: number) => {
      rafRef.current = requestAnimationFrame(draw);

      if (pausedRef.current) {
        lastTime = now;
        return;
      }

      const dt = Math.min((now - lastTime) / (1000 / 60), 3);
      lastTime = now;

      ctx.clearRect(0, 0, W, H);

      const cur = phaseRef.current;

      scanY += 2.0 * dt;
      if (scanY > H + 80) scanY = -80;

      const sg = ctx.createLinearGradient(0, scanY - 55, 0, scanY + 55);
      sg.addColorStop(0, "rgba(56,207,200,0)");
      sg.addColorStop(0.5, "rgba(56,207,200,0.08)");
      sg.addColorStop(1, "rgba(56,207,200,0)");
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 55, W, 110);

      if (cur === PHASES.SURGE && surgeFrame < SURGE_FRAMES) {
        const t = surgeFrame / SURGE_FRAMES;
        const radius = t * Math.max(W, H) * 0.7;
        const alpha = (1 - t) * 0.7;

        ctx.beginPath();
        ctx.arc(W / 2, H / 2, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56,207,200,${alpha})`;
        ctx.lineWidth = 2.5 * (1 - t);
        ctx.stroke();

        if (radius > 20) {
          ctx.beginPath();
          ctx.arc(W / 2, H / 2, radius * 0.55, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(45,212,191,${alpha * 0.45})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        surgeFrame += dt;
      } else if (cur === PHASES.LOGO && surgeFrame < SURGE_FRAMES) {
        surgeFrame = SURGE_FRAMES;
      }

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];

        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (p.x < -5) p.x = W + 5;
        else if (p.x > W + 5) p.x = -5;
        if (p.y < -5) p.y = H + 5;
        else if (p.y > H + 5) p.y = -5;

        const radius = p.r * (0.5 + p.z * 0.5);
        const alpha = 0.3 + p.z * 0.7;

        if (COUNT <= 50 && (i % 2 !== 0)) {
        } else {
          for (let j = i + 1; j < pts.length; j++) {
            const q = pts[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < MAX_DIST * MAX_DIST) {
              const dist = Math.sqrt(distSq);
              const lineAlpha = (1 - dist / MAX_DIST) * ((p.z + q.z) * 0.5) * 0.5;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(56,207,200,${lineAlpha.toFixed(3)})`;
              ctx.lineWidth = 0.5 + (p.z + q.z) * 0.35;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.stroke();
            }
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.z > 0.6 ? "#38CFC8" : "#2095AD";
        ctx.globalAlpha = alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [show]);

  if (!show) return null;

  const showLogo = phase >= PHASES.LOGO;
  const showWord = phase >= PHASES.WORD;
  const showSlogan = phase >= PHASES.SLOGAN;
  const isExiting = phase === PHASES.EXIT;

  return (
    <div className={styles.qiRoot} aria-modal="true" role="dialog" aria-label="QTM Intro">
      {/* LAYER 1 */}
      <div className={styles.qiBg} />

      {/* LAYER 2 */}
      <div className={styles.qiGridWrap} aria-hidden="true">
        <div className={styles.qiGridFloor} />
      </div>

      {/* LAYER 3 */}
      <div className={styles.qiNoise} aria-hidden="true" />

      {/* LAYER 4 */}
      <div className={styles.qiGlowPulse} aria-hidden="true" />

      {/* LAYER 5 */}
      <canvas className={styles.qiCanvas} ref={canvasRef} aria-hidden="true" />

      {/* LAYER 6 */}
      <div className={styles.qiStage}>
        {/* Logo reveal */}
        <AnimatePresence>
          {showLogo && !isExiting && (
            <motion.div
              key="logo"
              className={styles.qiLogoWrap}
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.qiLogoGlowRing} aria-hidden="true" />

              {(["tl", "tr", "bl", "br"] as const).map((c, i) => (
                <span
                  key={c}
                  className={`${styles.qiCorner} ${styles[`qiCorner${c.toUpperCase()}`]}`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                  aria-hidden="true"
                />
              ))}

              <motion.div
                className={styles.qiLogoInner}
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
                  className={`${styles.qiLogoImg}${logoReady ? ` ${styles.qiLogoImgActive}` : ""}`}
                />
              </motion.div>

              {logoReady && (
                <>
                  <div className={styles.qiGlitchR} aria-hidden="true" />
                  <div className={styles.qiGlitchB} aria-hidden="true" />
                </>
              )}

              <div className={styles.qiShine} aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wordmark */}
        <AnimatePresence>
          {showWord && !isExiting && (
            <motion.div
              key="wordmark"
              className={styles.qiWordmark}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {WORDMARK.map((ch, i) => (
                <motion.span
                  key={ch + i}
                  className={styles.qiWordmarkLetter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.42,
                    delay: i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {ch}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slogan */}
        <AnimatePresence>
          {showSlogan && !isExiting && (
            <motion.div
              key="slogan"
              className={styles.qiSlogan}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {SLOGAN_TOKENS.map((token, i) => (
                <motion.span
                  key={token + i}
                  className={token === "•" ? styles.qiSloganDot : styles.qiSloganWord}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: sloganIdx >= i ? 1 : 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  {token}
                </motion.span>
              ))}
              {sloganIdx < SLOGAN_TOKENS.length - 1 && (
                <span className={styles.qiSloganCursor} aria-hidden="true">_</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Accent line */}
        <AnimatePresence>
          {showSlogan && !isExiting && (
            <motion.div
              key="accentline"
              className={styles.qiAccentLine}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "center" }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* LAYER 7: Iris wipe */}
      <div
        className={`${styles.qiIris}${irisOn ? ` ${styles.qiIrisOpen}` : ""}`}
        aria-hidden="true"
      />

      {/* Eyebrow hint */}
      <AnimatePresence>
        {phase === PHASES.BG && (
          <motion.p
            className={styles.qiEyebrow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            STRATEGIC MEDIATECH PARTNER
          </motion.p>
        )}
      </AnimatePresence>

      {/* Skip button */}
      <button
        className={styles.qiSkip}
        onClick={finish}
        aria-label="Bỏ qua intro"
      >
        SKIP <span className={styles.qiSkipArrow} aria-hidden="true">▶</span>
      </button>
    </div>
  );
}
