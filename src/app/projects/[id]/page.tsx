"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import AboutBackground from "@/components/about/AboutBackground";
import ContactModal from "@/components/about/ContactModal";
import { getProjectById, PROJECTS_DATA } from "@/data/projectsData";
import styles from "@/scss/project/projectDetail.module.scss";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = typeof params?.id === "string" ? params.id : "";
  const project = getProjectById(projectId);

  const [contactModalState, setContactModalState] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: "",
  });

  const handleOpenContact = (title: string) => {
    setContactModalState({ isOpen: true, title });
  };

  const handleCloseContact = () => {
    setContactModalState({ isOpen: false, title: "" });
  };

  if (!project) {
    return (
      <main className={styles.detailPageRoot}>
        <AboutBackground />
        <div className={styles.detailContainer} style={{ textAlign: "center", paddingTop: "5rem" }}>
          <h2>Dự án không tồn tại hoặc đã được di chuyển</h2>
          <Link href="/projects" className={styles.backBtn} style={{ margin: "2rem auto 0" }}>
            ← Quay lại danh sách dự án
          </Link>
        </div>
      </main>
    );
  }

  const relatedProjects = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className={styles.detailPageRoot}>
      {/* Cyber Particle Background */}
      <AboutBackground />

      <div className={styles.detailContainer}>
        {/* Top Back Navigation Bar */}
        <motion.div
          className={styles.backNavRow}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/projects" className={styles.backBtn}>
            ← Quay lại danh sách dự án
          </Link>
          <span className={styles.categoryPill}>{project.category}</span>
        </motion.div>

        {/* Header Title Block */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className={styles.mainTitle}>{project.title}</h1>
          <p className={styles.metaSubText}>
            Đơn vị chủ trì & Đối tác: <strong>{project.client}</strong>
            {project.startDate && ` | Khởi động: ${project.startDate}`}
          </p>
        </motion.div>

        {/* Cover Image Banner */}
        <motion.div
          className={styles.coverBox}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            priority
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div
          className={styles.metricsGrid}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {project.metrics.map((m, idx) => (
            <div key={idx} className={styles.metricCard}>
              <span className={styles.val}>{m.val}</span>
              <span className={styles.lbl}>{m.lbl}</span>
            </div>
          ))}
        </motion.div>

        {/* Detailed Story Sections */}
        <div className={styles.contentBody}>
          {/* Challenge Block */}
          <motion.div
            className={styles.storyBlock}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.blockHeading}>🎯 Bài toán & Thách thức thực tiễn</h2>
            <p className={styles.blockParagraph}>{project.challenge}</p>
          </motion.div>

          {/* Solution Block */}
          <motion.div
            className={styles.storyBlock}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className={styles.blockHeading}>🚀 Giải pháp thực thi từ QTM</h2>
            <p className={styles.blockParagraph}>{project.solution}</p>

            {project.speakers && project.speakers.length > 0 && (
              <div style={{ marginTop: "1rem" }}>
                <strong style={{ color: "#38CFC8", fontSize: "0.9rem" }}>Diễn giả & Bậc thầy tri thức đồng hành:</strong>
                <div className={styles.speakersBox}>
                  {project.speakers.map((sp, i) => (
                    <span key={i} className={styles.speakerChip}>
                      ✦ {sp}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Impact Block */}
          <motion.div
            className={styles.storyBlock}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={styles.blockHeading}>💎 Giá trị & Tác động xã hội tạo ra</h2>
            <p className={styles.blockParagraph}>{project.impact}</p>
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          className={styles.ctaBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className={styles.ctaTitle}>Bạn muốn khởi chạy chiến dịch tương tự?</h3>
            <p className={styles.ctaDesc}>Liên hệ ngay với QTM để nhận tư vấn giải pháp chiến lược và công nghệ tối ưu.</p>
          </div>
          <button
            type="button"
            className={styles.ctaBtn}
            onClick={() => handleOpenContact(`Tư vấn chiến dịch: ${project.title}`)}
          >
            Tư vấn giải pháp ngay →
          </button>
        </motion.div>
      </div>

      {/* Project Consulting Modal */}
      <ContactModal
        isOpen={contactModalState.isOpen}
        onClose={handleCloseContact}
        contextTitle={contactModalState.title || "TƯ VẤN DỰ ÁN QTM"}
      />
    </main>
  );
}
