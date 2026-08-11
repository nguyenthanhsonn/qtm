"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import RoyalCrownIcon from "./RoyalCrownIcon";
import styles from "@/scss/missLagecy/MissLegacyFooter.module.scss";

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
              style={{ height: "auto", width: "auto" }}
            />
            <div className={styles.brandTextWrap}>
              <span className={styles.legacyTitle}>MISS LEGACY</span>
              <span className={styles.legacySubtitle}>TINH HOA SẮC VIỆT</span>
            </div>
          </div>

          <div className={styles.sloganQuote}>
            <RoyalCrownIcon className={styles.lotusIconQuote} gradId="footerQuoteCrownGrad" glowId="footerQuoteCrownGlow" />
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

          {/* Contact Details
          <div className={styles.colContact}>
            <h4 className={styles.colTitle}>LIÊN HỆ BAN TỔ CHỨC</h4>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                </svg>
                <p><strong>Đơn vị tổ chức:</strong> QTM MediaTech</p>
              </div>

              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <p><strong>Hotline:</strong> <a href="tel:0439412585">04 3941 2585</a></p>
              </div>

              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <p><strong>Email:</strong> <a href="mailto:info@qtmmedia.vn">info@qtmmedia.vn</a></p>
              </div>

              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p><strong>Trụ sở chính:</strong> Số 1 Lê Đức Thọ, phường Từ Liêm, thành phố Hà Nội</p>
              </div>
            </div>
          </div> */}
        </div>

        <div className={styles.footerBottomLine} />

        {/* Bottom copyright row */}
        <div className={styles.bottomRow}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} QTM MediaTech — Miss Legacy. Tất cả quyền được bảo lưu.
          </p>
          <div className={styles.bottomLotusEmblem}>
            <RoyalCrownIcon className={styles.smallLotusSvg} gradId="footerSmallCrownGrad" glowId="footerSmallCrownGlow" />
            <span>TINH HOA SẮC VIỆT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
