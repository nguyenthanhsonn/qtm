"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "./ProjectsBlogHero.module.scss";

export const CATEGORIES = [
  "Tất cả",
  "Văn hóa & Di sản",
  "Chuyển đổi số & AI",
  "Chiến dịch Truyền thông",
  "Thương hiệu & OCOP",
];

const viewport = { once: true, amount: 0.2 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

export default function ProjectsBlogHero({
  selectedCategory,
  onSelectCategory,
}: {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}) {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.tagPill}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: cubicEase }}
        >
          <span className={styles.tagDot}>✦</span>
          <span>DỰ ÁN & HỒ SƠ NĂNG LỰC QTM</span>
        </motion.div>

        <motion.h1
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: cubicEase }}
        >
          Dự án tiêu biểu & Câu chuyện thành công
        </motion.h1>

        <motion.p
          className={styles.subTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: cubicEase }}
        >
          Khám phá những chiến lược truyền thông toàn diện, giải pháp công nghệ AI
          bứt phá và dự án di sản văn hóa sáng tạo do QTM kiến tạo và thực thi.
        </motion.p>

        {/* Category Filter Bar */}
        <motion.div
          className={styles.filterBar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: cubicEase }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                className={`${styles.filterBtn} ${isActive ? styles.active : ""}`}
                onClick={() => onSelectCategory(cat)}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
