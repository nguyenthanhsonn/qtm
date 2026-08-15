"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import RoyalCrownIcon from "./RoyalCrownIcon";
import styles from "@/scss/missLagecy/MissLegacyPartners.module.scss";

const viewport = { once: true, amount: 0.2 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

export default function MissLegacyPartners() {
  return (
    <section className={styles.sectionPartners} id="partners">
      {/* Top Right Watermark Emblem */}
      <div className={styles.topRightEmblem}>
        <RoyalCrownIcon className={styles.topRightLotusSvg} gradId="partnersTopCrownGrad" glowId="partnersTopCrownGlow" />
        <span className={styles.topRightBrand}>MISS LEGACY</span>
        <span className={styles.topRightTagline}>TINH HOA SẮC VIỆT</span>
      </div>

      <div className={styles.partnersContentWrapper}>
        {/* Header Block */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.1, ease: cubicEase }}
        >
          {/* Eyebrow */}
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowDash}>—</span>
            <span className={styles.eyebrowText}>ĐƠN VỊ ĐỒNG HÀNH</span>
          </div>

          {/* Title */}
          <h2 className={styles.sectionTitle}>
            <span>Đơn vị</span> <span className={styles.titleHighlightGold}>đồng hành</span>
          </h2>

          <div className={styles.titleLotusDivider}>
            <div className={styles.dividerLineLeft} />
            <RoyalCrownIcon className={styles.dividerLotusIcon} gradId="partnersDivCrownGrad" glowId="partnersDivCrownGlow" />
            <div className={styles.dividerLineRight} />
          </div>

          <h3 className={styles.sponsorSubtitle}>ĐƠN VỊ BẢO TRỢ TRUYỀN THÔNG</h3>

          <p className={styles.subtitleDesc}>
            Để bảo đảm tính uy tín và sức lan tỏa của chương trình, Miss Legacy nhận được sự
            đồng hành của các cơ quan báo chí và truyền thông.
          </p>
        </motion.div>

        {/* 2 Large Media Partner Cards Grid (Equal Compact Size) */}
        <div className={styles.partnersGrid2}>
          {/* Card 1: Hiệp hội An ninh mạng Quốc gia (NCA) Image */}
          <motion.div
            className={styles.partnerGlassCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.25, ease: cubicEase }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className={styles.cardCornerTL} />
            <div className={styles.cardCornerTR} />
            <div className={styles.cardCornerBL} />
            <div className={styles.cardCornerBR} />

            <div className={styles.logoImageWrap}>
              <Image
                src="/images/logo_nca.png"
                alt="Hiệp hội An ninh mạng Quốc gia (NCA)"
                width={420}
                height={140}
                className={styles.partnerLogoImg}
                priority
              />
            </div>
          </motion.div>

          {/* Card 2: Báo Phụ Nữ Việt Nam Image */}
          <motion.div
            className={styles.partnerGlassCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.35, ease: cubicEase }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className={styles.cardCornerTL} />
            <div className={styles.cardCornerTR} />
            <div className={styles.cardCornerBL} />
            <div className={styles.cardCornerBR} />

            <div className={styles.logoImageWrap}>
              <Image
                src="https://res.cloudinary.com/s3qilvce/image/upload/v1786450683/pnvn_logo_2025.svg"
                alt="Báo Phụ Nữ Việt Nam"
                width={420}
                height={140}
                className={styles.partnerLogoImg}
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Appreciation Banner */}
        <motion.div
          className={styles.thankYouBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.45, ease: cubicEase }}
        >
          <svg className={styles.laurelIconLeft} viewBox="0 0 60 40" fill="none">
            <path
              d="M10 35 C15 25 25 15 45 5 M15 30 C22 22 30 15 50 10"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <p className={styles.thankYouText}>
            Trân trọng cảm ơn sự đồng hành và ủng hộ của các cơ quan báo chí và truyền thông.
          </p>

          <svg className={styles.laurelIconRight} viewBox="0 0 60 40" fill="none">
            <path
              d="M50 35 C45 25 35 15 15 5 M45 30 C38 22 30 15 10 10"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
