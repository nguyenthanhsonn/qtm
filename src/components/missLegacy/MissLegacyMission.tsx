"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "./MissLegacyMission.module.scss";

const CARDS = [
  {
    title: "DI SẢN",
    desc: "Di sản chỉ thực sự sống khi hiện diện trong cuộc sống hiện đại.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6M9 14h6" />
      </svg>
    ),
  },
  {
    title: "CÔNG NGHỆ",
    desc: "Công nghệ không thay thế văn hóa. Công nghệ giúp văn hóa được lan tỏa.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "CON NGƯỜI",
    desc: "Mỗi dự án là một cơ hội tạo giá trị bền vững cho cộng đồng.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
];

const SATELLITE_NODES = [
  {
    id: "sangtao",
    title: "SÁNG TẠO",
    desc: "Kể lại di sản bằng ngôn ngữ hiện đại",
    posClass: styles.posTopLeft,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M9 18h6M10 22h4M15 9A5 5 0 0 0 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74z" />
      </svg>
    ),
  },
  {
    id: "congnghe",
    title: "CÔNG NGHỆ",
    desc: "Ứng dụng công nghệ mở rộng giá trị",
    posClass: styles.posTopRight,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="15" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    id: "lantoa",
    title: "LAN TỎA",
    desc: "Tạo tác động tích cực cho xã hội",
    posClass: styles.posBottomRight,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "congdong",
    title: "CỘNG ĐỒNG",
    desc: "Kết nối và lan tỏa đến mọi thế hệ",
    posClass: styles.posBottomLeft,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  {
    name: "Di sản",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6M9 14h6" />
      </svg>
    ),
  },
  {
    name: "Gìn giữ",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M12 2C9 7 4 9 4 14a8 8 0 0 0 16 0c0-5-5-7-8-12z" />
      </svg>
    ),
  },
  {
    name: "Sáng tạo",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M9 18h6M10 22h4M15 9A5 5 0 0 0 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74z" />
      </svg>
    ),
  },
  {
    name: "Ứng dụng AI",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
      </svg>
    ),
  },
  {
    name: "Lan tỏa",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    name: "Tác động xã hội",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.15 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

export default function MissLegacyMission() {
  return (
    <section className={styles.sectionMission} id="mission">
      <div className={styles.missionContentWrapper}>
        {/* ── 1. Main 2-Column Grid ────────────────────────────────────────── */}
        <div className={styles.mainSplitGrid}>
          {/* Left Text & Cards Column */}
          <div className={styles.leftColContent}>
            {/* Eyebrow Tag */}
            <motion.div
              className={styles.eyebrowRow}
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: cubicEase }}
            >
              <span className={styles.eyebrowDash}>—</span>
              <span className={styles.eyebrowText}>SỨ MỆNH & NIỀM TIN</span>
            </motion.div>

            {/* Title Block */}
            <motion.div
              className={styles.titleWrap}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.75, delay: 0.1, ease: cubicEase }}
            >
              <h2 className={styles.sectionTitle}>
                <span>Sứ mệnh</span>
                <span className={styles.titleLine2}>
                  và <span className={styles.titleHighlightGold}>niềm tin</span>
                  <svg className={styles.titleLotusIcon} viewBox="0 0 100 80" fill="none">
                    <path
                      d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
                      fill="url(#titleLotusGrad)"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M50 20 C53 35 65 42 78 45 C67 55 53 58 50 68 C47 58 33 55 22 45 C35 42 47 35 50 20 Z"
                      fill="#FFF5D0"
                      opacity="0.6"
                    />
                    <defs>
                      <linearGradient id="titleLotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFF5D0" />
                        <stop offset="50%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#AA7C11" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>
            </motion.div>

            {/* Paragraph Paragraph */}
            <motion.div
              className={styles.missionTextGroup}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.75, delay: 0.2, ease: cubicEase }}
            >
              <p className={styles.missionParagraph}>
                Chúng tôi tin rằng di sản sẽ tiếp tục sống mãi khi được kể lại bằng ngôn ngữ của thời đại.
              </p>
              <p className={styles.missionParagraph}>
                Văn hóa Việt Nam sẽ vươn xa khi được kết nối cùng sáng tạo, công nghệ và sức mạnh cộng đồng.
              </p>
              <p className={styles.missionParagraphBold}>
                Đó là cách chúng tôi kiến tạo những giá trị bền vững.
              </p>
            </motion.div>

            {/* 3 Bottom Cards */}
            <div className={styles.cardsRow3}>
              {CARDS.map((card, idx) => (
                <motion.div
                  key={card.title}
                  className={styles.cardItem3}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, ease: cubicEase }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <div className={styles.cardHeaderRow}>
                    <div className={styles.cardIconBox}>{card.icon}</div>
                    <span className={styles.cardTitle}>{card.title}</span>
                  </div>
                  <p className={styles.cardDesc}>{card.desc}</p>
                  <div className={styles.cardArrowRow}>
                    <span className={styles.cardArrowBtn}>→</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Circular Interactive Diagram (Sơ đồ hoa sen 5 phần) */}
          <motion.div
            className={styles.rightDiagramCol}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.85, delay: 0.25, ease: cubicEase }}
          >
            <div className={styles.diagramStage}>
              {/* Rotating Orbital SVG Rings */}
              <svg viewBox="0 0 500 500" className={styles.orbitalSvg}>
                {/* Outer Dashed Orbit Ring */}
                <circle
                  cx="250"
                  cy="250"
                  r="190"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  strokeDasharray="8 8"
                  opacity="0.45"
                  fill="none"
                  className={styles.rotatingDashRing}
                />
                {/* Inner Solid Orbit Ring */}
                <circle
                  cx="250"
                  cy="250"
                  r="135"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  opacity="0.35"
                  fill="none"
                />
                {/* Connecting Diagonal Radial Lines */}
                <line x1="115" y1="115" x2="385" y2="385" stroke="#D4AF37" strokeWidth="1" opacity="0.25" />
                <line x1="385" y1="115" x2="115" y2="385" stroke="#D4AF37" strokeWidth="1" opacity="0.25" />
              </svg>

              {/* Central Core Lotus Node */}
              <motion.div
                className={styles.centerNode}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.centerLotusIconBox}>
                  <svg className={styles.centerLotusSvg} viewBox="0 0 100 80" fill="none">
                    <path
                      d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
                      fill="url(#centerLotusGrad)"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                    />
                    <defs>
                      <linearGradient id="centerLotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFF5D0" />
                        <stop offset="100%" stopColor="#D4AF37" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className={styles.centerTitle}>VĂN HÓA</h3>
                <p className={styles.centerDesc}>Gìn giữ bản sắc dân tộc</p>
              </motion.div>

              {/* 4 Satellite Circular Glass Nodes */}
              {SATELLITE_NODES.map((node) => (
                <motion.div
                  key={node.id}
                  className={`${styles.satelliteNode} ${node.posClass}`}
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.satelliteIconBox}>{node.icon}</div>
                  <h4 className={styles.satelliteTitle}>{node.title}</h4>
                  <p className={styles.satelliteDesc}>{node.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── 2. Bottom Timeline Process Flow Bar ─────────────────────────── */}
        <motion.div
          className={styles.bottomTimelineBar}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.5, ease: cubicEase }}
        >
          <div className={styles.timelineLineTrack} />
          {PROCESS_STEPS.map((step, idx) => (
            <React.Fragment key={step.name}>
              <div className={styles.timelineStepNode}>
                <div className={styles.stepIconBox}>{step.icon}</div>
                <span className={styles.stepNameLabel}>{step.name}</span>
              </div>
              {idx < PROCESS_STEPS.length - 1 && (
                <div className={styles.stepConnectorDot} />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
