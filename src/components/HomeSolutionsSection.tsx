"use client";

import React from "react";
import "@/scss/home-solutions.scss";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import Card3DTilt from "@/components/Card3DTilt";

type SolutionItem = {
  id: string;
  badge: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  desc: string;
  link: string;
  accentColor: string;
};

const solutionsData: SolutionItem[] = [
  {
    id: "01",
    badge: "CONFERENCE & SEMINAR",
    title: "Hội nghị - Hội thảo",
    subtitle: "CONFERENCE & SEMINAR",
    desc: "Tổ chức hội nghị, hội thảo, lễ ký kết, kickoff và các sự kiện doanh nghiệp với quy trình chuyên nghiệp, ứng dụng công nghệ và khả năng đo lường hiệu quả.",
    link: "/solution",
    accentColor: "#2095AD",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "02",
    badge: "OUTDOOR MEDIA & OOH",
    title: "Billboard",
    subtitle: "OUTDOOR MEDIA & OOH",
    desc: "Triển khai các giải pháp Billboard và truyền thông ngoài trời nhằm gia tăng độ phủ thương hiệu và khả năng tiếp cận khách hàng.",
    link: "/solution",
    accentColor: "#17398F",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="12" rx="2" />
        <path d="M12 15v6" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    id: "03",
    badge: "LIVESHOW & ENTERTAINMENT",
    title: "Concert",
    subtitle: "LIVESHOW & ENTERTAINMENT",
    desc: "Thiết kế và tổ chức các chương trình nghệ thuật, liveshow, fan meeting và sự kiện giải trí quy mô lớn.",
    link: "/solution",
    accentColor: "#7C4DFF",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    id: "04",
    badge: "SUSTAINABLE COMMUNITY",
    title: "CSR",
    subtitle: "SUSTAINABLE COMMUNITY",
    desc: "Đồng hành cùng doanh nghiệp xây dựng các chương trình trách nhiệm xã hội, tạo giá trị bền vững cho cộng đồng và thương hiệu.",
    link: "/solution",
    accentColor: "#38CFC8",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function HomeSolutionsSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="solutions-block" className="section section--home-solutions">
      {/* Light Grid Background Matrix */}
      <div className="home-solutions__bg" aria-hidden="true" />
      <div className="home-solutions__glow" aria-hidden="true" />

      <div className="section__content home-solutions__content">
        {/* Title */}
        <motion.h2
          className="home-solutions__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          GIẢI PHÁP <span className="title-highlight">TOÀN DIỆN</span>
        </motion.h2>

        <motion.p
          className="home-solutions__desc"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.15, ease: easeOut }}
        >
          Đồng hành cùng doanh nghiệp từ ý tưởng chiến lược đến thực thi sản xuất với 4 trụ cột dịch vụ cốt lõi.
        </motion.p>

        {/* 4 Cards Grid */}
        <motion.div
          className="home-solutions__grid"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {solutionsData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: easeOut }}
              className="h-full"
            >
              <Card3DTilt
                className="solution-block-card h-full"
                maxTilt={14}
                scale={1.035}
                glareColor={item.accentColor}
                glareOpacity={0.35}
              >
                {/* HUD Corner Brackets */}
                <div className="corner-mark top-left" aria-hidden="true" />
                <div className="corner-mark top-right" aria-hidden="true" />
                <div className="corner-mark bottom-left" aria-hidden="true" />
                <div className="corner-mark bottom-right" aria-hidden="true" />

                {/* Card Top Row */}
                <div className="card-top">
                  <span className="card-icon" style={{ color: item.accentColor }}>
                    {item.icon}
                  </span>
                  <span className="card-id">{item.id}</span>
                </div>

                {/* Card Main Info */}
                <div className="card-body">
                  <span className="card-subtitle">{item.subtitle}</span>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                </div>

                {/* Card CTA Link */}
                <div className="card-footer">
                  <Link href={item.link} className="card-cta-btn">
                    <span>Xem chi tiết</span>
                    <span className="cta-arrow">→</span>
                  </Link>
                </div>
              </Card3DTilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
