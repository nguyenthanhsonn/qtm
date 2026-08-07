"use client";

import React, { useState, useRef } from "react";
import styles from "./SolutionFeaturedProjects.module.scss";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
  MotionValue,
} from "motion/react";
import SolutionContactModal from "./SolutionContactModal";

type FeaturedProject = {
  id: string;
  category: string;
  title: string;
  client: string;
  desc: string;
  graphicSvg: React.ReactNode;
};

const featuredProjects: FeaturedProject[] = [
  {
    id: "viettel-event",
    category: "EVENT & CONFERENCE",
    title: "Hội Nghị Khách Hàng Toàn Quốc Viettel 2026",
    client: "Viettel Group",
    desc: "Tổ chức hội nghị thượng đỉnh toàn quốc tích hợp công nghệ Check-in AI, AR/3D Spatial Audio và báo cáo sentiment real-time.",
    graphicSvg: (
      <svg viewBox="0 0 500 320" fill="none" className={styles.projectSvg}>
        <rect width="500" height="320" fill="#0B1C33" />
        <circle cx="250" cy="160" r="120" fill="url(#p1Grad)" opacity="0.35" />
        <path d="M60 280 L180 140 L320 140 L440 280 Z" fill="rgba(56, 207, 200, 0.2)" />
        <circle cx="250" cy="130" r="35" fill="#EA0029" opacity="0.85" />
        <text x="25" y="40" fill="#38CFC8" fontFamily="var(--font-geist-mono)" fontSize="13" fontWeight="700">// VIETTEL_SUMMIT_2026</text>
        <defs>
          <radialGradient id="p1Grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 160) scale(120)">
            <stop stopColor="#EA0029" />
            <stop offset="1" stopColor="#38CFC8" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "honda-ooh",
    category: "OUTDOOR MEDIA",
    title: "Chiến Dịch Billboard LED Tương Tác Honda",
    client: "Honda Vietnam",
    desc: "Mạng lưới 1,000+ màn hình LED Outdoor tương tác thời gian thực tích hợp AI Camera đo lường lưu lượng giao thông & nhận diện tệp khách hàng.",
    graphicSvg: (
      <svg viewBox="0 0 500 320" fill="none" className={styles.projectSvg}>
        <rect width="500" height="320" fill="#081225" />
        <rect x="70" y="50" width="360" height="180" rx="14" fill="#050C1A" stroke="#38CFC8" strokeWidth="2.5" />
        <path d="M100 150 L200 100 L300 170 L400 90" stroke="#CC0000" strokeWidth="4.5" fill="none" />
        <circle cx="400" cy="90" r="8" fill="#CC0000" />
        <text x="25" y="40" fill="#38CFC8" fontFamily="var(--font-geist-mono)" fontSize="13" fontWeight="700">// HONDA_LED_NETWORK</text>
      </svg>
    ),
  },
  {
    id: "mobifone-concert",
    category: "ENTERTAINMENT",
    title: "Đại Nhạc Hội Mega Concert MobiFone Music Wave",
    client: "MobiFone Telecommunication",
    desc: "Sân khấu đại nhạc hội quy mô 30,000 khán giả, hiệu ứng ánh sáng 3D Spatial Audio đỉnh cao thu hút hơn 10 triệu lượt tương tác mạng xã hội.",
    graphicSvg: (
      <svg viewBox="0 0 500 320" fill="none" className={styles.projectSvg}>
        <rect width="500" height="320" fill="#0B192C" />
        <path d="M80 0 L180 260 L320 260 L420 0 Z" fill="rgba(0, 212, 255, 0.2)" />
        <circle cx="250" cy="210" r="55" fill="#005C97" opacity="0.65" />
        <path d="M30 280 Q 140 230 250 280 T 470 280" stroke="#00D4FF" strokeWidth="3.5" fill="none" />
        <text x="25" y="40" fill="#38CFC8" fontFamily="var(--font-geist-mono)" fontSize="13" fontWeight="700">// MOBIFONE_CONCERT_LIVE</text>
      </svg>
    ),
  },
  {
    id: "damcamau-csr",
    category: "COMMUNITY IMPACT",
    title: "Dự Án CSR Vì Nông Dân Việt Đạm Cà Mau",
    client: "Đạm Cà Mau (PVCFC)",
    desc: "Chiến dịch CSR trách nhiệm xã hội sâu sắc chuẩn ESG, kiến tạo giá trị bền vững cho cộng đồng và nâng tầm hình ảnh uy tín thương hiệu.",
    graphicSvg: (
      <svg viewBox="0 0 500 320" fill="none" className={styles.projectSvg}>
        <rect width="500" height="320" fill="#050C1A" />
        <circle cx="250" cy="160" r="85" stroke="#009639" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M250 120 C230 100 200 115 200 140 C200 170 250 195 250 195 C250 195 300 170 300 140 C300 115 270 100 250 120 Z" fill="#009639" />
        <text x="25" y="40" fill="#38CFC8" fontFamily="var(--font-geist-mono)" fontSize="13" fontWeight="700">// PVCFC_GREEN_ESG</text>
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const cubicEase = [0.22, 1, 0.36, 1] as const;

function ScrollStackCard({
  proj,
  index,
  total,
  containerScrollProgress,
  onOpenModal,
}: {
  proj: FeaturedProject;
  index: number;
  total: number;
  containerScrollProgress: MotionValue<number>;
  onOpenModal: (title: string) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 250, damping: 20 };
  const imgX = useSpring(mouseX, springConfig);
  const imgY = useSpring(mouseY, springConfig);

  const targetScale = 1 - (total - index - 1) * 0.05;
  const startProgress = index / total;
  const cardScale = useTransform(containerScrollProgress, [startProgress, 1], [1, targetScale]);
  const cardOpacity = useTransform(containerScrollProgress, [startProgress, 1], [1, 0.85 + index * 0.04]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(offsetX * 4);
    mouseY.set(offsetY * 4);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      style={{
        position: "sticky",
        top: `${100 + index * 30}px`,
        zIndex: 10 + index,
        marginBottom: index < total - 1 ? "60px" : "0px",
      }}
    >
      <motion.div
        ref={cardRef}
        className={styles.stickyProjectCardWrapper}
        style={{
          scale: cardScale,
          opacity: cardOpacity,
          transformOrigin: "top center",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, delay: index * 0.12, ease: cubicEase }}
        whileHover={{
          scale: 1.02,
          y: -8,
          transition: { duration: 0.3, ease: cubicEase },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className={`${styles.stickyProjectCard}${isHovered ? ` ${styles.isHovered}` : ""}`}>
          <div className={styles.cardBgFloatingShapes} aria-hidden="true">
            <motion.div
              className={`${styles.floatingShape} ${styles.floatingShape1}`}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 7 + index,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <motion.div
              className={`${styles.floatingShape} ${styles.floatingShape2}`}
              animate={{
                y: [0, 12, 0],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                duration: 9 + index,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </div>

          <div className={styles.cardInnerSplit}>
            <div className={styles.cardImageCol}>
              <motion.div
                className={styles.cardImageStage}
                style={{ x: imgX, y: imgY }}
                animate={{
                  scale: isHovered ? 1.12 : [1, 1.08, 1],
                }}
                transition={{
                  scale: isHovered
                    ? { duration: 0.5, ease: cubicEase }
                    : { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
                }}
              >
                {proj.graphicSvg}
              </motion.div>
            </div>

            <div className={styles.cardTextCol}>
              <span className={`${styles.projectCategoryTag}${isHovered ? ` ${styles.hoverAccent}` : ""}`}>
                // {proj.category}
              </span>

              <h3 className={`${styles.projectCardTitle}${isHovered ? ` ${styles.hoverExpanded}` : ""}`}>
                {proj.title}
              </h3>

              <span className={styles.projectClientName}>Đối tác: {proj.client}</span>

              <p className={styles.projectCardDesc}>{proj.desc}</p>

              <motion.button
                type="button"
                onClick={() => onOpenModal(`Tư vấn dự án tương tự: ${proj.title}`)}
                className={styles.projectDetailBtn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25 }}
              >
                <span>Xem chi tiết</span>
                <motion.span
                  className={styles.arrow}
                  animate={{ x: isHovered ? 6 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function SolutionFeaturedProjects() {
  const reduceMotion = useReducedMotion();
  const stackContainerRef = useRef<HTMLDivElement>(null);
  const [modalState, setModalState] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: "",
  });

  const { scrollYProgress } = useScroll({
    target: stackContainerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <section id="featured-projects" className={`section ${styles.sectionSolProj}`}>
        <div className={`section__content ${styles.solProjContent}`}>
          <motion.div
            className={styles.solProjTagPill}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0, ease: cubicEase }}
          >
            <span className={styles.tagDot}>•</span>
            <span>PROVEN PORTFOLIO // QTM_PROJECTS</span>
          </motion.div>

          <motion.h2
            className={styles.solProjTitle}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.15, ease: cubicEase }}
          >
            DỰ ÁN <span className="title-highlight-teal">TIÊU BIỂU</span>
          </motion.h2>

          <motion.p
            className={styles.solProjSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.35, ease: cubicEase }}
          >
            Những chiến dịch truyền thông công nghệ thực chiến tạo nên dấu ấn bứt phá cho các thương hiệu dẫn đầu.
          </motion.p>

          <div ref={stackContainerRef} className={styles.solProjStickyStackContainer}>
            {featuredProjects.map((proj, index) => (
              <ScrollStackCard
                key={proj.id}
                proj={proj}
                index={index}
                total={featuredProjects.length}
                containerScrollProgress={scrollYProgress}
                onOpenModal={(title) => setModalState({ isOpen: true, title })}
              />
            ))}
          </div>

          <motion.div
            className={styles.solProjFooterAction}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.5, ease: cubicEase }}
          >
            <button
              type="button"
              onClick={() => setModalState({ isOpen: true, title: "Liên hệ tư vấn tất cả dự án" })}
              className={`btn btn--outline ${styles.solProjAllBtn}`}
            >
              <span>XEM TẤT CẢ DỰ ÁN</span>
              <span className={styles.arrow}>→</span>
            </button>
          </motion.div>
        </div>
      </section>

      <SolutionContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, title: "" })}
        contextTitle={modalState.title}
      />
    </>
  );
}
