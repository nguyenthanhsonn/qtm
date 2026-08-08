"use client";

import { PartnerItem } from "@/types/home";
import React from "react";
import styles from "@/scss/home/HomePartnersSection.module.scss";
import { motion, useReducedMotion } from "motion/react";

// Danh sách KHÁCH HÀNG (Clients) - Perfectly Centered SVG Artwork
const clientsList: PartnerItem[] = [
  {
    id: "pvgas",
    name: "PV GAS - PetroVietnam",
    category: "Energy & Gas",
    svgIcon: (
      <svg width="145" height="38" viewBox="0 0 145 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6C16 6 6 18 6 26C6 31.5 10.5 36 16 36C21.5 36 26 31.5 26 26C26 18 16 6 16 6Z" fill="#FF3B30" />
        <path d="M16 14C16 14 11 21 11 25C11 27.8 13.2 30 16 30C18.8 30 21 27.8 21 25C21 21 16 14 16 14Z" fill="#FFD700" />
        <text x="32" y="24" fill="#38CFC8" fontFamily="var(--font-heading)" fontSize="13" fontWeight="900" letterSpacing="0.05em">PETROVIETNAM</text>
        <text x="32" y="38" fill="#FF3B30" fontFamily="var(--font-heading)" fontSize="16" fontWeight="900" letterSpacing="0.08em">PV GAS</text>
      </svg>
    ),
  },
  {
    id: "mobifone",
    name: "MobiFone",
    category: "Telecom Leader",
    svgIcon: (
      <svg width="130" height="38" viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="34" textAnchor="middle" fill="#00D4FF" fontFamily="var(--font-heading)" fontSize="28" fontWeight="900" letterSpacing="0.02em">mobi<tspan fill="#FF3B30">fone</tspan></text>
      </svg>
    ),
  },
  {
    id: "vietcombank",
    name: "Vietcombank",
    category: "Banking & Finance",
    svgIcon: (
      <svg width="155" height="38" viewBox="0 0 155 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 24L18 8L30 24L18 40Z" fill="#34D399" />
        <text x="36" y="33" fill="#34D399" fontFamily="var(--font-heading)" fontSize="23" fontWeight="800">Vietcombank</text>
      </svg>
    ),
  },
  {
    id: "vietinbank",
    name: "VietinBank",
    category: "Banking & Finance",
    svgIcon: (
      <svg width="142" height="38" viewBox="0 0 142 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="24" r="12" fill="#00D4FF" />
        <path d="M10 24H26M18 16V32" stroke="#FF3B30" strokeWidth="4" strokeLinecap="round" />
        <text x="36" y="32" fill="#00D4FF" fontFamily="var(--font-heading)" fontSize="21" fontWeight="800">VietinBank</text>
      </svg>
    ),
  },
  {
    id: "bidv",
    name: "BIDV",
    category: "Banking & Finance",
    svgIcon: (
      <svg width="110" height="38" viewBox="0 0 110 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="28" height="28" rx="6" fill="#34D399" />
        <path d="M14 18L26 30M26 18L14 30" stroke="#FFD700" strokeWidth="3.5" strokeLinecap="round" />
        <text x="40" y="34" fill="#34D399" fontFamily="var(--font-heading)" fontSize="26" fontWeight="900" letterSpacing="0.05em">BIDV</text>
      </svg>
    ),
  },
  {
    id: "agribank",
    name: "Agribank",
    category: "Banking & Finance",
    svgIcon: (
      <svg width="150" height="38" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="30" height="32" rx="4" fill="#FF3B30" />
        <path d="M12 32V16L21 28L30 16V32" stroke="#FFD700" strokeWidth="3" strokeLinejoin="round" />
        <text x="42" y="32" fill="#FF3B30" fontFamily="var(--font-heading)" fontSize="20" fontWeight="900">AGRIBANK</text>
      </svg>
    ),
  },
  {
    id: "viettel",
    name: "Viettel Group",
    category: "Telecommunications",
    svgIcon: (
      <svg width="115" height="38" viewBox="0 0 115 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="34" textAnchor="middle" fill="#FF3B30" fontFamily="var(--font-heading)" fontSize="28" fontWeight="900" letterSpacing="0.04em">viettel</text>
      </svg>
    ),
  },
  {
    id: "vnpt",
    name: "VNPT Group",
    category: "Telecommunications",
    svgIcon: (
      <svg width="114" height="38" viewBox="0 0 114 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="24" r="14" fill="#00D4FF" />
        <path d="M10 24C10 18.5 13.5 15 18 15C22.5 15 26 18.5 26 24" stroke="#FFFFFF" strokeWidth="3" />
        <text x="38" y="34" fill="#00D4FF" fontFamily="var(--font-heading)" fontSize="25" fontWeight="900" letterSpacing="0.04em">VNPT</text>
      </svg>
    ),
  },
  {
    id: "pvn",
    name: "Petrovietnam (PVN)",
    category: "Energy & Oil",
    svgIcon: (
      <svg width="175" height="38" viewBox="0 0 175 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 36L14 8L22 36Z" fill="#FF3B30" />
        <path d="M14 16L22 36H6Z" fill="#00D4FF" />
        <text x="30" y="32" fill="#00D4FF" fontFamily="var(--font-heading)" fontSize="18" fontWeight="900">PETROVIETNAM</text>
      </svg>
    ),
  },
  {
    id: "evn",
    name: "EVN - Tập đoàn Điện lực",
    category: "Energy & Utility",
    svgIcon: (
      <svg width="104" height="38" viewBox="0 0 104 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="24" r="14" fill="#00D4FF" />
        <path d="M20 14L13 26H20L16 34L25 22H18L20 14Z" fill="#FF3B30" />
        <text x="38" y="34" fill="#00D4FF" fontFamily="var(--font-heading)" fontSize="26" fontWeight="900" letterSpacing="0.06em">EVN</text>
      </svg>
    ),
  },
  {
    id: "vinhomes",
    name: "Vinhomes",
    category: "Real Estate & Urban",
    svgIcon: (
      <svg width="146" height="38" viewBox="0 0 146 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 32L16 12L26 32H19L16 23L13 32H6Z" fill="#38CFC8" />
        <path d="M16 12L21 22H11L16 12Z" fill="#FFD700" />
        <text x="32" y="32" fill="#38CFC8" fontFamily="var(--font-heading)" fontSize="21" fontWeight="900">VINHOMES</text>
      </svg>
    ),
  },
  {
    id: "sun-group",
    name: "Sun Group",
    category: "Tourism & Real Estate",
    svgIcon: (
      <svg width="164" height="38" viewBox="0 0 164 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="24" r="12" fill="#FF3B30" />
        <text x="34" y="32" fill="#FF3B30" fontFamily="var(--font-heading)" fontSize="22" fontWeight="900" letterSpacing="0.04em">SUN GROUP</text>
      </svg>
    ),
  },
  {
    id: "damcamau",
    name: "Đạm Cà Mau",
    category: "PVCFC Group",
    svgIcon: (
      <svg width="150" height="38" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="24" r="14" fill="#34D399" />
        <path d="M13 24L18 16L23 24L18 32Z" fill="#FFD700" />
        <text x="38" y="26" fill="#34D399" fontFamily="var(--font-heading)" fontSize="17" fontWeight="900">ĐẠM CÀ MAU</text>
        <text x="38" y="39" fill="#FF3B30" fontFamily="var(--font-geist-mono)" fontSize="10" fontWeight="700">PVCFC</text>
      </svg>
    ),
  },
];

