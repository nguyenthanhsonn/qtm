"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import styles from "./AboutAiCulture.module.scss";

type CulturePillar = {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const culturePillars: CulturePillar[] = [
  {
    id: "ai-app",
    title: "ỨNG DỤNG AI",
    desc: "AI được tích hợp vào quy trình nghiên cứu, sáng tạo, vận hành và phân tích dữ liệu nhằm tăng hiệu suất làm việc.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "data-driven",
    title: "QUYẾT ĐỊNH DỰA TRÊN DỮ LIỆU",
    desc: "Mọi giải pháp đều được xây dựng dựa trên dữ liệu thực và nhu cầu thực của khách hàng.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    id: "automation",
    title: "TỰ ĐỘNG HÓA",
    desc: "Chuẩn hóa và tự động hóa các quy trình để tiết kiệm thời gian, chi phí và nguồn lực.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: "learning",
    title: "HỌC HỎI LIÊN TỤC",
    desc: "Không ngừng cập nhật các xu hướng công nghệ mới nhằm mang đến cho khách hàng các giải pháp tiên tiến nhất.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: "innovation",
    title: "ĐỔI MỚI SÁNG TẠO",
    desc: "Khuyến khích thử nghiệm những ý tưởng mới để tạo ra giá trị khác biệt.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.94 1.5 4 .76.76 1.23 1.52 1.41 2.5" />
      </svg>
    ),
  },
  {
    id: "human-centric",
    title: "CON NGƯỜI LÀ TRUNG TÂM",
    desc: "Công nghệ chỉ là công cụ, con người mới quyết định. Tư duy sáng tạo và kinh nghiệm chuyên gia vẫn là yếu tố tạo nên giá trị của QTM.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutAiCulture() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="ai-culture" className={`section ${styles.sectionAiCulture}`}>
      <div className={`section__content ${styles.aiCultureContent}`}>
        {/* Title */}
        <motion.h2
          className={styles.aiCultureMainTitle}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          VĂN HÓA AI — <br />
          <span className="highlight-mint-teal">
            AI không thay thế con người. AI giúp con người làm tốt hơn.
          </span>
        </motion.h2>

        <motion.p
          className={styles.aiCultureDesc}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          QTM xây dựng văn hóa làm việc dựa trên sự kết hợp giữa con người và công nghệ.
        </motion.p>

        {/* Split Grid: Left AI Brain Visual & Right 6 Pillars */}
        <div className={styles.aiCultureMainSplit}>
          {/* Left AI Head Visual */}
          <motion.div
            className={styles.aiVisualLeftCol}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
          >
            <div className={styles.aiBrainGraphicCard}>
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.aiBrainSvg}>
                <circle cx="150" cy="150" r="120" fill="url(#aiGlowBg)" opacity="0.15" />
                <path d="M150 50 C90 50 60 100 60 160 C60 210 90 250 140 250 C150 250 160 240 160 230 C160 220 170 210 180 210 C210 210 240 180 240 140 C240 90 200 50 150 50 Z" stroke="#2095AD" strokeWidth="2.5" strokeDasharray="6 4" />
                <circle cx="150" cy="120" r="25" stroke="#38CFC8" strokeWidth="2" />
                <circle cx="110" cy="170" r="15" stroke="#00D4FF" strokeWidth="2" />
                <circle cx="190" cy="170" r="15" stroke="#00D4FF" strokeWidth="2" />
                <line x1="150" y1="145" x2="110" y2="155" stroke="#38CFC8" strokeWidth="1.5" />
                <line x1="150" y1="145" x2="190" y2="155" stroke="#38CFC8" strokeWidth="1.5" />
                <defs>
                  <radialGradient id="aiGlowBg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(150 150) rotate(90) scale(120)">
                    <stop stopColor="#38CFC8" />
                    <stop offset="1" stopColor="#2095AD" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
              <div className={styles.aiHudLabel}>AI &amp; HUMAN SYNERGY</div>
            </div>
          </motion.div>

          {/* Right 6 Pillars Grid */}
          <motion.div
            className={styles.aiCultureGrid}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: 0.15 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {culturePillars.map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <div className={styles.aiPillarCard}>
                  <div className={styles.pillarCardTop}>
                    <div className={styles.pillarCardIcon}>{pillar.icon}</div>
                  </div>
                  <h3 className={styles.pillarCardTitle}>{pillar.title}</h3>
                  <p className={styles.pillarCardDesc}>{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Value Formula Ribbon */}
        <motion.div
          className={styles.aiCultureFormulaBar}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.25, ease: easeOut }}
        >
          <div className={styles.formulaEquation}>
            <div className={styles.equationBlock}>
              <div className={styles.blockIcon}>👤</div>
              <div className={styles.blockText}>
                <span className={styles.blockTitle}>CON NGƯỜI</span>
                <span className={styles.blockSub}>Sáng tạo - Tư duy - Trải nghiệm</span>
              </div>
            </div>

            <span className={styles.equationOperator}>+</span>

            <div className={styles.equationBlock}>
              <div className={styles.blockIcon}>🤖</div>
              <div className={styles.blockText}>
                <span className={styles.blockTitle}>CÔNG NGHỆ</span>
                <span className={styles.blockSub}>AI - Dữ liệu - Tự động hóa</span>
              </div>
            </div>

            <span className={`${styles.equationOperator} ${styles.equationOperatorEquals}`}>=</span>

            <div className={`${styles.equationBlock} ${styles.equationBlockResult}`}>
              <div className={styles.blockIcon}>📊</div>
              <div className={styles.blockText}>
                <span className={styles.blockTitle}>GIÁ TRỊ VƯỢT TRỘI</span>
                <span className={styles.blockSub}>Hiệu quả - Tăng trưởng - Bền vững</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
