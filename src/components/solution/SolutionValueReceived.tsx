"use client";

import React from "react";
import styles from "./SolutionValueReceived.module.scss";
import { motion, useReducedMotion } from "motion/react";
import BackgroundGrid from "@/components/TechBackground/BackgroundGrid";
import CountUp from "@/components/CountUp";

type ValuePill = {
  id: string;
  icon: string;
  title: string;
  desc: string;
};

const valuePills: ValuePill[] = [
  {
    id: "revenue",
    icon: "📈",
    title: "Bứt phá doanh thu",
    desc: "Tối ưu hóa tỷ lệ chuyển đổi chiến dịch và tăng trưởng thị phần bền vững cho doanh nghiệp.",
  },
  {
    id: "brand-positioning",
    icon: "👑",
    title: "Định vị thương hiệu",
    desc: "Nâng tầm vị thế dẫn dắt trong ngành thông qua chiến lược nội dung và công nghệ đỉnh cao.",
  },
  {
    id: "cost-saving",
    icon: "⚡",
    title: "Tối ưu chi phí",
    desc: "Cắt giảm 30-40% ngân sách lãng phí nhờ quy trình tự động hóa AI & MarTech thông minh.",
  },
  {
    id: "data-transparency",
    icon: "📊",
    title: "Minh bạch dữ liệu",
    desc: "Làm chủ hệ thống báo cáo Real-time Dashboard 24/7 với chỉ số ROI minh bạch 100%.",
  },
  {
    id: "engagement",
    icon: "🤝",
    title: "Trải nghiệm gắn kết",
    desc: "Biến người xem thụ động thành cộng đồng người đồng hành gắn bó lâu dài cùng thương hiệu.",
  },
  {
    id: "security",
    icon: "🛡️",
    title: "An toàn & Bảo mật",
    desc: "Tuân thủ tuyệt đối các quy định và tiêu chuẩn bảo mật dữ liệu doanh nghiệp nghiêm ngặt.",
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SolutionValueReceived() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="values" className={`section ${styles.sectionSolVal}`}>
      <BackgroundGrid gridSize={40} opacity={0.06} />

      <div className={`section__content ${styles.solValContent}`}>
        {/* Title */}
        <motion.h2
          className={styles.solValTitle}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          GIÁ TRỊ KHÁCH HÀNG <span className="title-highlight-teal">NHẬN ĐƯỢC</span>
        </motion.h2>

        <motion.p
          className={styles.solValSubtitle}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          Những lợi ích thiết thực tạo nên giá trị khác biệt giữa QTM và các đơn vị truyền thông truyền thống.
        </motion.p>

        {/* 6 Vertical Pill-Cards Grid */}
        <motion.div
          className={styles.solValPillsGrid}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {valuePills.map((pill) => (
            <motion.div
              key={pill.id}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: easeOut }}
              className={styles.verticalPillCard}
            >
              <div className={styles.pillTopIcon}>{pill.icon}</div>
              <h3 className={styles.pillTitle}>{pill.title}</h3>
              <p className={styles.pillDesc}>{pill.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Horizontal Stat Bar */}
        <motion.div
          className={styles.solValStatsBar}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.25, ease: easeOut }}
        >
          <div className={styles.statBox}>
            <span className={styles.statNum}>
              <CountUp to={10} duration={2} />+
            </span>
            <span className={styles.statLbl}>Năm kinh nghiệm</span>
          </div>

          <div className={styles.statBox}>
            <span className={styles.statNum}>
              <CountUp to={500} duration={2.2} />+
            </span>
            <span className={styles.statLbl}>Dự án thành công</span>
          </div>

          <div className={styles.statBox}>
            <span className={styles.statNum}>
              <CountUp to={200} duration={2.2} />+
            </span>
            <span className={styles.statLbl}>Đối tác đồng hành</span>
          </div>

          <div className={styles.statBox}>
            <span className={styles.statNum}>
              <CountUp to={1000} duration={2.5} />+
            </span>
            <span className={styles.statLbl}>Vị trí truyền thông</span>
          </div>

          <div className={styles.statBox}>
            <span className={styles.statNum}>98%</span>
            <span className={styles.statLbl}>Tỷ lệ hài lòng</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
