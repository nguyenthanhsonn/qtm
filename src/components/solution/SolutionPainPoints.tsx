"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";

type PainPointItem = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  code: string;
};

const painPoints: PainPointItem[] = [
  {
    id: "brand-impression",
    code: "PAIN_01",
    icon: "🎯",
    title: "Khó tạo dấu ấn",
    desc: "Thông điệp thương hiệu dễ bị mờ nhạt giữa hàng ngàn chiến dịch truyền thông của đối thủ trên thị trường.",
  },
  {
    id: "reach-virality",
    code: "PAIN_02",
    icon: "📢",
    title: "Thiếu sức lan tỏa",
    desc: "Ngân sách đầu tư lớn nhưng hiệu ứng lan tỏa không như kỳ vọng, không tiếp cận đúng tệp khách hàng mục tiêu.",
  },
  {
    id: "multichannel-gap",
    code: "PAIN_03",
    icon: "🔗",
    title: "Thiếu kết nối",
    desc: "Sự đứt gãy rào cản giữa kênh Online và Offline khiến trải nghiệm khách hàng không liên tục và thiếu gắn kết.",
  },
  {
    id: "roi-measurement",
    code: "PAIN_04",
    icon: "📊",
    title: "Khó đo lường",
    desc: "Không thể minh bạch hóa bộ chỉ số đo lường hiệu quả (ROI), khó xác định chính xác tỷ lệ chuyển đổi từ chiến dịch.",
  },
  {
    id: "operation-cost",
    code: "PAIN_05",
    icon: "⚡",
    title: "Chi phí vận hành lớn",
    desc: "Quy trình triển khai thủ công cồng kềnh kéo dài thời gian, tiêu tốn nhiều nhân lực và ngân sách doanh nghiệp.",
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SolutionPainPoints() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % painPoints.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + painPoints.length) % painPoints.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % painPoints.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) handlePrev();
      else handleNext();
    }
    touchStartX.current = null;
  };

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="pain-points" className="section section--sol-pain">
      {/* Background Overlay & Network Pattern */}
      <div className="sol-pain__bg-overlay" aria-hidden="true" />
      <div className="sol-pain__bg-grid" aria-hidden="true" />
      <ParticleField />

      <div className="section__content sol-pain__content">
        {/* Title */}
        <motion.h2
          className="sol-pain__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          DOANH NGHIỆP ĐANG GẶP <span className="title-highlight-mint">ĐIỀU GÌ?</span>
        </motion.h2>

        <motion.p
          className="sol-pain__subtitle"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          Những rào cản phổ biến cản trở sự tăng trưởng thương hiệu và hiệu quả kinh doanh trong thời đại số.
        </motion.p>

        {/* ── 5 PAIN POINTS COVERFLOW CAROUSEL ── */}
        <motion.div
          className="sol-pain-carousel-wrapper"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.18, ease: easeOut }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="pain-carousel-track">
            {painPoints.map((item, index) => {
              let offset = index - activeIndex;
              const half = Math.floor(painPoints.length / 2);
              if (offset > half) offset -= painPoints.length;
              if (offset < -half) offset += painPoints.length;

              const absOffset = Math.abs(offset);
              if (absOffset > 2) return null;

              const isCenter = offset === 0;
              const translateX = offset * 240;
              const scale = isCenter ? 1.12 : Math.max(0.72, 0.88 - absOffset * 0.14);
              const opacity = isCenter ? 1 : Math.max(0.4, 0.8 - absOffset * 0.25);
              const zIndex = 10 - absOffset;
              const blur = isCenter ? 0 : absOffset * 3;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`pain-card ${isCenter ? "is-active" : ""}`}
                  style={{
                    transform: `translate(calc(-50% + ${translateX}px), -50%) scale(${scale})`,
                    zIndex,
                    opacity,
                    filter: `blur(${blur}px)`,
                  }}
                >
                  <div className="card-top-tag">{item.code}</div>
                  <div className="card-icon">{item.icon}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Carousel Controls */}
          <div className="pain-carousel-controls">
            <button
              type="button"
              onClick={handlePrev}
              className="pain-nav-btn pain-nav-btn--prev"
              aria-label="Rào cản trước"
            >
              ‹
            </button>

            <div className="pain-dots">
              {painPoints.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`pain-dot ${idx === activeIndex ? "active" : ""}`}
                  aria-label={`Chuyển đến rào cản ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="pain-nav-btn pain-nav-btn--next"
              aria-label="Rào cản tiếp theo"
            >
              ›
            </button>
          </div>
        </motion.div>

        {/* ── STAT-BAR NGANG (Dark Glass + Aqua Mint numbers) ── */}
        <motion.div
          className="sol-pain-stat-bar"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.25, ease: easeOut }}
        >
          <div className="stat-item">
            <span className="stat-number">23%</span>
            <span className="stat-label">Chỉ 23% khách hàng nhớ thương hiệu sau sự kiện đơn lẻ</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-item">
            <span className="stat-number">85%</span>
            <span className="stat-label">85% ngân sách lãng phí nếu thiếu hệ thống đo lường real-time</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-item">
            <span className="stat-number">68%</span>
            <span className="stat-label">68% thương hiệu gặp khó khăn trong kết nối trải nghiệm đa kênh</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
