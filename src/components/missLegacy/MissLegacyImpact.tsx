"use client";

import React from "react";
import { motion } from "motion/react";
import CountUp from "@/components/CountUp";
import styles from "@/scss/missLagecy/MissLegacyImpact.module.scss";

const STATS = [
  {
    num: 50,
    suffix: "+",
    label: "DỰ ÁN",
    subtext: "Đã thực hiện thành công",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: 10,
    suffix: "+",
    label: "QUỐC GIA",
    subtext: "Đối tác & triển khai quốc tế",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    num: 1,
    suffix: "M+",
    label: "CỘNG ĐỒNG",
    subtext: "Được lan tỏa và kết nối",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
  {
    num: 95,
    suffix: "%",
    label: "HÀI LÒNG",
    subtext: "Từ đối tác & khách hàng",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const VALUES = [
  {
    title: "GIÁ TRỊ VĂN HÓA",
    desc: "Gìn giữ, tôn vinh và lan tỏa bản sắc văn hóa Việt đến cộng đồng và thế giới.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M12 2C9 7 4 9 4 14a8 8 0 0 0 16 0c0-5-5-7-8-12z" />
        <path d="M12 22a8 8 0 0 0 8-8c0-3-2-5-5-8" />
      </svg>
    ),
  },
  {
    title: "GIÁ TRỊ KINH TẾ",
    desc: "Thúc đẩy du lịch, nông sản, sản phẩm OCOP và thương hiệu địa phương vươn xa quốc tế.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    title: "GIÁ TRỊ XÃ HỘI",
    desc: "Truyền cảm hứng, nâng cao vị thế phụ nữ Việt, tạo cơ hội phát triển cho thế hệ trẻ.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "GIÁ TRỊ BỀN VỮNG",
    desc: "Đồng hành cùng các mục tiêu phát triển bền vững, vì một tương lai xanh và nhân văn.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: "GIÁ TRỊ ĐỐI TÁC",
    desc: "Xây dựng mối quan hệ dài hạn, cùng phát triển và kiến tạo những giá trị vượt trội.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.15 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

export default function MissLegacyImpact() {
  return (
    <section className={styles.sectionImpact} id="impact">
      <div className={styles.impactContentWrapper}>
        {/* ── 1. Top Split Row (Title Left + Floating 4 Stat Metrics Right) ──────── */}
        <div className={styles.topSplitGrid}>
          {/* Left Title & Description Block - Slide from Left */}
          <motion.div
            className={styles.leftTitleBlock}
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, delay: 0.1, ease: cubicEase }}
          >
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowDash}>—</span>
              <span className={styles.eyebrowText}>GIÁ TRỊ & TÁC ĐỘNG</span>
            </div>

            <div className={styles.titleWrap}>
              <h2 className={styles.sectionTitle}>
                <span>Giá trị</span>
                <span className={styles.titleLine2}>
                  và <span className={styles.titleHighlightGold}>tác động</span>
                  <svg className={styles.titleLotusIcon} viewBox="0 0 100 80" fill="none">
                    <path
                      d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
                      fill="url(#impactTitleLotusGrad)"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                    />
                    <defs>
                      <linearGradient id="impactTitleLotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFF5D0" />
                        <stop offset="100%" stopColor="#D4AF37" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>
            </div>

            <p className={styles.subtitleDesc}>
              Mỗi dự án của QTM không chỉ mang lại kết quả truyền thông, mà còn tạo ra
              những giá trị bền vững cho văn hóa, cộng đồng và sự phát triển của đất nước.
            </p>
          </motion.div>

          {/* Right Floating 4 Stat KPI Metrics Over Golden Arch Ring - Slide from Right */}
          <motion.div
            className={styles.rightStatsWrapper}
            initial={{ opacity: 0, x: 45, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.85, delay: 0.2, ease: cubicEase }}
          >
            {/* Glowing Golden Arch Ring SVG */}
            <svg viewBox="0 0 500 240" className={styles.goldenArchRingSvg}>
              <path
                d="M 20,220 A 230,190 0 0,1 480,220"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                opacity="0.4"
              />
              <path
                d="M 40,220 A 210,170 0 0,1 460,220"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1"
                strokeDasharray="6 6"
                opacity="0.25"
              />
            </svg>

            {/* 4 Floating Stat Items */}
            <div className={styles.statsRowFloating}>
              {STATS.map((st, idx) => (
                <motion.div
                  key={st.label}
                  className={styles.statFloatingItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: cubicEase }}
                >
                  <div className={styles.statIconBox}>{st.icon}</div>
                  <div className={styles.numWrap}>
                    <CountUp to={st.num} duration={2.2} className={styles.statNum} />
                    <span className={styles.statSuffix}>{st.suffix}</span>
                  </div>
                  <span className={styles.statLabel}>{st.label}</span>
                  <span className={styles.statSubtext}>{st.subtext}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── 2. 5 Lightweight Glassmorphism Value Cards Row ──────────────────── */}
        <div className={styles.valueCardsGrid5}>
          {VALUES.map((val, idx) => (
            <motion.div
              key={val.title}
              className={styles.valueCardItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: cubicEase }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className={styles.cardHeaderGroup}>
                <div className={styles.cardIconBox}>{val.icon}</div>
                <h3 className={styles.cardTitle}>{val.title}</h3>
                <p className={styles.cardDesc}>{val.desc}</p>
              </div>
              <div className={styles.cardArrowRow}>
                <span className={styles.cardArrowBtn}>→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── 3. Prominently Highlighted Bottom Slogan Banner ──────────────────── */}
        <motion.div
          className={styles.highlightedSloganBanner}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.45, ease: cubicEase }}
        >
          <div className={styles.sloganContent}>
            <span className={styles.quoteMarkGold}>“</span>
            <p className={styles.sloganText}>
              Chúng tôi kiến tạo giá trị hôm nay, để di sản và văn hóa Việt tỏa sáng mãi mai sau.
            </p>
            <span className={styles.quoteMarkGold}>”</span>
          </div>

          <div className={styles.sloganLotusFooter}>
            <div className={styles.sloganLineLeft} />
            <svg className={styles.sloganLotusIcon} viewBox="0 0 100 80" fill="none">
              <path
                d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
                fill="url(#sloganLotusGrad)"
                stroke="#D4AF37"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient id="sloganLotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF5D0" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
            </svg>
            <div className={styles.sloganLineRight} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
