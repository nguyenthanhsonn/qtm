"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/scss/solution/SolutionFeaturedProjects.module.scss";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";
import type { SolutionProjectItem } from "@/types/solution";

const projectsData: SolutionProjectItem[] = [
  {
    id: "techcombank-summit",
    num: "01",
    category: "HỘI NGHỊ - HỘI THẢO",
    title: "HỘI NGHỊ KHÁCH HÀNG TOÀN QUỐC 2024",
    client: "Techcombank",
    desc: "Hội nghị thượng đỉnh toàn quốc dành cho 2,000+ đối tác chiến lược của Techcombank, tích hợp công nghệ check-in AI và trình diễn ánh sáng hologram 3D.",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786452182/img_proj_techcombank.jpg",
    highlights: [
      "Check-in AI & Nhận diện khuôn mặt tự động",
      "Sân khấu 3D Spatial Audio & Hologram đỉnh cao",
      "Đo lường sentiment & độ hài lòng của 2,000+ khách mời",
    ],
  },
  {
    id: "vinfast-billboard",
    num: "02",
    category: "BILLBOARD",
    title: "CHIẾN DỊCH BILLBOARD TOÀN QUỐC",
    client: "VinFast",
    desc: "Chuỗi màn hình Outdoor 3D Naked-Eye phủ sóng tại các giao lộ huyết mạch trên toàn quốc, tạo hiệu ứng thị giác bùng nổ cho VinFast.",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786452184/img_proj_vinfast.jpg",
    highlights: [
      "Kỹ thuật hiển thị 3D Naked-Eye không dùng kính",
      "Phủ sóng 5,000,000+ Lượt tiếp cận khách hàng mục tiêu",
      "Tăng +35% Mức độ nhận diện thương hiệu VinFast",
    ],
  },
  {
    id: "viettel-liveshow",
    num: "03",
    category: "CHƯƠNG TRÌNH NGHỆ THUẬT",
    title: "LIVESHOW CA NHẠC KẾT NỐI CẢM XÚC",
    client: "Viettel",
    desc: "Đại nhạc hội quy tụ 30,000+ khán giả với hệ thống âm thanh 3D Spatial Audio và hiệu ứng trình diễn laser công nghệ đỉnh cao từ Viettel.",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786452180/img_proj_viettel.jpg",
    highlights: [
      "Đại nhạc hội quy tụ 30,000+ khán giả cuồng nhiệt",
      "Hệ thống laser show & 3D Spatial Audio hiện đại",
      "Lan tỏa 10,000,000+ Lượt thảo luận trên MXH",
    ],
  },
  {
    id: "unilever-csr",
    num: "04",
    category: "CSR",
    title: "CHƯƠNG TRÌNH CSR VÌ TƯƠNG LAI XANH",
    client: "Unilever",
    desc: "Chiến dịch cộng đồng nâng cao nhận thức bảo vệ môi trường, lan tỏa thông điệp ESG phát triển bền vững cùng Unilever.",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786452184/img_proj_unilever.jpg",
    highlights: [
      "Chuỗi chiến dịch ESG cộng đồng lan tỏa giá trị xanh",
      "Kết nối 50+ Cơ quan báo chí truyền thông hàng đầu",
      "Định vị hình ảnh doanh nghiệp xanh phát triển bền vững",
    ],
  },
];

const viewport = { once: true, amount: 0.15 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SolutionFeaturedProjects() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="featured-projects" className={`section ${styles.sectionSolProj}`}>
      <ParticleField />

      <div className={`section__content ${styles.solProjContent}`}>
        {/* ── 1. Header (Centered & Single Line) ─────────────────────────────────── */}
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
            <span className={styles.tagText}>PROVEN PORTFOLIO // QTM_PROJECTS</span>
          </div>

          <h2 className={styles.mainTitleHead}>
            DỰ ÁN <span className={styles.titleHighlightCyan}>TIÊU BIỂU</span>
          </h2>

          <div className={styles.titleUnderlineAccent} />

          <p className={styles.mainSubtitleDesc}>
            Những chiến dịch truyền thông công nghệ thực chiến tạo nên dấu ấn bứt phá cho các thương hiệu dẫn đầu.
          </p>
        </motion.div>

        {/* ── 2. Buttery-Smooth CSS Sticky Stacking Container ─────────────────── */}
        <div className={styles.stickyStackList}>
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className={styles.stickyStackCardItem}
              style={{
                top: `calc(110px + ${idx * 24}px)`,
                zIndex: idx + 1,
              }}
            >
              <div className={styles.cardInternalGrid}>
                {/* Left Col: Photo Image */}
                <div className={styles.cardPhotoCol}>
                  <div className={styles.photoFrame}>
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      width={600}
                      height={400}
                      className={styles.projectPhotoImg}
                      priority
                    />
                    <div className={styles.photoOverlay} />
                    <div className={styles.clientTagBadge}>
                      <span className={styles.clientTagLabel}>Khách hàng:</span>
                      <span className={styles.clientTagVal}>{project.client}</span>
                    </div>
                  </div>
                </div>

                {/* Right Col: Details */}
                <div className={styles.cardDetailsCol}>
                  <div className={styles.cardTopRow}>
                    <span className={styles.categoryPill}>{"// "}{project.category}</span>
                    <span className={styles.numberBadge}>{project.num}</span>
                  </div>

                  <h3 className={styles.projectTitleText}>{project.title}</h3>
                  <p className={styles.projectDescText}>{project.desc}</p>

                  <div className={styles.highlightsBox}>
                    <span className={styles.hlHeading}>ĐIỂM NỔI BẬT:</span>
                    <ul className={styles.hlList}>
                      {project.highlights.map((hl, i) => (
                        <li key={i} className={styles.hlItem}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardCtaRow}>
                    <Link href="/projects" className={styles.cardCtaLink}>
                      <span>Xem chi tiết dự án</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 3. Bottom All Projects Action Button ───────────────────────────── */}
        <motion.div
          className={styles.solProjFooterAction}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
        >
          <Link href="/projects" className={styles.solProjAllBtn}>
            <span>XEM TẤT CẢ DỰ ÁN</span>
            <span className={styles.btnArrow}>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
