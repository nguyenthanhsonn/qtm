"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import BackgroundGrid from "@/components/TechBackground/BackgroundGrid";

type Pillar = {
  icon: React.ReactNode;
  number: string;
  title: string;
  desc: string;
};

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Tư Duy Thử Nghiệm",
    desc: "Khuyến khích mỗi nhân sự liên tục thử nghiệm các mô hình AI & công cụ MarTech mới hàng tuần để tối ưu hiệu suất công việc.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Dữ Liệu Dẫn Đường",
    desc: "Mọi ý tưởng truyền thông và sáng tạo nội dung đều bắt đầu từ insight dữ liệu định lượng, không dựa trên cảm tính thuần túy.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Cộng Hưởng Trí Tuệ",
    desc: "Con người làm chủ định hướng chiến lược, cảm xúc và thông điệp; AI đảm nhận việc tự động hóa, phân tích và gia tăng tốc độ.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2M9 2v2M15 20v2M9 20v2M20 15h2M20 9h2M2 15h2M2 9h2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Học Tập Liên Tục",
    desc: "Đào tạo nội bộ chuyên sâu về kỹ năng Prompting, Data Analytics & AI Workflow để toàn bộ đội ngũ luôn làm chủ công nghệ mới.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M12 6v6M9 9h6" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Tốc Độ & Tối Ưu",
    desc: "Giảm thời gian hoàn thiện dự án xuống 50% bằng cách tinh gọn quy trình làm việc phối hợp giữa con người và các AI Copilot.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Trách Nhiệm & Đạo Đức",
    desc: "Cam kết ứng dụng AI minh bạch, tôn trọng bản quyền tác giả, bảo mật thông tin và không phát tán thông tin sai lệch.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutAiCulture() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="ai-culture" className="section section--ai-culture">
      <BackgroundGrid gridSize={40} opacity={0.06} />
      <div className="ai-culture__glow" aria-hidden="true" />

      <div className="section__content ai-culture__content">
        {/* Centered Scroll-Highlighted Title */}
        <motion.h2
          className="ai-culture__main-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.05, ease: easeOut }}
        >
          &ldquo;<span className="highlight-dark">AI không thay thế con người</span>,{" "}
          <span className="highlight-mint-teal">AI giúp con người làm tốt hơn</span>&rdquo;
        </motion.h2>

        <motion.p
          className="ai-culture__desc"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          Triết lý văn hóa làm việc tại QTM xem công nghệ là đòn bẩy gia tăng sức mạnh cho tài năng và trí tuệ con người.
        </motion.p>

        {/* 6 Pillars Grid (2 rows x 3 cols) */}
        <motion.div
          className="ai-culture__grid"
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
          {pillars.map((item) => (
            <motion.div
              key={item.number}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: easeOut }}
              className="h-full"
            >
              <div className="ai-pillar-card">
                <div className="pillar-card__top">
                  <span className="pillar-card__num">// {item.number}</span>
                  <div className="pillar-card__icon">{item.icon}</div>
                </div>
                <h3 className="pillar-card__title">{item.title}</h3>
                <p className="pillar-card__desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── VALUE FORMULA EQUATION BAR ("Công thức giá trị") ── */}
        <motion.div
          className="ai-culture__formula-bar"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.25, ease: easeOut }}
        >
          <div className="formula-header">
            <span className="formula-title">CÔNG THỨC GIÁ TRỊ VƯỢT TRỘI</span>
          </div>

          <div className="formula-equation">
            {/* Element 1: Human */}
            <div className="equation-block">
              <div className="block-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#123A53" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="block-text">
                <span className="block-title">Tư Duy Con Người</span>
                <span className="block-sub">Chiến lược &amp; Cảm xúc</span>
              </div>
            </div>

            {/* Operator: Plus */}
            <div className="equation-operator">+</div>

            {/* Element 2: Tech/AI */}
            <div className="equation-block">
              <div className="block-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2">
                  <path d="M12 2v20M2 12h20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="block-text">
                <span className="block-title">Công Nghệ AI</span>
                <span className="block-sub">Dữ liệu &amp; Tự động hóa</span>
              </div>
            </div>

            {/* Operator: Equals */}
            <div className="equation-operator equation-operator--equals">=</div>

            {/* Element 3: Exponential Value */}
            <div className="equation-block equation-block--result">
              <div className="block-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="block-text">
                <span className="block-title">Giá Trị Vượt Trội</span>
                <span className="block-sub">Hiệu quả &amp; ROI Đột phá</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
