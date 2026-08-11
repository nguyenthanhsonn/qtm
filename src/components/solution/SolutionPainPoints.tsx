"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "@/scss/solution/SolutionPainPoints.module.scss";
import Card3DTilt from "@/components/Card3DTilt";
import type { PainCardItem } from "@/types/solution";

const painCards: PainCardItem[] = [
  {
    id: "brand-impression",
    num: "01",
    title: "KHÓ TẠO DẤU ẤN",
    desc: "Thương hiệu chưa đủ khác biệt, dễ bị hòa lẫn giữa hàng ngàn chiến dịch truyền thông của đối thủ trên thị trường.",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786452177/img_pain_chess.jpg",
    gradientClass: styles.iconGradCyan,
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "reach-virality",
    num: "02",
    title: "THIẾU SỨC LAN TỎA",
    desc: "Ngân sách đầu tư lớn nhưng chiến dịch chưa tạo được hiệu ứng bùng nổ, không tiếp cận đúng tệp khách hàng mục tiêu.",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786452183/img_pain_meeting.jpg",
    isFeatured: true,
    gradientClass: styles.iconGradBlue,
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
  {
    id: "lack-connection",
    num: "03",
    title: "THIẾU SỰ KẾT NỐI",
    desc: "Đứt gãy trải nghiệm giữa các kênh Online & Offline khiến khách hàng thiếu sự gắn kết lâu dài với thương hiệu.",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786452179/img_pain_connect.jpg",
    gradientClass: styles.iconGradPurple,
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "hard-roi",
    num: "04",
    title: "KHÓ ĐO LƯỜNG HIỆU QUẢ TRUYỀN THÔNG",
    desc: "Thiếu bộ chỉ số ROI và báo cáo real-time rõ ràng, khó xác định tỷ lệ chuyển đổi thực tế từ hoạt động truyền thông.",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786452183/img_pain_roi.jpg",
    gradientClass: styles.iconGradTeal,
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: "operation-cost",
    num: "05",
    title: "CHI PHÍ VẬN HÀNH QUÁ LỚN",
    desc: "Quy trình triển khai thủ công cồng kềnh kéo dài thời gian, làm tiêu tốn nhiều nhân lực và ngân sách của doanh nghiệp.",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786452178/img_pain_cost.jpg",
    gradientClass: styles.iconGradOrange,
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const viewport = { once: true, amount: 0.15 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SolutionPainPoints() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="pain-points" className={`section ${styles.sectionSolPain}`}>
      <div className={`section__content ${styles.solPainContent}`}>
        
        {/* ── 1. Top Section Header (Centered) ───────────────────────────────── */}
        <motion.div
          className={styles.sectionTopHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className={styles.eyebrowTag}>
            <span className={styles.tagDash}>—</span>
            <span className={styles.tagText}>THÁCH THỨC TRUYỀN THÔNG</span>
          </div>

          <h2 className={styles.mainTitleHead}>
            DOANH NGHIỆP ĐANG GẶP <span className={styles.titleHighlightCyan}>ĐIỀU GÌ?</span>
          </h2>

          <div className={styles.titleUnderlineAccent} />

          <p className={styles.mainSubtitleDesc}>
            Những rào cản phổ biến cản trở sự tăng trưởng thương hiệu và hiệu quả kinh doanh trong thời đại số.
          </p>
        </motion.div>


        {/* ── 2. 5 Vertical Cards Grid Row ─────────────────────────────────── */}
        <motion.div
          className={styles.fiveCardsGridRow}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: 0.12 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {painCards.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: easeOut }}
              className={`${styles.cardWrapperItem} ${card.isFeatured ? styles.isFeaturedCardWrapper : ""}`}
            >
              <Card3DTilt
                className={`${styles.painPointGlassCard} ${card.isFeatured ? styles.featuredCard : ""}`}
                maxTilt={6}
                scale={card.isFeatured ? 1.03 : 1.01}
                glareColor="rgba(79, 209, 232, 0.25)"
                glareOpacity={0.25}
              >
                {/* Number & Accent at Top Left */}
                <div className={styles.cardHeaderNumRow}>
                  <span className={styles.cardNumber}>{card.num}</span>
                  <div className={styles.numUnderline} />
                </div>

                {/* Photo Image Frame */}
                <div className={styles.cardPhotoFrame}>
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={320}
                    height={240}
                    className={styles.cardPhotoImg}
                    priority
                  />
                  <div className={styles.photoOverlayGlow} />

                  {/* Round Overlapping Icon Badge */}
                  <div className={`${styles.overlappingIconBadge} ${card.gradientClass}`}>
                    {card.iconSvg}
                  </div>
                </div>

                {/* Content Details */}
                <div className={styles.cardContentBody}>
                  <h3 className={styles.cardTitleText}>{card.title}</h3>
                  <div className={styles.titleAccentLine} />
                  <p className={styles.cardDescText}>{card.desc}</p>
                </div>
              </Card3DTilt>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
