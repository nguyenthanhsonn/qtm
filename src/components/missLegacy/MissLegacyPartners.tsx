"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "./MissLegacyPartners.module.scss";

const viewport = { once: true, amount: 0.2 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

export default function MissLegacyPartners() {
  return (
    <section className={styles.sectionPartners} id="partners">
      <div className={styles.partnersContent}>
        {/* Title Group */}
        <motion.div
          className={styles.titleGroup}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.1, ease: cubicEase }}
        >
          <h2 className={styles.sectionTitle}>Đơn vị đồng hành</h2>
          <svg className={styles.lotusIcon} viewBox="0 0 100 80" fill="none">
            <path
              d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
              fill="#D4AF37"
            />
          </svg>
          <span className={styles.sponsorSubtitle}>ĐƠN VỊ BẢO TRỢ TRUYỀN THÔNG</span>
        </motion.div>

        <motion.p
          className={styles.descText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.2, ease: cubicEase }}
        >
          Để đảm bảo tính uy tín và sức lan tỏa của chương trình, Miss Legacy nhận được
          sự đồng hành của các cơ quan báo chí và truyền thông.
        </motion.p>

        {/* 2 Partner Cards Grid */}
        <div className={styles.partnersGrid2}>
          {/* Card 1: Tạp Chí An Ninh Mạng */}
          <motion.div
            className={styles.partnerCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.3, ease: cubicEase }}
          >
            <span className={styles.subHeader}>TẠP CHÍ</span>
            <div className={styles.mainLogoText}>
              AN NINH <span className={styles.redHighlight}>MẠNG</span>
            </div>
            <p className={styles.sloganText}>VÌ AN NINH TỔ QUỐC VÀ HẠNH PHÚC NHÂN DÂN</p>
          </motion.div>

          {/* Card 2: Báo Phụ Nữ Việt Nam */}
          <motion.div
            className={styles.partnerCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.4, ease: cubicEase }}
          >
            <span className={styles.subHeader}>BÁO</span>
            <div className={styles.mainLogoText}>
              Phụ nữ <span className={styles.redHighlight}>Việt Nam</span>
            </div>
            <p className={styles.sloganText}>CƠ QUAN TRUNG ƯƠNG HỘI LHPN VIỆT NAM</p>
          </motion.div>
        </div>

        {/* Bottom Thank You Note */}
        <motion.div
          className={styles.thankYouBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.5, ease: cubicEase }}
        >
          <span className={styles.wreathIcon}>🌿</span>
          <p className={styles.thankYouText}>
            Trân trọng cảm ơn sự đồng hành và ủng hộ của các cơ quan báo chí và truyền thông.
          </p>
          <span className={styles.wreathIcon}>🌿</span>
        </motion.div>
      </div>
    </section>
  );
}
