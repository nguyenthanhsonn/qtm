"use client";

import { PartnerItem } from "@/types/home";
import React from "react";
import styles from "@/scss/home/HomePartnersSection.module.scss";
import { motion, useReducedMotion } from "motion/react";

// Danh sách KHÁCH HÀNG (Clients)
const clientsList: PartnerItem[] = [
  {
    id: "pvgas",
    name: "PV GAS - PetroVietnam",
    category: "Energy & Gas",
    svgIcon: (
      <svg width="145" height="38" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 6C22 6 12 18 12 26C12 31.5 16.5 36 22 36C27.5 36 32 31.5 32 26C32 18 22 6 22 6Z" fill="#E51937" />
        <path d="M22 14C22 14 17 21 17 25C17 27.8 19.2 30 22 30C24.8 30 27 27.8 27 25C27 21 22 14 22 14Z" fill="#FFC72C" />
        <text x="38" y="24" fill="#005C97" fontFamily="var(--font-heading)" fontSize="13" fontWeight="900" letterSpacing="0.05em">PETROVIETNAM</text>
        <text x="38" y="38" fill="#E51937" fontFamily="var(--font-heading)" fontSize="16" fontWeight="900" letterSpacing="0.08em">PV GAS</text>
      </svg>
    ),
  },
  {
    id: "mobifone",
    name: "MobiFone",
    category: "Telecom Leader",
    svgIcon: (
      <svg width="130" height="38" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="34" fill="#005C97" fontFamily="var(--font-heading)" fontSize="28" fontWeight="800" letterSpacing="0.02em">mobi<tspan fill="#E51937">fone</tspan></text>
      </svg>
    ),
  },
  {
    id: "vietcombank",
    name: "Vietcombank",
    category: "Banking & Finance",
    svgIcon: (
      <svg width="145" height="38" viewBox="0 0 185 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24L24 8L36 24L24 40Z" fill="#005A36" />
        <text x="44" y="33" fill="#005A36" fontFamily="var(--font-heading)" fontSize="23" fontWeight="800">Vietcombank</text>
      </svg>
    ),
  },
  {
    id: "vietinbank",
    name: "VietinBank",
    category: "Banking & Finance",
    svgIcon: (
      <svg width="135" height="38" viewBox="0 0 175 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="24" r="14" fill="#00529B" />
        <path d="M12 24H28M20 16V32" stroke="#EE1D23" strokeWidth="4.5" strokeLinecap="round" />
        <text x="42" y="32" fill="#00529B" fontFamily="var(--font-heading)" fontSize="21" fontWeight="800">VietinBank</text>
      </svg>
    ),
  },
  {
    id: "bidv",
    name: "BIDV",
    category: "Banking & Finance",
    svgIcon: (
      <svg width="115" height="38" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="28" height="28" rx="6" fill="#005A36" />
        <path d="M14 18L26 30M26 18L14 30" stroke="#FFC72C" strokeWidth="3.5" strokeLinecap="round" />
        <text x="44" y="34" fill="#005A36" fontFamily="var(--font-heading)" fontSize="26" fontWeight="900" letterSpacing="0.05em">BIDV</text>
      </svg>
    ),
  },
  {
    id: "agribank",
    name: "Agribank",
    category: "Banking & Finance",
    svgIcon: (
      <svg width="130" height="38" viewBox="0 0 165 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="30" height="32" rx="4" fill="#A8232A" />
        <path d="M12 32V16L21 28L30 16V32" stroke="#FFC72C" strokeWidth="3" strokeLinejoin="round" />
        <text x="44" y="32" fill="#A8232A" fontFamily="var(--font-heading)" fontSize="20" fontWeight="800">AGRIBANK</text>
      </svg>
    ),
  },
  {
    id: "viettel",
    name: "Viettel Group",
    category: "Telecommunications",
    svgIcon: (
      <svg width="125" height="38" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="34" fill="#EE0000" fontFamily="var(--font-heading)" fontSize="28" fontWeight="900" letterSpacing="0.04em">viettel</text>
      </svg>
    ),
  },
  {
    id: "vnpt",
    name: "VNPT Group",
    category: "Telecommunications",
    svgIcon: (
      <svg width="115" height="38" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="24" r="15" fill="#0066B3" />
        <path d="M14 24C14 18.5 17.5 15 22 15C26.5 15 30 18.5 30 24" stroke="#FFFFFF" strokeWidth="3" />
        <text x="44" y="34" fill="#0066B3" fontFamily="var(--font-heading)" fontSize="25" fontWeight="900" letterSpacing="0.04em">VNPT</text>
      </svg>
    ),
  },
  {
    id: "pvn",
    name: "Petrovietnam (PVN)",
    category: "Energy & Oil",
    svgIcon: (
      <svg width="145" height="38" viewBox="0 0 185 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 36L20 8L28 36Z" fill="#EE1C25" />
        <path d="M20 16L28 36H12Z" fill="#0054A6" />
        <text x="36" y="32" fill="#0054A6" fontFamily="var(--font-heading)" fontSize="18" fontWeight="900">PETROVIETNAM</text>
      </svg>
    ),
  },
  {
    id: "evn",
    name: "EVN - Tập đoàn Điện lực",
    category: "Energy & Utility",
    svgIcon: (
      <svg width="115" height="38" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="24" r="14" fill="#002C6C" />
        <path d="M22 14L15 26H22L18 34L27 22H20L22 14Z" fill="#ED1C24" />
        <text x="42" y="34" fill="#002C6C" fontFamily="var(--font-heading)" fontSize="26" fontWeight="900" letterSpacing="0.06em">EVN</text>
      </svg>
    ),
  },
  {
    id: "vinhomes",
    name: "Vinhomes",
    category: "Real Estate & Urban",
    svgIcon: (
      <svg width="135" height="38" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 32L20 12L30 32H23L20 23L17 32H10Z" fill="#1A365D" />
        <path d="M20 12L25 22H15L20 12Z" fill="#C59B27" />
        <text x="36" y="32" fill="#1A365D" fontFamily="var(--font-heading)" fontSize="21" fontWeight="800">VINHOMES</text>
      </svg>
    ),
  },
  {
    id: "sun-group",
    name: "Sun Group",
    category: "Tourism & Real Estate",
    svgIcon: (
      <svg width="135" height="38" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="24" r="12" fill="#E30613" />
        <text x="40" y="32" fill="#E30613" fontFamily="var(--font-heading)" fontSize="22" fontWeight="900" letterSpacing="0.04em">SUN GROUP</text>
      </svg>
    ),
  },
  {
    id: "damcamau",
    name: "Đạm Cà Mau",
    category: "PVCFC Group",
    svgIcon: (
      <svg width="140" height="38" viewBox="0 0 175 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="24" r="14" fill="#009639" />
        <path d="M15 24L20 16L25 24L20 32Z" fill="#FFC72C" />
        <text x="42" y="26" fill="#009639" fontFamily="var(--font-heading)" fontSize="17" fontWeight="800">ĐẠM CÀ MAU</text>
        <text x="42" y="39" fill="#E30613" fontFamily="var(--font-geist-mono)" fontSize="10" fontWeight="700">PVCFC</text>
      </svg>
    ),
  },
];

