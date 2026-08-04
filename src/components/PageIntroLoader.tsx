"use client";

import "@/scss/intro-loader.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function PageIntroLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const startTime = Date.now();
    const duration = 1800; // 1.8s

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
        }, 300);
      }
    }, 20);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] },
          }}
        >
          {/* Subtle grid and particle background */}
          <div className="intro-loader__bg-grid" aria-hidden="true" />
          <div className="intro-loader__orb intro-loader__orb--cyan" aria-hidden="true" />
          <div className="intro-loader__orb intro-loader__orb--purple" aria-hidden="true" />

          {/* Central Content */}
          <div className="intro-loader__content">
            <motion.div
              className="intro-loader__logo-wrap"
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/logo.png"
                alt="QTM Logo"
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
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <span>QUALITY</span>
              <span className="dot">•</span>
              <span>TECHNOLOGY</span>
              <span className="dot">•</span>
              <span>MINDSET</span>
            </motion.div>

            {/* Progress Bar & Percentage */}
            <div className="intro-loader__progress-box">
              <div className="intro-loader__bar-track">
                <motion.div
                  className="intro-loader__bar-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="intro-loader__status">
                <span className="intro-loader__label">STRATEGIC MEDIATECH</span>
                <span className="intro-loader__percent">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
