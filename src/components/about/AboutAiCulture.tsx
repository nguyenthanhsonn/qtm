"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "./AboutAiCulture.module.scss";

type CulturePillar = {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  gradientClass: string;
};

const culturePillars: CulturePillar[] = [
  {
    id: "ai-app",
    title: "ỨNG DỤNG AI",
    desc: "AI được tích hợp vào quá trình nghiên cứu, sáng tạo, vận hành và phân tích dữ liệu nhằm nâng cao hiệu suất làm việc.",
    gradientClass: styles.iconGradBlue,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="15" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    id: "data-driven",
    title: "QUYẾT ĐỊNH DỰA TRÊN DỮ LIỆU",
    desc: "Mọi giải pháp đều được xây dựng trên cơ sở dữ liệu và nhu cầu thực tế của khách hàng.",
    gradientClass: styles.iconGradDeepBlue,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    id: "automation",
    title: "TỰ ĐỘNG HÓA",
    desc: "Chuẩn hóa và tự động hóa các quy trình để tối ưu thời gian, chi phí và nguồn lực.",
    gradientClass: styles.iconGradTeal,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: "learning",
    title: "HỌC HỎI LIÊN TỤC",
    desc: "Không ngừng cập nhật xu hướng công nghệ mới nhằm mang đến những giải pháp tiên tiến nhất.",
    gradientClass: styles.iconGradLightBlue,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: "innovation",
    title: "ĐỔI MỚI SÁNG TẠO",
    desc: "Khuyến khích thử nghiệm những ý tưởng mới để tạo ra giá trị khác biệt.",
    gradientClass: styles.iconGradPurple,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.94 1.5 4 .76.76 1.23 1.52 1.41 2.5" />
      </svg>
    ),
  },
  {
    id: "human-centric",
    title: "CON NGƯỜI LÀ TRUNG TÂM",
    desc: "Công nghệ hỗ trợ, con người quyết định. Sự sáng tạo, tư duy và trải nghiệm của đội ngũ vẫn là yếu tố cốt lõi tạo nên giá trị của QTM.",
    gradientClass: styles.iconGradGreen,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.15 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutAiCulture() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="ai-culture" className={`section ${styles.sectionAiCultureLight}`}>
      <div className={`section__content ${styles.aiCultureContent}`}>
        
        {/* ── 1. MAIN SECTION HEADER AT TOP (CENTERED) ───────────────────────── */}
        <motion.div
          className={styles.sectionTopHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <h2 className={styles.mainTitleHead}>VĂN HÓA AI</h2>
          <div className={styles.titleUnderlineAccent} />
          
          <p className={styles.mainSloganSubHeading}>
            AI không thay thế con người, AI giúp con người làm tốt hơn.
          </p>

          <p className={styles.mainDescSubtitle}>
            QTM xây dựng văn hóa làm việc dựa trên sự kết hợp giữa con người và công nghệ.
          </p>
        </motion.div>

        {/* ── 2. MAIN 2-COLUMN CONTENT SPLIT ─────────────────────────────────── */}
        <div className={styles.aiCultureSplitLayout}>

          {/* ── CỘT TRÁI (~24% width): AI Head Image (Dark Navy Theme, No White Box) ─ */}
          <motion.div
            className={styles.leftColBlock}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
          >
            <div className={styles.aiHeadImageWrapper}>
              <Image
                src="/about_us/img_ai_head_dark.png"
                alt="QTM AI & Human Synergy Graphic"
                width={420}
                height={420}
                className={styles.aiHeadImgDark}
                priority
              />
            </div>
          </motion.div>

          {/* ── CỘT PHẢI (~76% width): 6 Pillars Grid + Formula Bar ──────────── */}
          <div className={styles.rightColBlock}>

            {/* 6 Pillars Grid (3 cols x 2 rows, NO borders/cards) */}
            <motion.div
              className={styles.pillarsCleanGrid}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: 0.12 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {culturePillars.map((pillar) => (
                <motion.div
                  key={pillar.id}
                  className={styles.pillarCleanItem}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: easeOut }}
                >
                  {/* Round Gradient Icon */}
                  <div className={`${styles.iconRoundGradient} ${pillar.gradientClass}`}>
                    {pillar.icon}
                  </div>

                  {/* Title & Short Accent Line */}
                  <h4 className={styles.pillarItemTitle}>{pillar.title}</h4>
                  <div className={styles.itemAccentLine} />

                  {/* Description */}
                  <p className={styles.pillarItemDesc}>{pillar.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* DẢI CÔNG THỨC GIÁ TRỊ (Full-width Bottom Value Formula Ribbon) */}
            <motion.div
              className={styles.valueFormulaBar}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
            >
              <div className={styles.formulaFlexRow}>

                {/* Block 1: CON NGƯỜI */}
                <div className={styles.formulaItemBlock}>
                  <div className={`${styles.formulaIconCircle} ${styles.iconGradBlue}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className={styles.formulaTextGroup}>
                    <span className={styles.formulaBlockTitle}>CON NGƯỜI</span>
                    <span className={styles.formulaBlockSub}>Sáng tạo • Tư duy • Trải nghiệm</span>
                  </div>
                </div>

                {/* Operator + */}
                <span className={styles.operatorSymbol}>+</span>

                {/* Block 2: CÔNG NGHỆ */}
                <div className={styles.formulaItemBlock}>
                  <div className={`${styles.formulaIconCircle} ${styles.iconGradLightBlue}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div className={styles.formulaTextGroup}>
                    <span className={styles.formulaBlockTitle}>CÔNG NGHỆ</span>
                    <span className={styles.formulaBlockSub}>AI • Dữ liệu • Tự động hóa</span>
                  </div>
                </div>

                {/* Operator = */}
                <span className={`${styles.operatorSymbol} ${styles.operatorEquals}`}>=</span>

                {/* Block 3: GIÁ TRỊ VƯỢT TRỘI */}
                <div className={`${styles.formulaItemBlock} ${styles.formulaItemResult}`}>
                  <div className={`${styles.formulaIconCircle} ${styles.iconGradTeal}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <div className={styles.formulaTextGroup}>
                    <span className={styles.formulaBlockTitle}>GIÁ TRỊ VƯỢT TRỘI</span>
                    <span className={styles.formulaBlockSub}>Hiệu quả • Tăng trưởng • Bền vững</span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>{/* /rightColBlock */}

        </div>{/* /aiCultureSplitLayout */}

      </div>
    </section>
  );
}
