"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import BackgroundGrid from "@/components/TechBackground/BackgroundGrid";
import ContactModal from "./ContactModal";

type Commitment = {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const commitments: Commitment[] = [
  {
    id: "roi",
    title: "Cam Kết ROI Đo Lường Được",
    desc: "Mọi ngân sách đầu tư truyền thông đều đi kèm bộ chỉ số KPI chi tiết, minh bạch và đo lường được hiệu quả bứt phá doanh thu thực tế.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    id: "transparency",
    title: "Minh Bạch Dữ Liệu 100%",
    desc: "Khách hàng có quyền truy cập toàn bộ hệ thống dashboard báo cáo real-time, làm chủ mọi dữ liệu phân tích và thông số chiến dịch.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "security",
    title: "Bảo Mật Thông Tin Tuyệt Đối",
    desc: "Tuân thủ nghiêm ngặt các quy định về bảo mật dữ liệu doanh nghiệp, không tiết lộ thông tin chiến dịch hay tài sản số của đối tác.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "support",
    title: "Tốc Độ Phản Hồi Ưu Tiên",
    desc: "Đội ngũ kỹ thuật và chuyên gia truyền thông sẵn sàng hỗ trợ 24/7, xử lý nhanh chóng mọi vấn đề phát sinh trong suốt quá trình hợp tác.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "innovation",
    title: "Liên Tục Nâng Cấp Công Nghệ",
    desc: "Cập nhật miễn phí các tính năng AI & MarTech mới nhất vào quy trình vận hành dự án, đảm bảo chiến dịch không bị lỗi thời.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6" />
        <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  {
    id: "partnership",
    title: "Đồng Hành Phát Triển Bền Vững",
    desc: "Coi sự thành công dài hạn của khách hàng là thước đo giá trị uy tín cốt lõi, luôn sẵn sàng chia sẻ rủi ro và tư vấn định hướng lâu dài.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 1 0 7.75" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
          {/* Title */}
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
            Những nguyên tắc hợp tác tạo nên sự tin tưởng tuyệt đối giữa QTM và các đối tác thương hiệu.
          </motion.p>

          {/* Minimalist Grid List (2 cols x 3 rows) */}
          <motion.div
            className="commitments__grid"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {commitments.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <div className="commitment-item-card">
                  <div className="item-icon-box">{item.icon}</div>
                  <div className="item-text-info">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-desc">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── FULL-WIDTH DARK CTA BAND (Leads user to Solutions Page) ── */}
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
