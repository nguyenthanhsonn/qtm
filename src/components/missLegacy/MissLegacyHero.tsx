"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import styles from "./MissLegacyHero.module.scss";

const PILLARS = [
  { name: "VĂN HÓA", desc: "Di sản & Bản sắc" },
  { name: "TRI THỨC", desc: "Giáo dục & Đào tạo" },
  { name: "SÁNG TẠO", desc: "Nghệ thuật & Truyền thông" },
  { name: "CÔNG NGHỆ", desc: "AI & Chuyển đổi số" },
  { name: "CỘNG ĐỒNG", desc: "Trách nhiệm xã hội" },
];

const FEATURES = [
  {
    title: "TÔN VINH VẺ ĐẸP VIỆT",
    desc: "Tôn vinh vẻ đẹp trí tuệ, bản lĩnh và tâm hồn của người phụ nữ Việt.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M12 2C9 7 4 9 4 14a8 8 0 0 0 16 0c0-5-5-7-8-12z" />
        <path d="M12 22a8 8 0 0 0 8-8c0-3-2-5-5-8" />
      </svg>
    ),
  },
  {
    title: "LAN TỎA VĂN HÓA VIỆT",
    desc: "Quảng bá di sản, văn hóa và hình ảnh Việt Nam đến bạn bè quốc tế.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "ĐÀO TẠO TOÀN DIỆN",
    desc: "Trang bị kiến thức, kỹ năng và bản lĩnh để trở thành Đại sứ văn hóa.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "VÌ CỘNG ĐỒNG",
    desc: "Đồng hành cùng các hoạt động xã hội và phát triển bền vững.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.15 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

export default function MissLegacyHero({
  onOpenModal,
}: {
  onOpenModal: (title: string) => void;
}) {
  return (
    <section className={styles.sectionHero} id="hero">
      {/* Background Lighting & Radial Overlay */}
      <div className={styles.heroBgGlow} aria-hidden="true" />

      <div className={styles.heroContentWrapper}>
        {/* Top Eyebrow Tag Row */}
        <motion.div
          className={styles.topEyebrowRow}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: cubicEase }}
        >
          <div className={styles.eyebrowNumBox}>
            <div className={styles.eyebrowNumBar} />
          </div>
          <span className={styles.eyebrowText}>DỰ ÁN TIÊU BIỂU CỦA QTM</span>
        </motion.div>

        {/* Main 2-Column Grid (Left Text & Right Queens Visual) */}
        <div className={styles.mainGridSplit}>
          {/* Left Column Content */}
          <div className={styles.leftColContent}>
            {/* Title Line 1 (MISS + Lotus) & Line 2 (LEGACY) */}
            <motion.div
              className={styles.titleWrap}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: cubicEase }}
            >
              <div className={styles.titleLine1}>
                <span className={styles.missText}>MISS</span>
                {/* Emerald & Gold Lotus Symbol SVG */}
                <svg className={styles.lotusIcon} viewBox="0 0 100 80" fill="none">
                  <circle cx="50" cy="40" r="35" fill="rgba(6, 35, 22, 0.6)" filter="blur(6px)" />
                  <path
                    d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
                    fill="url(#emeraldGoldLotusGrad)"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M50 20 C53 35 65 42 78 45 C67 55 53 58 50 68 C47 58 33 55 22 45 C35 42 47 35 50 20 Z"
                    fill="url(#innerEmeraldGrad)"
                    opacity="0.85"
                  />
                  <defs>
                    <linearGradient id="emeraldGoldLotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF5D0" />
                      <stop offset="45%" stopColor="#D4AF37" />
                      <stop offset="80%" stopColor="#0D5C3A" />
                      <stop offset="100%" stopColor="#042316" />
                    </linearGradient>
                    <linearGradient id="innerEmeraldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38CFC8" />
                      <stop offset="100%" stopColor="#063222" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className={styles.legacyText}>LEGACY</span>
            </motion.div>

            {/* Subtitle */}
            <motion.h2
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: cubicEase }}
            >
              GÌN GIỮ HỒN VIỆT &nbsp;|&nbsp; TỎA SÁNG TOÀN CẦU
            </motion.h2>

            {/* Quote Block */}
            <motion.div
              className={styles.quoteBlock}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: cubicEase }}
            >
              <span className={styles.quoteMark}>“</span>
              <p className={styles.quoteText}>
                Miss Legacy là hành trình tìm kiếm và đào tạo những người phụ nữ trẻ
                sở hữu trí tuệ, bản lĩnh và trái tim nhân ái, trở thành Đại sứ Tinh hoa
                Sắc Việt – gìn giữ, phát huy và lan tỏa những giá trị văn hóa dân tộc
                trong kỷ nguyên số.
              </p>
              <span className={styles.quoteMark}>”</span>
            </motion.div>

            {/* 5 Horizontal Pillars Row with Vertical Dividers */}
            <motion.div
              className={styles.pillarsRow}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4, ease: cubicEase }}
            >
              {PILLARS.map((p, idx) => (
                <React.Fragment key={p.name}>
                  <div className={styles.pillarItem}>
                    <span className={styles.pillarName}>{p.name}</span>
                    <span className={styles.pillarDesc}>{p.desc}</span>
                  </div>
                  {idx < PILLARS.length - 1 && <div className={styles.pillarDivider} />}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Right Column Visual (3 Miss Legacy Queens Photo) */}
          <motion.div
            className={styles.rightQueensCol}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: cubicEase }}
          >
            <div className={styles.queensFrame}>
              <Image
                src="/miss-legacy-queens-emerald-bg.png"
                alt="Miss Legacy Queens"
                width={700}
                height={700}
                className={styles.queensImg}
                priority
              />
              <div className={styles.queensGlowRing} />
            </div>
          </motion.div>
        </div>

        {/* Bottom Glassmorphism Bar Ribbon */}
        <motion.div
          className={styles.bottomRibbonBar}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.4, ease: cubicEase }}
        >
          {/* 4 Feature Columns */}
          <div className={styles.featuresGrid}>
            {FEATURES.map((feat) => (
              <div key={feat.title} className={styles.featureColItem}>
                <div className={styles.iconBox}>{feat.icon}</div>
                <div className={styles.featureTextGroup}>
                  <h3 className={styles.colTitle}>{feat.title}</h3>
                  <p className={styles.colDesc}>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Action CTA Column */}
          <div className={styles.ctaBoxRight}>
            <span className={styles.ctaLabelTag}>✦ KHÁM PHÁ HÀNH TRÌNH MISS LEGACY</span>
            <button
              type="button"
              className={styles.btnGoldCta}
              onClick={() => onOpenModal("Tư vấn giải pháp dự án Miss Legacy")}
            >
              <span>Khám phá website Miss Legacy</span>
              <span className={styles.btnArrow}>→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
