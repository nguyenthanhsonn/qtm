"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import styles from "./ProjectDetailModal.module.scss";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  image: string;
  metrics: { val: string; lbl: string }[];
  challenge: string;
  solution: string;
  impact: string;
}

export default function ProjectDetailModal({
  project,
  onClose,
  onOpenContact,
}: {
  project: ProjectData | null;
  onClose: () => void;
  onOpenContact: (title: string) => void;
}) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className={styles.modalOverlay} onClick={onClose}>
        <motion.div
          className={styles.modalDialog}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Close Button */}
          <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            ✕
          </button>

          {/* Modal Header */}
          <div className={styles.modalHeader}>
            <span className={styles.categoryBadge}>{project.category}</span>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.clientText}>Khách hàng / Đối tác: <strong>{project.client}</strong></p>
          </div>

          {/* Cover Image */}
          <div className={styles.coverImgBox}>
            <Image
              src={project.image}
              alt={project.title}
              width={900}
              height={300}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          {/* 3 Metric Cards */}
          <div className={styles.metricsGrid}>
            {project.metrics.map((m, idx) => (
              <div key={idx} className={styles.metricCard}>
                <span className={styles.val}>{m.val}</span>
                <span className={styles.lbl}>{m.lbl}</span>
              </div>
            ))}
          </div>

          {/* Body Content */}
          <div className={styles.sectionBody}>
            <div className={styles.blockBox}>
              <h3 className={styles.blockTitle}>🎯 Bài toán & Thách thức</h3>
              <p className={styles.blockText}>{project.challenge}</p>
            </div>

            <div className={styles.blockBox}>
              <h3 className={styles.blockTitle}>🚀 Giải pháp thực thi từ QTM</h3>
              <p className={styles.blockText}>{project.solution}</p>
            </div>

            <div className={styles.blockBox}>
              <h3 className={styles.blockTitle}>💎 Giá trị & Tác động tạo ra</h3>
              <p className={styles.blockText}>{project.impact}</p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className={styles.modalFooter}>
            <span className={styles.footerText}>Bạn muốn triển khai dự án tương tự?</span>
            <button
              type="button"
              className={styles.ctaBtn}
              onClick={() => {
                onClose();
                onOpenContact(`Tư vấn dự án: ${project.title}`);
              }}
            >
              Liên hệ tư vấn dự án này →
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
