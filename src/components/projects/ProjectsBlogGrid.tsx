"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsBlogGrid.module.scss";
import { PROJECTS_DATA, ProjectItem } from "@/data/projectsData";

const viewport = { once: true, amount: 0.15 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

export default function ProjectsBlogGrid({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  const filteredProjects =
    selectedCategory === "Tất cả"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const spotlightProject = PROJECTS_DATA[0];
  const gridProjects = filteredProjects.filter((p) => p.id !== spotlightProject.id);

  return (
    <section className={styles.sectionGrid}>
      <div className={styles.gridContainer}>
        {/* Spotlight Featured Hero Project (Shown on All or Culture category) */}
        {(selectedCategory === "Tất cả" || selectedCategory === "Chiến dịch Truyền thông") && (
          <Link href={`/projects/${spotlightProject.id}`} style={{ textDecoration: "none" }}>
            <motion.div
              className={styles.spotlightCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease: cubicEase }}
            >
              <div className={styles.spotlightImgBox}>
                <Image
                  src={spotlightProject.image}
                  alt={spotlightProject.title}
                  width={600}
                  height={350}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.spotlightTextCol}>
                <span className={styles.spotlightBadge}>✦ DỰ ÁN TIÊU BIỂU SPOTLIGHT</span>
                <h2 className={styles.spotlightTitle}>{spotlightProject.title}</h2>
                <p className={styles.spotlightDesc}>{spotlightProject.summary}</p>
                <div className={styles.metricsRow}>
                  {spotlightProject.metrics.map((m, idx) => (
                    <div key={idx} className={styles.metricItem}>
                      <span className={styles.val}>{m.val}</span>
                      <span className={styles.lbl}>{m.lbl}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.readMoreBtn}>
                  <span>Xem chi tiết</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          </Link>
        )}

        {/* 3-Column Projects Showcase Grid */}
        <div className={styles.cardsGrid3}>
          {gridProjects.map((p, idx) => (
            <Link key={p.id} href={`/projects/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
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
                    <span className={styles.readBtn}>Xem chi tiết →</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
