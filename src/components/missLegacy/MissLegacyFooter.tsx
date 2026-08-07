"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MissLegacyFooter.module.scss";

export default function MissLegacyFooter() {
  return (
    <footer className={styles.legacyFooterRoot}>
      {/* Top Golden Glow Line */}
      <div className={styles.footerGlowLine} />

      <div className={styles.footerContentWrapper}>
        {/* Top Brand Section */}
        <div className={styles.brandRow}>
          <div className={styles.brandGroup}>
            <Image
              src="/logo.png"
              alt="QTM Logo"
              width={180}
              height={45}
              className={styles.qtmLogoImg}
            />
            <div className={styles.brandTextWrap}>
              <span className={styles.legacyTitle}>MISS LEGACY</span>
              <span className={styles.legacySubtitle}>TINH HOA SẮC VIỆT</span>
            </div>
          </div>

          <div className={styles.sloganQuote}>
            <svg className={styles.lotusIconQuote} viewBox="0 0 100 80" fill="none">
              <path
                d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
                fill="#D4AF37"
              />
            </svg>
            <p className={styles.quoteText}>
              “ Vinh danh những giá trị làm nên di sản, để văn hóa và truyền thống Việt tiếp tục
              được gìn giữ và lan tỏa mạnh mẽ. ”
            </p>
          </div>
        </div>

        <div className={styles.footerDividerLine} />

        {/* Middle Navigation & Contact info */}
        <div className={styles.middleGrid}>
          {/* Quick Links */}
          <div className={styles.colNav}>
            <h4 className={styles.colTitle}>DANH MỤC</h4>
            <ul className={styles.navList}>
              <li>
                <Link href="/home">Trang chủ</Link>
              </li>
              <li>
                <Link href="/about">Về chúng tôi</Link>
              </li>
              <li>
                <Link href="/solution">Giải pháp</Link>
              </li>
              <li>
                <Link href="/projects">Dự án</Link>
              </li>
              <li>
                <Link href="/missLegacy" className={styles.activeLink}>
                  Miss Legacy 🪷
                </Link>
              </li>
            </ul>
          </div>

          {/* Program Info */}
          <div className={styles.colProgram}>
            <h4 className={styles.colTitle}>CHƯƠNG TRÌNH</h4>
            <ul className={styles.programList}>
              <li>Vinh danh di sản văn hóa Việt Nam</li>
              <li>Legacy Women Awards</li>
              <li>Truyền thông sáng tạo & Công nghệ</li>
              <li>Bảo trợ thông tin & Báo chí</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className={styles.colContact}>
            <h4 className={styles.colTitle}>LIÊN HỆ BAN TỔ CHỨC</h4>
            <div className={styles.contactDetails}>
              <p>📍 <strong>Đơn vị tổ chức:</strong> QTM MediaTech</p>
              <p>📞 <strong>Hotline:</strong> 0987 654 321</p>
              <p>✉️ <strong>Email:</strong> contact@qtm.vn</p>
              <p>🏢 <strong>Trụ sở chính:</strong> Hà Nội, Việt Nam</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottomLine} />

        {/* Bottom copyright row */}
        <div className={styles.bottomRow}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} QTM MediaTech — Miss Legacy. Tất cả quyền được bảo lưu.
          </p>
          <div className={styles.bottomLotusEmblem}>
            <svg className={styles.smallLotusSvg} viewBox="0 0 100 80" fill="none">
              <path
                d="M50 5 C55 25 70 35 90 40 C75 55 55 60 50 75 C45 60 25 55 10 40 C30 35 45 25 50 5 Z"
                fill="#FFF5D0"
              />
            </svg>
            <span>TINH HOA SẮC VIỆT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
