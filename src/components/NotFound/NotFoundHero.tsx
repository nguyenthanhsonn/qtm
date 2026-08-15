"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import TechBackground from "@/components/TechBackground/TechBackground";
import TypewriterText from "@/uiux/Typewriter_text";
import ContactButton from "@/uiux/btn_contact";
import type { NotFoundHeroProps } from "@/types/components";
import styles from "@/scss/notfound/NotFoundHero.module.scss";

export default function NotFoundHero({
  errorCode = "404",
  badgeText = "ERROR // PAGE_NOT_FOUND",
  description = "Đường dẫn bạn đang truy cập không tồn tại, đã bị xóa hoặc tạm thời không khả dụng trong hệ thống QTM MediaTech.",
  homeButtonText = "VỀ TRANG CHỦ",
}: NotFoundHeroProps) {
  return (
    <TechBackground>
      <div className={styles.notFoundHeroRoot}>
        <motion.div
          className={styles.cardContainer}
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Cyber Corner Markers */}
          <div className={styles.cornerTL} aria-hidden="true" />
          <div className={styles.cornerTR} aria-hidden="true" />
          <div className={styles.cornerBL} aria-hidden="true" />
          <div className={styles.cornerBR} aria-hidden="true" />

          {/* Status Badge */}
          <motion.div
            className={styles.statusBadge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className={styles.statusDot} />
            <span>{badgeText}</span>
          </motion.div>

          {/* Large Error Code */}
          <motion.div
            className={styles.errorCodeBlock}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className={styles.errorCodeNumber}>{errorCode}</h1>
          </motion.div>

          {/* Typewriter Subtitle */}
          <motion.div
            className={styles.typewriterRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypewriterText
              text="Trang bạn tìm không tồn tại"
              highlightText="không tồn tại"
              speed={80}
              deleteSpeed={40}
              pauseDuration={3000}
              loop={true}
              className={styles.typewriterWrapper}
              textClassName={styles.typewriterText}
              highlightClassName={styles.typewriterHighlight}
              cursorClassName={styles.typewriterCursor}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className={styles.descriptionText}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {description}
          </motion.p>

          {/* Action Navigation */}
          <motion.div
            className={styles.actionsRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/" className={styles.homeLinkWrapper} aria-label={homeButtonText}>
              <ContactButton text={homeButtonText} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </TechBackground>
  );
}
