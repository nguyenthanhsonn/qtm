"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Card3DTilt from "@/components/Card3DTilt";
import ParticleField from "@/components/TechBackground/ParticleField";

type RoadmapItem = {
  year: string;
  code: string;
  tagline: string;
  title: string;
  desc: string;
  keyTech: string[];
  metrics: string;
};

const roadmapData: RoadmapItem[] = [
  {
    year: "2026",
    code: "NODE_2026_V1",
    tagline: "SÁNG TẠO DỰA TRÊN DỮ LIỆU",
    title: "AI-Driven Content Engine & QTM Data Lab",
    desc: "Tự động hóa 50% quy trình sản xuất nội dung đa kênh. Chính thức đi vào hoạt động QTM Data Lab — Trung tâm nghiên cứu & phân tích dữ liệu hành vi người dùng truyền thông số.",
    keyTech: ["Generative Content Engine", "Social Data Crawler", "Real-time Sentiment Analysis"],
    metrics: "Tăng tốc độ sản xuất nội dung x3.5 lần",
  },
  {
    year: "2027",
    code: "NODE_2027_V2",
    tagline: "MÔ HÌNH DỰ BÁO XU HƯỚNG",
    title: "Predictive Media Platform & Automated Workflow",
    desc: "Ứng dụng các mô hình học sâu (Deep Learning) để dự báo xu hướng truyền thông và chủ đề hot-trend trước khi bùng nổ. Tối ưu hóa chi phí mua quảng cáo truyền thông đa kênh.",
    keyTech: ["Deep Learning Trend Predictor", "Automated Media Buying", "MarTech Pipeline"],
    metrics: "Dự báo chính xác 88% sóng truyền thông",
  },
  {
    year: "2028",
    code: "NODE_2028_V3",
    tagline: "TRẢI NGHIỆM NHẬP VAI 3D",
    title: "Immersive Brand Experience & Interactive Ads",
    desc: "Tích hợp công nghệ AR/VR và 3D Interactive Display vào các chiến dịch truyền thông thương hiệu lớn. Biến người xem từ thụ động sang chủ động tương tác với thông điệp.",
    keyTech: ["WebGL 3D Rendering", "Spatial AR Ads", "Interactive Video Stream"],
    metrics: "Tăng thời gian giữ chân (Engagement Time) +240%",
  },
  {
    year: "2029",
    code: "NODE_2029_V4",
    tagline: "TỰ ĐỘNG HÓA SIÊU CÁ NHÂN HÓA",
    title: "Hyper-Personalized Content at Scale",
    desc: "Phân phối thông điệp truyền thông real-time được cá nhân hóa theo từng ngữ cảnh riêng biệt của từng tệp khách hàng cá nhân mà vẫn đảm bảo tính nhất quán của thương hiệu.",
    keyTech: ["Dynamic Creative Optimization (DCO)", "Contextual AI Agent", "Edge Personalization"],
    metrics: "Chuyển đổi chiến dịch (CTR/CVR) tăng 180%",
  },
  {
    year: "2030",
    code: "NODE_2030_V5",
    tagline: "HỆ SINH THÁI REGIONAL MEDIATECH",
    title: "Regional MediaTech Ecosystem Expansion",
    desc: "Mở rộng mạng lưới đối tác và cung cấp giải pháp truyền thông công nghệ toàn diện cho các tập đoàn thương hiệu lớn tại khu vực Đông Nam Á (SEA).",
    keyTech: ["Cross-border Media Hub", "Global AI Localization", "Enterprise MarTech Suite"],
    metrics: "Phục vụ 500+ thương hiệu dẫn đầu khu vực",
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutRoadmap() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-advance node timeline if not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roadmapData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeItem = roadmapData[activeIndex];

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section
      id="roadmap"
      className="section section--roadmap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
          LỘ TRÌNH PHÁT TRIỂN <span className="title-highlight-mint">2026 - 2030</span>
        </motion.h2>

        <motion.p
          className="roadmap__subtitle"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          Dùng công nghệ kể câu chuyện tương lai — Từng bước nâng tầm năng lực truyền thông số bằng giải pháp đột phá.
        </motion.p>

        {/* ── TIMELINE TRACK (Horizontal Desktop, Vertical Mobile) ── */}
        <motion.div
          className="roadmap__timeline-container"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.15, ease: easeOut }}
        >
          {/* Animated Connecting Line with Running Signal Pulse */}
          <div className="timeline-track">
            <div className="timeline-track__base" />
            <div
              className="timeline-track__active-fill"
              style={{
                width: `${(activeIndex / (roadmapData.length - 1)) * 100}%`,
              }}
            />
            <div className="timeline-track__laser-pulse" />
          </div>

          {/* 5 Milestone Nodes */}
          <div className="timeline-nodes-row">
            {roadmapData.map((item, idx) => {
              const isActive = idx === activeIndex;
              const isPast = idx < activeIndex;

              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`timeline-node-btn ${isActive ? "active" : ""} ${isPast ? "past" : ""}`}
                  aria-label={`Milestone năm ${item.year}`}
                >
                  <div className="node-glow-ring" />
                  <div className="node-circle">
                    <span className="node-dot" />
                  </div>
                  <div className="node-label">
                    <span className="node-year">{item.year}</span>
                    <span className="node-tagline">{item.tagline}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── ACTIVE MILESTONE DISPLAY CARD ── */}
        <motion.div
          className="roadmap__card-container"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.25, ease: easeOut }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.year}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <Card3DTilt
                className="roadmap-glass-card"
                maxTilt={6}
                scale={1.01}
                glareColor="rgba(56, 207, 200, 0.4)"
                glareOpacity={0.4}
              >
                {/* HUD Corner accents */}
                <div className="hud-corner-mark top-left" aria-hidden="true" />
                <div className="hud-corner-mark top-right" aria-hidden="true" />
                <div className="hud-corner-mark bottom-left" aria-hidden="true" />
                <div className="hud-corner-mark bottom-right" aria-hidden="true" />

                <div className="roadmap-card__header">
                  <div className="header-left">
                    <span className="year-badge">{activeItem.year}</span>
                  </div>
                  <div className="header-right">
                    <span className="metrics-badge">⚡ {activeItem.metrics}</span>
                  </div>
                </div>

                <h3 className="roadmap-card__title">{activeItem.title}</h3>
                <p className="roadmap-card__desc">{activeItem.desc}</p>

                <div className="roadmap-card__tech-row">
                  <span className="tech-label">CORE TECH ENGINES:</span>
                  <div className="tech-pills">
                    {activeItem.keyTech.map((tech) => (
                      <span key={tech} className="tech-pill">
                        <span className="pill-icon">◈</span> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
