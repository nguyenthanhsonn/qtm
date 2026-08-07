"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SolutionEcosystem.module.scss";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";

type EcoBlock = {
  id: string;
  code: string;
  title: string;
  desc: string;
  benefits: string[];
  types?: string[];
  ctaLabel: string;
  imageSrc: string;
  align: "left" | "right";
};

const ecoBlocks: EcoBlock[] = [
  {
    id: "conference-event",
    code: "01 // CONFERENCES & EVENTS",
    title: "HỘI NGHỊ - HỘI THẢO & SỰ KIỆN DOANH NGHIỆP",
    desc: "Tư vấn chiến lược chương trình, thiết kế concept sáng tạo, tổ chức vận hành và truyền thông bài bản trước - trong - sau sự kiện, đo lường hiệu quả thực tế.",
    benefits: [
      "Tư vấn chiến lược chương trình & Thiết kế concept chuyên nghiệp",
      "Tổ chức và vận hành sự kiện trọn gói đẳng cấp",
      "Truyền thông trước – trong – sau sự kiện & Đo lường hiệu quả",
    ],
    types: [
      "Hội nghị khách hàng",
      "Hội thảo chuyên đề",
      "Họp báo Kick-off",
      "Lễ ký kết",
      "Ra mắt sản phẩm",
      "Gala Dinner",
      "Forum",
      "Hội nghị nội bộ",
    ],
    ctaLabel: "Liên hệ tư vấn hội nghị",
    imageSrc: "/solution/img_eco_conference.png",
    align: "left",
  },
  {
    id: "outdoor-billboard",
    code: "02 // BILLBOARD & OUTDOOR MEDIA",
    title: "BILLBOARD & OUTDOOR MEDIA",
    desc: "Giải pháp quảng cáo ngoài trời giúp doanh nghiệp gia tăng độ phủ thương hiệu tại các vị trí chiến lược đắc địa trên toàn quốc.",
    benefits: [
      "Gia tăng nhận diện thương hiệu vượt trội tại vị trí đắc địa",
      "Tiếp cận hàng triệu lượt khách hàng mục tiêu mỗi ngày",
      "Tăng độ tin cậy và khẳng định vị thế dẫn đầu của doanh nghiệp",
      "Phủ rộng thương hiệu mạnh mẽ thông qua hệ thống Billboard tấm lớn & LED đô thị",
    ],
    types: ["Billboard tấm lớn", "Màn hình LED ngoài trời", "Pano quảng cáo đô thị"],
    ctaLabel: "Liên hệ tư vấn Billboard",
    imageSrc: "/solution/img_eco_billboard.png",
    align: "right",
  },
  {
    id: "concert-entertainment",
    code: "03 // CONCERT & ENTERTAINMENT",
    title: "CONCERT & ENTERTAINMENT",
    desc: "Thiết kế và tổ chức các chương trình nghệ thuật, liveshow và sự kiện giải trí quy mô lớn bùng nổ, tạo ấn tượng đậm nét trong lòng công chúng.",
    benefits: [
      "Liveshow & Đại nhạc hội quy mô lớn chuyên nghiệp",
      "Festival & Sự kiện giải trí bùng nổ cảm xúc",
      "Fan Meeting & Roadshow tương tác trực tiếp",
      "Countdown & Lễ hội nghệ thuật giải trí độc đáo",
    ],
    types: ["Liveshow", "Festival", "Fan Meeting", "Countdown", "Roadshow", "Entertainment Event"],
    ctaLabel: "Liên hệ tư vấn chương trình",
    imageSrc: "/solution/img_eco_concert.png",
    align: "left",
  },
  {
    id: "csr-community",
    code: "04 // CSR & COMMUNITY IMPACT",
    title: "CSR & COMMUNITY IMPACT",
    desc: "Đồng hành cùng doanh nghiệp xây dựng các chương trình trách nhiệm xã hội, lan tỏa giá trị tích cực và phát triển bền vững.",
    benefits: [
      "Gia tăng uy tín thương hiệu & Nâng cao hình ảnh doanh nghiệp",
      "Kết nối cộng đồng & Lan tỏa thông điệp nhân văn sâu sắc",
      "Thực hiện mục tiêu ESG và chiến lược CSR phát triển bền vững",
    ],
    types: ["Chiến dịch ESG", "Quỹ cộng đồng CSR", "Truyền thông Nhân văn"],
    ctaLabel: "Liên hệ tư vấn CSR",
    imageSrc: "/solution/img_eco_csr.png",
    align: "right",
  },
];

const viewport = { once: true, amount: 0.15 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SolutionEcosystem() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="ecosystem" className={`section ${styles.sectionSolEco}`}>
      {/* Dark Background Overlay */}
      <div className={styles.solEcoBgOverlay} aria-hidden="true" />
      <ParticleField />

      <div className={`section__content ${styles.solEcoContent}`}>
        {/* Main Title Header */}
        <motion.div
          className={styles.solEcoHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          <div className={styles.eyebrowTag}>
            <span className={styles.tagDash}>—</span>
            <span className={styles.tagText}>INTEGRATED SOLUTIONS ECOSYSTEM</span>
          </div>

          <h2 className={styles.solEcoTitle}>
            HỆ SINH THÁI GIẢI PHÁP <span className={styles.titleHighlightCyan}>QTM</span>
          </h2>

          <div className={styles.titleUnderlineAccent} />

          <p className={styles.solEcoSubtitle}>
            Bộ 4 giải pháp truyền thông công nghệ toàn diện giúp doanh nghiệp bứt phá mọi mục tiêu chiến lược.
          </p>
        </motion.div>

        {/* 4 Alternating Solution Rows */}
        <div className={styles.solEcoSubblocksContainer}>
          {ecoBlocks.map((block, index) => {
            const isImageLeft = block.align === "left";

            return (
              <motion.div
                key={block.id}
                className={`${styles.ecoSubblockRow} ${isImageLeft ? styles.imgLeft : styles.imgRight}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.75, delay: 0.1 + index * 0.08, ease: easeOut }}
              >
                {/* Photo Frame Col */}
                <div className={styles.subblockImageCol}>
                  <div className={styles.ecoImageGlassCard}>
                    <Image
                      src={block.imageSrc}
                      alt={block.title}
                      width={600}
                      height={400}
                      className={styles.ecoPhotoImg}
                      priority={index === 0}
                    />
                    <div className={styles.photoGlowOverlay} />
                  </div>
                </div>

                {/* Text Content Col */}
                <div className={styles.subblockTextCol}>
                  <span className={styles.subblockCode}>{block.code}</span>
                  <h3 className={styles.subblockTitle}>{block.title}</h3>
                  <p className={styles.subblockDesc}>{block.desc}</p>

                  {/* Benefits List */}
                  <div className={styles.benefitsGroup}>
                    <h4 className={styles.benefitsHeading}>LỢI ÍCH & DỊCH VỤ:</h4>
                    <ul className={styles.subblockBullets}>
                      {block.benefits.map((b) => (
                        <li key={b}>
                          <span className={styles.bulletCheck}>✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Types Pill Badges */}
                  {block.types && block.types.length > 0 && (
                    <div className={styles.typesGroup}>
                      <h4 className={styles.typesHeading}>LOẠI HÌNH TRIỂN KHAI:</h4>
                      <div className={styles.pillBadgeGrid}>
                        {block.types.map((t) => (
                          <span key={t} className={styles.typePillBadge}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Link to Contact Page */}
                  <Link href="/contact" className={styles.subblockCtaBtn}>
                    <span>{block.ctaLabel}</span>
                    <span className={styles.arrow}>→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
