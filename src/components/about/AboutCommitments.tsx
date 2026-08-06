"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import BackgroundGrid from "@/components/TechBackground/BackgroundGrid";
import ContactModal from "./ContactModal";

type CommitmentItem = {
  id: string;
  iconBgClass: string;
  iconSvg: React.ReactNode;
  title: string;
  desc: string;
};

const commitmentItems: CommitmentItem[] = [
  {
    id: "long-term",
    title: "ĐỒNG HÀNH DÀI HẠN",
    desc: "Không chỉ là nhà cung cấp, chúng tôi là đối tác tin cậy trên hành trình phát triển.",
    iconBgClass: "icon-circle--teal",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "tailored-solution",
    title: "GIẢI PHÁP PHÙ HỢP VỚI MỤC TIÊU KINH DOANH",
    desc: "Mỗi giải pháp được thiết kế riêng, đáp ứng mục tiêu và đặc thù của từng doanh nghiệp.",
    iconBgClass: "icon-circle--blue",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "transparent-process",
    title: "QUY TRÌNH MINH BẠCH",
    desc: "Minh bạch trong mọi quy trình, rõ ràng trong mọi cam kết, tin cậy trong mọi hành động.",
    iconBgClass: "icon-circle--purple",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "measurable-roi",
    title: "HIỆU QUẢ CÓ THỂ ĐO LƯỜNG",
    desc: "Đo lường rõ ràng, tối ưu liên tục, đảm bảo hiệu quả thực tế cho khách hàng.",
    iconBgClass: "icon-circle--blue",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: "new-tech",
    title: "ỨNG DỤNG CÔNG NGHỆ MỚI",
    desc: "Luôn tiên phong ứng dụng AI, dữ liệu và công nghệ mới để mang lại giá trị vượt trội.",
    iconBgClass: "icon-circle--teal",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    id: "cost-optimization",
    title: "TỐI ƯU CHI PHÍ VÀ NGUỒN LỰC",
    desc: "Tối ưu nguồn lực và chi phí, giúp doanh nghiệp tăng trưởng bền vững và hiệu quả.",
    iconBgClass: "icon-circle--teal",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutCommitments() {
  const reduceMotion = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <section id="commitments" className="section section--commitments">
        <BackgroundGrid gridSize={40} opacity={0.06} />

        <div className="section__content commitments__content">
          {/* Header Title */}
          <motion.h2
            className="commitments__title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
          >
            CAM KẾT CỦA <span className="title-highlight">QTM MEDIA</span>
          </motion.h2>

          <motion.p
            className="commitments__subtitle"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
          >
            Chúng tôi không chỉ cung cấp dịch vụ. <br />
            <strong className="text-teal-dark">
              Chúng tôi cam kết đồng hành cùng doanh nghiệp trên hành trình phát triển.
            </strong>
          </motion.p>

          {/* Main 2-Column Split: Left Shield Visual & Right 2x3 Grid */}
          <div className="commitments-main-split">
            {/* Left Visual Shield Graphic */}
            <motion.div
              className="commitments-shield-visual"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
            >
              <div className="shield-card-graphic">
                <div className="shield-qtm-logo-header">
                  <svg width="140" height="42" viewBox="0 0 160 48" fill="none">
                    <circle cx="20" cy="18" r="4" fill="#00D4FF" />
                    <circle cx="34" cy="10" r="4" fill="#38CFC8" />
                    <circle cx="34" cy="26" r="4" fill="#38CFC8" />
                    <circle cx="48" cy="18" r="4" fill="#00D4FF" />
                    <line x1="20" y1="18" x2="34" y2="10" stroke="#38CFC8" strokeWidth="2" />
                    <line x1="20" y1="18" x2="34" y2="26" stroke="#38CFC8" strokeWidth="2" />
                    <line x1="34" y1="10" x2="48" y2="18" stroke="#38CFC8" strokeWidth="2" />
                    <line x1="34" y1="26" x2="48" y2="18" stroke="#38CFC8" strokeWidth="2" />
                    <text x="60" y="28" fill="#123A53" fontFamily="var(--font-heading)" fontSize="26" fontWeight="900">QTM</text>
                    <text x="60" y="42" fill="#2095AD" fontFamily="var(--font-geist-mono)" fontSize="11" fontWeight="700">MediaTech</text>
                  </svg>
                </div>

                <div className="shield-central-icon">
                  <svg viewBox="0 0 200 200" fill="none" className="shield-svg">
                    <circle cx="100" cy="100" r="85" fill="url(#shieldGlow)" opacity="0.2" />
                    <path d="M100 30 L160 60 V110 C160 150 100 180 100 180 C100 180 40 150 40 110 V60 Z" fill="linear-gradient(180deg, #0284C7 0%, #0D9488 100%)" stroke="#38CFC8" strokeWidth="3" />
                    <path d="m80 100 15 15 30-30" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <radialGradient id="shieldGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) scale(85)">
                        <stop stopColor="#38CFC8" />
                        <stop offset="1" stopColor="#0284C7" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>

                <div className="shield-bottom-label">ISO // TRUSTED_MEDIATECH_PARTNER</div>
              </div>
            </motion.div>

            {/* Right 2x3 Grid */}
            <motion.div
              className="commitments-cards-grid"
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
              {commitmentItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: easeOut }}
                >
                  <div className="commitment-light-card">
                    <div className="card-icon-header">
                      <div className={`icon-circle ${item.iconBgClass}`}>{item.iconSvg}</div>
                    </div>
                    <h3 className="card-item-title">{item.title}</h3>
                    <p className="card-item-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── FULL-WIDTH DARK CTA BAND ── */}
        <div className="commitments__full-cta-band">
          <div className="band-bg-overlay" aria-hidden="true" />
          <div className="band-content">
            <motion.h3
              className="band-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
            >
              Sẵn sàng ứng dụng công nghệ đột phá cho chiến dịch truyền thông của bạn?
            </motion.h3>

            <motion.p
              className="band-desc"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            >
              Khám phá ngay hệ sinh thái giải pháp truyền thông công nghệ chuyên biệt từ QTM hoặc kết nối trực tiếp với đội ngũ chuyên gia tư vấn.
            </motion.p>

            <motion.div
              className="band-actions"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
            >
              <Link href="/solution" className="btn btn--primary band-btn-primary">
                <span>KHÁM PHÁ GIẢI PHÁP</span>
                <span className="arrow">→</span>
              </Link>

              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn--outline band-btn-outline"
              >
                <span>LIÊN HỆ TƯ VẤN 1:1</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark-glass Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
