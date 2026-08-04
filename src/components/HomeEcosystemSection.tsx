"use client";

import "@/scss/home-ecosystem.scss";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

type Panel = {
  id: number;
  alt: string;
  rotateY: number;
  rotateZ: number;
  offsetY: number;
  zIndex: number;
  featured?: boolean;
  mediaClass: string;
  imageSrc: string;
};

const panels: Panel[] = [
  {
    id: 1,
    alt: "Không gian sự kiện và hội trường",
    rotateY: 16,
    rotateZ: -2.5,
    offsetY: 10,
    zIndex: 1,
    mediaClass: "home-ecosystem__panel-media--1",
    imageSrc: "/home/ecosystem/panel-events.jpg",
  },
  {
    id: 2,
    alt: "Truyền thông đô thị và OOH",
    rotateY: 9,
    rotateZ: -1.2,
    offsetY: 4,
    zIndex: 2,
    mediaClass: "home-ecosystem__panel-media--2",
    imageSrc: "/home/ecosystem/panel-city.jpg",
  },
  {
    id: 3,
    alt: "Sản xuất sự kiện quy mô lớn",
    rotateY: 3,
    rotateZ: -0.4,
    offsetY: -4,
    zIndex: 4,
    featured: true,
    mediaClass: "home-ecosystem__panel-media--3",
    imageSrc: "/home/ecosystem/panel-concert.jpg",
  },
  {
    id: 4,
    alt: "Phát triển bền vững",
    rotateY: -3,
    rotateZ: 0.4,
    offsetY: -4,
    zIndex: 4,
    featured: true,
    mediaClass: "home-ecosystem__panel-media--4",
    imageSrc: "/home/ecosystem/panel-growth.jpg",
  },
  {
    id: 5,
    alt: "Không gian trải nghiệm & Văn phòng",
    rotateY: -9,
    rotateZ: 1.2,
    offsetY: 4,
    zIndex: 2,
    mediaClass: "home-ecosystem__panel-media--5",
    imageSrc: "/home/ecosystem/panel-office.jpg",
  },
  {
    id: 6,
    alt: "Công nghệ và phân tích dữ liệu",
    rotateY: -16,
    rotateZ: 2.5,
    offsetY: 10,
    zIndex: 1,
    mediaClass: "home-ecosystem__panel-media--6",
    imageSrc: "/home/ecosystem/panel-data.jpg",
  },
];

function NetworkMesh() {
  const dots = [
    { cx: 120, cy: 98 },
    { cx: 280, cy: 96 },
    { cx: 440, cy: 92 },
    { cx: 600, cy: 90 },
    { cx: 760, cy: 92 },
    { cx: 920, cy: 96 },
    { cx: 1080, cy: 98 },
  ];

  return (
    <svg
      className="home-ecosystem__network"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mesh-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(56, 189, 248, 0.1)" />
          <stop offset="20%" stopColor="rgba(56, 189, 248, 0.6)" />
          <stop offset="50%" stopColor="rgba(6, 182, 212, 0.9)" />
          <stop offset="80%" stopColor="rgba(56, 189, 248, 0.6)" />
          <stop offset="100%" stopColor="rgba(56, 189, 248, 0.1)" />
        </linearGradient>
        <filter id="dot-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main bottom constellation wave */}
      <path
        d="M 10 92 Q 600 115 1190 92"
        fill="none"
        stroke="url(#mesh-line-gradient)"
        strokeWidth="2"
      />
      <path
        d="M 30 82 Q 600 102 1170 82"
        fill="none"
        stroke="rgba(56, 189, 248, 0.35)"
        strokeWidth="1"
        strokeDasharray="5 5"
      />

      {/* Connecting constellation lines */}
      <path
        d="M 120 98 L 280 96 L 440 92 L 600 90 L 760 92 L 920 96 L 1080 98"
        fill="none"
        stroke="rgba(0, 212, 255, 0.4)"
        strokeWidth="1.2"
      />

      {/* Glowing connection nodes */}
      {dots.map((dot, i) => (
        <g key={i}>
          <circle
            cx={dot.cx}
            cy={dot.cy}
            r="4.5"
            fill="#38bdf8"
            filter="url(#dot-glow)"
          />
          <circle
            cx={dot.cx}
            cy={dot.cy}
            r="2.2"
            fill="#ffffff"
          />
        </g>
      ))}
    </svg>
  );
}

export default function HomeEcosystemSection() {
  const reduceMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="ecosystem" className="section section--home-ecosystem">
      <div className="home-ecosystem__bg" aria-hidden="true" />

      <div className="section__content home-ecosystem__content">
        <motion.header
          className="home-ecosystem__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <p className="home-ecosystem__lead">Chúng tôi không tạo chiến dịch.</p>
          <h2 className="home-ecosystem__title">
            Chúng tôi kiến tạo{" "}
            <span className="home-ecosystem__title-gradient">hệ sinh thái truyền thông</span>
            <span className="home-ecosystem__title-dot">.</span>
          </h2>
        </motion.header>

        <div className="home-ecosystem__stage">
          {/* Top constellation arc glow overlay */}
          <div className="home-ecosystem__stage-top-glow" aria-hidden="true" />
          
          <NetworkMesh />
          <div className="home-ecosystem__mesh-glow" aria-hidden="true" />

          <motion.div
            className="home-ecosystem__gallery"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.09, delayChildren: 0.06 },
              },
            }}
          >
            {panels.map((panel) => {
              const featured = panel.featured === true;
              const isHovered = hoveredId === panel.id;

              return (
                <motion.figure
                  key={panel.id}
                  className={`home-ecosystem__panel${featured ? " home-ecosystem__panel--featured" : ""}`}
                  style={{
                    zIndex: isHovered ? 20 : panel.zIndex,
                    ["--panel-rotate" as string]: `${panel.rotateY}deg`,
                    ["--panel-rotate-z" as string]: `${panel.rotateZ}deg`,
                    ["--panel-y" as string]: `${panel.offsetY}px`,
                  }}
                  onMouseEnter={() => setHoveredId(panel.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  variants={
                    reduceMotion
                      ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                      : {
                          hidden: {
                            opacity: 0,
                            y: 64,
                            rotateY: panel.rotateY * 2.2,
                            scale: 0.88,
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                            rotateY: panel.rotateY,
                            rotateZ: panel.rotateZ,
                            scale: featured ? 1.04 : 1,
                            transition: { duration: 0.75, ease: easeOut },
                          },
                        }
                  }
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -14,
                          rotateY: 0,
                          rotateZ: 0,
                          scale: featured ? 1.08 : 1.05,
                          transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                        }
                  }
                >
                  <div className="home-ecosystem__panel-glass">
                    <div className="home-ecosystem__panel-border" aria-hidden="true" />
                    <div className="home-ecosystem__panel-shine" aria-hidden="true" />
                    <div
                      className={`home-ecosystem__panel-media ${panel.mediaClass}`}
                      style={{ backgroundImage: `url('${panel.imageSrc}')` }}
                      role="img"
                      aria-label={panel.alt}
                    >
                      {/* Inner ambient dark-to-light gradient overlay */}
                      <div className="home-ecosystem__panel-glow" aria-hidden="true" />
                    </div>
                  </div>
                </motion.figure>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


