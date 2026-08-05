"use client";

import React, { useState, useRef, useEffect } from "react";
import "@/scss/footer-cta.scss";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function FooterCtaSection() {
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Prefetch contact page for instant seamless navigation
    router.prefetch("/contact");
  }, [router]);

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

  const handleStartProject = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPlayingVideo(true);

    // Play preloaded video immediately
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // If autoplay policy blocks, proceed to contact directly
        handleTransitionToContact();
      });
    }
  };

  const handleTransitionToContact = () => {
    setIsPlayingVideo(false);
    router.push("/contact");
  };

  return (
    <>
      <section className="section--footer-cta" id="build-next">
        {/* Radiant Background Layer */}
        <div className="fcta-bg" aria-hidden="true">
          {/* Concentric Halo Circles */}
          <div className="fcta-halo-circle fcta-halo-circle--1" />
          <div className="fcta-halo-circle fcta-halo-circle--2" />
          <div className="fcta-halo-circle fcta-halo-circle--3" />

          {/* Dynamic Light Waves */}
          <div className="fcta-wave-left" />
          <div className="fcta-wave-right" />

          {/* Perspective Ground Grid Lines */}
          <div className="fcta-ground-grid" />

          {/* Glowing Doorway Portal at bottom center */}
          <div className="fcta-portal-door">
            <div className="door-frame" />
            <div className="door-light-beam" />
          </div>
        </div>

        <div className="fcta-content">
          {/* Top Tag Badge */}
          <motion.div
            className="fcta-badge-wrapper"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <div className="fcta-badge-dash" />
            <span className="fcta-badge-text">LET&apos;S BUILD THE NEXT</span>
            <div className="fcta-badge-dash" />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="fcta-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
          >
            Ý TƯỞNG BẮT ĐẦU<br />
            <span className="fcta-title-blue">TỪ MỘT CUỘC TRÒ CHUYỆN.</span>
          </motion.h2>

          {/* Sub-description */}
          <motion.p
            className="fcta-desc"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.65, delay: 0.15, ease: easeOut }}
          >
            Mỗi doanh nghiệp đều có mục tiêu riêng.<br />
            QTM lắng nghe để thấu hiểu, phân tích để tìm ra hướng đi phù hợp,<br />
            và kiến tạo giải pháp truyền thông có thể đo lường – tạo ra giá trị lâu dài.
          </motion.p>

          {/* Action Button */}
          <motion.div
            className="fcta-action"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.65, delay: 0.2, ease: easeOut }}
          >
            <button onClick={handleStartProject} className="fcta-btn">
              <span>BẮT ĐẦU DỰ ÁN</span>
              <span className="fcta-btn-arrow">→</span>
            </button>
          </motion.div>

          {/* 3 Pillars List (Lắng nghe thấu hiểu | Phân tích chiến lược | Kiến tạo giải pháp) */}
          <motion.div
            className="fcta-pillars"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
          >
            <div className="fcta-pillar">
              <span className="pillar-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <div className="pillar-text">
                <span className="pillar-title">Lắng nghe</span>
                <span className="pillar-subtitle">thấu hiểu</span>
              </div>
            </div>

            <div className="fcta-divider" />

            <div className="fcta-pillar">
              <span className="pillar-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.94 1.5 4 .76.76 1.23 1.52 1.41 2.5" />
                </svg>
              </span>
              <div className="pillar-text">
                <span className="pillar-title">Phân tích</span>
                <span className="pillar-subtitle">chiến lược</span>
              </div>
            </div>

            <div className="fcta-divider" />

            <div className="fcta-pillar">
              <span className="pillar-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <div className="pillar-text">
                <span className="pillar-title">Kiến tạo</span>
                <span className="pillar-subtitle">giải pháp</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Portal Video Modal Overlay with Smooth AnimatePresence */}
      <AnimatePresence>
        {isPlayingVideo && (
          <motion.div
            className="fcta-video-overlay"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <video
              ref={videoRef}
              src="/kling_20260805_VIDEO_L_m_chuy_n_5195_0.mp4"
              className="fcta-video-player"
              autoPlay
              playsInline
              preload="auto"
              onEnded={handleTransitionToContact}
              onError={handleTransitionToContact}
            />
            <button onClick={handleTransitionToContact} className="fcta-skip-btn">
              <span>Bỏ qua</span>
              <span>→</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
