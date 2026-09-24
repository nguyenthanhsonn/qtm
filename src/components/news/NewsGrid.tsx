"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import styles from "@/scss/news/NewsGrid.module.scss";
import { NEWS_ARTICLES } from "@/data/newsData";
import type { NewsCategory } from "@/types/news";
import { formatNumber } from "@/lib/utils";
import NewsFeaturedSpotlight from "./NewsFeaturedSpotlight";
import NewsSidebar from "./NewsSidebar";

interface NewsGridProps {
  selectedCategory: NewsCategory;
  searchQuery: string;
  onResetFilters: () => void;
}

export default function NewsGrid({
  selectedCategory,
  searchQuery,
  onResetFilters,
}: NewsGridProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // 1. Featured Spotlight Article
  const featuredArticle = useMemo(() => {
    return NEWS_ARTICLES.find((a) => a.featured) || NEWS_ARTICLES[0];
  }, []);

  // 2. All Unique Tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    NEWS_ARTICLES.forEach((art) => art.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  // 3. Trending Articles (sorted by views descending)
  const trendingArticles = useMemo(() => {
    return [...NEWS_ARTICLES].sort((a, b) => b.views - a.views);
  }, []);

  // 4. Filter Articles based on Category, Search Query & Tag
  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((art) => {
      // Filter Category
      if (selectedCategory !== "Tất cả" && art.category !== selectedCategory) {
        return false;
      }

      // Filter Tag
      if (activeTag && !art.tags.includes(activeTag)) {
        return false;
      }

      // Filter Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inTitle = art.title.toLowerCase().includes(query);
        const inExcerpt = art.excerpt.toLowerCase().includes(query);
        const inCategory = art.category.toLowerCase().includes(query);
        const inTags = art.tags.some((t) => t.toLowerCase().includes(query));
        return inTitle || inExcerpt || inCategory || inTags;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, activeTag]);

  return (
    <section className={styles.sectionNewsGrid}>
      <div className={styles.newsContainer}>
        {/* Featured Spotlight Card (Show if no search query & category is 'Tất cả') */}
        {selectedCategory === "Tất cả" && !searchQuery && !activeTag && (
          <NewsFeaturedSpotlight article={featuredArticle} />
        )}

        {/* Main Content Layout: Left Grid + Right Sidebar */}
        <div className={styles.mainContentLayout}>
          
          {/* Left Column: Articles Grid */}
          <div>
            {filteredArticles.length > 0 ? (
              <motion.div className={styles.articlesGrid} layout>
                <AnimatePresence mode="popLayout">
                  {filteredArticles.map((article) => (
                    <motion.div
                      key={article.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                      className="h-full flex flex-col"
                    >
                      <article className={styles.articleCard}>
                        {/* Card Cover Image */}
                        <div className={styles.cardCoverWrapper}>
                          <span className={styles.cardCategoryBadge}>{article.category}</span>
                          <Image
                            src={article.coverImage}
                            alt={article.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 33vw"
                            className={styles.cardCoverImg}
                          />
                        </div>

                        {/* Card Body */}
                        <div className={styles.cardBody}>
                          <div className={styles.cardMetaRow}>
                            <span>{article.publishedAt}</span>
                            <span>⏱ {article.readTime}</span>
                          </div>

                          <Link href={`/news/${article.slug}`} className="no-underline">
                            <h3 className={styles.cardTitle}>{article.title}</h3>
                          </Link>

                          <p className={styles.cardExcerpt}>{article.excerpt}</p>

                          {/* Tags */}
                          <div className={styles.cardTagsRow}>
                            {article.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className={styles.tagItem}>
                                #{tag}
                              </span>
                            ))}
                          </div>

                          {/* Card Footer */}
                          <div className={styles.cardFooter}>
                            <span style={{ fontSize: "11px", color: "#64748B" }}>
                              👁 {formatNumber(article.views)}
                            </span>

                            <Link href={`/news/${article.slug}`} className={styles.cardLinkBtn}>
                              <span>Đọc tiếp</span>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </article>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* Empty State */
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🔍</div>
                <h3 className={styles.emptyTitle}>Không tìm thấy bài viết phù hợp</h3>
                <p className={styles.emptyDesc}>
                  Thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc để xem toàn bộ danh mục bài viết.
                </p>
                <button
                  onClick={() => {
                    onResetFilters();
                    setActiveTag(null);
                  }}
                  className={styles.resetBtn}
                >
                  Xóa bộ lọc & Tìm lại
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <NewsSidebar
            trendingArticles={trendingArticles}
            tags={allTags}
            activeTag={activeTag}
            onSelectTag={setActiveTag}
          />
        </div>
      </div>
    </section>
  );
}
