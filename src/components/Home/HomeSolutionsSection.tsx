"use client";

import { SolutionItem } from "@/types/home";
import React from "react";
import styles from "./HomeSolutionsSection.module.scss";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import Card3DTilt from "@/components/Card3DTilt";

import CtaGridBackground from "@/components/TechBackground/CtaGridBackground";
import ParticleField from "@/components/TechBackground/ParticleField";
import TypewriterText from "@/uiux/Typewriter_text";

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
    badge: "MISS LEGACY",
    subtitle: "MISS LEGACY",
    title: "Tổ hợp Không gian Trải nghiệm",
    desc: "Biểu tượng kết nối di sản văn hoá nghệ thuật và công nghệ hiện đại, nơi kiến tạo hệ sinh thái trải nghiệm đỉnh cao.",
    link: "/missLegacy",
    accentColor: "#7C4DFF",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-3" />
        <path d="M9 9v.01" />
        <path d="M9 12v.01" />
        <path d="M9 15v.01" />
        <path d="M9 18v.01" />
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
    <section id="solutions-block" className={`section ${styles.sectionHomeSolutions}`}>
      {/* Exact white grid background from GIÁ TRỊ CỐT LÕI */}
      <CtaGridBackground />

      {/* Interactive Data Particles */}
      <ParticleField />

      <div className={`section__content ${styles.homeSolutionsContent}`}>
        {/* Title */}
        <h2
          className={styles.homeSolutionsTitle}
          data-aos="zoom-in"
        >
          GIẢI PHÁP <span className={styles.titleHighlight}>TOÀN DIỆN</span>
        </h2>

        <motion.p
          className={styles.homeSolutionsDesc}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.15, ease: easeOut }}
        >
          <TypewriterText
            text="Đồng hành cùng doanh nghiệp từ ý tưởng chiến lược đến thực thi sản xuất với 4 trụ cột dịch vụ cốt lõi."
            highlightText="4 trụ cột dịch vụ cốt lõi"
            speed={50}
            deleteSpeed={30}
            pauseDuration={3000}
            loop={true}
            cursorClassName="text-[#2095AD]"
            highlightClassName="text-[#2095AD] font-semibold ml-1"
          />
        </motion.p>

        {/* 4 Cards Grid */}
        <motion.div
          className={styles.homeSolutionsGrid}
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
                className={`${styles.solutionBlockCard} h-full`}
                maxTilt={8}
                scale={1.02}
                glareColor={item.accentColor}
                glareOpacity={0.15}
                style={{ "--accent": item.accentColor } as React.CSSProperties}
              >
                {/* SVG Blueprint shape for main card */}
                <svg className={styles.solutionCardBgSvg} viewBox="0 0 290 455" preserveAspectRatio="none" fill="none" aria-hidden="true">
                  {/* Subtle Tech Glow Path */}
                  <path
                    d="M 32 0 H 258 A 32 32 0 0 1 290 32 V 399 H 165 A 16 16 0 0 1 149 415 V 455 H 32 A 32 32 0 0 1 0 423 V 32 A 32 32 0 0 1 32 0 Z"
                    stroke={item.accentColor}
                    strokeWidth="3.5"
                    className={styles.cardGlowPath}
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Solid Dark Tech Card Background */}
                  <path
                    d="M 32 0 H 258 A 32 32 0 0 1 290 32 V 399 H 165 A 16 16 0 0 1 149 415 V 455 H 32 A 32 32 0 0 1 0 423 V 32 A 32 32 0 0 1 32 0 Z"
                    fill="#0c192b"
                    className={styles.cardBgPath}
                  />
                  {/* Teal Border */}
                  <path
                    d="M 32 0 H 258 A 32 32 0 0 1 290 32 V 399 H 165 A 16 16 0 0 1 149 415 V 455 H 32 A 32 32 0 0 1 0 423 V 32 A 32 32 0 0 1 32 0 Z"
                    stroke="rgba(56, 207, 200, 0.4)"
                    strokeWidth="1.5"
                    className={styles.cardBorderPath}
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* Main Card Content */}
                <div className={styles.solutionCardContent}>
                  {/* Card Top Row */}
                  <div className={styles.cardTop}>
                    <span className={styles.cardIcon}>
                      {item.icon}
                    </span>
                    <span className={styles.cardId}>{item.id}</span>
                  </div>

                  {/* Card Main Info */}
                  <div className={styles.cardBody}>
                    <span className={styles.cardSubtitle}>{item.subtitle}</span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </div>

                  {/* Divider */}
                  <div className={styles.cardDivider} />
                </div>

                {/* Overlapping Tab Badge at bottom-right */}
                <Link href={item.link} className={styles.solutionCardTab}>
                  <span className={styles.tabText}>Xem chi tiết</span>
                  <span className={styles.tabArrow}>→</span>
                </Link>
              </Card3DTilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
