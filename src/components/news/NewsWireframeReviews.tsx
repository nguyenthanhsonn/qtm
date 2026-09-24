"use client";

import React from "react";
import { motion } from "motion/react";
import styles from "@/scss/news/NewsWireframeLayout.module.scss";

export default function NewsWireframeReviews() {
  const reviews = [
    {
      stars: 5,
      text: "QTM MediaTech đã mang lại giải pháp sân khấu Hologram và Check-in AI xuất sắc cho sự kiện Mobifone 15.000 sinh viên. Quy trình làm việc cực kỳ chỉn chu và an toàn.",
      name: "Trần Đức Nam",
      role: "Trưởng ban Sự kiện @ Mobifone",
    },
    {
      stars: 5,
      text: "Những bài viết kiến thức và cẩm nang vận hành sự kiện của QTM vô cùng thực chiến. Đội ngũ kỹ thuật sân khấu nắm bắt kịch bản dự phòng rất sâu sắc.",
      name: "Nguyễn Hương Giang",
      role: "CMO @ VTV Digital Media",
    },
    {
      stars: 5,
      text: "Báo cáo ROI và Dashboard đo lường cảm xúc khán giả real-time của QTM giúp chúng tôi đánh giá chính xác từng đồng ngân sách đầu tư sự kiện.",
      name: "Phạm Hải Đăng",
      role: "Giám đốc Marketing @ Samsung VN",
    },
  ];

  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionTagBadge}>REVIEWS & FEEDBACK</span>
          <h2 className={styles.sectionMainTitle}>
            Đánh giá từ <span className={styles.titleHighlight}>Chuyên gia & Khách hàng</span>
          </h2>
          <div className={styles.titleUnderline} />
          <p className={styles.sectionSubDesc}>
            Phản hồi thực tế từ các Giám đốc Marketing và Trưởng ban sự kiện các tập đoàn lớn.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className={styles.reviewsGrid}>
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              className={styles.reviewCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <div className={styles.starsRow}>
                  {Array.from({ length: rev.stars }).map((_, s) => (
                    <span key={s}>★</span>
                  ))}
                </div>
                <p className={styles.reviewText}>&ldquo;{rev.text}&rdquo;</p>
              </div>

              <div className={styles.authorRow}>
                <div className={styles.avatarCircle}>{rev.name.charAt(0)}</div>
                <div>
                  <span className={styles.authorName}>{rev.name}</span>
                  <span className={styles.authorRole}>{rev.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
