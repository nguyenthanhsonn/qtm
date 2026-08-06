"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Card3DTilt from "@/components/Card3DTilt";
import ParticleField from "@/components/TechBackground/ParticleField";

type RoadmapNode = {
  year: string;
  title: string;
  desc: string;
  iconSvg: React.ReactNode;
};

const roadmapNodes: RoadmapNode[] = [
  {
    year: "2026",
    title: "HOÀN THIỆN MÔ HÌNH MEDIATECH",
    desc: "Xây dựng nền tảng vững chắc về chiến lược - sáng tạo - công nghệ.",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.55 1.66-2.48l-2.18-2.18c-.93.4-1.77.95-2.48 1.66z" />
        <path d="M15 9l-6 6" />
        <path d="M9 15l-1.5-1.5" />
        <path d="M12 12l-1.5-1.5" />
        <path d="M15 9l-1.5-1.5" />
        <path d="M9.5 6.5L17.5 3.5 20.5 6.5 17.5 14.5" />
      </svg>
    ),
  },
  {
    year: "2027",
    title: "CHUẨN HÓA HỆ THỐNG AI & AUTOMATION",
    desc: "Tích hợp AI vào dòng công việc, tối ưu hóa quy trình để nâng cao hiệu suất và tính chính xác.",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="15" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    year: "2028",
    title: "XÂY DỰNG NỀN TẢNG DỮ LIỆU KHÁCH HÀNG",
    desc: "Phát triển hệ thống dữ liệu thông minh, cá nhân hóa trải nghiệm và tối ưu trải nghiệm khách hàng.",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    year: "2029",
    title: "MỞ RỘNG HỆ SINH THÁI GIẢI PHÁP",
    desc: "Đa dạng hóa giải pháp, kết nối đối tác và mở rộng quy mô thị trường ngoài nước.",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="14.12" y1="10.12" x2="17.5" y2="6.5" />
        <line x1="9.88" y1="13.88" x2="6.5" y2="17.5" />
        <line x1="9.88" y1="10.12" x2="6.5" y2="6.5" />
        <line x1="14.12" y1="13.88" x2="17.5" y2="17.5" />
      </svg>
    ),
  },
  {
    year: "2030",
    title: "TRỞ THÀNH STRATEGIC MEDIATECH PARTNER",
    desc: "Trở thành đối tác chiến lược thiết yếu giai đoạn 2026-2030, cùng công nghệ và dữ liệu mở đường tương lai.",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFC72C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutRoadmap() {
  const reduceMotion = useReducedMotion();
  const [activeHoverNode, setActiveHoverNode] = useState<number | null>(null);

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="roadmap" className="section section--roadmap">
      {/* Background Particles & Grid */}
      <div className="roadmap__bg-overlay" aria-hidden="true" />
      <div className="roadmap__bg-grid" aria-hidden="true" />
      <ParticleField />

      <div className="section__content roadmap__content">
        {/* Title */}
        <motion.h2
          className="roadmap__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          HÀNH TRÌNH 5 NĂM <span className="title-highlight-mint">KIẾN TẠO TƯƠNG LAI</span>
        </motion.h2>

        <motion.p
          className="roadmap__subtitle"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          QTM không ngừng đổi mới và mở rộng năng lực để trở thành đối tác truyền thông chiến lược hàng đầu tại Việt Nam.
        </motion.p>

        {/* 5 Milestone Cards Grid with Ascending Trajectory Arrow */}
        <motion.div
          className="roadmap-trajectory-wrapper"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.18, ease: easeOut }}
        >
          {/* Background Ascending Arrow SVG */}
          <div className="ascending-arrow-svg-bg" aria-hidden="true">
            <svg viewBox="0 0 1000 120" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M 20,100 Q 250,90 500,60 T 960,15"
                fill="none"
                stroke="url(#arrowGrad)"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <path d="M 960,15 L 945,8 L 948,22 Z" fill="#00D4FF" />
              <defs>
                <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38CFC8" opacity="0.3" />
                  <stop offset="50%" stopColor="#00D4FF" opacity="0.7" />
                  <stop offset="100%" stopColor="#6366F1" opacity="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 5 Cards Row */}
          <div className="roadmap-cards-grid">
            {roadmapNodes.map((node, index) => (
              <div
                key={node.year}
                className={`roadmap-node-card-wrap node-idx-${index}`}
                onMouseEnter={() => setActiveHoverNode(index)}
                onMouseLeave={() => setActiveHoverNode(null)}
              >
                <Card3DTilt
                  className="roadmap-node-card"
                  maxTilt={8}
                  scale={1.03}
                  glareColor="rgba(56, 207, 200, 0.35)"
                  glareOpacity={0.35}
                >
                  <div className="card-top-year">
                    <span className="year-number">{node.year}</span>
                    <div className="icon-badge-box">{node.iconSvg}</div>
                  </div>

                  <h3 className="card-node-title">{node.title}</h3>
                  <p className="card-node-desc">{node.desc}</p>
                </Card3DTilt>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
