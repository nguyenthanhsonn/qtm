"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import styles from "@/scss/news/NewsWireframeLayout.module.scss";
import type { NewsArticle } from "@/types/news";

interface NewsWireframeHeroProps {
  featuredArticle: NewsArticle;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function NewsWireframeHero({
  featuredArticle,
  searchQuery,
  onSearchChange,
}: NewsWireframeHeroProps) {
  return (
    <section className={styles.heroSplitRoot}>
      <div className={styles.container}>
        <div className={styles.heroSplitGrid}>
          
          {/* Left Column */}
          <motion.div
            className={styles.heroLeftCol}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Pill Badge */}
            <div className={styles.heroTopBadge}>
              <span className={styles.dot} />
              <span>50,000+ Lượt đọc tin tức & Insights ngành Sự kiện</span>
            </div>

            {/* Main Heading */}
            <h1 className={styles.heroHeadline}>
              Tin tức & <span className={styles.cyanGlow}>Kiến thức Ngành Sự kiện</span>
            </h1>

            {/* Description */}
            <p className={styles.heroDescription}>
              Cập nhật xu hướng MediaTech mới nhất, ứng dụng AI trong quản trị sự kiện, kỹ thuật thiết kế sân khấu và cẩm nang vận hành chuyên nghiệp từ QTM MediaTech.
            </p>

            {/* Search Box & CTA */}
            <div className={styles.heroActionsRow}>
              <div className={styles.searchBox}>
                <svg
                  className={styles.searchIcon}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết (AI, Hologram, ROI, LED, Checklist...)"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>

              <Link
                href="/contact"
                style={{
                  padding: "14px 28px",
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #38CFC8, #2095AD)",
                  color: "#040C1A",
                  fontWeight: 800,
                  fontSize: "14px",
                  textDecoration: "none",
                  boxShadow: "0 0 20px rgba(56, 207, 200, 0.3)",
                  whiteSpace: "nowrap",
                }}
              >
                Tư vấn Sự kiện
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Featured Image Spotlight Card */}
          {featuredArticle && (
            <motion.div
              className={styles.heroRightCol}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Link href={`/news/${featuredArticle.slug}`} className="no-underline">
                <div className={styles.heroFeaturedCard}>
                  <Image
                    src={featuredArticle.coverImage}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 50vw"
                    priority
                    className={styles.featuredImg}
                  />
                  <div className={styles.featuredOverlay}>
                    <span className={styles.featuredCategory}>{featuredArticle.category}</span>
                    <h2 className={styles.featuredTitle}>{featuredArticle.title}</h2>
                    <div className={styles.featuredMeta}>
                      <span>📅 {featuredArticle.publishedAt}</span>
                      <span>•</span>
                      <span>⏱ {featuredArticle.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