// Danh sách ĐỐI TÁC TRUYỀN THÔNG (Media & Strategic Partners)
const mediaPartnersList: PartnerItem[] = [
  {
    id: "vov",
    name: "VOV - Đài Tiếng nói VN",
    category: "National Radio",
    svgIcon: (
      <svg width="120" height="38" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="36" fill="#00529C" fontFamily="var(--font-heading)" fontSize="34" fontWeight="900" letterSpacing="0.04em">V<tspan fill="#ED1C24">O</tspan><tspan fill="#00529C">V</tspan></text>
      </svg>
    ),
  },
  {
    id: "vtc",
    name: "VTC - Truyền hình KTS",
    category: "Digital Television",
    svgIcon: (
      <svg width="120" height="38" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="36" fill="#ED1C24" fontFamily="var(--font-heading)" fontSize="34" fontWeight="900" letterSpacing="0.04em">V<tspan fill="#00529C">T</tspan><tspan fill="#ED1C24">C</tspan></text>
      </svg>
    ),
  },
  {
    id: "nhandan",
    name: "Báo Nhân Dân",
    category: "National Press",
    svgIcon: (
      <svg width="140" height="38" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="32" fill="#DA251D" fontFamily="var(--font-heading)" fontSize="21" fontWeight="900" letterSpacing="0.02em">NHÂN DÂN</text>
      </svg>
    ),
  },
  {
    id: "vnexpress",
    name: "VnExpress",
    category: "Digital News",
    svgIcon: (
      <svg width="140" height="38" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="32" fill="#9F224E" fontFamily="var(--font-heading)" fontSize="23" fontWeight="900">VnExpress</text>
      </svg>
    ),
  },
  {
    id: "tuoitre",
    name: "Báo Tuổi Trẻ",
    category: "National Press",
    svgIcon: (
      <svg width="130" height="38" viewBox="0 0 165 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="33" fill="#D2232A" fontFamily="var(--font-heading)" fontSize="25" fontWeight="900">Tuổi Trẻ</text>
      </svg>
    ),
  },
  {
    id: "thanhnien",
    name: "Báo Thanh Niên",
    category: "National Press",
    svgIcon: (
      <svg width="140" height="38" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="32" fill="#0054A6" fontFamily="var(--font-heading)" fontSize="22" fontWeight="900">THANH NIÊN</text>
      </svg>
    ),
  },
  {
    id: "laodong",
    name: "Báo Lao Động",
    category: "National Press",
    svgIcon: (
      <svg width="135" height="38" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="33" fill="#C8102E" fontFamily="var(--font-heading)" fontSize="24" fontWeight="900">LAO ĐỘNG</text>
      </svg>
    ),
  },
  {
    id: "dantri",
    name: "Báo Dân Trí",
    category: "Digital News",
    svgIcon: (
      <svg width="125" height="38" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="34" fill="#008844" fontFamily="var(--font-heading)" fontSize="26" fontWeight="900">Dân trí</text>
      </svg>
    ),
  },
  {
    id: "vietnamnet",
    name: "VietNamNet",
    category: "Digital News",
    svgIcon: (
      <svg width="140" height="38" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="32" fill="#004A99" fontFamily="var(--font-heading)" fontSize="22" fontWeight="900">VietNamNet</text>
      </svg>
    ),
  },
  {
    id: "qdnd",
    name: "Báo Quân Đội Nhân Dân",
    category: "National Press",
    svgIcon: (
      <svg width="150" height="38" viewBox="0 0 190 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="31" fill="#006837" fontFamily="var(--font-heading)" fontSize="18" fontWeight="900">QUÂN ĐỘI NHÂN DÂN</text>
      </svg>
    ),
  },
  {
    id: "vtcnews",
    name: "VTC News",
    category: "Digital Press",
    svgIcon: (
      <svg width="130" height="38" viewBox="0 0 165 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="33" fill="#ED1C24" fontFamily="var(--font-heading)" fontSize="24" fontWeight="900">VTC NEWS</text>
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
