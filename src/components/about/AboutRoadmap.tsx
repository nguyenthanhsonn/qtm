"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import Card3DTilt from "@/components/Card3DTilt";
import styles from "./AboutRoadmap.module.scss";

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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#38CFC8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#38CFC8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFC72C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress setup for the vertical timeline laser beam
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const orbTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="roadmap" className={`section ${styles.sectionRoadmap}`}>
      <div className={`section__content ${styles.roadmapContent}`}>
        {/* Title */}
        <motion.h2
          className={styles.roadmapTitle}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          HÀNH TRÌNH 5 NĂM <span className="title-highlight-mint">KIẾN TẠO TƯƠNG LAI</span>
        </motion.h2>

        <motion.p
          className={styles.roadmapSubtitle}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          QTM không ngừng đổi mới và mở rộng năng lực để trở thành đối tác truyền thông chiến lược hàng đầu tại Việt Nam.
        </motion.p>

        {/* Vertical Timeline Wrapper */}
        <div ref={containerRef} className={styles.verticalTimelineWrapper}>
          {/* Central Laser Spine Track */}
          <div className={styles.timelineSpineTrack}>
            <motion.div
              className={styles.timelineSpineProgress}
              style={{ scaleY: smoothProgress }}
            />
            <motion.div
              className={styles.timelineLaserOrb}
              style={{ top: orbTop }}
            />
          </div>

          {/* Timeline Items (Alternating Left & Right on Desktop) */}
          <div className={styles.timelineItemsList}>
            {roadmapNodes.map((node, index) => {
              const isRight = index % 2 === 1; // 0: left, 1: right, 2: left, 3: right, 4: left

              return (
                <div
                  key={node.year}
                  className={`${styles.timelineItem} ${
                    isRight ? styles.itemRight : styles.itemLeft
                  }`}
                >
                  {/* Left Slot */}
                  <div className={styles.timelineSlotLeft}>
                    {!isRight && (
                      <motion.div
                        className={styles.cardContainer}
                        initial={
                          reduceMotion
                            ? { opacity: 0 }
                            : { opacity: 0, x: -45, y: 15 }
                        }
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
                      >
                        <Card3DTilt
                          className={styles.roadmapNodeCard}
                          maxTilt={7}
                          scale={1.02}
                          glareColor="rgba(56, 207, 200, 0.35)"
                          glareOpacity={0.35}
                        >
                          <div className={styles.cardHeader}>
                            <span className={styles.yearNumber}>{node.year}</span>
                            <div className={styles.iconBadgeMobile}>
                              {node.iconSvg}
                            </div>
                          </div>
                          <h3 className={styles.cardNodeTitle}>{node.title}</h3>
                          <p className={styles.cardNodeDesc}>{node.desc}</p>
                        </Card3DTilt>
                        <div className={styles.connectorLineLeft} />
                      </motion.div>
                    )}
                  </div>

                  {/* Center Node Badge */}
                  <motion.div
                    className={styles.timelineSlotCenter}
                    initial={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 0.6 }
                    }
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
                  >
                    <div className={styles.spineNodeBadge}>
                      <div className={styles.nodePulseRing} />
                      <div className={styles.nodeBadgeIcon}>
                        {node.iconSvg}
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Slot */}
                  <div className={styles.timelineSlotRight}>
                    {isRight && (
                      <motion.div
                        className={styles.cardContainer}
                        initial={
                          reduceMotion
                            ? { opacity: 0 }
                            : { opacity: 0, x: 45, y: 15 }
                        }
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
                      >
                        <div className={styles.connectorLineRight} />
                        <Card3DTilt
                          className={styles.roadmapNodeCard}
                          maxTilt={7}
                          scale={1.02}
                          glareColor="rgba(56, 207, 200, 0.35)"
                          glareOpacity={0.35}
                        >
                          <div className={styles.cardHeader}>
                            <span className={styles.yearNumber}>{node.year}</span>
                            <div className={styles.iconBadgeMobile}>
                              {node.iconSvg}
                            </div>
                          </div>
                          <h3 className={styles.cardNodeTitle}>{node.title}</h3>
                          <p className={styles.cardNodeDesc}>{node.desc}</p>
                        </Card3DTilt>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

