"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import styles from "@/scss/news/NewsHero.module.scss";
import { NEWS_CATEGORIES } from "@/data/newsData";
import type { NewsCategory } from "@/types/news";

interface NewsHeroProps {
  selectedCategory: NewsCategory;
  onSelectCategory: (category: NewsCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalArticlesCount: number;
  categoryCounts: Record<NewsCategory, number>;
}

export default function NewsHero({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalArticlesCount,
  categoryCounts,
}: NewsHeroProps) {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

  return (
    <section className={styles.heroRoot}>
      <div className={styles.heroContent}>
        {/* Main Title */}
        <motion.h1
          className={styles.heroTitle}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          TIN TỨC & <span className={styles.titleHighlight}>KIẾN THỨC NGÀNH SỰ KIỆN</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={styles.heroSubtitle}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Cập nhật xu hướng MediaTech, giải pháp ứng dụng AI, kịch bản dàn dựng và bí quyết tổ chức sự kiện chuyên nghiệp nâng tầm thương hiệu doanh nghiệp.
        </motion.p>

        {/* Search & Category Filter Controls */}
        <motion.div
          className={styles.searchFilterContainer}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.65, delay: 0.3 }}
        >
          {/* Live Search Input */}
          <div className={styles.searchBoxWrapper}>
            <svg
              className={styles.searchIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input
              type="text"
              placeholder="Tìm kiếm bài viết (Ví dụ: AI, Hologram, ROI, Checklist đạo diễn...)"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className={styles.searchInput}
            />

            {searchQuery && (
              <button
                className={styles.clearSearchBtn}
                onClick={() => onSearchChange("")}
                aria-label="Xóa tìm kiếm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Category Tabs Bar */}
          <div className={styles.categoryTabsScroll}>
            {NEWS_CATEGORIES.map((cat) => {
              const count = cat === "Tất cả" ? totalArticlesCount : categoryCounts[cat] || 0;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`${styles.categoryTabBtn} ${isActive ? styles.active : ""}`}
                >
                  <span>{cat}</span>
                  <span className={styles.countBadge}>{count}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Quick Stats Row */}
        <motion.div
          className={styles.heroStatsRow}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.statItem}>
            <span className={styles.statVal}>100+</span>
            <span>Bài viết chuyên sâu</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statVal}>16+</span>
            <span>Năm kinh nghiệm MediaTech</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statVal}>50K+</span>
            <span>Lượt đọc hàng tháng</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