// Danh sách ĐỐI TÁC TRUYỀN THÔNG (Media & Strategic Partners) - Centered Artwork
const mediaPartnersList: PartnerItem[] = [
  {
    id: "vov",
    name: "VOV - Đài Tiếng nói VN",
    category: "National Radio",
    svgIcon: (
      <svg width="90" height="38" viewBox="0 0 90 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="36" textAnchor="middle" fill="#00D4FF" fontFamily="var(--font-heading)" fontSize="34" fontWeight="900" letterSpacing="0.04em">V<tspan fill="#FF3B30">O</tspan><tspan fill="#00D4FF">V</tspan></text>
      </svg>
    ),
  },
  {
    id: "vtc",
    name: "VTC - Truyền hình KTS",
    category: "Digital Television",
    svgIcon: (
      <svg width="90" height="38" viewBox="0 0 90 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="36" textAnchor="middle" fill="#FF3B30" fontFamily="var(--font-heading)" fontSize="34" fontWeight="900" letterSpacing="0.04em">V<tspan fill="#00D4FF">T</tspan><tspan fill="#FF3B30">C</tspan></text>
      </svg>
    ),
  },
  {
    id: "nhandan",
    name: "Báo Nhân Dân",
    category: "National Press",
    svgIcon: (
      <svg width="130" height="38" viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="32" textAnchor="middle" fill="#FF3B30" fontFamily="var(--font-heading)" fontSize="21" fontWeight="900" letterSpacing="0.02em">NHÂN DÂN</text>
      </svg>
    ),
  },
  {
    id: "vnexpress",
    name: "VnExpress",
    category: "Digital News",
    svgIcon: (
      <svg width="125" height="38" viewBox="0 0 125 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="32" textAnchor="middle" fill="#F43F5E" fontFamily="var(--font-heading)" fontSize="23" fontWeight="900">VnExpress</text>
      </svg>
    ),
  },
  {
    id: "tuoitre",
    name: "Báo Tuổi Trẻ",
    category: "National Press",
    svgIcon: (
      <svg width="110" height="38" viewBox="0 0 110 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="33" textAnchor="middle" fill="#FF3B30" fontFamily="var(--font-heading)" fontSize="25" fontWeight="900">Tuổi Trẻ</text>
      </svg>
    ),
  },
  {
    id: "thanhnien",
    name: "Báo Thanh Niên",
    category: "National Press",
    svgIcon: (
      <svg width="140" height="38" viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="32" textAnchor="middle" fill="#00D4FF" fontFamily="var(--font-heading)" fontSize="22" fontWeight="900">THANH NIÊN</text>
      </svg>
    ),
  },
  {
    id: "laodong",
    name: "Báo Lao Động",
    category: "National Press",
    svgIcon: (
      <svg width="130" height="38" viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="33" textAnchor="middle" fill="#FF3B30" fontFamily="var(--font-heading)" fontSize="24" fontWeight="900">LAO ĐỘNG</text>
      </svg>
    ),
  },
  {
    id: "dantri",
    name: "Báo Dân Trí",
    category: "Digital News",
    svgIcon: (
      <svg width="105" height="38" viewBox="0 0 105 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="34" textAnchor="middle" fill="#34D399" fontFamily="var(--font-heading)" fontSize="26" fontWeight="900">Dân trí</text>
      </svg>
    ),
  },
  {
    id: "vietnamnet",
    name: "VietNamNet",
    category: "Digital News",
    svgIcon: (
      <svg width="140" height="38" viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="32" textAnchor="middle" fill="#00D4FF" fontFamily="var(--font-heading)" fontSize="22" fontWeight="900">VietNamNet</text>
      </svg>
    ),
  },
  {
    id: "qdnd",
    name: "Báo Quân Đội Nhân Dân",
    category: "National Press",
    svgIcon: (
      <svg width="175" height="38" viewBox="0 0 175 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="31" textAnchor="middle" fill="#34D399" fontFamily="var(--font-heading)" fontSize="18" fontWeight="900">QUÂN ĐỘI NHÂN DÂN</text>
      </svg>
    ),
  },
  {
    id: "vtcnews",
    name: "VTC News",
    category: "Digital Press",
    svgIcon: (
      <svg width="130" height="38" viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="33" textAnchor="middle" fill="#FF3B30" fontFamily="var(--font-heading)" fontSize="24" fontWeight="900">VTC NEWS</text>
      </svg>
    ),
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
              <div key={`client-${p.id}-${idx}`} className={styles.partnerCardWrap}>
                <div className={styles.partnerCard}>
                  <div className={styles.partnerCardInner}>
                    <div className={styles.partnerCardLogo}>{p.svgIcon}</div>
                    <span className={styles.partnerCardName}>{p.name}</span>
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
              <div key={`partner-${p.id}-${idx}`} className={styles.partnerCardWrap}>
                <div className={styles.partnerCard}>
                  <div className={styles.partnerCardInner}>
                    <div className={styles.partnerCardLogo}>{p.svgIcon}</div>
                    <span className={styles.partnerCardName}>{p.name}</span>
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
