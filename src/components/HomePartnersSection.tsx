"use client";

import React from "react";
import "@/scss/home-partners.scss";
import { motion, useReducedMotion } from "motion/react";

type PartnerItem = {
  id: string;
  name: string;
  category: string;
  svgIcon: React.ReactNode;
};

const partnersList: PartnerItem[] = [
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
    id: "vinamilk",
    name: "Vinamilk",
    category: "F&B Industry",
    svgIcon: (
      <svg width="130" height="38" viewBox="0 0 165 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="34" fill="#002D62" fontFamily="var(--font-heading)" fontSize="28" fontWeight="900" letterSpacing="0.05em">VINAMILK</text>
      </svg>
    ),
  },
  {
    id: "viettel",
    name: "Viettel",
    category: "Technology & Telecom",
    svgIcon: (
      <svg width="120" height="38" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="34" fill="#EA0029" fontFamily="var(--font-heading)" fontSize="30" fontWeight="800">viettel</text>
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
      <div className="home-partners__bg" aria-hidden="true" />
      <div className="home-partners__glow" aria-hidden="true" />

      <div className="section__content home-partners__content">
        {/* Header Title */}
        <motion.div
          className="home-partners__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="home-partners__subtitle">STRATEGIC PARTNERS</span>
          <h2 className="home-partners__title">
            ĐỐI TÁC <span className="title-highlight">CHIẾN LƯỢC</span>
          </h2>
          <p className="home-partners__desc">
            Tự hào đồng hành cùng các tập đoàn, thương hiệu hàng đầu Việt Nam và quốc tế trên hành trình bứt phá truyền thông.
          </p>
        </motion.div>

        {/* Infinite Marquee Ticker Row 1 */}
        <div className="home-partners__marquee-wrapper" aria-label="Danh sách logo đối tác chiến lược">
          <div className="marquee-track marquee-track--left">
            {[...partnersList, ...partnersList].map((p, idx) => (
              <div key={`${p.id}-1-${idx}`} className="partner-card">
                <div className="partner-card__inner">
                  <div className="partner-card__logo">{p.svgIcon}</div>
                  <span className="partner-card__name">{p.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Marquee Ticker Row 2 (Reverse Direction) */}
        <div className="home-partners__marquee-wrapper" aria-hidden="true">
          <div className="marquee-track marquee-track--right">
            {[...partnersList, ...partnersList].reverse().map((p, idx) => (
              <div key={`${p.id}-2-${idx}`} className="partner-card">
                <div className="partner-card__inner">
                  <div className="partner-card__logo">{p.svgIcon}</div>
                  <span className="partner-card__name">{p.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
