"use client";

import React from "react";
import styles from "./SolutionValueReceived.module.scss";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";
import CountUp from "@/components/CountUp";
import Card3DTilt from "@/components/Card3DTilt";

type ValueCardItem = {
  id: string;
  num: string;
  title: string;
  desc: string;
  gradientClass: string;
  iconSvg: React.ReactNode;
};

const valueCards: ValueCardItem[] = [
  {
    id: "brand-awareness",
    num: "01",
    title: "GIA TĂNG NHẬN DIỆN",
    desc: "Tăng độ phủ thương hiệu, tạo ấn tượng mạnh mẽ và khác biệt.",
    gradientClass: styles.iconGradCyan,
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "enhance-connection",
    num: "02",
    title: "TĂNG CƯỜNG KẾT NỐI",
    desc: "Gắn kết thương hiệu với khách hàng và cộng đồng, xây dựng mối quan hệ bền vững.",
    gradientClass: styles.iconGradBlue,
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "optimize-operation",
    num: "03",
    title: "TỐI ƯU VẬN HÀNH",
    desc: "Quy trình chuyên nghiệp, công nghệ hiện đại giúp tiết kiệm thời gian và chi phí.",
    gradientClass: styles.iconGradPurple,
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: "measure-effectiveness",
    num: "04",
    title: "ĐO LƯỜNG HIỆU QUẢ",
    desc: "Báo cáo minh bạch, đo lường chính xác, tối ưu hiệu suất và hiệu quả đầu tư.",
    gradientClass: styles.iconGradTeal,
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: "drive-growth",
    num: "05",
    title: "THÚC ĐẨY TĂNG TRƯỜNG",
    desc: "Giải pháp sáng tạo, hiệu quả giúp doanh nghiệp mở rộng thị phần và tăng trưởng doanh thu.",
    gradientClass: styles.iconGradCyan,
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    id: "sustainable-development",
    num: "06",
    title: "PHÁT TRIỂN BỀN VỮNG",
    desc: "Hướng đến giá trị lâu dài, cùng doanh nghiệp kiến tạo tương lai bền vững.",
    gradientClass: styles.iconGradGreen,
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 4.4-3.6 8-8 8z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.15 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SolutionValueReceived() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="values" className={`section ${styles.sectionSolVal}`}>
      <ParticleField />

      <div className={`section__content ${styles.solValContent}`}>
        {/* ── 1. Top Centered Single-Line Header ───────────────────────────────── */}
        <motion.div
          className={styles.sectionTopHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className={styles.eyebrowTag}>
            <span className={styles.tagDash}>—</span>
            <span className={styles.tagText}>GIẢI PHÁP QTM</span>
          </div>

          <h2 className={styles.mainTitleHead}>
            GIÁ TRỊ KHÁCH HÀNG <span className={styles.titleHighlightCyan}>NHẬN ĐƯỢC</span>
          </h2>

          <div className={styles.titleUnderlineAccent} />

          <p className={styles.mainSubtitleDesc}>
            QTM mang đến những giá trị thiết thực, giúp doanh nghiệp tăng trưởng bền vững và dẫn đầu thị trường.
          </p>
        </motion.div>

        {/* ── 2. 6 Vertical Cards Grid (6 cols x 1 row) ─────────────────────── */}
        <motion.div
          className={styles.sixCardsGridRow}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.06, delayChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {valueCards.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: easeOut }}
              className={styles.cardWrapperItem}
            >
              <Card3DTilt
                className={styles.valuePointGlassCard}
                maxTilt={6}
                scale={1.02}
                glareColor="rgba(79, 209, 232, 0.25)"
                glareOpacity={0.25}
              >
                {/* Number & Accent at Top Left */}
                <div className={styles.cardHeaderNumRow}>
                  <span className={styles.cardNumber}>{card.num}</span>
                  <div className={styles.numUnderline} />
                </div>

                {/* Round Icon Badge */}
                <div className={styles.iconCircleWrapper}>
                  <div className={`${styles.iconBadge} ${card.gradientClass}`}>
                    {card.iconSvg}
                  </div>
                </div>

                {/* Content Details */}
                <div className={styles.cardContentBody}>
                  <h3 className={styles.cardTitleText}>{card.title}</h3>
                  <div className={styles.titleAccentLine} />
                  <p className={styles.cardDescText}>{card.desc}</p>
                </div>
              </Card3DTilt>
            </motion.div>
          ))}
        </motion.div>

        {/* ── 3. Bottom Horizontal Glassmorphism Stat Bar ────────────────────── */}
        <motion.div
          className={styles.solValStatsBar}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.25, ease: easeOut }}
        >
          <div className={styles.statBox}>
            <div className={styles.statIconBadge}>📅</div>
            <div className={styles.statTextGroup}>
              <span className={styles.statNum}>
                <CountUp to={10} duration={2} />+
              </span>
              <span className={styles.statLbl}>NĂM KINH NGHIỆM</span>
            </div>
          </div>

          <div className={styles.statDivider} />

          <div className={styles.statBox}>
            <div className={styles.statIconBadge}>👥</div>
            <div className={styles.statTextGroup}>
              <span className={styles.statNum}>
                <CountUp to={500} duration={2.2} />+
              </span>
              <span className={styles.statLbl}>DỰ ÁN ĐÃ THỰC HIỆN</span>
            </div>
          </div>

          <div className={styles.statDivider} />

          <div className={styles.statBox}>
            <div className={styles.statIconBadge}>🏢</div>
            <div className={styles.statTextGroup}>
              <span className={styles.statNum}>
                <CountUp to={200} duration={2.2} />+
              </span>
              <span className={styles.statLbl}>ĐỐI TÁC &amp; KHÁCH HÀNG</span>
            </div>
          </div>

          <div className={styles.statDivider} />

          <div className={styles.statBox}>
            <div className={styles.statIconBadge}>📍</div>
            <div className={styles.statTextGroup}>
              <span className={styles.statNum}>
                <CountUp to={1000} duration={2.5} />+
              </span>
              <span className={styles.statLbl}>VỊ TRÍ TRUYỀN THÔNG TOÀN QUỐC</span>
            </div>
          </div>

          <div className={styles.statDivider} />

          <div className={styles.statBox}>
            <div className={styles.statIconBadge}>👍</div>
            <div className={styles.statTextGroup}>
              <span className={styles.statNum}>
                <CountUp to={98} duration={2} />%
              </span>
              <span className={styles.statLbl}>KHÁCH HÀNG HÀI LÒNG</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
