"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";

type PartnerItem = {
  id: string;
  name: string;
  category: string;
  svgIcon: React.ReactNode;
};

// Reusing rich partner SVG icons matching Home page
const partnersList: PartnerItem[] = [
  {
    id: "viettel",
    name: "Viettel Group",
    category: "telecom",
    svgIcon: (
      <svg width="130" height="38" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="34" fill="#EA0029" fontFamily="var(--font-heading)" fontSize="30" fontWeight="800">viettel</text>
      </svg>
    ),
  },
  {
    id: "samsung",
    name: "Samsung Electronics",
    category: "tech",
    svgIcon: (
      <svg width="140" height="38" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="85" cy="24" rx="76" ry="20" fill="#1428A0" />
        <text x="21" y="32" fill="#FFFFFF" fontFamily="var(--font-heading)" fontSize="22" fontWeight="800" letterSpacing="0.1em">SAMSUNG</text>
      </svg>
    ),
  },
  {
    id: "vinamilk",
    name: "Vinamilk",
    category: "fmcg",
    svgIcon: (
      <svg width="135" height="38" viewBox="0 0 165 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="34" fill="#002D62" fontFamily="var(--font-heading)" fontSize="28" fontWeight="900" letterSpacing="0.05em">VINAMILK</text>
      </svg>
    ),
  },
  {
    id: "mobifone",
    name: "MobiFone Telecommunication",
    category: "telecom",
    svgIcon: (
      <svg width="135" height="38" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="34" fill="#005C97" fontFamily="var(--font-heading)" fontSize="28" fontWeight="800" letterSpacing="0.02em">mobi<tspan fill="#E51937">fone</tspan></text>
      </svg>
    ),
  },
  {
    id: "honda",
    name: "Honda Vietnam",
    category: "auto",
    svgIcon: (
      <svg width="125" height="38" viewBox="0 0 145 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10H25L32 38H24L20 22H15L11 38H3L10 10Z" fill="#CC0000" />
        <path d="M35 10H45L52 38H44L40 22H35L31 38H23L30 10Z" fill="#CC0000" />
        <text x="52" y="34" fill="#CC0000" fontFamily="var(--font-heading)" fontSize="26" fontWeight="900" letterSpacing="0.08em">HONDA</text>
      </svg>
    ),
  },
  {
    id: "vietcombank",
    name: "Vietcombank",
    category: "finance",
    svgIcon: (
      <svg width="150" height="38" viewBox="0 0 185 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24L24 8L36 24L24 40Z" fill="#005A36" />
        <text x="44" y="33" fill="#005A36" fontFamily="var(--font-heading)" fontSize="23" fontWeight="800">Vietcombank</text>
      </svg>
    ),
  },
  {
    id: "meiji",
    name: "Meiji Japan",
    category: "fmcg",
    svgIcon: (
      <svg width="120" height="38" viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="34" fill="#DF0012" fontFamily="var(--font-heading)" fontSize="32" fontWeight="800" fontStyle="italic">meiji</text>
      </svg>
    ),
  },
  {
    id: "damcamau",
    name: "Đạm Cà Mau (PVCFC)",
    category: "auto",
    svgIcon: (
      <svg width="145" height="38" viewBox="0 0 175 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="24" r="14" fill="#009639" />
        <path d="M15 24L20 16L25 24L20 32Z" fill="#FFC72C" />
        <text x="42" y="26" fill="#009639" fontFamily="var(--font-heading)" fontSize="17" fontWeight="800">ĐẠM CÀ MAU</text>
        <text x="42" y="39" fill="#E30613" fontFamily="var(--font-geist-mono)" fontSize="10" fontWeight="700">PVCFC</text>
      </svg>
    ),
  },
];

type TargetGroup = {
  id: string;
  code: string;
  title: string;
  sub: string;
  desc: string;
  keyNeeds: string[];
  featuredCategory: string;
};

