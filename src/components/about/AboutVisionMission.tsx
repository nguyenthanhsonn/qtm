"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import BackgroundGrid from "@/components/TechBackground/BackgroundGrid";
import Card3DTilt from "@/components/Card3DTilt";

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutVisionMission() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="vision-mission" className="section section--about-vm">
      {/* Light Background + Floating Grid */}
      <div className="about-vm__bg" aria-hidden="true" />
      <div className="about-vm__glow" aria-hidden="true" />
      <BackgroundGrid gridSize={40} opacity={0.07} />

      <div className="section__content about-vm__content">
        {/* Section Title */}
        <motion.h2
          className="about-vm__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          TẦM NHÌN &amp; <span className="title-highlight">SỨ MỆNH</span>
        </motion.h2>

        <motion.p
          className="about-vm__subtitle"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          Định hướng chiến lược dẫn dắt QTM trên hành trình dẫn đầu làn sóng truyền thông công nghệ tại Việt Nam.
        </motion.p>

        {/* 2 Side-by-Side Cards (Vision & Mission) */}
        <motion.div
          className="about-vm__grid"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.15, delayChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Card 1: VISION */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: easeOut }}>
            <Card3DTilt
              className="hud-card hud-card--light h-full"
              maxTilt={12}
              scale={1.03}
              glareColor="rgba(56, 207, 200, 0.35)"
              glareOpacity={0.4}
            >
              {/* Sci-fi Corner Markers */}
              <div className="corner-mark top-left" aria-hidden="true" />
              <div className="corner-mark top-right" aria-hidden="true" />
              <div className="corner-mark bottom-left" aria-hidden="true" />
              <div className="corner-mark bottom-right" aria-hidden="true" />

              <div className="card-top-tag">
                <span className="mono-sys-tag">// VISION</span>
                <span className="card-badge">2026 - 2030</span>
              </div>

              <div className="card-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                </svg>
              </div>

              <div className="hud-title">
                <span>TẦM NHÌN</span>
                <span className="hud-sub-label">TIÊN PHONG CHUẨN MỰC MEDIATECH</span>
              </div>

              <div className="hud-content">
                <p className="vm-card-text">
                  Trở thành <strong className="highlight-dark">Group Truyền thông Công nghệ (MediaTech) hàng đầu Đông Nam Á</strong>, nơi công nghệ dữ liệu và trí tuệ nhân tạo (AI) hợp nhất cùng tư duy sáng tạo đỉnh cao — thiết lập nên những chuẩn mực hiệu quả hoàn toàn mới cho ngành truyền thông thương hiệu.
                </p>
                <ul className="vm-card-bullets">
                  <li>
                    <span className="bullet-dot" /> Dẫn đầu xu hướng chuyển đổi số nội dung đa nền tảng.
                  </li>
                  <li>
                    <span className="bullet-dot" /> Xây dựng hệ sinh thái dữ liệu truyền thông độc quyền.
                  </li>
                  <li>
                    <span className="bullet-dot" /> Nâng tầm thương hiệu Việt ra thị trường quốc tế.
                  </li>
                </ul>
              </div>
            </Card3DTilt>
          </motion.div>

          {/* Card 2: MISSION */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: easeOut }}>
            <Card3DTilt
              className="hud-card hud-card--light h-full"
              maxTilt={12}
              scale={1.03}
              glareColor="rgba(56, 207, 200, 0.35)"
              glareOpacity={0.4}
            >
              {/* Sci-fi Corner Markers */}
              <div className="corner-mark top-left" aria-hidden="true" />
              <div className="corner-mark top-right" aria-hidden="true" />
              <div className="corner-mark bottom-left" aria-hidden="true" />
              <div className="corner-mark bottom-right" aria-hidden="true" />

              <div className="card-top-tag">
                <span className="mono-sys-tag">// MISSION</span>
                <span className="card-badge">EXECUTION_CORE</span>
              </div>

              <div className="card-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a10 10 0 0 1 10 10" />
                  <path d="m16 8-4 4-2-2" />
                  <path d="M12 12v6" />
                </svg>
              </div>

              <div className="hud-title">
                <span>SỨ MỆNH</span>
                <span className="hud-sub-label">TỐI ƯU HÓA GIÁ TRỊ THƯƠNG HIỆU</span>
              </div>

              <div className="hud-content">
                <p className="vm-card-text">
                  Biến những tập dữ liệu thị trường phức tạp thành <strong className="highlight-dark">nội dung truyền thông giàu cảm xúc và sức lan tỏa mạnh mẽ</strong>. QTM cam kết giúp doanh nghiệp bứt phá doanh thu, tối ưu chi phí vận hành truyền thông và kiến tạo giá trị tăng trưởng bền vững.
                </p>
                <ul className="vm-card-bullets">
                  <li>
                    <span className="bullet-dot" /> Dữ liệu thực chiến — Ra quyết định chính xác.
                  </li>
                  <li>
                    <span className="bullet-dot" /> Sáng tạo đột phá — Chạm đúng tâm lý khách hàng.
                  </li>
                  <li>
                    <span className="bullet-dot" /> Cam kết đồng hành — Đo lường ROI rõ ràng.
                  </li>
                </ul>
              </div>
            </Card3DTilt>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
