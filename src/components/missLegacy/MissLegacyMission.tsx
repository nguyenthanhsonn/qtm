"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "./MissLegacyMission.module.scss";

const CARDS = [
  {
    title: "DI SẢN",
    desc: "Di sản chỉ thực sự sống khi hiện diện trong cuộc sống hiện đại.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6M9 14h6" />
      </svg>
    ),
  },
  {
    title: "CÔNG NGHỆ",
    desc: "Công nghệ không thay thế văn hóa. Công nghệ giúp văn hóa được lan tỏa.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  { icon: "🏛️", name: "Di sản" },
  { icon: "🪷", name: "Gìn giữ" },
  { icon: "💡", name: "Sáng tạo" },
  { icon: "⚙️", name: "Ứng dụng AI" },
  { icon: "🌐", name: "Lan tỏa" },
  { icon: "🤝", name: "Tác động xã hội" },
];

const viewport = { once: true, amount: 0.2 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

export default function MissLegacyMission() {
  return (
    <section className={styles.sectionMission} id="mission">
      <div className={styles.missionContent}>
        {/* 2-Column Main Split */}
        <div className={styles.mainSplitGrid}>
          {/* Left Text & Cards Column */}
          <div className={styles.leftTextCol}>
            <motion.div
              className={styles.titleWrap}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.1, ease: cubicEase }}
            >
              <h2 className={styles.sectionTitle}>Sứ mệnh và niềm tin</h2>
              <svg className={styles.lotusIcon} viewBox="0 0 100 80" fill="none">
                <path
                  d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
                  fill="url(#missionLotusGrad)"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                />
                <defs>
                  <linearGradient id="missionLotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF5D0" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.p
              className={styles.missionStatement}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.2, ease: cubicEase }}
            >
              Chúng tôi tin rằng di sản sẽ tiếp tục sống mãi khi được kể lại bằng
              ngôn ngữ của thời đại. <span className={styles.highlightGold}>Văn hóa Việt Nam</span> sẽ
              vươn xa khi được kết nối cùng sáng tạo, công nghệ và sức mạnh cộng đồng.
              Đó là cách chúng tôi kiến tạo những giá trị bền vững.
            </motion.p>

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
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>{card.icon}</div>
                    <span className={styles.cardTitle}>{card.title}</span>
                  </div>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Radar Circular Diagram */}
          <motion.div
            className={styles.rightDiagramCol}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.25, ease: cubicEase }}
          >
            <div className={styles.radarStage}>
              {/* Outer SVG Ring & Connection Lines */}
              <svg viewBox="0 0 400 400" className={styles.radarRing}>
                <circle cx="200" cy="200" r="160" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" fill="none" />
                <circle cx="200" cy="200" r="110" stroke="#D4AF37" strokeWidth="1" opacity="0.3" fill="none" />
                <line x1="200" y1="40" x2="200" y2="360" stroke="#D4AF37" strokeWidth="1" opacity="0.25" />
                <line x1="40" y1="200" x2="360" y2="200" stroke="#D4AF37" strokeWidth="1" opacity="0.25" />
              </svg>

              {/* Center Node */}
              <div className={styles.centerNode}>
                <span className={styles.centerTitle}>VĂN HÓA</span>
                <span className={styles.centerDesc}>Gìn giữ bản sắc dân tộc</span>
              </div>

              {/* 4 Satellite Nodes */}
              <div className={`${styles.satelliteNode} ${styles.nodeTop}`}>
                <span className={styles.nodeTitle}>SÁNG TẠO</span>
                <span className={styles.nodeDesc}>Kể lại di sản bằng ngôn ngữ hiện đại</span>
              </div>

              <div className={`${styles.satelliteNode} ${styles.nodeRight}`}>
                <span className={styles.nodeTitle}>CÔNG NGHỆ</span>
                <span className={styles.nodeDesc}>Ứng dụng công nghệ mở rộng giá trị</span>
              </div>

              <div className={`${styles.satelliteNode} ${styles.nodeBottom}`}>
                <span className={styles.nodeTitle}>CỘNG ĐỒNG</span>
                <span className={styles.nodeDesc}>Kết nối và lan tỏa đến mọi thế hệ</span>
              </div>

              <div className={`${styles.satelliteNode} ${styles.nodeLeft}`}>
                <span className={styles.nodeTitle}>LAN TỎA</span>
                <span className={styles.nodeDesc}>Tạo tác động tích cực cho xã hội</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Timeline Process Bar */}
        <motion.div
          className={styles.bottomTimelineBar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.5, ease: cubicEase }}
        >
          {PROCESS_STEPS.map((step, idx) => (
            <React.Fragment key={step.name}>
              <div className={styles.timelineStep}>
                <span className={styles.stepIcon}>{step.icon}</span>
                <span className={styles.stepName}>{step.name}</span>
              </div>
              {idx < PROCESS_STEPS.length - 1 && (
                <span className={styles.timelineArrow}>➔</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
