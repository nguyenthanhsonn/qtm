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

        {/* 2 Main Side-by-Side Light Glass Cards */}
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
              className="vm-light-card h-full"
              maxTilt={8}
              scale={1.02}
              glareColor="rgba(56, 207, 200, 0.3)"
              glareOpacity={0.3}
            >
              <div className="vm-card-top-icon">
                <div className="icon-circle icon-circle--blue">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
              </div>

              <h3 className="vm-card-title">TẦM NHÌN</h3>
              <p className="vm-card-highlight-sub">Trở thành doanh nghiệp Công nghệ Truyền thông hàng đầu Việt Nam.</p>
              <p className="vm-card-text">
                Tiên phong ứng dụng trí tuệ nhân tạo, dữ liệu và công nghệ vào hoạt động truyền thông, đồng hành cùng doanh nghiệp xây dựng thương hiệu, nâng cao năng lực cạnh tranh và phát triển bền vững trong kỷ nguyên số.
              </p>
            </Card3DTilt>
          </motion.div>

          {/* Card 2: MISSION */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: easeOut }}>
            <Card3DTilt
              className="vm-light-card h-full"
              maxTilt={8}
              scale={1.02}
              glareColor="rgba(56, 207, 200, 0.3)"
              glareOpacity={0.3}
            >
              <div className="vm-card-top-icon">
                <div className="icon-circle icon-circle--teal">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
              </div>

              <h3 className="vm-card-title">SỨ MỆNH</h3>
              <p className="vm-card-highlight-sub">Đồng hành cùng doanh nghiệp chuyển hóa chiến lược thành kết quả.</p>
              <p className="vm-card-text">
                QTM mang đến các giải pháp truyền thông được xây dựng trên nền tảng chiến lược, sáng tạo và công nghệ; giúp doanh nghiệp tối ưu nguồn lực và tạo ra giá trị khác biệt.
              </p>
            </Card3DTilt>
          </motion.div>
        </motion.div>

        {/* 5 Value Pillars Row under Mission */}
        <motion.div
          className="about-vm__pillars-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
        >
          <div className="vm-pillar-item">
            <div className="pillar-icon-box">💎</div>
            <span className="pillar-text">Gia tăng giá trị thương hiệu</span>
          </div>

          <div className="vm-pillar-item">
            <div className="pillar-icon-box">🤝</div>
            <span className="pillar-text">Kết nối hiệu quả với khách hàng</span>
          </div>

          <div className="vm-pillar-item">
            <div className="pillar-icon-box">⚡</div>
            <span className="pillar-text">Tối ưu chi phí và nguồn lực</span>
          </div>

          <div className="vm-pillar-item">
            <div className="pillar-icon-box">📊</div>
            <span className="pillar-text">Đo lường rõ ràng hiệu quả truyền thông</span>
          </div>

          <div className="vm-pillar-item">
            <div className="pillar-icon-box">🚀</div>
            <span className="pillar-text">Tạo nền tảng tăng trưởng dài hạn</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
