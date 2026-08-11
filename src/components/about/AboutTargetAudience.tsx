"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "@/scss/about_us/AboutTargetAudience.module.scss";
import type { TargetColumn } from "@/types/about";

const targetColumns: TargetColumn[] = [
  {
    id: "state-owned",
    title: "DOANH NGHIỆP NHÀ NƯỚC",
    badgeClass: styles.colBadgeBlue,
    desc: "Đồng hành cùng các tập đoàn truyền thông chính sách, tổ chức sự kiện và chuyển đổi số.",
    logos: [
      {
        name: "Viettel",
        logoSrc: "/logo/logo-moi-cua-viettel-1610030805425937362871.jpg",
      },
      {
        name: "VNPT",
        logoSrc: "/logo/logo-vnpt-4.png",
      },
      {
        name: "PV GAS",
        logoSrc: "/logo/f269038fa4534045b59925e7d5e023e1_M.jpg",
      },
      {
        name: "BIDV",
        logoSrc: "/logo/logo-bidv-20220426071253.jpg",
      },
      {
        name: "Agribank",
        logoSrc: "/logo/Logo-Agribank-V.webp",
      },
      {
        name: "VietinBank",
        logoSrc: "/logo/Logo-VietinBank-CTG-Te.webp",
      },
      {
        name: "MobiFone",
        logoSrc: "/logo/logo-mobifone-inkythuatso-01-02-08-58-34.jpg",
      },
      {
        name: "Vietnam Airlines",
        logoSrc: "/logo/Vietnam_Airlines_logo.svg.webp",
      },
    ],
  },
  {
    id: "fdi",
    title: "DOANH NGHIỆP FDI",
    badgeClass: styles.colBadgeGreen,
    desc: "Đối tác tin cậy của các tập đoàn quốc tế tại Việt Nam trong xây dựng thương hiệu, phát triển trải nghiệm KH.",
    logos: [
      {
        name: "Samsung",
        logoSrc: "/logo/Logo-samsung.jpg",
      },
      {
        name: "LG",
        logoSrc: "/logo/lg-logo-2014.webp",
      },
      {
        name: "Canon",
        logoSrc: "/logo/logo_01.png",
      },
      {
        name: "Toyota",
        logoSrc: "/logo/logo-Toyota.jpg",
      },
      {
        name: "Honda",
        logoSrc: "/logo/Honda.svg.webp",
      },
      {
        name: "Panasonic",
        logoSrc: "/logo/panasonic-logo.webp",
      },
      {
        name: "Bosch",
        logoSrc: "/logo/Bosch-logo.svg.webp",
      },
      {
        name: "Intel",
        logoSrc: "/logo/Intel_logo_2023.svg.webp",
      },
    ],
  },
  {
    id: "fmcg",
    title: "FMCG & RETAIL",
    badgeClass: styles.colBadgeOrange,
    desc: "Đồng hành xây dựng các chiến dịch truyền thông kích hoạt thương hiệu hàng đầu.",
    logos: [
      {
        name: "TH True Milk",
        logoSrc: "/logo/Logo_th_group.png",
      },
      {
        name: "Vinamilk",
        logoSrc: "/logo/Logo-Vinamilk.jpg",
      },
      {
        name: "Meiji",
        logoSrc: "/logo/Meiji_logo.svg.webp",
      },
      {
        name: "Masan",
        logoSrc: "/logo/logo-masan-group2-compressed.jpg",
      },
      {
        name: "Pepsico",
        logoSrc: "/logo/Pepsi_logo_2008.svg.webp",
      },
      {
        name: "CocaCola",
        logoSrc: "/logo/images.png",
      },
      {
        name: "Nestlé",
        logoSrc: "/logo/logo-nestle-1.jpg",
      },
      {
        name: "P&G",
        logoSrc: "/logo/procter-and-gamble-logo.webp",
      },
    ],
  },
  {
    id: "sme",
    title: "DOANH NGHIỆP SME",
    badgeClass: styles.colBadgePurple,
    desc: "Hỗ trợ doanh nghiệp tăng trưởng bằng các giải pháp truyền thông tối ưu chi phí.",
    smeFeatures: [
      "Chuẩn hóa & Tự động hóa",
      "1000+ SME Đồng hành",
      "Startup & Scale-up",
      "Doanh nghiệp địa phương",
      "Tối ưu chi phí Marketing",
      "Tư vấn giải pháp 1:1",
    ],
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutTargetAudience() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="target-audience" className={`section ${styles.sectionTargetAudience}`}>
      <div className={`section__content ${styles.targetAudContent}`}>
        {/* Title Header */}
        <motion.h2
          className={styles.targetAudTitle}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          KHÁCH HÀNG <span className="title-highlight-mint">MỤC TIÊU</span>
        </motion.h2>

        <motion.p
          className={styles.targetAudSubtitle}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          QTM đồng hành cùng đa dạng loại hình doanh nghiệp, thiết lập các giải pháp truyền thông công nghệ chuyên biệt.
        </motion.p>

        {/* 4 Vertical Column Cards */}
        <motion.div
          className={styles.targetAudColumnsGrid}
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
          {targetColumns.map((col) => (
            <motion.div
              key={col.id}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: easeOut }}
              className={styles.targetColCard}
            >
              <div className={`${styles.colBadge} ${col.badgeClass}`}>
                <span className={styles.badgeDot} />
                <span className={styles.badgeTitle}>{col.title}</span>
              </div>

              <p className={styles.colDesc}>{col.desc}</p>

              {col.logos ? (
                <div className={styles.colLogoGrid}>
                  {col.logos.map((logo, idx) => (
                    <div key={`${logo.name}-${idx}`} className={styles.logoBoxMini} title={logo.name}>
                      {logo.logoSrc ? (
                        <Image
                          src={logo.logoSrc}
                          alt={logo.name}
                          width={120}
                          height={40}
                          className={styles.logoImg}
                          style={{ objectFit: "contain" }}
                        />
                      ) : (
                        <div className={styles.logoSvgWrap}>
                          {logo.iconSvg}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.colFeaturesList}>
                  {col.smeFeatures?.map((feat) => (
                    <div key={feat} className={styles.smeFeatChip}>
                      {feat}
                    </div>
                  ))}
                </div>
              )}

              <button type="button" className={styles.colActionBtn}>
                <span>Xem thêm</span>
                <span>→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
