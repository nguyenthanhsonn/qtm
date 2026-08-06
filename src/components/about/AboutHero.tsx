"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";
import Card3DTilt from "@/components/Card3DTilt";
import ContactModal from "./ContactModal";

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutHero() {
  const reduceMotion = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <section id="about-hero" className="section section--about-hero">
        {/* Background Network / Particles */}
        <div className="about-hero__bg-overlay" aria-hidden="true" />
        <div className="about-hero__bg-grid" aria-hidden="true" />
        <ParticleField />

        {/* HUD Technical Corner Indicators */}
        <div className="about-hero__hud-corner about-hero__hud-corner--top-left" aria-hidden="true">
          <span className="hud-dot" />
          <span>SYS_ID // QTM_MEDIA_TECH_V2</span>
        </div>
        <div className="about-hero__hud-corner about-hero__hud-corner--top-right" aria-hidden="true">
          <span>LAT: 21.0285 / LON: 105.8542</span>
        </div>

        <div className="section__content about-hero__content">
          {/* System Tag */}
          <motion.div
            className="system-tag-pill"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <span>// SECTION_01</span>
            <span className="tag-dot">•</span>
            <span>ABOUT_QTM_MEDIATECH</span>
          </motion.div>

          {/* Hero Main Title */}
          <motion.h1
            className="about-hero__title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
          >
            Engineering <span className="title-highlight-mint">Intelligent</span> Creativity
          </motion.h1>

          {/* Company Description Frame (Glassmorphism + 1px Teal low opacity border) */}
          <motion.div
            className="about-hero__desc-wrapper"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
          >
            <Card3DTilt
              className="about-glass-card"
              maxTilt={6}
              scale={1.01}
              glareColor="rgba(56, 207, 200, 0.25)"
              glareOpacity={0.3}
            >
              <div className="hud-corner-mark top-left" aria-hidden="true" />
              <div className="hud-corner-mark top-right" aria-hidden="true" />
              <div className="hud-corner-mark bottom-left" aria-hidden="true" />
              <div className="hud-corner-mark bottom-right" aria-hidden="true" />

              <p className="about-hero__desc">
                <strong className="desc-highlight">QTM</strong> là đơn vị tiên phong định hình mô hình{" "}
                <span className="gradient-text-teal">Tech-Driven Media</span> tại Việt Nam — nơi công nghệ là công cụ tối thượng, và truyền thông ấn tượng là kết quả tất yếu.
                Chúng tôi kết hợp sức mạnh của <strong className="text-white">Dữ liệu thông minh</strong>,{" "}
                <strong className="text-white">Trí tuệ nhân tạo (AI)</strong> và <strong className="text-white">Tư duy chiến lược</strong> để kiến tạo các giải pháp truyền thông có thể đo lường và tạo giá trị lâu dài cho thương hiệu.
              </p>
            </Card3DTilt>
          </motion.div>

          {/* 2 CTA Buttons */}
          <motion.div
            className="about-hero__actions"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
          >
            <a href="#roadmap" className="btn btn--primary about-hero__btn-fill">
              <span>KHÁM PHÁ GIẢI PHÁP</span>
              <span className="btn-arrow">↓</span>
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn--outline about-hero__btn-outline"
            >
              <span>LIÊN HỆ VỚI QTM</span>
              <span className="btn-arrow">→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Dark-glass Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
