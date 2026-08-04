"use client";

import "@/scss/home-cta.scss";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ComponentType } from "react";

type IconProps = {
  className?: string;
};

const PartnershipIcon = ({ className = "" }: IconProps) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TargetIcon = ({ className = "" }: IconProps) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const ChartIcon = ({ className = "" }: IconProps) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M7 16l4-4 4 4 5-6" />
  </svg>
);

const AiIcon = ({ className = "" }: IconProps) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 9h.01" />
    <path d="M15 9h.01" />
    <path d="M9 15a3 3 0 0 0 6 0" />
  </svg>
);

const features: { icon: ComponentType<IconProps>; label: string }[] = [
  { icon: PartnershipIcon, label: "Đồng hành dài hạn" },
  { icon: TargetIcon, label: "Giải pháp theo mục tiêu" },
  { icon: ChartIcon, label: "Hiệu quả đo lường được" },
  { icon: AiIcon, label: "Ứng dụng AI & Dữ liệu" },
];

const viewport = { once: true, amount: 0.25 } as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function HomeCtaSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } };

  const fadeUpSoft = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 24, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1 } };

  return (
    <section id="home-cta" className="section section--home-cta">
      <div className="home-cta__bg" aria-hidden="true" />
      <div className="home-cta__glow" aria-hidden="true" />

      <div className="section__content home-cta__content">
        <motion.h2
          className="home-cta__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          Chúng tôi không chỉ hoàn thành dự án. Chúng tôi{" "}
          <span className="home-cta__highlight">đồng hành</span> cùng sự{" "}
          <span className="home-cta__highlight">tăng trưởng</span>.
        </motion.h2>

        <motion.p
          className="home-cta__desc"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, ease: easeOut, delay: 0.08 }}
        >
          QTM kết nối chiến lược, công nghệ và sáng tạo để mang đến những giải pháp
          truyền thông tạo ra giá trị thật và bền vững.
        </motion.p>

        <motion.div
          className="home-cta__features"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.05 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {features.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              className="home-cta__feature"
              variants={fadeUpSoft}
              transition={{ duration: 0.55, ease: easeOut }}
              whileHover={reduceMotion ? undefined : { y: -6, transition: { duration: 0.25 } }}
            >
              <span className="home-cta__feature-shine" aria-hidden="true" />
              <span className="home-cta__feature-icon">
                <Icon />
              </span>
              <span className="home-cta__feature-label">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="home-cta__action"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, ease: easeOut, delay: 0.15 }}
        >
          <p className="home-cta__prompt">Ready to build together?</p>
          <Link href="/contact" className="home-cta__btn">
            NHẬN TƯ VẤN CHIẾN LƯỢC <span className="home-cta__btn-arrow">→</span>
          </Link>
        </motion.div>

        <motion.div
          className="home-cta__tagline"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.22 }}
        >
          <span className="home-cta__tagline-line" aria-hidden="true" />
          <span>Quality</span>
          <span className="home-cta__tagline-dot">•</span>
          <span>Technology</span>
          <span className="home-cta__tagline-dot">•</span>
          <span>Mindset</span>
          <span className="home-cta__tagline-line" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
