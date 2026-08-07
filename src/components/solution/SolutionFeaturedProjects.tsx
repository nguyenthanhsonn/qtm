"use client";

import React, { useState } from "react";
import styles from "./SolutionFeaturedProjects.module.scss";
import { motion } from "motion/react";
import SolutionContactModal from "./SolutionContactModal";

type FeaturedProject = {
  id: string;
  category: string;
  numberTag: string;
  title: string;
  client: string;
  desc: string;
  highlights: string[];
  graphicSvg: React.ReactNode;
};

const featuredProjects: FeaturedProject[] = [
  {
    id: "viettel-event",
    category: "EVENT & CONFERENCE",
    numberTag: "/01",
    title: "Hội Nghị Khách Hàng Toàn Quốc Viettel 2026",
    client: "Viettel Group",
    desc: "Tổ chức hội nghị thượng đỉnh toàn quốc tích hợp công nghệ Check-in AI, AR/3D Spatial Audio và báo cáo sentiment real-time.",
    highlights: [
      "Check-in AI & Nhận diện khuôn mặt tự động",
      "Trình diễn hiệu ứng sân khấu 3D Spatial Audio & Hologram",
      "Hệ thống báo cáo phân tích Sentiment & Tương tác real-time",
      "Đo lường chỉ số ROI & hiệu quả truyền thông toàn quốc",
    ],
    graphicSvg: (
      <svg viewBox="0 0 500 300" fill="none" className={styles.projectSvg}>
        <rect width="500" height="300" rx="12" fill="#0B1C33" />
        <circle cx="250" cy="150" r="110" fill="url(#p1Grad)" opacity="0.35" />
        <path d="M60 260 L180 130 L320 130 L440 260 Z" fill="rgba(56, 207, 200, 0.2)" />
        <circle cx="250" cy="120" r="32" fill="#EA0029" opacity="0.85" />
        <text x="25" y="38" fill="#38CFC8" fontFamily="var(--font-geist-mono)" fontSize="13" fontWeight="700">// VIETTEL_SUMMIT_2026</text>
        <defs>
          <radialGradient id="p1Grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 150) scale(110)">
            <stop stopColor="#EA0029" />
            <stop offset="1" stopColor="#38CFC8" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "honda-ooh",
    category: "OUTDOOR MEDIA",
    numberTag: "/02",
    title: "Chiến Dịch Billboard LED Tương Tác Honda",
    client: "Honda Vietnam",
    desc: "Xây dựng chuỗi màn hình LED tương tác 3D Naked-Eye tại các nút giao thông trọng điểm Hà Nội & TP.HCM.",
    highlights: [
      "Kỹ thuật hiển thị 3D Naked-Eye không dùng kính",
      "Tích hợp cảm biến đếm lưu lượng xe & nhiệt độ thời tiết",
      "Phủ sóng 5.000.000+ Lượt tiếp cận trực tiếp",
      "Gia tăng +35% Mức độ nhận diện thương hiệu",
    ],
    graphicSvg: (
      <svg viewBox="0 0 500 300" fill="none" className={styles.projectSvg}>
        <rect width="500" height="300" rx="12" fill="#0B1C33" />
        <circle cx="250" cy="150" r="120" fill="url(#p2Grad)" opacity="0.4" />
        <rect x="80" y="70" width="340" height="160" rx="8" fill="#050C1A" stroke="#38CFC8" strokeWidth="2" />
        <path d="M120 180 Q 250 90 380 180" stroke="#FF6B00" strokeWidth="4" fill="none" />
        <text x="25" y="38" fill="#38CFC8" fontFamily="var(--font-geist-mono)" fontSize="13" fontWeight="700">// HONDA_LED_3D_OOH</text>
        <defs>
          <radialGradient id="p2Grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 150) scale(120)">
            <stop stopColor="#38CFC8" />
            <stop offset="1" stopColor="#FF6B00" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "techcombank-digital",
    category: "DIGITAL MARKETING",
    numberTag: "/03",
    title: "Chiến Dịch Digital Growth Techcombank",
    client: "Techcombank",
    desc: "Chiến dịch tăng trưởng người dùng App ngân hàng số kết hợp Performance Marketing & Kịch bản AI Chatbot.",
    highlights: [
      "Tự động phân khúc 1.200.000+ Khách hàng mục tiêu",
      "Chiến dịch Performance Ads đa kênh Meta, Google, TikTok",
      "Tích hợp AI Bot tư vấn giải pháp tài chính 24/7",
      "Đạt +120% Mục tiêu tăng trưởng User mới",
    ],
    graphicSvg: (
      <svg viewBox="0 0 500 300" fill="none" className={styles.projectSvg}>
        <rect width="500" height="300" rx="12" fill="#0B1C33" />
        <circle cx="250" cy="150" r="110" fill="url(#p3Grad)" opacity="0.35" />
        <path d="M100 220 L200 140 L300 170 L400 80" stroke="#00D4FF" strokeWidth="4" fill="none" />
        <circle cx="400" cy="80" r="8" fill="#EA0029" />
        <text x="25" y="38" fill="#38CFC8" fontFamily="var(--font-geist-mono)" fontSize="13" fontWeight="700">// TECHCOMBANK_DIGITAL_GROWTH</text>
        <defs>
          <radialGradient id="p3Grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 150) scale(110)">
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#EA0029" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.15 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

export default function SolutionFeaturedProjects() {
  const [modalState, setModalState] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: "",
  });

  return (
    <>
      <section id="featured-projects" className={styles.sectionSolProj}>
        <div className={styles.solProjContent}>
          <motion.div
            className={styles.solProjTagPill}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: cubicEase }}
          >
            <span className={styles.tagDot}>•</span>
            <span>PROVEN PORTFOLIO // QTM_PROJECTS</span>
          </motion.div>

          <motion.h2
            className={styles.solProjTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.15, ease: cubicEase }}
          >
            DỰ ÁN <span className="title-highlight-teal">TIÊU BIỂU</span>
          </motion.h2>

          <motion.p
            className={styles.solProjSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.3, ease: cubicEase }}
          >
            Những chiến dịch truyền thông công nghệ thực chiến tạo nên dấu ấn bứt phá cho các thương hiệu dẫn đầu.
          </motion.p>

          {/* Normal Blog Container - Clean Vertical Flow */}
          <div className={styles.projectsBlogContainer}>
            {featuredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                className={styles.blogRowCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: cubicEase }}
              >
                <div className={styles.rowAccentIndicator} />
                
                <div className={styles.rowHeaderLine}>
                  <span className={styles.categoryLabel}>// {proj.category}</span>
                  <span className={styles.numberTag}>{proj.numberTag}</span>
                </div>

                <h3 className={styles.rowMainTitle}>{proj.title}</h3>

                <div className={styles.rowBodyGrid}>
                  <div className={styles.leftMediaCol}>
                    <div className={styles.imageStageBox}>{proj.graphicSvg}</div>
                    <span className={styles.clientTag}>Khách hàng: {proj.client}</span>
                    <p className={styles.summaryDesc}>{proj.desc}</p>
                  </div>

                  <div className={styles.rightContentCol}>
                    <ul className={styles.highlightsList}>
                      {proj.highlights.map((item, i) => (
                        <li key={i} className={styles.highlightItem}>
                          <span className={styles.plusSymbol}>+</span>
                          <span className={styles.itemText}>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => setModalState({ isOpen: true, title: `Tư vấn dự án tương tự: ${proj.title}` })}
                      className={styles.rowCtaBtn}
                    >
                      <span>Xem chi tiết dự án</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.solProjFooterAction}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.5, ease: cubicEase }}
          >
            <button
              type="button"
              onClick={() => setModalState({ isOpen: true, title: "Liên hệ tư vấn tất cả dự án" })}
              className={styles.solProjAllBtn}
            >
              <span>XEM TẤT CẢ DỰ ÁN</span>
              <span> →</span>
            </button>
          </motion.div>
        </div>
      </section>

      <SolutionContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, title: "" })}
        contextTitle={modalState.title}
      />
    </>
  );
}
