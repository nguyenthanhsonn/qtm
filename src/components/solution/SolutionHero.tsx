"use client";

import React, { useState } from "react";
import styles from "./SolutionHero.module.scss";
import { motion, useReducedMotion } from "motion/react";
import BackgroundGrid from "@/components/TechBackground/BackgroundGrid";
import Card3DTilt from "@/components/Card3DTilt";
import SolutionContactModal from "./SolutionContactModal";

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SolutionHero() {
  const reduceMotion = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <section id="solution-hero" className={`section ${styles.sectionSolHero}`}>
        {/* Light Background + Floating Grid */}
        <div className={styles.solHeroBg} aria-hidden="true" />
        <div className={styles.solHeroGlow} aria-hidden="true" />
        <BackgroundGrid gridSize={40} opacity={0.06} />

        <div className={`section__content ${styles.solHeroContent}`}>
          {/* Main 2-Column Split */}
          <div className={styles.solHeroSplitGrid}>
            {/* Left Column: Headline, Description & CTA */}
            <div className={styles.solHeroLeftCol}>
              <motion.div
                className={styles.solHeroTagPill}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <span className={styles.tagDot}>•</span>
                <span>GIẢI PHÁP TRUYỀN THÔNG CÔNG NGHỆ</span>
              </motion.div>

              <motion.h1
                className={styles.solHeroTitle}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
              >
                Giải pháp truyền thông <br />
                <span className="title-highlight-teal">cho bài toán kinh doanh</span>
              </motion.h1>

              <motion.p
                className={styles.solHeroDesc}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.65, delay: 0.15, ease: easeOut }}
              >
                QTM kết hợp giữa tư duy chiến lược, tư duy sáng tạo đỉnh cao, công nghệ AI và dữ liệu thực chiến để biến những thách thức truyền thông phức tạp thành động lực bứt phá doanh thu cho doanh nghiệp.
              </motion.p>

              <motion.div
                className={styles.solHeroActions}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.7, delay: 0.22, ease: easeOut }}
              >
                <a href="#ecosystem" className={`btn btn--primary ${styles.solHeroBtnFill}`}>
                  <span>KHÁM PHÁ GIẢI PHÁP</span>
                  <span className={styles.btnArrow}>↓</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className={`btn btn--outline ${styles.solHeroBtnOutline}`}
                >
                  <span>LIÊN HỆ TƯ VẤN 1:1</span>
                </button>
              </motion.div>
            </div>

            {/* Right Column: Executive Photo & Floating Overlapping Glass Dashboard Cards */}
            <motion.div
              className={styles.solHeroRightCol}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
            >
              <div className={styles.solHeroImageStage}>
                {/* Executive Business Background Visual */}
                <div className={styles.executivePhotoFrame}>
                  <div className="photo-overlay-gradient" />
                  <div className={styles.executiveGraphicArt}>
                    <svg viewBox="0 0 400 320" fill="none" className={styles.executiveSvg}>
                      <rect width="400" height="320" rx="20" fill="url(#execBg)" />
                      <path d="M40 280 L120 180 L200 220 L280 120 L360 160" stroke="#38CFC8" strokeWidth="3" strokeDasharray="6 6" />
                      <circle cx="280" cy="120" r="8" fill="#00D4FF" />
                      <circle cx="360" cy="160" r="8" fill="#38CFC8" />
                      <path d="M150 300 C150 250 190 220 230 220 C270 220 310 250 310 300" fill="#123A53" opacity="0.8" />
                      <circle cx="230" cy="180" r="28" fill="#2095AD" opacity="0.9" />
                      <defs>
                        <linearGradient id="execBg" x1="0" y1="0" x2="400" y2="320" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F1F5F9" />
                          <stop offset="100%" stopColor="#E2E8F0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Overlapping Floating Glass Card 1 */}
                <Card3DTilt className={`${styles.floatingGlassCard} ${styles.floatingGlassCard1}`} maxTilt={10} scale={1.03}>
                  <div className={styles.cardDotIndicator} />
                  <div className={styles.cardInfo}>
                    <span className={styles.cardVal}>+240%</span>
                    <span className={styles.cardLbl}>Tăng trưởng ROI</span>
                  </div>
                </Card3DTilt>

                {/* Overlapping Floating Glass Card 2 */}
                <Card3DTilt className={`${styles.floatingGlassCard} ${styles.floatingGlassCard2}`} maxTilt={10} scale={1.03}>
                  <div className={`${styles.cardDotIndicator} ${styles.cardDotIndicatorMint}`} />
                  <div className={styles.cardInfo}>
                    <span className={styles.cardVal}>98.5%</span>
                    <span className={styles.cardLbl}>Tỷ lệ tương tác</span>
                  </div>
                </Card3DTilt>

                {/* Overlapping Floating Glass Card 3 */}
                <Card3DTilt className={`${styles.floatingGlassCard} ${styles.floatingGlassCard3}`} maxTilt={10} scale={1.03}>
                  <div className={`${styles.cardDotIndicator} ${styles.cardDotIndicatorBlue}`} />
                  <div className={styles.cardInfo}>
                    <span className={styles.cardVal}>-40%</span>
                    <span className={styles.cardLbl}>Tối ưu chi phí</span>
                  </div>
                </Card3DTilt>
              </div>
            </motion.div>
          </div>

          {/* Bottom 5 Core Values Row */}
          <motion.div
            className={styles.solHeroValuesRow}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.75, delay: 0.3, ease: easeOut }}
          >
            <div className={styles.valChip}>
              <span className={styles.chipIcon}>🧠</span>
              <span className="chip-label">Chiến lược</span>
            </div>
            <div className={styles.valDivider}>•</div>
            <div className={styles.valChip}>
              <span className={styles.chipIcon}>💡</span>
              <span className="chip-label">Sáng tạo</span>
            </div>
            <div className={styles.valDivider}>•</div>
            <div className={styles.valChip}>
              <span className={styles.chipIcon}>⚙️</span>
              <span className="chip-label">Công nghệ</span>
            </div>
            <div className={styles.valDivider}>•</div>
            <div className={styles.valChip}>
              <span className={styles.chipIcon}>✨</span>
              <span className="chip-label">Trải nghiệm</span>
            </div>
            <div className={styles.valDivider}>•</div>
            <div className={styles.valChip}>
              <span className={styles.chipIcon}>📊</span>
              <span className="chip-label">Đo lường</span>
            </div>
          </motion.div>
        </div>
      </section>

      <SolutionContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contextTitle="Liên hệ tư vấn giải pháp tổng thể"
      />
    </>
  );
}
