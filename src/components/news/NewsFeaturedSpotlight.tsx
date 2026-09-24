"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import styles from "@/scss/news/NewsGrid.module.scss";
import type { NewsArticle } from "@/types/news";
import { formatNumber } from "@/lib/utils";

interface NewsFeaturedSpotlightProps {
  article: NewsArticle;
}

export default function NewsFeaturedSpotlight({ article }: NewsFeaturedSpotlightProps) {
  if (!article) return null;

  return (
    <motion.div
      className={styles.spotlightCard}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.spotlightInner}>
        {/* Left Column: Image with Gradient Overlay */}
        <div className={styles.spotlightImageCol}>
          <div className={styles.spotlightBadge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>Bài viết tiêu điểm</span>
          </div>

          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="(max-width: 992px) 100vw, 55vw"
            priority
            className={styles.spotlightImg}
          />
          <div className={styles.spotlightOverlay} />
        </div>

        {/* Right Column: Article Details */}
        <div className={styles.spotlightContentCol}>
          <div className={styles.articleMeta}>
            <span className={styles.metaCategory}>{article.category}</span>
            <span>•</span>
            <span>{article.publishedAt}</span>
            <span>•</span>
            <span>⏱ {article.readTime}</span>
            <span>•</span>
            <span>👁 {formatNumber(article.views)} lượt xem</span>
          </div>

          <Link href={`/news/${article.slug}`} className="no-underline">
            <h2 className={styles.spotlightTitle}>{article.title}</h2>
          </Link>

          <p className={styles.spotlightExcerpt}>{article.excerpt}</p>

          {article.highlights && article.highlights.length > 0 && (
            <div className={styles.spotlightHighlights}>
              <div className={styles.highlightTitle}>Điểm cốt lõi bài viết:</div>
              <ul>
                {article.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.spotlightFooter}>
            <Link href={`/news/${article.slug}`} className={styles.readMoreBtn}>
              <span>Đọc bài viết</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
