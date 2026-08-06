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
  const [isBgMuted, setIsBgMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Prefetch contact page for instant seamless navigation
    router.prefetch("/contact");
  }, [router]);

  const toggleBgAudio = () => {
    if (bgVideoRef.current) {
      bgVideoRef.current.muted = !isBgMuted;
      setIsBgMuted(!isBgMuted);
    }
  };

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
        {/* Background Video */}
        <video
          ref={bgVideoRef}
          className="fcta-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/home/vid_footer.mp4" type="video/mp4" />
        </video>

        {/* Dark Gradient Overlay */}
        <div className="fcta-bg-overlay" aria-hidden="true" />

        {/* Floating Sound Toggle Button */}
        <button
          type="button"
          onClick={toggleBgAudio}
          className="fcta-sound-toggle"
          aria-label={isBgMuted ? "Bật âm thanh video nền" : "Tắt âm thanh video nền"}
        >
          {isBgMuted ? (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
              <span>Bật âm thanh</span>
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              <span>Tắt âm thanh</span>
            </>
          )}
        </button>

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
          <div
            className="fcta-badge-wrapper"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <div className="fcta-badge-dash" />
            <span className="fcta-badge-text">LET&apos;S BUILD THE NEXT</span>
            <div className="fcta-badge-dash" />
          </div>

          {/* Title */}
          <h2
            className="fcta-title"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
          >
            Ý TƯỞNG BẮT ĐẦU<br />
            <span className="fcta-title-blue">TỪ MỘT CUỘC TRÒ CHUYỆN.</span>
          </h2>

          {/* Sub-description */}
          <p
            className="fcta-desc"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            Mỗi doanh nghiệp đều có mục tiêu riêng.<br />
            QTM lắng nghe để thấu hiểu, phân tích để tìm ra hướng đi phù hợp,<br />
            và kiến tạo giải pháp truyền thông có thể đo lường – tạo ra giá trị lâu dài.
          </p>

          {/* Action Button */}
          <div
            className="fcta-action"
            data-aos="zoom-in"
            data-aos-delay="450"
            data-aos-duration="700"
          >
            <button onClick={handleStartProject} className="fcta-btn">
              <span>BẮT ĐẦU DỰ ÁN</span>
              <span className="fcta-btn-arrow">→</span>
            </button>
          </div>

          {/* 3 Pillars List (Lắng nghe thấu hiểu | Phân tích chiến lược | Kiến tạo giải pháp) */}
          <div
            className="fcta-pillars"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="900"
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
          </div>
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
