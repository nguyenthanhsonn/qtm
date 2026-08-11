"use client";

import { PartnerItem } from "@/types/home";
import React from "react";
import Image from "next/image";
import styles from "@/scss/home/HomePartnersSection.module.scss";
import { motion, useReducedMotion } from "motion/react";

// Danh sách KHÁCH HÀNG (Clients) - Sử dụng Logo thương hiệu chính thức
const clientsList: PartnerItem[] = [
  {
    id: "agribank",
    name: "Agribank",
    category: "Banking & Finance",
    logoSrc: "/logo/Logo-Agribank-V.webp",
  },
  {
    id: "viettel",
    name: "Viettel Group",
    category: "Telecommunications",
    logoSrc: "/logo/logo-moi-cua-viettel-1610030805425937362871.jpg",
  },
  {
    id: "vnpt",
    name: "VNPT Group",
    category: "Telecommunications",
    logoSrc: "/logo/logo-vnpt-4.png",
  },
  {
    id: "pvn",
    name: "Petrovietnam (PVN)",
    category: "Energy & Oil",
    logoSrc: "/logo/logo-mo-i-cho-kho-i-da-u-mo-i-20220101093239.png",
  },
  {
    id: "pvgas",
    name: "PV GAS",
    category: "Energy & Gas",
    logoSrc: "/logo/f269038fa4534045b59925e7d5e023e1_M.jpg",
  },
  {
    id: "evn",
    name: "EVN - Tập đoàn Điện lực",
    category: "Energy & Utility",
    logoSrc: "/logo/Logo-EVN-H-1.webp",
  },
  {
    id: "bidv",
    name: "BIDV",
    category: "Banking & Finance",
    logoSrc: "/logo/logo-bidv-20220426071253.jpg",
  },
  {
    id: "vietinbank",
    name: "VietinBank",
    category: "Banking & Finance",
    logoSrc: "/logo/Logo-VietinBank-CTG-Te.webp",
  },
  {
    id: "mobifone",
    name: "MobiFone",
    category: "Telecommunications",
    logoSrc: "/logo/logo-mobifone-inkythuatso-01-02-08-58-34.jpg",
  },
  {
    id: "vinhomes",
    name: "Vinhomes",
    category: "Real Estate & Urban",
    logoSrc: "/logo/Logo-Vinhomes.webp",
  },
  {
    id: "sun-group",
    name: "Sun Group",
    category: "Tourism & Real Estate",
    logoSrc: "/logo/Log-Sun-group.png.webp",
  },
  {
    id: "damcamau",
    name: "Đạm Cà Mau (PVCFC)",
    category: "PVCFC Group",
    logoSrc: "/logo/0027_dcm_logo_fa-01.jpg",
  },
];

