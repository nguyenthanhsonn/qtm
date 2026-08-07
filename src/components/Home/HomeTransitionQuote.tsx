"use client";

import React from "react";
import styles from "./HomeTransitionQuote.module.scss";

export default function HomeTransitionQuote() {
  return (
    <div className={styles.homeQuoteFloatingWrapper} aria-label="Tuyên ngôn đồng hành">
      <div className={styles.homeQuoteCard}>
        {/* Cyber corner brackets */}
        <div className={`${styles.quoteCorner} ${styles.quoteCornerTl}`} />
        <div className={`${styles.quoteCorner} ${styles.quoteCornerTr}`} />
        <div className={`${styles.quoteCorner} ${styles.quoteCornerBl}`} />
        <div className={`${styles.quoteCorner} ${styles.quoteCornerBr}`} />

        {/* Sci-fi HUD crosshair accent */}
        <div className={styles.quoteHudAccent} />

        <p className={styles.quoteCardText}>
          &ldquo;Chúng tôi không chỉ triển khai một chiến dịch truyền thông hay một chương trình sự kiện, mà đồng hành cùng khách hàng trong việc <span className={styles.highlight}>xây dựng thương hiệu</span>, <span className={styles.highlight}>nâng cao trải nghiệm khách hàng</span> và tạo ra <span className={styles.highlight}>hiệu quả kinh doanh có thể đo lường</span>.&rdquo;
        </p>
      </div>
    </div>
  );
}
