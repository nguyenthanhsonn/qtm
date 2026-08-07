"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./FooterCtaSection.module.scss";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function FooterCtaSection() {
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);

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
      <section className={styles.sectionFooterCta} id="build-next">
        {/* Background Video */}
        <video
          ref={bgVideoRef}
          className={styles.fctaBgVideo}
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
        <div className={styles.fctaBgOverlay} aria-hidden="true" />

        {/* Radiant Background Layer */}
        <div className={styles.fctaBg} aria-hidden="true">
          {/* Concentric Halo Circles */}
          <div className={`${styles.fctaHaloCircle} ${styles.fctaHaloCircle1}`} />
          <div className={`${styles.fctaHaloCircle} ${styles.fctaHaloCircle2}`} />
          <div className={`${styles.fctaHaloCircle} ${styles.fctaHaloCircle3}`} />

          {/* Dynamic Light Waves */}
          <div className={styles.fctaWaveLeft} />
          <div className={styles.fctaWaveRight} />

          {/* Perspective Ground Grid Lines */}
          <div className={styles.fctaGroundGrid} />


        </div>

        <div className={styles.fctaContent}>
          {/* Top Tag Badge */}
          <div
            className={styles.fctaBadgeWrapper}
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <div className={styles.fctaBadgeDash} />
            <span className={styles.fctaBadgeText}>LET&apos;S BUILD THE NEXT</span>
            <div className={styles.fctaBadgeDash} />
          </div>

          {/* Title */}
          <h2
            className={styles.fctaTitle}
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
          >
            Ý TƯỞNG BẮT ĐẦU<br />
            TỪ MỘT CUỘC TRÒ CHUYỆN.
          </h2>

          {/* Sub-description */}
          <p
            className={styles.fctaDesc}
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
            className={styles.fctaAction}
            data-aos="zoom-in"
            data-aos-delay="450"
            data-aos-duration="700"
          >
            <button onClick={handleStartProject} className={styles.fctaBtn}>
              <span>BẮT ĐẦU DỰ ÁN</span>
              <span className={styles.fctaBtnArrow}>→</span>
            </button>
          </div>

          {/* 3 Pillars List */}
          <div
            className={styles.fctaPillars}
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="900"
          >
            <div className={styles.fctaPillar}>
              <span className={styles.pillarIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <div className={styles.pillarText}>
                <span className={styles.pillarTitle}>Lắng nghe</span>
                <span className={styles.pillarSubtitle}>thấu hiểu</span>
              </div>
            </div>

            <div className={styles.fctaDivider} />

            <div className={styles.fctaPillar}>
              <span className={styles.pillarIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.94 1.5 4 .76.76 1.23 1.52 1.41 2.5" />
                </svg>
              </span>
              <div className={styles.pillarText}>
                <span className={styles.pillarTitle}>Phân tích</span>
                <span className={styles.pillarSubtitle}>chiến lược</span>
              </div>
            </div>

            <div className={styles.fctaDivider} />

            <div className={styles.fctaPillar}>
              <span className={styles.pillarIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <div className={styles.pillarText}>
                <span className={styles.pillarTitle}>Kiến tạo</span>
                <span className={styles.pillarSubtitle}>giải pháp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Portal Video Modal Overlay */}
      <AnimatePresence>
        {isPlayingVideo && (
          <motion.div
            className={styles.fctaVideoOverlay}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <video
              ref={videoRef}
              src="/kling_20260805_VIDEO_L_m_chuy_n_5195_0.mp4"
              className={styles.fctaVideoPlayer}
              autoPlay
              playsInline
              preload="auto"
              onEnded={handleTransitionToContact}
              onError={handleTransitionToContact}
            />
            <button onClick={handleTransitionToContact} className={styles.fctaSkipBtn}>
              <span>Bỏ qua</span>
              <span>→</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
