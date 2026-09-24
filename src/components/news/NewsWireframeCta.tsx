"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/scss/news/NewsWireframeLayout.module.scss";
import ContactButton from "@/uiux/btn_contact";

export default function NewsWireframeCta() {
  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.ctaBannerRoot}>
          {/* Left Text & CTA */}
          <div className={styles.ctaLeft}>
            <span className={styles.sectionTagBadge}>CTA HEADING</span>
            <h2 className={styles.ctaTitle}>
              Sẵn sàng Kiến tạo <br />
              <span className={styles.titleHighlight}>Sự kiện Đột phá cùng QTM?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Liên hệ với đội ngũ chuyên gia MediaTech của QTM để nhận tư vấn kịch bản, thiết kế phối cảnh và phương án sản xuất tối ưu nhất cho doanh nghiệp bạn.
            </p>
            <Link href="/contact" className="no-underline">
              <ContactButton />
            </Link>
          </div>

          {/* Right Accent Image */}
          <div className={styles.ctaRightGraphic}>
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1400&auto=format&fit=crop"
              alt="QTM MediaTech Event Setup"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
