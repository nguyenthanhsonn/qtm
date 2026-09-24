"use client";

import React from "react";
import styles from "@/scss/news/NewsWireframeLayout.module.scss";

export default function NewsWireframeBrands() {
  const brands = [
    { name: "MOBIFONE", logoText: "📱 MOBIFONE" },
    { name: "VIETTEL", logoText: "📶 VIETTEL MEDIATECH" },
    { name: "VTV", logoText: "📺 VTV DIGITAL" },
    { name: "SAMSUNG", logoText: "💎 SAMSUNG ELECTRONICS" },
    { name: "QTM MEDIA", logoText: "⚡ QTM MEDIATECH" },
  ];

  return (
    <div className={styles.brandBarSection}>
      <div className={styles.container}>
        <div className={styles.brandBarLabel}>
          ĐƯỢC TIN TƯỞNG VÀ ĐỒNG HÀNH BỞI CÁC THƯƠNG HIỆU HÀNG ĐẦU
        </div>

        <div className={styles.brandLogosFlex}>
          {brands.map((b) => (
            <div key={b.name} className={styles.brandItem}>
              <span>{b.logoText}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
