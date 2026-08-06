"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";
import Card3DTilt from "@/components/Card3DTilt";
import Link from "next/link";

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutHero() {
  const reduceMotion = useReducedMotion();

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

        <div className="section__content about-hero__content">
          {/* Top Company Slogan Badge */}
          <motion.div
            className="hero-company-slogan-badge"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <span className="company-name">QTM Communication Technology</span>
            <span className="slogan-divider">•</span>
            <span className="company-tagline">Tinh gọn - Linh hoạt - Hiệu quả</span>
          </motion.div>

          {/* 2-Column Main Hero Layout */}
          <div className="hero-main-grid">
            {/* Left Column: Text & CTAs */}
            <div className="hero-left-text-block">
              <motion.h1
                className="about-hero__title"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
              >
                Engineering{" "}
                <span className="title-highlight-mint">Intelligent</span>
                <br />
                Creativity
              </motion.h1>

              <motion.div
                className="about-hero__desc-box"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
              >
                <p className="hero-paragraph">
                  QTM MediaTech là doanh nghiệp hoạt động trong lĩnh vực{" "}
                  <strong className="text-mint">Công nghệ Truyền thông (MediaTech)</strong>, kết hợp giữa{" "}
                  <strong className="text-white">chiến lược, sáng tạo và công nghệ</strong> nhằm kiến tạo những giải pháp truyền thông hiệu quả, có khả năng đo lường và tạo giá trị bền vững cho khách hàng.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="about-hero__actions"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.7, delay: 0.22, ease: easeOut }}
              >
                <a href="/solution" className="btn btn--primary about-hero__btn-fill">
                  <span>KHÁM PHÁ GIẢI PHÁP</span>
                  <span className="btn-arrow">→</span>
                </a>

                <Link href="/contact" className="btn btn--outline about-hero__btn-outline">
                  <span>LIÊN HỆ VỚI QTM</span>
                </Link>
              </motion.div>

              {/* 4 Feature Metric Icons Bar */}
              <motion.div
                className="hero-feature-metrics-row"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.75, delay: 0.28, ease: easeOut }}
              >
                {/* Q — Quality */}
                <div className="metric-icon-card">
                  <div className="icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span className="metric-text">Quality</span>
                </div>

                {/* T — Technology */}
                <div className="metric-icon-card">
                  <div className="icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <span className="metric-text">Technology</span>
                </div>

                {/* M — Mindset */}
                <div className="metric-icon-card">
                  <div className="icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                  </div>
                  <span className="metric-text">Mindset</span>
                </div>

                {/* MediaTech */}
                <div className="metric-icon-card">
                  <div className="icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <span className="metric-text">MediaTech</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: High-tech AI Dashboard Illustration */}
            <motion.div
              className="hero-right-visual-block"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
            >
              <Card3DTilt
                className="hero-visual-glass-card"
                maxTilt={6}
                scale={1.01}
                glareColor="rgba(56, 207, 200, 0.3)"
                glareOpacity={0.35}
              >
                <div className="visual-hud-header">
                  <span className="hud-badge">QTM MEDIATECH PLATFORM</span>
                  <span className="hud-status-dot" />
                </div>

                <div className="visual-graphic-screen">
                  {/* High-tech AI Dashboard Representation */}
                  <div className="dashboard-grid-art">
                    <div className="art-header-line">
                      <span className="art-code">AI_ANALYTICS_V4</span>
                      <span className="art-graph-legend">■ LIVE_FEED</span>
                    </div>

                    <div className="art-bars-container">
                      <div className="art-bar" style={{ height: "65%" }} />
                      <div className="art-bar" style={{ height: "85%" }} />
                      <div className="art-bar" style={{ height: "45%" }} />
                      <div className="art-bar" style={{ height: "95%" }} />
                      <div className="art-bar" style={{ height: "75%" }} />
                    </div>

                    <div className="art-team-silhouettes">
                      <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="silhouettes-svg">
                        <circle cx="200" cy="80" r="50" fill="url(#aiGlow)" opacity="0.4" />
                        <path d="M120 140 C 130 110, 160 110, 170 140" fill="#38CFC8" opacity="0.7" />
                        <circle cx="145" cy="100" r="10" fill="#38CFC8" />
                        <path d="M185 140 C 195 95, 235 95, 245 140" fill="#00D4FF" />
                        <circle cx="215" cy="85" r="12" fill="#00D4FF" />
                        <path d="M260 140 C 270 115, 295 115, 305 140" fill="#38CFC8" opacity="0.7" />
                        <circle cx="282.5" cy="102.5" r="9" fill="#38CFC8" />
                        <defs>
                          <radialGradient id="aiGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 80) rotate(90) scale(50)">
                            <stop stopColor="#38CFC8" />
                            <stop offset="1" stopColor="#38CFC8" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="art-floating-pill">
                      <span className="pill-ai-spark">✦</span> AI Strategy Grounding
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}
