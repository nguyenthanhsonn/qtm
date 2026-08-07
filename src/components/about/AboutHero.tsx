"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Card3DTilt from "@/components/Card3DTilt";
import Link from "next/link";
import styles from "./AboutHero.module.scss";

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutHero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <section id="about-hero" className={`section ${styles.sectionAboutHero}`}>
        <div className={`section__content ${styles.aboutHeroContent}`}>
          {/* Top Company Slogan Badge */}
          <motion.div
            className={styles.heroCompanySloganBadge}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <span className="company-name">QTM Communication Technology</span>
            <span className={styles.sloganDivider}>•</span>
            <span className={styles.companyTagline}>Tinh gọn - Linh hoạt - Hiệu quả</span>
          </motion.div>

          {/* 2-Column Main Hero Layout */}
          <div className={styles.heroMainGrid}>
            {/* Left Column: Text & CTAs */}
            <div className={styles.heroLeftTextBlock}>
              <motion.h1
                className={styles.aboutHeroTitle}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
              >
                Engineering{" "}
                <span className="title-highlight-mint">Intelligent</span>
                <br />
                Creativity
              </motion.h1>

              <motion.div
                className={styles.aboutHeroDescBox}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
              >
                <p className={styles.heroParagraph}>
                  QTM MediaTech là doanh nghiệp hoạt động trong lĩnh vực{" "}
                  <strong className="text-mint">Công nghệ Truyền thông (MediaTech)</strong>, kết hợp giữa{" "}
                  <strong className="text-white">chiến lược, sáng tạo và công nghệ</strong> nhằm kiến tạo những giải pháp truyền thông hiệu quả, có khả năng đo lường và tạo giá trị bền vững cho khách hàng.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className={styles.aboutHeroActions}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.7, delay: 0.22, ease: easeOut }}
              >
                <a href="/solution" className={`btn btn--primary ${styles.aboutHeroBtnFill}`}>
                  <span>KHÁM PHÁ GIẢI PHÁP</span>
                  <span className={styles.btnArrow}>→</span>
                </a>

                <Link href="/contact" className={`btn btn--outline ${styles.aboutHeroBtnOutline}`}>
                  <span>LIÊN HỆ VỚI QTM</span>
                </Link>
              </motion.div>

              {/* 4 Feature Metric Icons Bar */}
              <motion.div
                className={styles.heroFeatureMetricsRow}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.75, delay: 0.28, ease: easeOut }}
              >
                {/* Q — Quality */}
                <div className={styles.metricIconCard}>
                  <div className={styles.iconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span className={styles.metricText}>Quality</span>
                </div>

                {/* T — Technology */}
                <div className={styles.metricIconCard}>
                  <div className={styles.iconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <span className={styles.metricText}>Technology</span>
                </div>

                {/* M — Mindset */}
                <div className={styles.metricIconCard}>
                  <div className={styles.iconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                  </div>
                  <span className={styles.metricText}>Mindset</span>
                </div>

                {/* MediaTech */}
                <div className={styles.metricIconCard}>
                  <div className={styles.iconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <span className={styles.metricText}>MediaTech</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: High-tech AI Dashboard Illustration */}
            <motion.div
              className={styles.heroRightVisualBlock}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
            >
              <Card3DTilt
                className={styles.heroImageCard}
                maxTilt={6}
                scale={1.01}
                glareColor="rgba(56, 207, 200, 0.3)"
                glareOpacity={0.35}
              >
                <div className={styles.visualHudHeader}>
                  <span className={styles.hudBadge}>QTM MEDIATECH PLATFORM</span>
                  <span className={styles.hudStatusDot} />
                </div>

                <div className={styles.heroImgWrapper}>
                  <Image
                    src="/about_us/img_ab2.png"
                    alt="QTM MediaTech Platform"
                    width={600}
                    height={400}
                    className={styles.heroImgCover}
                    priority
                  />
                  <div className={styles.heroImgOverlay} />
                </div>
              </Card3DTilt>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
