"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import styles from "@/scss/news/NewsWireframeLayout.module.scss";
import type { NewsArticle } from "@/types/news";
import { formatNumber } from "@/lib/utils";

interface NewsWireframeFeaturesProps {
  articles: NewsArticle[];
}

export default function NewsWireframeFeatures({ articles }: NewsWireframeFeaturesProps) {
  // Take 4 featured articles for the 2x2 Bento grid
  const bentoArticles = articles.slice(0, 4);

  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionTagBadge}>HIGHLIGHTED FEATURES</span>
          <h2 className={styles.sectionMainTitle}>
            Bài viết <span className={styles.titleHighlight}>Tiêu điểm & Xu hướng 2026</span>
          </h2>
          <div className={styles.titleUnderline} />
          <p className={styles.sectionSubDesc}>
            Tổng hợp 4 chủ đề công nghệ và vận hành sự kiện được quan tâm nhất năm 2026.
          </p>
        </div>

        {/* 2x2 Bento Grid */}
        <div className={styles.bentoGrid}>
          {bentoArticles.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link href={`/news/${art.slug}`} className={styles.bentoCard}>
                <div className={styles.bentoTop}>
                  <span className={styles.bentoCategory}>{art.category}</span>
                  <h3 className={styles.bentoCardTitle}>{art.title}</h3>
                  <p className={styles.bentoCardDesc}>{art.excerpt}</p>
                </div>

                <div className={styles.bentoBottom}>
                  <span className={styles.readText}>
                    <span>Đọc bài viết</span>
                    <span>→</span>
                  </span>
                  <span className={styles.readMeta}>
                    ⏱ {art.readTime} • 👁 {formatNumber(art.views)}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
