"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import "@/scss/aperture-intro.scss";

export default function ScrollApertureIntro() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const touchStartY = useRef<number | null>(null);

  // Smooth Spring Interpolation for ultra-silky weightless portfolio inertia
  const springProgress = useSpring(0, {
    stiffness: 70,
    damping: 24,
    mass: 0.6,
  });

  useEffect(() => {
    springProgress.set(progress);
  }, [progress, springProgress]);

  // Derived smooth transforms
  const imageRotation = useTransform(springProgress, [0, 1], [0, 360]);
  const imageScale = useTransform(springProgress, [0, 1], [1, 24]);
  const ringOpacity = useTransform(springProgress, [0.8, 1], [1, 0]);
  const hintOpacity = useTransform(springProgress, [0, 0.25], [1, 0]);

  useEffect(() => {
    if (isDone) return;

    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    // Handle Silky Portfolio Wheel Scroll
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.03 : -0.03;
      setProgress((prev) => {
        const next = Math.min(Math.max(prev + delta, 0), 1);
        if (next >= 0.95) {
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = "";
            window.dispatchEvent(new CustomEvent("intro-finished"));
          }, 350);
        }
        return next;
      });
    };

    // Handle Silky Touch Swipe
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const currentY = e.touches[0].clientY;
      const diffY = touchStartY.current - currentY;
      if (Math.abs(diffY) > 6) {
        const delta = diffY > 0 ? 0.025 : -0.025;
        touchStartY.current = currentY;
        setProgress((prev) => {
          const next = Math.min(Math.max(prev + delta, 0), 1);
          if (next >= 0.95) {
            setTimeout(() => {
              setIsDone(true);
              document.body.style.overflow = "";
              window.dispatchEvent(new CustomEvent("intro-finished"));
            }, 350);
          }
          return next;
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      document.body.style.overflow = "";
    };
  }, [isDone]);

  const handleSkip = () => {
    setProgress(1);
    setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("intro-finished"));
    }, 350);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="aperture-intro-root"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
        >
          {/* Solid 100% Dark Background (Zero homepage leakage during scroll) */}
          <div className="aperture-bg-dark" aria-hidden="true" />
          <div className="aperture-grid-pattern" aria-hidden="true" />

          {/* Minimalist Skip Button Top-Right */}
          <button
            type="button"
            onClick={handleSkip}
            className="aperture-skip-btn"
            aria-label="Bỏ qua intro"
          >
            <span>BỎ QUA INTRO</span>
            <span className="arrow">▶</span>
          </button>

          {/* Central Stage: Clean Pristine Cyber Ring (NO SVG DASHES / TICK MARKS) */}
          <motion.div
            className="aperture-hud-stage"
            style={{
              opacity: ringOpacity,
              scale: imageScale,
            }}
          >
            {/* User Uploaded Image inside Pristine Circular Mask */}
            <div className="user-aperture-circle-mask">
              <motion.div
                className="user-aperture-image-inner"
                style={{
                  rotate: imageRotation,
                }}
              >
                <Image
                  src="/cyber-aperture.jpg"
                  alt="Cyber Aperture Portal"
                  width={750}
                  height={750}
                  priority
                  className="user-aperture-img"
                />
              </motion.div>

              {/* Clean Inner Hole Mask */}
              <div className="user-aperture-center-hole" aria-hidden="true" />

              {/* Glowing Outer Cyan Pulse Border */}
              <div className="user-aperture-glow-ring" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Minimalist Scroll Hint Arrow at Bottom Center */}
          <motion.div
            className="aperture-minimal-scroll-hint"
            style={{ opacity: hintOpacity }}
          >
            <span className="hint-arrow">↓</span>
            <span className="hint-text">SCROLL TO UNLOCK</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
