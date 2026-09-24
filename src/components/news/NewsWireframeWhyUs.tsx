"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "@/scss/news/NewsWireframeLayout.module.scss";

export default function NewsWireframeWhyUs() {
  const pillars = [
    {
      icon: "🤖",
      title: "Ứng dụng AI & Automation",
      desc: "Tối ưu hóa kịch bản, Check-in khuôn mặt siêu tốc và tự động hóa quy trình vận hành sự kiện.",
    },
    {
      icon: "✨",
      title: "Sân khấu Đa Giác Quan",
      desc: "Trải nghiệm Hologram 3D, Kinetic Lighting & 3D Mapping biến mọi không gian thành kiệt tác.",
    },
    {
      icon: "📊",
      title: "Đo lường ROI Real-Time",
      desc: "Dashboard phân tích dữ liệu tham dự, chỉ số tương tác và tỷ lệ chuyển đổi doanh thu thực tế.",
    },
    {
      icon: "🛡️",
      title: "An ninh & Quản trị Rủi ro",
      desc: "Phương án dự phòng 1-1-1, kiểm soát nguồn điện ATS và quy trình an toàn tiêu chuẩn quốc tế.",
    },
  ];

  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionTagBadge}>WHY CHOOSE QTM</span>
          <h2 className={styles.sectionMainTitle}>
            Giá trị & <span className={styles.titleHighlight}>Năng lực Cốt lõi</span>
          </h2>
          <div className={styles.titleUnderline} />
          <p className={styles.sectionSubDesc}>
            4 trụ cột MediaTech định hình tiêu chuẩn chất lượng cao nhất cho mọi sự kiện doanh nghiệp.
          </p>
        </div>

        {/* 4 Pillars Row */}
        <div className={styles.pillarsGrid4}>
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              className={styles.pillarCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className={styles.pillarIcon}>{item.icon}</div>
              <h3 className={styles.pillarTitle}>{item.title}</h3>
              <p className={styles.pillarDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
