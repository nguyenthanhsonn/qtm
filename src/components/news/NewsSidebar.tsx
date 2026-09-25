"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import styles from "@/scss/news/NewsGrid.module.scss";
import type { NewsArticle } from "@/types/news";
import { formatNumber } from "@/lib/utils";

interface NewsSidebarProps {
  trendingArticles: NewsArticle[];
  tags: string[];
  activeTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

export default function NewsSidebar({
  trendingArticles,
  tags,
  activeTag,
  onSelectTag,
}: NewsSidebarProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <aside className={styles.sidebar}>
      {/* 1. Trending Articles Widget */}
      <motion.div
        className={styles.sidebarCard}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className={styles.sidebarTitle}>BÀI VIẾT NỔI BẬT</h3>
        <div className={styles.trendingList}>
          {trendingArticles.slice(0, 5).map((art, idx) => (
            <Link key={art.id} href={`/news/${art.slug}`} className={styles.trendingItem}>
              <div className={styles.trendingIndex}>{idx + 1}</div>
              <div className={styles.trendingInfo}>
                <h4 className={styles.trendingTitle}>{art.title}</h4>
                <span className={styles.trendingViews}>👁 {formatNumber(art.views)} lượt xem</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* 2. Popular Tags Cloud */}
      <motion.div
        className={styles.sidebarCard}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className={styles.sidebarTitle}>CHỦ ĐỀ HOT</h3>
        <div className={styles.tagCloud}>
          <button
            onClick={() => onSelectTag(null)}
            className={`${styles.tagBtn} ${activeTag === null ? styles.active : ""}`}
          >
            Tất cả tags
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onSelectTag(activeTag === tag ? null : tag)}
              className={`${styles.tagBtn} ${activeTag === tag ? styles.active : ""}`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* 3. Newsletter Subscription Card */}
      <motion.div
        className={`${styles.sidebarCard} ${styles.newsletterCard}`}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className={styles.newsletterTitle}>📬 INSIGHTS ĐỊNH KỲ</h3>
        <p className={styles.newsletterDesc}>
          Đăng ký để nhận những xu hướng MediaTech & Bí quyết sự kiện mới nhất trực tiếp qua Email hàng tuần.
        </p>

        <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Nhập email của bạn..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">ĐĂNG KÝ NHẬN TIN</button>
        </form>

        {subscribed && (
          <p style={{ fontSize: "12px", color: "#38CFC8", marginTop: "10px", fontWeight: "600" }}>
            ✓ Đã đăng ký thành công! Cảm ơn bạn.
          </p>
        )}
      </motion.div>
    </aside>
  );
}
