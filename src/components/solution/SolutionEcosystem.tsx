"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";
import SolutionContactModal from "./SolutionContactModal";

type SubBlock = {
  id: string;
  code: string;
  title: string;
  desc: string;
  bullets: string[];
  ctaLabel: string;
  contextTitle: string;
  imageAlt: string;
  imageGraphicSvg: React.ReactNode;
  align: "left" | "right"; // left = image left / text right; right = text left / image right
};

const subBlocks: SubBlock[] = [
  {
    id: "conference-event",
    code: "01 // CONFERENCES & EVENTS",
    title: "HỘI NGHỊ - HỘI THẢO & SỰ KIỆN DOANH NGHIỆP",
    desc: "Chuẩn hóa quy trình tổ chức sự kiện doanh nghiệp đẳng cấp, tích hợp công nghệ tương tác 3D/AR nhập vai, kiểm soát check-in AI tự động và đo lường chỉ số hài lòng của đại biểu real-time.",
    bullets: [
      "Trải nghiệm tương tác AR/3D Spatial Audio nhập vai",
      "Hệ thống Check-in AI & mã QR Code cá nhân hóa tự động",
      "Báo cáo Sentiment Analysis & Engagement Rate tức thì",
    ],
    ctaLabel: "Liên hệ tư vấn Hội nghị",
    contextTitle: "Liên hệ tư vấn Hội nghị - Hội thảo & Sự kiện",
    imageAlt: "Hội nghị hội thảo doanh nghiệp QTM",
    align: "left",
    imageGraphicSvg: (
      <svg viewBox="0 0 400 260" fill="none" className="eco-svg">
        <rect width="400" height="260" rx="16" fill="url(#confBg)" />
        {/* Conference Stage & Audience Light Beam Visual */}
        <path d="M50 220 L150 100 L250 100 L350 220 Z" fill="rgba(56, 207, 200, 0.15)" />
        <circle cx="200" cy="90" r="35" fill="#38CFC8" opacity="0.8" />
        <path d="M120 180 Q200 130 280 180" stroke="#00D4FF" strokeWidth="3" fill="none" />
        <circle cx="120" cy="180" r="6" fill="#00D4FF" />
        <circle cx="200" cy="155" r="6" fill="#38CFC8" />
        <circle cx="280" cy="180" r="6" fill="#00D4FF" />
        <text x="20" y="35" fill="#38CFC8" fontFamily="var(--font-geist-mono)" fontSize="12" fontWeight="700">// EVENT_STAGE_3D</text>
        <defs>
          <linearGradient id="confBg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1C33" />
            <stop offset="100%" stopColor="#123A53" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "outdoor-billboard",
    code: "02 // BILLBOARD & OUTDOOR MEDIA",
    title: "BILLBOARD & OUTDOOR MEDIA (OOH)",
    desc: "Mạng lưới 1,000+ vị trí Billboard & màn hình LED Outdoor đắc địa toàn quốc, tích hợp công nghệ AI Camera thông minh để đo lường chính xác lưu lượng giao thông & tệp nhận diện khách hàng.",
    bullets: [
      "1,000+ Vị trí Billboard LED đắc địa tại các nút giao trọng điểm",
      "AI Traffic Camera Counting & Audience Attribution System",
      "Tự động hóa mua và cập nhật nội dung truyền thông theo ngữ cảnh",
    ],
    ctaLabel: "Liên hệ tư vấn Outdoor Media",
    contextTitle: "Liên hệ tư vấn Billboard & Outdoor Media",
    imageAlt: "Billboard outdoor media QTM",
    align: "right",
    imageGraphicSvg: (
      <svg viewBox="0 0 400 260" fill="none" className="eco-svg">
        <rect width="400" height="260" rx="16" fill="url(#oohBg)" />
        {/* Billboard Structure & Traffic Line Visual */}
        <rect x="80" y="40" width="240" height="130" rx="10" fill="#050C1A" stroke="#38CFC8" strokeWidth="2" />
        <line x1="200" y1="170" x2="200" y2="240" stroke="#2095AD" strokeWidth="6" />
        <path d="M100 110 L160 80 L220 120 L300 70" stroke="#00D4FF" strokeWidth="3" fill="none" />
        <circle cx="300" cy="70" r="5" fill="#38CFC8" />
        <text x="20" y="35" fill="#38CFC8" fontFamily="var(--font-geist-mono)" fontSize="12" fontWeight="700">// OOH_AI_CAM_NETWORK</text>
        <defs>
          <linearGradient id="oohBg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#081225" />
            <stop offset="100%" stopColor="#0B1C33" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "concert-entertainment",
    code: "03 // CONCERT & ENTERTAINMENT",
    title: "CONCERT & ENTERTAINMENT MARKETING",
    desc: "Thiết kế và vận hành các đại nhạc hội, chuỗi sự kiện giải trí bùng nổ quy mô khủng, kết hợp công nghệ sân khấu 3D Spatial Audio và chiến lược truyền thông mạng xã hội thu hút hàng triệu khán giả.",
    bullets: [
      "Sân khấu 3D Spatial Audio & Hiệu ứng ánh sáng trình diễn đỉnh cao",
      "Mạng lưới KOLs, Nghệ sĩ & Influencers hàng đầu độc quyền",
      "Chiến dịch Social Content Marketing bùng nổ đa nền tảng",
    ],
    ctaLabel: "Liên hệ tư vấn Concert",
    contextTitle: "Liên hệ tư vấn Concert & Entertainment Marketing",
    imageAlt: "Concert entertainment marketing QTM",
    align: "left",
    imageGraphicSvg: (
      <svg viewBox="0 0 400 260" fill="none" className="eco-svg">
        <rect width="400" height="260" rx="16" fill="url(#concertBg)" />
        {/* Concert Stage Spotlights & Soundwaves Visual */}
        <path d="M80 0 L150 200 L250 200 L320 0 Z" fill="rgba(0, 212, 255, 0.12)" />
        <path d="M120 0 L180 200 L220 200 L280 0 Z" fill="rgba(56, 207, 200, 0.2)" />
        <circle cx="200" cy="180" r="40" fill="#38CFC8" opacity="0.3" />
        <path d="M40 220 Q 120 190 200 220 T 360 220" stroke="#FFC72C" strokeWidth="3" fill="none" />
        <text x="20" y="35" fill="#38CFC8" fontFamily="var(--font-geist-mono)" fontSize="12" fontWeight="700">// MEGA_CONCERT_3D</text>
        <defs>
          <linearGradient id="concertBg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B192C" />
            <stop offset="100%" stopColor="#123A53" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "csr-community",
    code: "04 // CSR & COMMUNITY IMPACT",
    title: "CSR & COMMUNITY IMPACT CAMPAIGN",
    desc: "Kiến tạo các chiến dịch trách nhiệm xã hội sâu sắc, gắn kết thương hiệu với giá trị cộng đồng bền vững (ESG), định vị hình ảnh uy tín và chạm trọn niềm tin của công chúng.",
    bullets: [
      "Chiến lược CSR bài bản tuân thủ chuẩn mực phát triển bền vững ESG",
      "Kết nối mạng lưới cơ quan truyền thông báo chí uy tín toàn quốc",
      "Truyền thông lan tỏa thông điệp nhân văn chạm đúng cảm xúc",
    ],
    ctaLabel: "Liên hệ tư vấn CSR",
    contextTitle: "Liên hệ tư vấn CSR & Community Impact Campaign",
    imageAlt: "CSR community impact QTM",
    align: "right",
    imageGraphicSvg: (
      <svg viewBox="0 0 400 260" fill="none" className="eco-svg">
        <rect width="400" height="260" rx="16" fill="url(#csrBg)" />
        {/* Heart/Community Globe Graphic Visual */}
        <circle cx="200" cy="130" r="60" fill="rgba(56, 207, 200, 0.1)" stroke="#38CFC8" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M200 100 C180 80 150 95 150 120 C150 150 200 175 200 175 C200 175 250 150 250 120 C250 95 220 80 200 100 Z" fill="#00D4FF" opacity="0.8" />
        <text x="20" y="35" fill="#38CFC8" fontFamily="var(--font-geist-mono)" fontSize="12" fontWeight="700">// ESG_COMMUNITY_HUB</text>
        <defs>
          <linearGradient id="csrBg" x1="0" y1="0" x2="400" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#050C1A" />
            <stop offset="100%" stopColor="#0B1C33" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SolutionEcosystem() {
  const reduceMotion = useReducedMotion();
  const [modalState, setModalState] = useState<{ isOpen: boolean; contextTitle: string }>({
    isOpen: false,
    contextTitle: "",
  });

  const handleOpenModal = (contextTitle: string) => {
    setModalState({ isOpen: true, contextTitle });
  };

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <section id="ecosystem" className="section section--sol-eco">
        {/* Darkest Tech Background Overlay */}
        <div className="sol-eco__bg-overlay" aria-hidden="true" />
        <div className="sol-eco__bg-grid" aria-hidden="true" />
        <ParticleField />

        <div className="section__content sol-eco__content">
          {/* Main Title with Glowing Aqua Mint Text */}
          <motion.div
            className="sol-eco__header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
          >
            <span className="sol-eco__tag-pill">// INTEGRATED SOLUTIONS ECOSYSTEM</span>
            <h2 className="sol-eco__title">
              HỆ SINH THÁI GIẢI PHÁP <span className="text-glow-mint">QTM</span>
            </h2>
            <p className="sol-eco__subtitle">
              Bộ 4 giải pháp truyền thông công nghệ toàn diện giúp doanh nghiệp bứt phá mọi mục tiêu chiến lược.
            </p>
          </motion.div>

          {/* Vertical Connecting Line running through all 4 Sub-blocks */}
          <div className="eco-connecting-timeline-line" aria-hidden="true">
            <div className="timeline-pulse-dot" />
          </div>

          {/* 4 Alternating Sub-Blocks */}
          <div className="sol-eco-subblocks-container">
            {subBlocks.map((block, index) => {
              const isImageLeft = block.align === "left";

              return (
                <motion.div
                  key={block.id}
                  className={`eco-subblock-row ${isImageLeft ? "img-left" : "img-right"}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  transition={{ duration: 0.75, delay: 0.1 + index * 0.1, ease: easeOut }}
                >
                  {/* Image Graphic Block */}
                  <div className="subblock-image-col">
                    <div className="eco-image-frame">
                      {block.imageGraphicSvg}
                      <div className="eco-image-glow-border" />
                    </div>
                  </div>

                  {/* Text Content Block */}
                  <div className="subblock-text-col">
                    <span className="subblock-code">{block.code}</span>
                    <h3 className="subblock-title">{block.title}</h3>
                    <p className="subblock-desc">{block.desc}</p>

                    <ul className="subblock-bullets">
                      {block.bullets.map((b) => (
                        <li key={b}>
                          <span className="bullet-check">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => handleOpenModal(block.contextTitle)}
                      className="subblock-cta-btn"
                    >
                      <span>{block.ctaLabel}</span>
                      <span className="arrow">→</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Context Contact Modal */}
      <SolutionContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, contextTitle: "" })}
        contextTitle={modalState.contextTitle}
      />
    </>
  );
}
