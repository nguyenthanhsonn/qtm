"use client";

import styles from "@/scss/global/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CursorGrid from "@/uiux/CursorGrid";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={`${styles.footerRoot} relative overflow-hidden`} role="contentinfo">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <CursorGrid
          color="#38CFC8"
          cellSize={60}
          gridOpacity={0.04}
          maxOpacity={0.35}
          fillOpacity={0.1}
          radius={140}
          clickPulse={true}
        />
      </div>
      {/* Background Ambient Glow & Grid */}
      <div className={styles.footerAmbient} aria-hidden="true">
        <div className={`${styles.footerOrb} ${styles.footerOrbCyan}`} />
        <div className={`${styles.footerOrb} ${styles.footerOrbPurple}`} />
        <div className={styles.footerGridPattern} />
      </div>

      <div className={styles.footerContainer}>
        {/* Top Grid Sections */}
        <div className={styles.footerGrid}>
          
          {/* Column 1: Brand Info & Socials */}
          <div className={styles.footerCol}>
            <Link href="/home" className={styles.footerLogo} aria-label="QTM - Trang chủ">
              <Image
                src="/logo.png"
                alt="QTM Logo"
                width={180}
                height={40}
                sizes="160px"
                className="brightness-0 invert"
                style={{ height: "auto", width: "160px" }}
              />
            </Link>
            <p className={styles.footerDesc}>
              Strategic MediaTech Partner – 16 năm kiến tạo giải pháp truyền thông và công nghệ toàn diện, đồng hành cùng sự phát triển bền vững của doanh nghiệp.
            </p>
            <div className={styles.footerSocials}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="YouTube"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className={styles.footerCol}>
            <h2 className={styles.footerHeading}>Liên kết nhanh</h2>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/home">
                  <span className={styles.linkBullet} /> Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className={styles.linkBullet} /> Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/solution">
                  <span className={styles.linkBullet} /> Giải pháp
                </Link>
              </li>
              <li>
                <Link href="/missLegacy">
                  <span className={styles.linkBullet} /> Miss Legacy
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className={styles.linkBullet} /> Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Dịch vụ & Giải pháp */}
          <div className={styles.footerCol}>
            <h2 className={styles.footerHeading}>Giải pháp QTM</h2>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/solution">
                  <span className={styles.linkBullet} /> Tư vấn Chiến lược
                </Link>
              </li>
              <li>
                <Link href="/solution">
                  <span className={styles.linkBullet} /> Truyền thông & MediaTech
                </Link>
              </li>
              <li>
                <Link href="/solution">
                  <span className={styles.linkBullet} /> Phát triển Công nghệ
                </Link>
              </li>
              <li>
                <Link href="/solution">
                  <span className={styles.linkBullet} /> Phân tích Dữ liệu
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className={styles.linkBullet} /> Sự kiện & Trải nghiệm
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className={styles.footerCol}>
            <h2 className={styles.footerHeading}>Thông tin liên hệ</h2>
            <ul className={styles.footerContactList}>
              <li>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Số 1 Lê Đức Thọ, phường Từ Liêm, thành phố Hà Nội</span>
              </li>
              <li>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:0439412585">04 3941 2585</a>
              </li>
              <li>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@qtmmedia.vn">info@qtmmedia.vn</a>
              </li>
            </ul>

            <div className={styles.footerNewsletter}>
              <p>Đăng ký nhận tin tức & ưu đãi mới nhất</p>
              <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Nhập email của bạn..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Đăng ký</button>
              </form>
              {subscribed && (
                <p className={styles.newsletterMsg}>✓ Cảm ơn bạn đã đăng ký nhận thông tin từ QTM!</p>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} QTM MediaTech. All rights reserved.
          </p>

          <div className={styles.footerLegal}>
            <Link href="/about">Điều khoản sử dụng</Link>
            <span className={styles.legalDivider}>•</span>
            <Link href="/about">Chính sách bảo mật</Link>
          </div>

          <button onClick={scrollToTop} className={styles.backToTopBtn} aria-label="Cuộn lên đầu trang">
            Về đầu trang <i className={styles.arrowTop}>↑</i>
          </button>
        </div>
      </div>
    </footer>
  );
}
