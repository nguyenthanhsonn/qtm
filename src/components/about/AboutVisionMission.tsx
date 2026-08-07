"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Card3DTilt from "@/components/Card3DTilt";
import styles from "./AboutVisionMission.module.scss";

const viewport = { once: true, amount: 0.15 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutVisionMission() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="vision-mission" className={`section ${styles.sectionAboutVm}`}>
      {/* Background decor */}
      <div className={styles.aboutVmBg} aria-hidden="true" />
      <div className={styles.aboutVmGlow} aria-hidden="true" />

      <div className={`section__content ${styles.aboutVmContent}`}>
        {/* Section Title */}
        <motion.div
          className={styles.titleHeaderGroup}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <motion.h2 className={styles.aboutVmTitle}>
            TẦM NHÌN &amp; <span className={styles.titleHighlight}>SỨ MỆNH</span>
          </motion.h2>
          <motion.p className={styles.aboutVmSubtitle}>
            Định hướng chiến lược dẫn dắt QTM trên hành trình dẫn đầu làn sóng truyền thông công nghệ tại Việt Nam.
          </motion.p>
        </motion.div>

        {/* ── ROW 1: TẦM NHÌN (Left: Block, Right: Image) ────────────────────── */}
        <motion.div
          className={styles.vmRowGrid}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
        >
          {/* Left Column: Vision Card */}
          <div className={styles.vmCardCol}>
            <Card3DTilt
              className={styles.vmLightCard}
              maxTilt={5}
              scale={1.01}
              glareColor="rgba(79, 209, 232, 0.25)"
              glareOpacity={0.25}
            >
              <div className={styles.vmCardHeader}>
                <div className={`${styles.iconCircle} ${styles.iconCircleBlue}`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4FD1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <div className={styles.titleGroup}>
                  <span className={styles.badgePillBlue}>ĐỊNH HƯỚNG DÀI HẠN</span>
                  <h3 className={styles.vmCardTitle}>TẦM NHÌN</h3>
                </div>
              </div>

              <h4 className={styles.vmCardHighlightSub}>
                Trở thành Strategic MediaTech Partner hàng đầu Việt Nam
              </h4>

              <p className={styles.vmCardText}>
                Trở thành Strategic MediaTech Partner hàng đầu Việt Nam, tiên phong ứng dụng AI, dữ liệu và công nghệ trong lĩnh vực truyền thông, sự kiện và xây dựng thương hiệu, đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số và phát triển bền vững.
              </p>

              {/* Vision Tags */}
              <div className={styles.vmTagsRow}>
                <span className={styles.tagItem}>Strategic Partner</span>
                <span className={styles.tagItem}>Pioneer in AI &amp; Data</span>
                <span className={styles.tagItem}>Sustainable Growth</span>
              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Vision Image */}
          <div className={styles.vmImageCol}>
            <Card3DTilt
              className={styles.vmImageFrame}
              maxTilt={5}
              scale={1.01}
              glareColor="rgba(79, 209, 232, 0.3)"
              glareOpacity={0.3}
            >
              <div className={styles.hudHeader}>
                <span className={styles.hudBadge}>QTM STRATEGIC VISION</span>
                <span className={styles.hudLiveDot} />
              </div>

              <div className={styles.imageWrap}>
                <Image
                  src="/about_us/img_vision.png"
                  alt="Tầm nhìn chiến lược QTM MediaTech"
                  width={600}
                  height={380}
                  className={styles.imgCover}
                  priority
                />
                <div className={styles.imageOverlay} />

                <div className={styles.imageBadgeOverlay}>
                  <span className={styles.badgeDot} />
                  <span className={styles.badgeLabel}>TẦM NHÌN STRATEGIC MEDIATECH</span>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </motion.div>

        {/* ── ROW 2: SỨ MỆNH (Left: Image, Right: Block for balanced layout) ────── */}
        <motion.div
          className={styles.vmRowGrid}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
        >
          {/* Left Column: Mission Image */}
          <div className={`${styles.vmImageCol} ${styles.orderMobile2}`}>
            <Card3DTilt
              className={styles.vmImageFrame}
              maxTilt={5}
              scale={1.01}
              glareColor="rgba(56, 207, 200, 0.3)"
              glareOpacity={0.3}
            >
              <div className={styles.hudHeader}>
                <span className={`${styles.hudBadge} ${styles.hudBadgeTeal}`}>QTM MISSION &amp; EXECUTION</span>
                <span className={`${styles.hudLiveDot} ${styles.hudLiveDotTeal}`} />
              </div>

              <div className={styles.imageWrap}>
                <Image
                  src="/about_us/img_mission.png"
                  alt="Sứ mệnh kiến tạo giá trị QTM MediaTech"
                  width={600}
                  height={380}
                  className={styles.imgCover}
                />
                <div className={styles.imageOverlay} />

                <div className={styles.imageBadgeOverlay}>
                  <span className={`${styles.badgeDot} ${styles.badgeDotTeal}`} />
                  <span className={styles.badgeLabel}>SỨ MỆNH KIẾN TẠO GIÁ TRỊ</span>
                </div>
              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Mission Card */}
          <div className={`${styles.vmCardCol} ${styles.orderMobile1}`}>
            <Card3DTilt
              className={styles.vmLightCard}
              maxTilt={5}
              scale={1.01}
              glareColor="rgba(56, 207, 200, 0.25)"
              glareOpacity={0.25}
            >
              <div className={styles.vmCardHeader}>
                <div className={`${styles.iconCircle} ${styles.iconCircleTeal}`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div className={styles.titleGroup}>
                  <span className={styles.badgePillTeal}>GIÁ TRỊ THỰC THI</span>
                  <h3 className={styles.vmCardTitle}>SỨ MỆNH</h3>
                </div>
              </div>

              <h4 className={`${styles.vmCardHighlightSub} ${styles.subTeal}`}>
                Kiến tạo giá trị bằng công nghệ, dữ liệu và sáng tạo
              </h4>

              <p className={styles.vmCardText}>
                Ứng dụng công nghệ, dữ liệu và tư duy sáng tạo để thiết kế những giải pháp truyền thông hiệu quả, giúp khách hàng gia tăng giá trị thương hiệu, tối ưu hiệu suất kinh doanh và tạo ra tác động tích cực cho cộng đồng.
              </p>

              {/* Mission Tags */}
              <div className={styles.vmTagsRow}>
                <span className={`${styles.tagItem} ${styles.tagTeal}`}>Gia tăng Thương hiệu</span>
                <span className={`${styles.tagItem} ${styles.tagTeal}`}>Tối ưu Hiệu suất</span>
                <span className={`${styles.tagItem} ${styles.tagTeal}`}>Tác động Cộng đồng</span>
              </div>
            </Card3DTilt>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
