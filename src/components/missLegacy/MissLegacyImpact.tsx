"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "./MissLegacyImpact.module.scss";

const STATS = [
  { number: "50+", label: "DỰ ÁN", subtext: "Đã thực hiện thành công" },
  { number: "10+", label: "QUỐC GIA", subtext: "Đối tác & triển khai quốc tế" },
  { number: "1M+", label: "CỘNG ĐỒNG", subtext: "Được lan tỏa và kết nối" },
  { number: "95%", label: "HÀI LÒNG", subtext: "Từ đối tác & khách hàng" },
];

const VALUES = [
  {
    title: "GIÁ TRỊ VĂN HÓA",
    desc: "Gìn giữ, tôn vinh và lan tỏa bản sắc văn hóa Việt đến cộng đồng và thế giới.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M12 2C9 7 4 9 4 14a8 8 0 0 0 16 0c0-5-5-7-8-12z" />
      </svg>
    ),
  },
  {
    title: "GIÁ TRỊ KINH TẾ",
    desc: "Thúc đẩy du lịch, nông sản, sản phẩm OCOP và thương hiệu địa phương vươn xa quốc tế.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "GIÁ TRỊ XÃ HỘI",
    desc: "Truyền cảm hứng, nâng cao vị thế phụ nữ Việt, tạo cơ hội phát triển cho thế hệ trẻ.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "GIÁ TRỊ BỀN VỮNG",
    desc: "Đồng hành cùng các mục tiêu phát triển bền vững, vì một tương lai xanh và nhân văn.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: "GIÁ TRỊ ĐỐI TÁC",
    desc: "Xây dựng mối quan hệ dài hạn, cùng phát triển và kiến tạo những giá trị vượt trội.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

export default function MissLegacyImpact() {
  return (
    <section className={styles.sectionImpact} id="impact">
      <div className={styles.impactContent}>
        {/* Top Split Row: Title + Stats */}
        <div className={styles.topSplitGrid}>
          <motion.div
            className={styles.leftTitleBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.1, ease: cubicEase }}
          >
            <div className={styles.titleWrap}>
              <h2 className={styles.sectionTitle}>Giá trị và tác động</h2>
              <svg className={styles.lotusIcon} viewBox="0 0 100 80" fill="none">
                <path
                  d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
                  fill="#D4AF37"
                  opacity="0.8"
                />
              </svg>
            </div>
            <p className={styles.subtitle}>
              Mỗi dự án của QTM không chỉ mang lại kết quả truyền thông, mà còn tạo ra
              những giá trị bền vững cho văn hóa, cộng đồng và sự phát triển của đất nước.
            </p>
          </motion.div>

          {/* 4 Stats Grid */}
          <div className={styles.statsGrid}>
            {STATS.map((st, idx) => (
              <motion.div
                key={st.label}
                className={styles.statCard}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: cubicEase }}
              >
                <span className={styles.number}>{st.number}</span>
                <span className={styles.label}>{st.label}</span>
                <span className={styles.subtext}>{st.subtext}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5 Value Cards Row */}
        <div className={styles.valueCardsGrid}>
          {VALUES.map((val, idx) => (
            <motion.div
              key={val.title}
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: cubicEase }}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>{val.icon}</div>
                <h3 className={styles.cardTitle}>{val.title}</h3>
                <p className={styles.cardDesc}>{val.desc}</p>
              </div>
              <div className={styles.cardArrowBtn}>→</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Closing Quote Box */}
        <motion.div
          className={styles.quoteBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.5, ease: cubicEase }}
        >
          <span className={styles.quoteMark}>“</span>
          <p className={styles.quoteText}>
            Chúng tôi kiến tạo giá trị hôm nay, để di sản và văn hóa Việt tỏa sáng mãi mãi sau.
          </p>
          <span className={styles.quoteMark}>”</span>
        </motion.div>
      </div>
    </section>
  );
}
