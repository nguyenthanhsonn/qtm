"use client";

import { PartnerItem } from "@/types/home";
import React from "react";
import "@/scss/home-partners.scss";
import { motion, useReducedMotion } from "motion/react";
import CursorGrid from "@/uiux/CursorGrid";

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
      <svg width="140" height="38" viewBox="0 0 175 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="24" r="12" fill="#005C97" />
        <path d="M14 24L20 18L26 24L20 30Z" fill="#E51937" />
        <text x="38" y="33" fill="#005C97" fontFamily="var(--font-heading)" fontSize="22" fontWeight="800">Vietin<tspan fill="#E51937">Bank</tspan></text>
      </svg>
    ),
  },
  {
    id: "honda",
    name: "Honda",
    category: "Automotive & Mobility",
    svgIcon: (
      <svg width="115" height="38" viewBox="0 0 145 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10H25L32 38H24L20 22H15L11 38H3L10 10Z" fill="#CC0000" />
        <path d="M35 10H45L52 38H44L40 22H35L31 38H23L30 10Z" fill="#CC0000" />
        <text x="52" y="34" fill="#CC0000" fontFamily="var(--font-heading)" fontSize="26" fontWeight="900" letterSpacing="0.08em">HONDA</text>
      </svg>
    ),
  },
  {
    id: "viettelstore",
    name: "Viettel Store",
    category: "Retail & Tech",
    svgIcon: (
      <svg width="135" height="38" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="28" fill="#EA0029" fontFamily="var(--font-heading)" fontSize="24" fontWeight="800">viettel</text>
        <text x="5" y="42" fill="#FFC72C" fontFamily="var(--font-heading)" fontSize="15" fontWeight="700" letterSpacing="0.1em">Store</text>
      </svg>
    ),
  },
  {
    id: "meiji",
    name: "Meiji",
    category: "Nutrition & Health",
    svgIcon: (
      <svg width="110" height="38" viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="34" fill="#DF0012" fontFamily="var(--font-heading)" fontSize="32" fontWeight="800" fontStyle="italic">meiji</text>
      </svg>
    ),
  },
  {
    id: "doji",
    name: "DOJI Group",
    category: "Jewelry & Gems",
    svgIcon: (
      <svg width="120" height="38" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="18,10 28,24 18,38 8,24" fill="#CC0000" />
        <text x="36" y="34" fill="#CC0000" fontFamily="var(--font-heading)" fontSize="28" fontWeight="900" letterSpacing="0.05em">DOJI</text>
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
  {
    id: "baoviet",
    name: "Bảo Việt",
    category: "Insurance & Finance",
    svgIcon: (
      <svg width="135" height="38" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="32" fill="#005C97" fontFamily="var(--font-heading)" fontSize="22" fontWeight="900" letterSpacing="0.03em">BAOVIET</text>
        <circle cx="145" cy="24" r="10" fill="#D4AF37" />
      </svg>
    ),
  },
  {
    id: "samsung",
    name: "Samsung",
    category: "Global Electronics",
    svgIcon: (
      <svg width="135" height="38" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="85" cy="24" rx="76" ry="20" fill="#1428A0" />
        <text x="21" y="32" fill="#FFFFFF" fontFamily="var(--font-heading)" fontSize="22" fontWeight="800" letterSpacing="0.1em">SAMSUNG</text>
      </svg>
    ),
  },
  {
    id: "vinamilk",
    name: "Vinamilk",
    category: "F&B Industry",
    svgIcon: (
      <svg width="130" height="38" viewBox="0 0 165 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="34" fill="#002D62" fontFamily="var(--font-heading)" fontSize="28" fontWeight="900" letterSpacing="0.05em">VINAMILK</text>
      </svg>
    ),
  },
];

// Danh sách ĐỐI TÁC TRUYỀN THÔNG (Media & Strategic Partners)
const mediaPartnersList: PartnerItem[] = [
  {
    id: "vtv",
    name: "VTV - Đài Truyền hình VN",
    category: "National Television",
    svgIcon: (
      <svg width="120" height="38" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="36" fill="#E51937" fontFamily="var(--font-heading)" fontSize="34" fontWeight="900" letterSpacing="0.04em">V<tspan fill="#009639">T</tspan><tspan fill="#005C97">V</tspan></text>
      </svg>
    ),
  },
  {
    id: "vov",
    name: "VOV.VN",
    category: "Voice of Vietnam",
    svgIcon: (
      <svg width="130" height="38" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="32" fill="#E51937" fontFamily="var(--font-heading)" fontSize="28" fontWeight="900">VOV<tspan fill="#005C97" fontSize="18">.VN</tspan></text>
        <text x="10" y="44" fill="#005C97" fontFamily="var(--font-body)" fontSize="8" fontWeight="600">BÁO ĐIỆN TỬ ĐÀI TIẾNG NÓI VIỆT NAM</text>
      </svg>
    ),
  },
  {
    id: "vnexpress",
    name: "VnExpress",
    category: "Digital News",
    svgIcon: (
      <svg width="140" height="38" viewBox="0 0 175 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="10" width="160" height="28" fill="#1E1E1E" rx="4" />
        <text x="15" y="31" fill="#FFFFFF" fontFamily="var(--font-heading)" fontSize="20" fontWeight="900">Vn<tspan fill="#E51937">E</tspan>xpress</text>
      </svg>
    ),
  },
  {
    id: "dantri",
    name: "Dân Trí",
    category: "Press & News",
    svgIcon: (
      <svg width="125" height="38" viewBox="0 0 155 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="34" fill="#008000" fontFamily="var(--font-heading)" fontSize="28" fontWeight="900" letterSpacing="0.04em">DANTRI</text>
      </svg>
    ),
  },
  {
    id: "kenh14",
    name: "Kênh 14",
    category: "Entertainment & Youth",
    svgIcon: (
      <svg width="120" height="38" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="24" r="20" fill="#E51937" />
        <text x="60" y="31" fill="#FFFFFF" fontFamily="var(--font-heading)" fontSize="18" fontWeight="900">K14</text>
      </svg>
    ),
  },
  {
    id: "nca",
    name: "Hiệp hội NCA",
    category: "Communications Alliance",
    svgIcon: (
      <svg width="125" height="38" viewBox="0 0 155 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24L24 10L36 24L24 38Z" fill="#005C97" />
        <circle cx="24" cy="24" r="4" fill="#FFC72C" />
        <text x="44" y="33" fill="#005C97" fontFamily="var(--font-heading)" fontSize="26" fontWeight="900">NCA</text>
      </svg>
    ),
  },
  {
    id: "vietnamairlines",
    name: "Vietnam Airlines",
    category: "National Carrier",
    svgIcon: (
      <svg width="160" height="38" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 24C20 18 28 14 36 24C28 34 20 30 15 24Z" fill="#FFC72C" />
        <text x="42" y="31" fill="#003B7A" fontFamily="var(--font-heading)" fontSize="17" fontWeight="800">Vietnam Airlines</text>
      </svg>
    ),
  },
  {
    id: "vietjetair",
    name: "Vietjet Air",
    category: "Airlines",
    svgIcon: (
      <svg width="140" height="38" viewBox="0 0 175 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="32" fill="#E51937" fontFamily="var(--font-heading)" fontSize="22" fontWeight="900">vietjet<tspan fill="#FFC72C">air.com</tspan></text>
      </svg>
    ),
  },
  {
    id: "bambooairways",
    name: "Bamboo Airways",
    category: "Airlines",
    svgIcon: (
      <svg width="150" height="38" viewBox="0 0 190 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 32L30 10L25 38Z" fill="#009639" />
        <path d="M22 35L38 18L32 38Z" fill="#005C97" />
        <text x="42" y="30" fill="#005C97" fontFamily="var(--font-heading)" fontSize="18" fontWeight="800">BAMBOO</text>
      </svg>
    ),
  },
  {
    id: "baoxaydung",
    name: "Báo Xây Dựng",
    category: "Official Press",
    svgIcon: (
      <svg width="145" height="38" viewBox="0 0 185 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="32" fill="#005C97" fontFamily="var(--font-heading)" fontSize="22" fontWeight="900">XÂY DỰNG</text>
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
    <section id="strategic-partners" className="section section--home-partners">
      {/* Interactive Background Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <CursorGrid
          color="#38CFC8"
          cellSize={65}
          gridOpacity={0.06}
          maxOpacity={0.45}
          fillOpacity={0.14}
          radius={160}
          clickPulse={true}
        />
      </div>
      <div className="home-partners__bg" aria-hidden="true" />
      <div className="home-partners__glow" aria-hidden="true" />

      {/* Header — inside constrained container */}
      <div className="section__content home-partners__content">
        <motion.div
          className="home-partners__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="home-partners__subtitle">TRUSTED BY INDUSTRY LEADERS</span>
          <h2 className="home-partners__title">
            KHÁCH HÀNG & <span className="title-highlight">ĐỐI TÁC</span>
          </h2>
          <p className="home-partners__desc">
            Tự hào đồng hành cùng các tập đoàn hàng đầu và hệ thống cơ quan truyền thông báo chí uy tín tại Việt Nam.
          </p>
        </motion.div>
      </div>

      {/* ─── PHẦN 1: KHÁCH HÀNG TIÊU BIỂU ─── Full bleed, outside section__content */}
      <div className="home-partners__category-block">
        <div className="home-partners__category-badge">
          <span className="category-badge__dot" />
          <span className="category-badge__text">KHÁCH HÀNG TIÊU BIỂU</span>
        </div>

        <div className="home-partners__marquee-wrapper" aria-label="Danh sách logo khách hàng tiêu biểu">
          <div className="marquee-track marquee-track--left">
            {[...clientsList, ...clientsList].map((p, idx) => (
              <div key={`client-${p.id}-${idx}`} className="partner-card-wrap">
                <div className="partner-card">
                  <div className="partner-card__tech-header">
                    <span className="tech-dot" />
                    <span className="tech-code">CLI.0{(idx % clientsList.length) + 1}</span>
                  </div>
                  <div className="partner-card__inner">
                    <div className="partner-card__logo">{p.svgIcon}</div>
                    <span className="partner-card__name">{p.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PHẦN 2: ĐỐI TÁC TRUYỀN THÔNG & BÁO CHÍ ─── Full bleed */}
      <div className="home-partners__category-block">
        <div className="home-partners__category-badge">
          <span className="category-badge__dot" />
          <span className="category-badge__text">ĐỐI TÁC TRUYỀN THÔNG & BÁO CHÍ</span>
        </div>

        <div className="home-partners__marquee-wrapper" aria-label="Danh sách logo đối tác truyền thông">
          <div className="marquee-track marquee-track--right">
            {[...mediaPartnersList, ...mediaPartnersList].map((p, idx) => (
              <div key={`partner-${p.id}-${idx}`} className="partner-card-wrap">
                <div className="partner-card">
                  <div className="partner-card__tech-header">
                    <span className="tech-dot" />
                    <span className="tech-code">MED.0{(idx % mediaPartnersList.length) + 1}</span>
                  </div>
                  <div className="partner-card__inner">
                    <div className="partner-card__logo">{p.svgIcon}</div>
                    <span className="partner-card__name">{p.name}</span>
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
