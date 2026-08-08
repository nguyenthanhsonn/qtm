"use client";

import React from "react";
import { motion } from "motion/react";
import CountUp from "@/components/CountUp";
import styles from "@/scss/missLagecy/MissLegacyAwards.module.scss";

const BADGES = [
  {
    title: "TÔN VINH",
    desc: "Những người phụ nữ truyền cảm hứng",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M12 2a5 5 0 0 1 5 5" />
      </svg>
    ),
  },
  {
    title: "GÓP PHẦN",
    desc: "Lan tỏa những giá trị nhân văn tốt đẹp",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "KHẢNG ĐỊNH",
    desc: "Vai trò và bản lĩnh của phụ nữ Việt Nam",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "LAN TỎA",
    desc: "Những câu chuyện truyền cảm hứng đến cộng đồng",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const STATS = [
  {
    num: 50,
    suffix: "+",
    label: "Nhân vật tiêu biểu được vinh danh",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
  {
    num: 10,
    suffix: "+",
    label: "Lĩnh vực hoạt động",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    num: 1000,
    suffix: "+",
    label: "Câu chuyện truyền cảm hứng",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    num: 1,
    suffix: "",
    label: "Sứ mệnh chung: Lan tỏa giá trị Việt Nam",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.15 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

export default function MissLegacyAwards() {
  return (
    <section className={styles.sectionAwards} id="awards">
      <div className={styles.awardsContentWrapper}>
        {/* Main Grid: Left Column Text & Nodes + Right Column Stage Scene */}
        <div className={styles.mainGrid}>
          {/* Left Text & Interactive Badges Column */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, delay: 0.1, ease: cubicEase }}
          >
            {/* Eyebrow */}
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowDash}>—</span>
              <span className={styles.eyebrowText}>LEGACY WOMEN AWARDS</span>
            </div>

            {/* Title */}
            <div className={styles.titleWrap}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.titleLine1}>
                  Legacy
                  <svg className={styles.titleLotusIcon} viewBox="0 0 100 80" fill="none">
                    <path
                      d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
                      fill="url(#awardsTitleLotusGrad)"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                    />
                    <defs>
                      <linearGradient id="awardsTitleLotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFF5D0" />
                        <stop offset="100%" stopColor="#D4AF37" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className={styles.titleHighlightGold}>Women Awards</span>
              </h2>
            </div>

            {/* Paragraphs */}
            <div className={styles.paragraphsGroup}>
              <p className={styles.descText}>
                Bên cạnh Miss Legacy, QTM tổ chức Legacy Women Awards nhằm tôn vinh những người phụ nữ
                có nhiều đóng góp trong các lĩnh vực kinh tế, văn hóa, giáo dục, khoa học, nghệ thuật và
                hoạt động cộng đồng.
              </p>
              <p className={styles.descText}>
                Đây là hoạt động mang ý nghĩa nhân văn, góp phần lan tỏa những câu chuyện truyền cảm
                hứng và khẳng định vai trò của người phụ nữ Việt Nam trong thời đại mới.
              </p>
            </div>

            {/* 4 Circular Action Badges */}
            <div className={styles.badgesGrid4}>
              {BADGES.map((bdg, idx) => (
                <motion.div
                  key={bdg.title}
                  className={styles.badgeCardNode}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, delay: 0.25 + idx * 0.1, ease: cubicEase }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.badgeIconCircle}>{bdg.icon}</div>
                  <span className={styles.badgeTitle}>{bdg.title}</span>
                  <span className={styles.badgeDesc}>{bdg.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column Spacer for Background Scene */}
          <div className={styles.rightStageSpacer} />
        </div>

        {/* Bottom Horizontal Metrics Ribbon Bar with CountUp */}
        <motion.div
          className={styles.bottomMetricsRibbon}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.4, ease: cubicEase }}
        >
          {STATS.map((st) => (
            <div key={st.label} className={styles.metricItem}>
              <div className={styles.metricIconBox}>{st.icon}</div>
              <div className={styles.metricTextWrap}>
                <div className={styles.numRow}>
                  <CountUp to={st.num} duration={2.2} className={styles.metricNum} />
                  <span className={styles.metricSuffix}>{st.suffix}</span>
                </div>
                <span className={styles.metricLabel}>{st.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Highlighted Slogan Banner */}
        <motion.div
          className={styles.highlightedSloganBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.85, delay: 0.5, ease: cubicEase }}
        >
          <div className={styles.sloganContent}>
            <span className={styles.quoteMarkGold}>“</span>
            <p className={styles.sloganText}>
              Vinh danh những đóa hoa thầm lặng, để di sản và giá trị Việt tiếp tục được gìn giữ và lan tỏa.
            </p>
            <span className={styles.quoteMarkGold}>”</span>
          </div>

          <div className={styles.sloganLotusFooter}>
            <div className={styles.sloganLineLeft} />
            <svg className={styles.sloganLotusIcon} viewBox="0 0 100 80" fill="none">
              <path
                d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
                fill="url(#sloganLotusGrad2)"
                stroke="#D4AF37"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient id="sloganLotusGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
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
