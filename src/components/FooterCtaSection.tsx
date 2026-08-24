"use client";

import React from "react";
import Link from "next/link";
import styles from "@/scss/global/FooterCtaSection.module.scss";

export default function FooterCtaSection() {
  return (
    <section className={styles.sectionFooterCta} id="build-next">
      {/* Background Video */}
      <video
        className={styles.fctaBgVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      >
        <source src="https://res.cloudinary.com/s3qilvce/video/upload/v1786449663/vid_footer.mp4" type="video/mp4" />
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
          <Link href="/contact" className={styles.fctaBtn}>
            <span>BẮT ĐẦU DỰ ÁN</span>
            <span className={styles.fctaBtnArrow}>→</span>
          </Link>
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
  );
}
