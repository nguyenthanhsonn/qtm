"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import styles from "@/scss/solution/SolutionHero.module.scss";
import Card3DTilt from "@/components/Card3DTilt";
import CountUp from "@/components/CountUp";

const viewport = { once: true, amount: 0.15 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SolutionHero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <section id="solution-hero" className={`section ${styles.sectionSolHero}`}>
        {/* Background Gradients & Light Streaks */}
        <div className={styles.solHeroBg} aria-hidden="true" />
        <div className={styles.solHeroGlow} aria-hidden="true" />
        <div className={styles.floorLightStreak} aria-hidden="true" />

        {/* Rotated Vertical Decorative Text on Far Left */}
        <div className={styles.verticalDecoText} aria-hidden="true">
          ENGINEERING INTELLIGENT CREATIVITY
        </div>

        <div className={`section__content ${styles.solHeroContent}`}>
          {/* Main 3-Layer Grid Split Layout */}
          <div className={styles.solHero3LayerGrid}>

            {/* ── LỚP TRÁI (~40% width) ────────────────────────────────────────── */}
            <motion.div
              className={styles.layerLeft}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
            >
              {/* Eyebrow Tag Label */}
              <div className={styles.eyebrowLabelGroup}>
                <span className={styles.labelDash}>—</span>
                <span className={styles.labelText}>GIẢI PHÁP QTM</span>
              </div>

              {/* Main Heading (3 Lines) */}
              <h1 className={styles.mainHeroTitle}>
                <span>GIẢI PHÁP TRUYỀN THÔNG</span>
                <span className={styles.titleLineHighlight}>CHO BÀI TOÁN KINH DOANH</span>
              </h1>

              {/* Description */}
              <p className={styles.mainHeroDesc}>
                QTM kết hợp giữa tư duy chiến lược, tư duy sáng tạo đỉnh cao, công nghệ AI và dữ liệu thực chiến để biến những thách thức truyền thông phức tạp thành động lực bứt phá doanh thu cho doanh nghiệp.
              </p>

              {/* CTA Button */}
              <div className={styles.ctaButtonGroup}>
                <Link href="/contact" className={styles.btnCtaGradient}>
                  <span>KHÁM PHÁ GIẢI PHÁP</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

              {/* Dải 4 Icon-Tags & QTM Logo Row */}
              <div className={styles.leftTagsAndLogoRow}>
                {/* Logo QTM MediaTech */}
                <div className={styles.qtmBrandStamp}>
                  <svg width="110" height="34" viewBox="0 0 160 48" fill="none">
                    <circle cx="20" cy="18" r="4" fill="#4FD1E8" />
                    <circle cx="34" cy="10" r="4" fill="#38CFC8" />
                    <circle cx="34" cy="26" r="4" fill="#38CFC8" />
                    <circle cx="48" cy="18" r="4" fill="#4FD1E8" />
                    <line x1="20" y1="18" x2="34" y2="10" stroke="#38CFC8" strokeWidth="2" />
                    <line x1="20" y1="18" x2="34" y2="26" stroke="#38CFC8" strokeWidth="2" />
                    <line x1="34" y1="10" x2="48" y2="18" stroke="#38CFC8" strokeWidth="2" />
                    <line x1="34" y1="26" x2="48" y2="18" stroke="#38CFC8" strokeWidth="2" />
                    <text x="60" y="28" fill="#FFFFFF" fontFamily="var(--font-heading)" fontSize="26" fontWeight="900">QTM</text>
                    <text x="60" y="42" fill="#38CFC8" fontFamily="var(--font-geist-mono)" fontSize="11" fontWeight="700">MediaTech</text>
                  </svg>
                </div>

                {/* 4 Icon Tags */}
                <div className={styles.fourTagsGrid}>
                  <div className={styles.tagItem}>
                    <div className={styles.tagIconCircle}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4FD1E8" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </div>
                    <div className={styles.tagTextGroup}>
                      <span className={styles.tagTitle}>CHIẾN LƯỢC</span>
                      <span className={styles.tagSub}>DẪN DẮT</span>
                    </div>
                  </div>

                  <div className={styles.tagDivider} />

                  <div className={styles.tagItem}>
                    <div className={styles.tagIconCircle}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.94 1.5 4 .76.76 1.23 1.52 1.41 2.5" />
                      </svg>
                    </div>
                    <div className={styles.tagTextGroup}>
                      <span className={styles.tagTitle}>SÁNG TẠO</span>
                      <span className={styles.tagSub}>KHÁC BIỆT</span>
                    </div>
                  </div>

                  <div className={styles.tagDivider} />

                  <div className={styles.tagItem}>
                    <div className={styles.tagIconCircle}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <rect x="9" y="9" width="6" height="6" />
                      </svg>
                    </div>
                    <div className={styles.tagTextGroup}>
                      <span className={styles.tagTitle}>CÔNG NGHỆ</span>
                      <span className={styles.tagSub}>TIÊN PHONG</span>
                    </div>
                  </div>

                  <div className={styles.tagDivider} />

                  <div className={styles.tagItem}>
                    <div className={styles.tagIconCircle}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    </div>
                    <div className={styles.tagTextGroup}>
                      <span className={styles.tagTitle}>HIỆU QUẢ</span>
                      <span className={styles.tagSub}>ĐO LƯỜNG</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>


            {/* ── LỚP GIỮA (~35% width): Executive Photo & 3 Overlapping Cards ──── */}
            <motion.div
              className={styles.layerMiddle}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.75, delay: 0.15, ease: easeOut }}
            >
              <div className={styles.middleVisualStage}>
                {/* Executive Leader Background Photo */}
                <div className={styles.execPhotoWrapper}>
                  <Image
                    src="/solution/img_executive.png"
                    alt="Người dẫn dắt tầm nhìn chiến lược QTM"
                    width={580}
                    height={700}
                    className={styles.execImage}
                    priority
                  />
                  <div className={styles.execPhotoGlowOverlay} />
                </div>

                {/* 3 Overlapping Floating Glass Cards */}
                {/* Floating Card 1: Event */}
                <Card3DTilt className={`${styles.floatingPhotoCard} ${styles.photoCard1}`} maxTilt={6} scale={1.02}>
                  <div className={styles.cardImageInner}>
                    <Image src="/solution/img_event.png" alt="Sự kiện hội nghị QTM" width={180} height={120} className={styles.thumbImg} />
                    <div className={styles.photoCardPill}>SỰ KIỆN // CONVENTION</div>
                  </div>
                </Card3DTilt>

                {/* Floating Card 2: Billboard */}
                <Card3DTilt className={`${styles.floatingPhotoCard} ${styles.photoCard2}`} maxTilt={6} scale={1.02}>
                  <div className={styles.cardImageInner}>
                    <Image src="/solution/img_billboard.png" alt="Billboard DOOH QTM" width={180} height={120} className={styles.thumbImg} />
                    <div className={styles.photoCardPill}>OUTDOOR // DOOH</div>
                  </div>
                </Card3DTilt>

                {/* Floating Card 3: Stage */}
                <Card3DTilt className={`${styles.floatingPhotoCard} ${styles.photoCard3}`} maxTilt={6} scale={1.02}>
                  <div className={styles.cardImageInner}>
                    <Image src="/solution/img_stage.png" alt="Sân khấu ánh sáng QTM" width={180} height={120} className={styles.thumbImg} />
                    <div className={styles.photoCardPill}>VISUAL // LIGHTING STAGE</div>
                  </div>
                </Card3DTilt>
              </div>
            </motion.div>


            {/* ── LỚP PHẢI (~25% width): Dashboard Panel (Glassmorphism) ───────── */}
            <motion.div
              className={styles.layerRight}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            >
              <div className={styles.dashboardContainer}>
                
                {/* Card 1: HIỆU QUẢ CHIẾN DỊCH */}
                <div className={styles.dashCard}>
                  <div className={styles.dashCardHeader}>
                    <span className={styles.dashCardTitle}>HIỆU QUẢ CHIẾN DỊCH</span>
                    <span className={styles.dashLiveDot} />
                  </div>
                  <div className={styles.kpiMetricsRow}>
                    <div className={styles.kpiItem}>
                      <span className={styles.kpiValue}>+<CountUp to={250} duration={2.2} />%</span>
                      <span className={styles.kpiLabel}>Tiếp cận</span>
                    </div>
                    <div className={styles.kpiItem}>
                      <span className={styles.kpiValue}>+<CountUp to={180} duration={2} />%</span>
                      <span className={styles.kpiLabel}>Tương tác</span>
                    </div>
                    <div className={styles.kpiItem}>
                      <span className={styles.kpiValue}>+<CountUp to={45} duration={1.8} />%</span>
                      <span className={styles.kpiLabel}>Chuyển đổi</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: TỶ LỆ TƯƠNG TÁC (Donut + Breakdown) */}
                <div className={styles.dashCard}>
                  <div className={styles.dashCardHeader}>
                    <span className={styles.dashCardTitle}>TỶ LỆ TƯƠNG TÁC</span>
                    <span className={styles.dashSubTag}>REAL-TIME</span>
                  </div>
                  
                  <div className={styles.donutBreakdownRow}>
                    {/* Donut Chart SVG */}
                    <div className={styles.donutChartWrap}>
                      <svg width="72" height="72" viewBox="0 0 36 36" className={styles.donutSvg}>
                        <path className={styles.donutBg} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3.8" />
                        <path className={styles.donutVal} strokeDasharray="98.5, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#38CFC8" strokeWidth="3.8" strokeLinecap="round" />
                      </svg>
                      <div className={styles.donutTextInside}>
                        <span className={styles.donutPercent}><CountUp to={98} duration={2} />%</span>
                      </div>
                    </div>

                    {/* Breakdown Bars */}
                    <div className={styles.breakdownList}>
                      <div className={styles.bdRow}>
                        <span className={styles.bdName}>Social Media</span>
                        <div className={styles.bdTrack}><div className={styles.bdFill} style={{ width: "85%", background: "#4FD1E8" }} /></div>
                      </div>
                      <div className={styles.bdRow}>
                        <span className={styles.bdName}>Sự kiện</span>
                        <div className={styles.bdTrack}><div className={styles.bdFill} style={{ width: "65%", background: "#38CFC8" }} /></div>
                      </div>
                      <div className={styles.bdRow}>
                        <span className={styles.bdName}>Báo chí</span>
                        <div className={styles.bdTrack}><div className={styles.bdFill} style={{ width: "50%", background: "#3B82F6" }} /></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: HIỆU QUẢ THEO THỜI GIAN (Line Chart) */}
                <div className={styles.dashCard}>
                  <div className={styles.dashCardHeader}>
                    <span className={styles.dashCardTitle}>HIỆU QUẢ THEO THỜI GIAN</span>
                    <span className={styles.dashSubTag}>12 THÁNG</span>
                  </div>
                  
                  <div className={styles.lineChartWrap}>
                    <svg viewBox="0 0 200 60" fill="none" className={styles.lineSvg}>
                      <path d="M0 50 Q 40 40, 80 25 T 140 18 T 200 8" stroke="url(#lineGrad)" strokeWidth="2.5" fill="none" />
                      <path d="M0 50 Q 40 40, 80 25 T 140 18 T 200 8 V 60 H 0 Z" fill="url(#areaGrad)" opacity="0.25" />
                      <circle cx="200" cy="8" r="4" fill="#38CFC8" />
                      <defs>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#38CFC8" />
                        </linearGradient>
                        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#38CFC8" />
                          <stop offset="100%" stopColor="#38CFC8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Dải 5 Icon Nhỏ Phía Dưới Panel */}
                <div className={styles.fiveIconsRow}>
                  <div className={styles.fiveIconItem}>
                    <div className={styles.iconMiniCircle}>🧠</div>
                    <span className={styles.iconMiniLabel}>Chiến lược</span>
                  </div>
                  <div className={styles.fiveIconItem}>
                    <div className={styles.iconMiniCircle}>💡</div>
                    <span className={styles.iconMiniLabel}>Sáng tạo</span>
                  </div>
                  <div className={styles.fiveIconItem}>
                    <div className={styles.iconMiniCircle}>⚙️</div>
                    <span className={styles.iconMiniLabel}>Công nghệ</span>
                  </div>
                  <div className={styles.fiveIconItem}>
                    <div className={styles.iconMiniCircle}>🚀</div>
                    <span className={styles.iconMiniLabel}>Triển khai</span>
                  </div>
                  <div className={styles.fiveIconItem}>
                    <div className={styles.iconMiniCircle}>📊</div>
                    <span className={styles.iconMiniLabel}>Đo lường</span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>{/* /solHero3LayerGrid */}
        </div>{/* /solHeroContent */}
      </section>
    </>
  );
}
