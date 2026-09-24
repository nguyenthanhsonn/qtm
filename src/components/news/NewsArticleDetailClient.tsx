"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "motion/react";
import styles from "@/scss/news/NewsDetail.module.scss";
import gridStyles from "@/scss/news/NewsGrid.module.scss";
import { NEWS_ARTICLES } from "@/data/newsData";
import type { NewsArticle } from "@/types/news";
import ContactButton from "@/uiux/btn_contact";
import { formatNumber } from "@/lib/utils";

interface NewsArticleDetailClientProps {
  article: NewsArticle;
}

export default function NewsArticleDetailClient({ article }: NewsArticleDetailClientProps) {
  // Reading scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Related articles
  const relatedArticles = NEWS_ARTICLES.filter(
    (a) => a.slug !== article.slug && (a.category === article.category || article.relatedSlugs?.includes(a.slug))
  ).slice(0, 2);

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <article className={styles.articleDetailRoot}>
      {/* Top Reading Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #2095AD 0%, #38CFC8 100%)",
          transformOrigin: "0%",
          zIndex: 1001,
          boxShadow: "0 0 10px rgba(56, 207, 200, 0.8)",
        }}
      />

      <div className={styles.articleContainer}>
        {/* Breadcrumbs */}
        <motion.nav
          className={styles.breadcrumbs}
          aria-label="Breadcrumb"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4 }}
        >
          <Link href="/">Trang chủ</Link>
          <span className={styles.separator}>/</span>
          <Link href="/news">Tin tức & Insights</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{article.title}</span>
        </motion.nav>

        {/* Article Header */}
        <motion.header
          className={styles.headerSection}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <span className={styles.categoryTag}>{article.category}</span>
          <h1 className={styles.articleTitle}>{article.title}</h1>

          <div className={styles.authorMetaRow}>
            <div className={styles.statsMeta}>
              <span>📅 {article.publishedAt}</span>
              <span>⏱ {article.readTime}</span>
              <span>👁 {formatNumber(article.views)} lượt xem</span>
            </div>
          </div>
        </motion.header>

        {/* Cover Image */}
        <motion.div
          className={styles.coverWrapper}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="(max-width: 960px) 100vw, 960px"
            priority
            className={styles.coverImg}
          />
        </motion.div>

        {/* Key Highlights Box */}
        {article.highlights && article.highlights.length > 0 && (
          <motion.div
            className={styles.highlightsBox}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.title}>
              <span>✦</span> Tóm tắt nội dung trọng tâm (Key Takeaways)
            </div>
            <ul>
              {article.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Main Body Content */}
        <motion.div
          className={styles.articleBody}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Consulting CTA Banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            margin: "4rem 0",
            padding: "2.5rem 2rem",
            borderRadius: "20px",
            background: "linear-gradient(135deg, rgba(10, 22, 40, 0.95), rgba(13, 31, 60, 0.95))",
            border: "1px solid rgba(56, 207, 200, 0.4)",
            textAlign: "center",
            boxShadow: "0 16px 48px rgba(56, 207, 200, 0.15)",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#FFFFFF", marginBottom: "0.75rem" }}>
            Tư vấn Giải pháp Tổ chức Sự kiện & MediaTech Ứng dụng AI
          </h3>
          <p style={{ fontSize: "14px", color: "#94A3B8", maxWidth: "600px", margin: "0 auto 1.5rem" }}>
            QTM MediaTech sẵn sàng đồng hành cùng doanh nghiệp xây dựng kịch bản sự kiện ấn tượng, tối ưu chi phí vận hành và nâng tầm thương hiệu.
          </p>
          <Link href="/contact" style={{ display: "inline-block", textDecoration: "none" }}>
            <ContactButton />
          </Link>
        </motion.div>

        {/* Article Footer & Tags */}
        <footer className={styles.footerBar}>
          <div className={styles.tagsGroup}>
            <span style={{ fontSize: "13px", color: "#94A3B8", fontWeight: "600", marginRight: "8px" }}>
              Tags:
            </span>
            {article.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>

          <Link href="/news" className={styles.backToListBtn}>
            ← Quay lại danh sách tin tức
          </Link>
        </footer>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <motion.section
            className={styles.relatedSection}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className={styles.title}>BÀI VIẾT LIÊN QUAN</h2>
            <div className={gridStyles.articlesGrid}>
              {relatedArticles.map((rel) => (
                <div key={rel.id} className={gridStyles.articleCard}>
                  <div className={gridStyles.cardCoverWrapper}>
                    <span className={gridStyles.cardCategoryBadge}>{rel.category}</span>
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className={gridStyles.cardCoverImg}
                    />
                  </div>
                  <div className={gridStyles.cardBody}>
                    <div className={gridStyles.cardMetaRow}>
                      <span>{rel.publishedAt}</span>
                      <span>⏱ {rel.readTime}</span>
                    </div>
                    <Link href={`/news/${rel.slug}`} className="no-underline">
                      <h3 className={gridStyles.cardTitle}>{rel.title}</h3>
                    </Link>
                    <p className={gridStyles.cardExcerpt}>{rel.excerpt}</p>
                    <div className={gridStyles.cardFooter}>
                      <Link href={`/news/${rel.slug}`} className={gridStyles.cardLinkBtn}>
                        <span>Đọc tiếp →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </article>
  );
}