// Danh sách ĐỐI TÁC TRUYỀN THÔNG (Media & Strategic Partners) - Sử dụng Logo chính thức
const mediaPartnersList: PartnerItem[] = [
  {
    id: "vov",
    name: "VOV - Đài Tiếng nói VN",
    category: "National Radio",
    logoSrc: "/logo/Logo_VOV.svg.webp",
  },
  {
    id: "vtc",
    name: "VTC - Truyền hình KTS",
    category: "Digital Television",
    logoSrc: "/logo/VTC_official_logo.svg.webp",
  },
  {
    id: "nhandan",
    name: "Báo Nhân Dân",
    category: "National Press",
    logoSrc: "/logo/Logo-NhanDan.png",
  },
  {
    id: "vnexpress",
    name: "VnExpress",
    category: "Digital News",
    logoSrc: "/logo/VnExpress_logo.png",
  },
  {
    id: "tuoitre",
    name: "Báo Tuổi Trẻ",
    category: "National Press",
    logoSrc: "/logo/tuoi-tre-logo.webp",
  },
  {
    id: "thanhnien",
    name: "Báo Thanh Niên",
    category: "National Press",
    logoSrc: "/logo/thanh-nien-logo.webp",
  },
  {
    id: "laodong",
    name: "Báo Lao Động",
    category: "National Press",
    logoSrc: "/logo/bao-lao-dong.png",
  },
  {
    id: "dantri",
    name: "Báo Dân Trí",
    category: "Digital News",
    logoSrc: "/logo/Dan_Tri_logo.svg.webp",
  },
  {
    id: "vietnamnet",
    name: "VietNamNet",
    category: "Digital News",
    logoSrc: "/logo/Vietnamnet.webp",
  },
  {
    id: "qdnd",
    name: "Báo Quân Đội Nhân Dân",
    category: "National Press",
    logoSrc: "/logo/bao-quan-doi-nhan-dan.webp",
  },
  {
    id: "vtcnews",
    name: "VTC News",
    category: "Digital Press",
    logoSrc: "/logo/VTC_News_logo.svg.webp",
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function HomePartnersSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="strategic-partners" className={`section ${styles.sectionHomePartners}`}>
      {/* Header */}
      <div className={`section__content ${styles.homePartnersContent}`}>
        <motion.div
          className={styles.homePartnersHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className={styles.homePartnersSubtitle}>TRUSTED BY INDUSTRY LEADERS</span>
          <h2 className={styles.homePartnersTitle}>
            KHÁCH HÀNG & <span className={styles.titleHighlight}>ĐỐI TÁC</span>
          </h2>
          <p className={styles.homePartnersDesc}>
            Tự hào đồng hành cùng các tập đoàn hàng đầu và hệ thống cơ quan truyền thông báo chí uy tín tại Việt Nam.
          </p>
        </motion.div>
      </div>

      {/* ─── PHẦN 1: KHÁCH HÀNG TIÊU BIỂU ─── */}
      <div className={styles.homePartnersCategoryBlock}> 
        <div className={styles.homePartnersCategoryBadge}>
          <span className={styles.categoryBadgeDot} />
          <span className={styles.categoryBadgeText}>KHÁCH HÀNG TIÊU BIỂU</span>
        </div>

        <div className={styles.homePartnersMarqueeWrapper} aria-label="Danh sách logo khách hàng tiêu biểu">
          <div className={`${styles.marqueeTrack} ${styles.marqueeTrackLeft}`}>
            {[...clientsList, ...clientsList].map((p, idx) => (
              <div key={`client-${p.id}-${idx}`} className={styles.partnerCardWrap} title={p.name}>
                <div className={`${styles.partnerCard} ${p.logoSrc ? styles.partnerCardWhite : styles.partnerCardDark}`}>
                  <div className={styles.partnerCardInner}>
                    {p.logoSrc ? (
                      <Image
                        src={p.logoSrc}
                        alt={p.name}
                        width={220}
                        height={70}
                        className={styles.partnerImgFull}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    ) : (
                      <div className={styles.partnerCardLogo}>{p.svgIcon}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PHẦN 2: ĐỐI TÁC TRUYỀN THÔNG & BÁO CHÍ ─── */}
      <div className={styles.homePartnersCategoryBlock}>
        <div className={styles.homePartnersCategoryBadge}>
          <span className={styles.categoryBadgeDot} />
          <span className={styles.categoryBadgeText}>ĐỐI TÁC TRUYỀN THÔNG & BÁO CHÍ</span>
        </div>

        <div className={styles.homePartnersMarqueeWrapper} aria-label="Danh sách logo đối tác truyền thông">
          <div className={`${styles.marqueeTrack} ${styles.marqueeTrackRight}`}>
            {[...mediaPartnersList, ...mediaPartnersList].map((p, idx) => (
              <div key={`partner-${p.id}-${idx}`} className={styles.partnerCardWrap} title={p.name}>
                <div className={`${styles.partnerCard} ${p.logoSrc ? styles.partnerCardWhite : styles.partnerCardDark}`}>
                  <div className={styles.partnerCardInner}>
                    {p.logoSrc ? (
                      <Image
                        src={p.logoSrc}
                        alt={p.name}
                        width={220}
                        height={70}
                        className={styles.partnerImgFull}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    ) : (
                      <div className={styles.partnerCardLogo}>{p.svgIcon}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
