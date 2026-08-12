"use client";

import React from "react";
import Link from "next/link";
import styles from "@/scss/solution/SolutionFooterContact.module.scss";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SolutionFooterContact() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="solution-contact" className={`section ${styles.sectionSolContact}`}>
      <div className={styles.solContactBgOverlay} aria-hidden="true" />
      <div className={styles.solContactBgGrid} aria-hidden="true" />
      <ParticleField />

      <div className={`section__content ${styles.solContactContent}`}>
        {/* Header */}
        <motion.div
          className={styles.solContactHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          <span className={styles.solContactTagPill}>{"// "}CONNECT WITH QTM MEDIATECH</span>
          <h2 className={styles.solContactTitle}>
            LIÊN HỆ <span className="title-highlight-mint">TƯ VẤN GIẢI PHÁP</span>
          </h2>
          <p className={styles.solContactSubtitle}>
            Kết nối ngay với đội ngũ chuyên gia công nghệ truyền thông của QTM để nhận đề xuất chiến lược tối ưu nhất.
          </p>
        </motion.div>

        {/* 3-Column Glass Grid */}
        <motion.div
          className="sol-contact-grid"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Column 1: Hotline / Email / Address */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: easeOut }}>
            <div className="sol-contact-glass-card">
              <div className="card-top-icon">📞</div>
              <h3 className="card-heading">THÔNG TIN KẾT NỐI</h3>

              <div className="contact-detail-list">
                <div className="detail-item">
                  <span className="item-label">Hotline tư vấn 24/7</span>
                  <a href="tel:0988888888" className="item-val item-val--highlight">098.888.8888</a>
                </div>

                <div className="detail-item">
                  <span className="item-label">Email hỗ trợ</span>
                  <a href="mailto:contact@qtm.vn" className="item-val">contact@qtm.vn</a>
                </div>

                <div className="detail-item">
                  <span className="item-label">Trụ sở Hà Nội</span>
                  <span className="item-val">Tòa nhà QTM, Cầu Giấy, Hà Nội</span>
                </div>

                <div className="detail-item">
                  <span className="item-label">Văn phòng TP.HCM</span>
                  <span className="item-val">Tòa nhà QTM, Quận 1, TP. Hồ Chí Minh</span>
                </div>
              </div>

              <Link href="/contact" className="sol-contact-btn">
                <span>Gửi thông tin liên hệ</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* Column 2: QR Code & Map Preview */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: easeOut }}>
            <div className="sol-contact-glass-card">
              <div className="card-top-icon">📍</div>
              <h3 className="card-heading">MÃ QR &amp; BẢN ĐỒ KẾT NỐI</h3>

              <div className="qr-map-box">
                <div className="qr-container">
                  <svg viewBox="0 0 120 120" fill="none" className="qr-svg">
                    <rect width="120" height="120" rx="8" fill="#FFFFFF" />
                    <rect x="10" y="10" width="35" height="35" fill="#050C1A" />
                    <rect x="15" y="15" width="25" height="25" fill="#FFFFFF" />
                    <rect x="20" y="20" width="15" height="15" fill="#050C1A" />

                    <rect x="75" y="10" width="35" height="35" fill="#050C1A" />
                    <rect x="80" y="15" width="25" height="25" fill="#FFFFFF" />
                    <rect x="85" y="20" width="15" height="15" fill="#050C1A" />

                    <rect x="10" y="75" width="35" height="35" fill="#050C1A" />
                    <rect x="15" y="80" width="25" height="25" fill="#FFFFFF" />
                    <rect x="20" y="85" width="15" height="15" fill="#050C1A" />

                    <rect x="55" y="55" width="12" height="12" fill="#38CFC8" />
                    <rect x="75" y="55" width="15" height="10" fill="#050C1A" />
                    <rect x="55" y="75" width="18" height="18" fill="#050C1A" />
                    <rect x="80" y="80" width="30" height="30" fill="#050C1A" />
                  </svg>
                  <span className="qr-sub">Quét mã Zalo OA QTM</span>
                </div>

                <div className="mini-map-preview">
                  <svg viewBox="0 0 160 120" fill="none" className="map-svg">
                    <rect width="160" height="120" rx="8" fill="#0B1C33" />
                    <path d="M10 30 Q60 10 110 50 T150 90" stroke="rgba(56, 207, 200, 0.4)" strokeWidth="2" strokeDasharray="3 3" />
                    <circle cx="80" cy="55" r="8" fill="#38CFC8" />
                    <circle cx="80" cy="55" r="16" fill="rgba(56, 207, 200, 0.2)" />
                    <text x="50" y="95" fill="#CBD5E1" fontFamily="var(--font-geist-mono)" fontSize="10" fontWeight="700">HQ: Ha Noi &amp; HCMC</text>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Social Links */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: easeOut }}>
            <div className="sol-contact-glass-card">
              <div className="card-top-icon">🌐</div>
              <h3 className="card-heading">MẠNG XÃ HỘI &amp; KÊNH TRUYỀN THÔNG</h3>

              <div className="social-links-list">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-chip">
                  <span className="soc-icon">🌐</span>
                  <span className="soc-name">Facebook Fanpage</span>
                  <span className="soc-arrow">↗</span>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-chip">
                  <span className="soc-icon">💼</span>
                  <span className="soc-name">LinkedIn Corporate</span>
                  <span className="soc-arrow">↗</span>
                </a>

                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-chip">
                  <span className="soc-icon">▶️</span>
                  <span className="soc-name">YouTube Channel</span>
                  <span className="soc-arrow">↗</span>
                </a>

                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-chip">
                  <span className="soc-icon">🎵</span>
                  <span className="soc-name">TikTok Channel</span>
                  <span className="soc-arrow">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Brand Tagline Bar */}
        <motion.div
          className="sol-contact-tagline-bar"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.25, ease: easeOut }}
        >
          <span className="tagline-word">QUALITY</span>
          <span className="tagline-dot">•</span>
          <span className="tagline-word tagline-word--mint">TECHNOLOGY</span>
          <span className="tagline-dot">•</span>
          <span className="tagline-word">MINDSET</span>
        </motion.div>
      </div>
    </section>
  );
}
