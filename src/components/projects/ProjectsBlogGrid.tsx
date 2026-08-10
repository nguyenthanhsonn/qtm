"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/scss/project/ProjectsBlogGrid.module.scss";
import { PROJECTS_DATA, ProjectItem } from "@/data/projectsData";

const viewport = { once: true, amount: 0.15 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;
const ITEMS_PER_PAGE = 6;

export default function ProjectsBlogGrid({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const gridSectionRef = useRef<HTMLDivElement>(null);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredProjects =
    selectedCategory === "Tất cả"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (gridSectionRef.current) {
      gridSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className={styles.sectionGrid} ref={gridSectionRef}>
      <div className={styles.gridContainer}>
        {/* 3-Column Projects Showcase Grid */}
        <div className={styles.cardsGrid3}>
          {paginatedProjects.map((p, idx) => (
            <Link key={p.id} href={`/projects/${p.id}`} className={styles.cardLink}>
              <motion.div
                className={styles.blogCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: cubicEase }}
              >
                <div className={styles.cardImgBox}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={220}
                    style={{ objectFit: "cover" }}
                  />
                  <span className={styles.catBadge}>{p.category}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTopText}>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <p className={styles.cardSummary}>{p.summary}</p>
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.clientName}>{p.client}</span>
                    <span className={styles.readBtn}>Xem bài viết →</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Cyber Sci-Fi Pagination Controls */}
        {totalPages > 1 && (
          <div className={styles.paginationWrapper}>
            <button
              type="button"
              className={`${styles.pageNavBtn} ${currentPage === 1 ? styles.disabledNav : ""}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Trước
            </button>

            <div className={styles.pageNumbersRow}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  className={`${styles.pageBtn} ${pageNum === currentPage ? styles.pageBtnActive : ""}`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <button
              type="button"
              className={`${styles.pageNavBtn} ${currentPage === totalPages ? styles.disabledNav : ""}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Sau →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