const targetGroups: TargetGroup[] = [
  {
    id: "telecom-tech",
    code: "CAT_01",
    title: "Viễn Thông & Tập Đoàn Công Nghệ",
    sub: "Enterprise & Telecom Leaders",
    desc: "Cần giải pháp truyền thông tổng thể quy mô lớn, tích hợp hệ thống quản trị dữ liệu khách hàng (CDP/CRM), và chiến lược cá nhân hóa trải nghiệm người dùng số.",
    keyNeeds: ["Tích hợp dữ liệu đa kênh", "Tự động hóa truyền thông", "Định vị vị thế công nghệ"],
    featuredCategory: "telecom",
  },
  {
    id: "finance-banking",
    code: "CAT_02",
    title: "Tài Chính, Ngân Hàng & Fintech",
    sub: "Financial Services & Banking",
    desc: "Yêu cầu độ bảo mật tuyệt đối, truyền thông uy tín thương hiệu, thu hút tệp người dùng trẻ số hóa và minh bạch hóa báo cáo đo lường hiệu quả chuyển đổi.",
    keyNeeds: ["Truyền thông bảo mật cao", "Tối ưu chi phí CPL/CAC", "Branding định vị lòng tin"],
    featuredCategory: "finance",
  },
  {
    id: "fmcg-retail",
    code: "CAT_03",
    title: "Hàng Tiêu Dùng, F&B & Bán Lẻ",
    sub: "FMCG, Retail & Consumer Brands",
    desc: "Đòi hỏi các chiến dịch sáng tạo bùng nổ, tạo sóng tương tác đa kênh real-time, tăng nhận diện thương hiệu tức thì và thúc đẩy doanh số bán hàng bứt phá.",
    keyNeeds: ["Viral Content Marketing", "Tương tác Social Real-time", "Tối ưu nhận diện thương hiệu"],
    featuredCategory: "fmcg",
  },
  {
    id: "auto-mobility",
    code: "CAT_04",
    title: "Ô Tô, Năng Lượng & Công Nghiệp",
    sub: "Automotive, Energy & Mobility",
    desc: "Cần định vị vị thế dẫn đầu ngành, thể hiện tầm vóc thương hiệu thông qua các giải pháp trải nghiệm 3D/AR nhập vai và chiến lược truyền thông bền vững (ESG).",
    keyNeeds: ["Trải nghiệm 3D/AR Interactive", "Truyền thông giá trị ESG", "Định vị vị thế dẫn dắt"],
    featuredCategory: "auto",
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutTargetAudience() {
  const reduceMotion = useReducedMotion();
  const [activeTabId, setActiveTabId] = useState<string>("telecom-tech");

  const activeGroup = targetGroups.find((g) => g.id === activeTabId) || targetGroups[0];

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="target-audience" className="section section--target-audience">
      {/* Dark Faded Network Background */}
      <div className="target-aud__bg-overlay" aria-hidden="true" />
      <div className="target-aud__bg-grid" aria-hidden="true" />
      <ParticleField />

      <div className="section__content target-aud__content">
        {/* Title */}
        <motion.h2
          className="target-aud__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          KHÁCH HÀNG MỤC TIÊU &amp; <span className="title-highlight-mint">ĐỐI TÁC</span>
        </motion.h2>

        <motion.p
          className="target-aud__subtitle"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          QTM đồng hành cùng các doanh nghiệp, tập đoàn hàng đầu trong và ngoài nước bằng các giải pháp truyền thông công nghệ chuyên biệt.
        </motion.p>

        {/* 4 Category Tabs */}
        <motion.div
          className="target-aud__tabs-nav"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
        >
          {targetGroups.map((group) => {
            const isActive = group.id === activeTabId;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveTabId(group.id)}
                className={`tab-btn ${isActive ? "active" : ""}`}
              >
                <span className="tab-title">{group.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Tab Content Detail Card */}
        <motion.div
          className="target-aud__tab-detail-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="tab-detail-inner"
            >
              <div className="detail-header">
                <span className="detail-sub">{activeGroup.sub}</span>
                <h3 className="detail-title">{activeGroup.title}</h3>
              </div>

              <p className="detail-desc">{activeGroup.desc}</p>

              <div className="detail-needs">
                <span className="needs-label">NHU CẦU TRỌNG YẾU:</span>
                <div className="needs-tags">
                  {activeGroup.keyNeeds.map((need) => (
                    <span key={need} className="need-tag">
                      ✓ {need}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── INFINITE MARQUEE LOGO CAROUSEL (Grayscale → Color on Hover) ── */}
        <motion.div
          className="target-aud__marquee-section"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.25, ease: easeOut }}
        >
          <div className="marquee-header">
            <span className="marquee-note">Gương mặt đối tác tiêu biểu đồng hành cùng QTM</span>
          </div>

          {/* Marquee Row 1 */}
          <div className="logo-marquee-wrapper">
            <div className="marquee-track marquee-track--left">
              {[...partnersList, ...partnersList].map((partner, idx) => (
                <div key={`${partner.id}-1-${idx}`} className="logo-wall-card">
                  <div className="logo-svg-wrap">{partner.svgIcon}</div>
                  <span className="logo-name">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (Reverse direction) */}
          <div className="logo-marquee-wrapper" aria-hidden="true">
            <div className="marquee-track marquee-track--right">
              {[...partnersList, ...partnersList].reverse().map((partner, idx) => (
                <div key={`${partner.id}-2-${idx}`} className="logo-wall-card">
                  <div className="logo-svg-wrap">{partner.svgIcon}</div>
                  <span className="logo-name">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
