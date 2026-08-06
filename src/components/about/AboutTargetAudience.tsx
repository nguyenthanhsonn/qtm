"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";

type TargetColumn = {
  id: string;
  title: string;
  badgeClass: string;
  desc: string;
  logos?: { name: string; iconSvg: React.ReactNode }[];
  smeFeatures?: string[];
};

const targetColumns: TargetColumn[] = [
  {
    id: "state-owned",
    title: "DOANH NGHIỆP NHÀ NƯỚC",
    badgeClass: "badge-blue",
    desc: "Đồng hành cùng các tập đoàn truyền thông chính sách, tổ chức sự kiện và chuyển đổi số.",
    logos: [
      {
        name: "Viettel",
        iconSvg: <text x="5" y="24" fill="#EA0029" fontFamily="var(--font-heading)" fontSize="16" fontWeight="900">viettel</text>,
      },
      {
        name: "VNPT",
        iconSvg: <text x="5" y="24" fill="#005C97" fontFamily="var(--font-heading)" fontSize="16" fontWeight="900">VNPT</text>,
      },
      {
        name: "PV GAS",
        iconSvg: <text x="5" y="24" fill="#005C97" fontFamily="var(--font-heading)" fontSize="14" fontWeight="800">PV GAS</text>,
      },
      {
        name: "BIDV",
        iconSvg: <text x="5" y="24" fill="#005A36" fontFamily="var(--font-heading)" fontSize="16" fontWeight="900">BIDV</text>,
      },
      {
        name: "Agribank",
        iconSvg: <text x="5" y="24" fill="#8B1D24" fontFamily="var(--font-heading)" fontSize="14" fontWeight="900">AGRIBANK</text>,
      },
      {
        name: "Vietcombank",
        iconSvg: <text x="5" y="24" fill="#005A36" fontFamily="var(--font-heading)" fontSize="14" fontWeight="800">Vietcombank</text>,
      },
      {
        name: "MobiFone",
        iconSvg: <text x="5" y="24" fill="#005C97" fontFamily="var(--font-heading)" fontSize="15" fontWeight="800">mobi<tspan fill="#EA0029">fone</tspan></text>,
      },
      {
        name: "Vietnam Airlines",
        iconSvg: <text x="5" y="24" fill="#003B7A" fontFamily="var(--font-heading)" fontSize="12" fontWeight="800">Vietnam Airlines</text>,
      },
    ],
  },
  {
    id: "fdi",
    title: "DOANH NGHIỆP FDI",
    badgeClass: "badge-green",
    desc: "Đối tác tin cậy của các tập đoàn quốc tế tại Việt Nam trong xây dựng thương hiệu, phát triển trải nghiệm KH.",
    logos: [
      {
        name: "Samsung",
        iconSvg: <text x="5" y="24" fill="#1428A0" fontFamily="var(--font-heading)" fontSize="15" fontWeight="900">SAMSUNG</text>,
      },
      {
        name: "LG",
        iconSvg: <text x="5" y="24" fill="#A50034" fontFamily="var(--font-heading)" fontSize="16" fontWeight="900">LG</text>,
      },
      {
        name: "Canon",
        iconSvg: <text x="5" y="24" fill="#CC0000" fontFamily="var(--font-heading)" fontSize="16" fontWeight="900">Canon</text>,
      },
      {
        name: "Toyota",
        iconSvg: <text x="5" y="24" fill="#EB0A1E" fontFamily="var(--font-heading)" fontSize="15" fontWeight="900">TOYOTA</text>,
      },
      {
        name: "Honda",
        iconSvg: <text x="5" y="24" fill="#CC0000" fontFamily="var(--font-heading)" fontSize="16" fontWeight="900">HONDA</text>,
      },
      {
        name: "Panasonic",
        iconSvg: <text x="5" y="24" fill="#004098" fontFamily="var(--font-heading)" fontSize="14" fontWeight="800">Panasonic</text>,
      },
      {
        name: "Bosch",
        iconSvg: <text x="5" y="24" fill="#EA1B2D" fontFamily="var(--font-heading)" fontSize="15" fontWeight="900">BOSCH</text>,
      },
      {
        name: "Intel",
        iconSvg: <text x="5" y="24" fill="#0068B5" fontFamily="var(--font-heading)" fontSize="16" fontWeight="900">intel</text>,
      },
    ],
  },
  {
    id: "fmcg",
    title: "FMCG & RETAIL",
    badgeClass: "badge-orange",
    desc: "Đồng hành xây dựng các chiến dịch truyền thông kích hoạt thương hiệu hàng đầu.",
    logos: [
      {
        name: "TH True Milk",
        iconSvg: <text x="5" y="24" fill="#005C97" fontFamily="var(--font-heading)" fontSize="13" fontWeight="900">TH true MILK</text>,
      },
      {
        name: "Vinamilk",
        iconSvg: <text x="5" y="24" fill="#002D62" fontFamily="var(--font-heading)" fontSize="15" fontWeight="900">VINAMILK</text>,
      },
      {
        name: "Meiji",
        iconSvg: <text x="5" y="24" fill="#DF0012" fontFamily="var(--font-heading)" fontSize="17" fontWeight="900" fontStyle="italic">meiji</text>,
      },
      {
        name: "Masan",
        iconSvg: <text x="5" y="24" fill="#E31B23" fontFamily="var(--font-heading)" fontSize="15" fontWeight="900">MASAN</text>,
      },
      {
        name: "Pepsico",
        iconSvg: <text x="5" y="24" fill="#00529B" fontFamily="var(--font-heading)" fontSize="14" fontWeight="900">PEPSICO</text>,
      },
      {
        name: "CocaCola",
        iconSvg: <text x="5" y="24" fill="#F40009" fontFamily="var(--font-heading)" fontSize="15" fontWeight="900" fontStyle="italic">Coca-Cola</text>,
      },
      {
        name: "Nestlé",
        iconSvg: <text x="5" y="24" fill="#005A9C" fontFamily="var(--font-heading)" fontSize="15" fontWeight="900">Nestle</text>,
      },
      {
        name: "P&G",
        iconSvg: <text x="5" y="24" fill="#00205B" fontFamily="var(--font-heading)" fontSize="18" fontWeight="900">P&amp;G</text>,
      },
    ],
  },
  {
    id: "sme",
    title: "DOANH NGHIỆP SME",
    badgeClass: "badge-purple",
    desc: "Hỗ trợ doanh nghiệp tăng trưởng bằng các giải pháp truyền thông tối ưu chi phí.",
    smeFeatures: [
      "⚡ Chuẩn hóa & Tự động hóa",
      "🏢 1000+ SME Đồng hành",
      "🚀 Startup & Scale-up",
      "📌 Doanh nghiệp địa phương",
      "📈 Tối ưu chi phí Marketing",
      "✦ Tư vấn giải pháp 1:1",
    ],
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutTargetAudience() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="target-audience" className="section section--target-audience">
      <div className="target-aud__bg-overlay" aria-hidden="true" />
      <div className="target-aud__bg-grid" aria-hidden="true" />
      <ParticleField />

      <div className="section__content target-aud__content">
        {/* Title Header */}
        <motion.h2
          className="target-aud__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          KHÁCH HÀNG <span className="title-highlight-mint">MỤC TIÊU</span>
        </motion.h2>

        <motion.p
          className="target-aud__subtitle"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          QTM đồng hành cùng đa dạng loại hình doanh nghiệp, thiết lập các giải pháp truyền thông công nghệ chuyên biệt.
        </motion.p>

        {/* 4 Vertical Column Cards */}
        <motion.div
          className="target-aud-columns-grid"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {targetColumns.map((col) => (
            <motion.div
              key={col.id}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: easeOut }}
              className="target-col-card"
            >
              <div className={`col-badge ${col.badgeClass}`}>
                <span className="badge-dot" />
                <span className="badge-title">{col.title}</span>
              </div>

              <p className="col-desc">{col.desc}</p>

              {col.logos ? (
                <div className="col-logo-grid">
                  {col.logos.map((logo, idx) => (
                    <div key={`${logo.name}-${idx}`} className="logo-box-mini">
                      <svg width="100" height="32" viewBox="0 0 110 32" fill="none">
                        {logo.iconSvg}
                      </svg>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="col-features-list">
                  {col.smeFeatures?.map((feat) => (
                    <div key={feat} className="sme-feat-chip">
                      {feat}
                    </div>
                  ))}
                </div>
              )}

              <button type="button" className="col-action-btn">
                <span>Xem thêm</span>
                <span>→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
