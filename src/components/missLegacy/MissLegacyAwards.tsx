"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "./MissLegacyAwards.module.scss";

const BADGES = [
  {
    title: "TÔN VINH",
    desc: "Những người phụ nữ truyền cảm hứng",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    title: "GÓP PHẦN",
    desc: "Lan tỏa những giá trị nhân văn tốt đẹp",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "KHẢNG ĐỊNH",
    desc: "Vai trò và bản lĩnh của phụ nữ Việt Nam",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "LAN TỎA",
    desc: "Những câu chuyện truyền cảm hứng đến cộng đồng",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
];

const STATS = [
  { icon: "👥", val: "50+", lbl: "Nhân vật tiêu biểu được vinh danh" },
  { icon: "💼", val: "10+", lbl: "Lĩnh vực hoạt động" },
  { icon: "⭐", val: "1000+", lbl: "Câu chuyện truyền cảm hứng" },
  { icon: "🌐", val: "1", lbl: "Sứ mệnh chung: Lan tỏa giá trị Việt Nam" },
];

const viewport = { once: true, amount: 0.2 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

export default function MissLegacyAwards() {
  return (
    <section className={styles.sectionAwards} id="awards">
      <div className={styles.awardsContent}>
        {/* Main Split Grid */}
        <div className={styles.mainSplitGrid}>
          {/* Left Text Column */}
          <div className={styles.leftContentCol}>
            <motion.div
              className={styles.titleWrap}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.1, ease: cubicEase }}
            >
              <h2 className={styles.sectionTitle}>Legacy Women Awards</h2>
              <svg className={styles.lotusIcon} viewBox="0 0 100 80" fill="none">
                <path
                  d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
                  fill="#D4AF37"
                />
              </svg>
            </motion.div>

            <motion.p
              className={styles.descText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.2, ease: cubicEase }}
            >
              Bên cạnh Miss Legacy, QTM tổ chức Legacy Women Awards nhằm tôn vinh những người phụ nữ
              có nhiều đóng góp trong các lĩnh vực kinh tế, văn hóa, giáo dục, khoa học, nghệ thuật và
              hoạt động cộng đồng. Đây là hoạt động mang ý nghĩa nhân văn, góp phần lan tỏa những câu
              chuyện truyền cảm hứng và khẳng định vai trò của người phụ nữ Việt Nam trong thời đại mới.
            </motion.p>

            {/* 4 Action Badges Grid */}
            <div className={styles.badgesGrid}>
              {BADGES.map((bdg, idx) => (
                <motion.div
                  key={bdg.title}
                  className={styles.badgeCard}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, ease: cubicEase }}
                >
                  <div className={styles.badgeIcon}>{bdg.icon}</div>
                  <span className={styles.badgeTitle}>{bdg.title}</span>
                  <span className={styles.badgeDesc}>{bdg.desc}</span>
                </motion.div>
              ))}
            </div>

            {/* Stat Highlights Row */}
            <motion.div
              className={styles.statsRow4}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.5, ease: cubicEase }}
            >
              {STATS.map((st) => (
                <div key={st.lbl} className={styles.statItem}>
                  <span className={styles.icon}>{st.icon}</span>
                  <div className={styles.textGroup}>
                    <span className={styles.val}>{st.val}</span>
                    <span className={styles.lbl}>{st.lbl}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Closing Quote Box */}
        <motion.div
          className={styles.quoteBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.6, ease: cubicEase }}
        >
          <span className={styles.quoteMark}>“</span>
          <p className={styles.quoteText}>
            Vinh danh những đóa hoa thầm lặng, để di sản và giá trị Việt tiếp tục được gìn giữ và lan tỏa.
          </p>
          <span className={styles.quoteMark}>”</span>
        </motion.div>
      </div>
    </section>
  );
}
