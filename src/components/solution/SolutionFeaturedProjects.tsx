"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/scss/solution/SolutionFeaturedProjects.module.scss";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";
import { PROJECTS_DATA } from "@/data/projectsData";

const projectsData = PROJECTS_DATA.map((p, idx) => ({
  id: p.id,
  num: String(idx + 1).padStart(2, "0"),
  category: p.category,
  title: p.title,
  client: p.client,
  desc: p.summary,
  imageSrc: p.image,
  highlights: [
    ...(p.metrics?.map((m) => `${m.val} ${m.lbl}`) || []),
    ...(p.startDate ? [`Thời gian: ${p.startDate}`] : []),
  ].slice(0, 3),
}));

const viewport = { once: true, amount: 0.15 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SolutionFeaturedProjects() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="featured-projects" className={`section ${styles.sectionSolProj}`}>
      <ParticleField />

      <div className={`section__content ${styles.solProjContent}`}>
        {/* ── 1. Header (Centered & Single Line) ─────────────────────────────────── */}
        <motion.div
          className={styles.sectionTopHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className={styles.eyebrowTag}>
            <span className={styles.tagDash}>—</span>
            <span className={styles.tagText}>PROVEN PORTFOLIO // QTM_PROJECTS</span>
          </div>

          <h2 className={styles.mainTitleHead}>
            DỰ ÁN <span className={styles.titleHighlightCyan}>TIÊU BIỂU</span>
          </h2>

          <div className={styles.titleUnderlineAccent} />

          <p className={styles.mainSubtitleDesc}>
            Những chiến dịch truyền thông công nghệ thực chiến tạo nên dấu ấn bứt phá cho các thương hiệu dẫn đầu.
          </p>
        </motion.div>

        {/* ── 2. Buttery-Smooth CSS Sticky Stacking Container ─────────────────── */}
        <div className={styles.stickyStackList}>
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className={styles.stickyStackCardItem}
              style={{
                top: `calc(110px + ${idx * 24}px)`,
                zIndex: idx + 1,
              }}
            >
              <div className={styles.cardInternalGrid}>
                {/* Left Col: Photo Image */}
                <div className={styles.cardPhotoCol}>
                  <div className={styles.photoFrame}>
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      width={600}
                      height={400}
                      className={styles.projectPhotoImg}
                      priority
                    />
                    <div className={styles.photoOverlay} />
                    <div className={styles.clientTagBadge}>
                      <span className={styles.clientTagLabel}>Khách hàng:</span>
                      <span className={styles.clientTagVal}>{project.client}</span>
                    </div>
                  </div>
                </div>

                {/* Right Col: Details */}
                <div className={styles.cardDetailsCol}>
                  <div className={styles.cardTopRow}>
                    <span className={styles.categoryPill}>// {project.category}</span>
                    <span className={styles.numberBadge}>{project.num}</span>
                  </div>

                  <h3 className={styles.projectTitleText}>{project.title}</h3>
                  <p className={styles.projectDescText}>{project.desc}</p>

                  <div className={styles.highlightsBox}>
                    <span className={styles.hlHeading}>ĐIỂM NỔI BẬT:</span>
                    <ul className={styles.hlList}>
                      {project.highlights.map((hl, i) => (
                        <li key={i} className={styles.hlItem}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardCtaRow}>
                    <Link href={`/projects/${project.id}`} className={styles.cardCtaLink}>
                      <span>Xem chi tiết dự án</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 3. Bottom All Projects Action Button ───────────────────────────── */}
        <motion.div
          className={styles.solProjFooterAction}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
        >
          <Link href="/projects" className={styles.solProjAllBtn}>
            <span>XEM TẤT CẢ DỰ ÁN</span>
            <span className={styles.btnArrow}>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
