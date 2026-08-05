"use client";

import "@/scss/intro-loader.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function PageIntroLoader() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isFinished = useRef(false);

  const finishLoading = () => {
    if (isFinished.current) return;
    isFinished.current = true;
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 200);
  };

  useEffect(() => {
    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    // Set initial video time to 3 seconds as soon as video is ready
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.currentTime = 3;
    }

    // Play video for 2 seconds (from 3s to 5s)
    const timeout = setTimeout(() => {
      finishLoading();
    }, 2000);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, []);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 3;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 5) {
      finishLoading();
    }
  };

  const handleSkip = () => {
    finishLoading();
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.75, ease: [0.77, 0, 0.175, 1] },
          }}
        >
          {/* Full-Screen Ambient Intro Video Background (Trimmed 3s - 5s) */}
          <video
            ref={videoRef}
            src="/kling_20260805_VIDEO_l_m_chuy_n_4148_0.mp4"
            autoPlay
            muted
            playsInline
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            className="intro-loader__video-bg"
          />

          {/* Vignette Overlay & Grid */}
          <div className="intro-loader__overlay" aria-hidden="true" />
          <div className="intro-loader__bg-grid" aria-hidden="true" />

          {/* Skip Button Top-Right */}
          <button
            type="button"
            onClick={handleSkip}
            className="intro-loader__skip-btn"
            aria-label="Skip Intro"
          >
            <span>BỎ QUA INTRO</span>
            <span className="skip-arrow">▶</span>
          </button>

          {/* Central Intro Content (Clean Logo & Tagline) */}
          <div className="intro-loader__content">
            <motion.div
              className="intro-loader__logo-wrap"
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/logo.png"
                alt="Miss Legacy Logo"
                width={260}
                height={60}
                priority
                className="intro-loader__logo brightness-0 invert"
              />
              <div className="intro-loader__logo-shine" aria-hidden="true" />
            </motion.div>

            <motion.div
              className="intro-loader__tagline"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span>QUALITY</span>
              <span className="dot">•</span>
              <span>TECHNOLOGY</span>
              <span className="dot">•</span>
              <span>MINDSET</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
