"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Card3DTilt from "@/components/Card3DTilt";
import styles from "@/scss/about_us/AboutCommitments.module.scss";
import type { CommitmentItem } from "@/types/about";

const commitmentItems: CommitmentItem[] = [
  {
    id: "long-term",
    title: "ĐỒNG HÀNH DÀI HẠN",
    desc: "Không chỉ là nhà cung cấp, chúng tôi là đối tác tin cậy trên hành trình phát triển.",
    gradientClass: styles.iconGradTeal,
    iconSvg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "tailored-solution",
    title: "GIẢI PHÁP PHÙ HỢP VỚI MỤC TIÊU KINH DOANH",
    desc: "Mỗi giải pháp được thiết kế riêng, đáp ứng mục tiêu và đặc thù của từng doanh nghiệp.",
    gradientClass: styles.iconGradBlue,
    iconSvg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "transparent-process",
    title: "QUY TRÌNH MINH BẠCH",
    desc: "Minh bạch trong mọi quy trình, rõ ràng trong mọi cam kết, tin cậy trong mọi hành động.",
    gradientClass: styles.iconGradPurple,
    iconSvg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "measurable-roi",
    title: "HIỆU QUẢ CÓ THỂ ĐO LƯỜNG",
    desc: "Đo lường rõ ràng, tối ưu liên tục, đảm bảo hiệu quả thực tế cho khách hàng.",
    gradientClass: styles.iconGradDeepBlue,
    iconSvg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: "new-tech",
    title: "ỨNG DỤNG CÔNG NGHỆ MỚI",
    desc: "Luôn tiên phong ứng dụng AI, dữ liệu và công nghệ mới để mang lại giá trị vượt trội.",
    gradientClass: styles.iconGradCyan,
    iconSvg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
      </svg>
    ),
  },
  {
    id: "cost-optimization",
    title: "TỐI ƯU CHI PHÍ VÀ NGUỒN LỰC",
    desc: "Tối ưu nguồn lực và chi phí, giúp doanh nghiệp tăng trưởng bền vững và hiệu quả.",
    gradientClass: styles.iconGradGreen,
    iconSvg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <line x1="12" y1="6" x2="12" y2="18" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.15 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutCommitments() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="commitments" className={`section ${styles.sectionCommitments}`}>
      {/* Background decor */}
      <div className={styles.commitmentsBg} aria-hidden="true" />
      <div className={styles.commitmentsGlow} aria-hidden="true" />

      <div className={`section__content ${styles.commitmentsContent}`}>

        {/* ── 1. Top Section Header (Centered) ───────────────────────────────── */}
        <motion.div
          className={styles.sectionTopHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <h2 className={styles.commitmentsTitle}>CAM KẾT CỦA QTM</h2>
          <div className={styles.titleUnderlineAccent} />

          <div className={styles.subtitleGroup}>
            <p className={styles.subtitleWhite}>Chúng tôi không chỉ cung cấp dịch vụ.</p>
            <p className={styles.subtitleCyan}>
              Chúng tôi cam kết đồng hành cùng doanh nghiệp trên hành trình phát triển.
            </p>
          </div>
        </motion.div>
        
        {/* ── 2. Main Split Layout: Left 6 Cards & Right Image Graphic ───────── */}
        <div className={styles.commitmentsSplitLayout}>

          {/* ── CỘT TRÁI (~68% width): 6 Cards Grid (3x2) ────────────────────── */}
          <motion.div
            className={styles.leftContentBlock}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
          >
            {/* 6 Cards Grid (3 cols x 2 rows) */}
            <motion.div
              className={styles.commitmentsGrid3x2}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: 0.12 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {commitmentItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className={styles.gridItemWrapper}
                >
                  <Card3DTilt
                    className={styles.commitmentGlassCard}
                    maxTilt={4}
                    scale={1.01}
                    glareColor="rgba(79, 209, 232, 0.22)"
                    glareOpacity={0.2}
                  >
                    {/* Round Gradient Icon */}
                    <div className={`${styles.iconRoundCircle} ${item.gradientClass}`}>
                      {item.iconSvg}
                    </div>

                    {/* Title */}
                    <h3 className={styles.cardItemTitle}>{item.title}</h3>

                    {/* Short Underline Accent */}
                    <div className={styles.itemAccentLine} />

                    {/* Description */}
                    <p className={styles.cardItemDesc}>{item.desc}</p>
                  </Card3DTilt>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>


          {/* ── CỘT PHẢI (~32% width): Image Graphic Minh Họa ───────────────── */}
          <motion.div
            className={styles.rightImageBlock}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.75, delay: 0.15, ease: easeOut }}
          >
            <Card3DTilt
              className={styles.imageGlassFrame}
              maxTilt={5}
              scale={1.01}
              glareColor="rgba(56, 207, 200, 0.3)"
              glareOpacity={0.3}
            >
              {/* HUD Header */}
              <div className={styles.hudHeader}>
                <span className={styles.hudBadge}>QTM TRUST &amp; SECURITY</span>
                <span className={styles.hudLiveDot} />
              </div>

              {/* Graphic Image */}
              <div className={styles.imageWrap}>
                <Image
                  src="/about_us/img_commitment_shield.png"
                  alt="Biểu tượng cam kết và đối tác tin cậy QTM MediaTech"
                  width={520}
                  height={520}
                  className={styles.imgCover}
                  priority
                />
                <div className={styles.imageOverlay} />

                {/* Floating Badge */}
                <div className={styles.floatingBadgeOverlay}>
                  <div className={styles.badgePulseDot} />
                  <div className={styles.badgeTextWrap}>
                    <span className={styles.badgeTitle}>100% CAM KẾT HIỆU QUẢ</span>
                    <span className={styles.badgeSub}>Đối tác chiến lược tin cậy</span>
                  </div>
                </div>
              </div>
            </Card3DTilt>
          </motion.div>

        </div>{/* /commitmentsSplitLayout */}

      </div>
    </section>
  );
}
