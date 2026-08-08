"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactButton from "@/uiux/btn_contact";
import styles from "@/scss/missLagecy/MissLegacyHeader.module.scss";

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Trang chủ", href: "/home" },
  { label: "Về chúng tôi", href: "/about" },
  { label: "Giải pháp", href: "/solution" },
  { label: "Dự án", href: "/projects" },
  { label: "Miss Legacy", href: "/missLegacy" },
];

export default function MissLegacyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // ── Scroll handler ──────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Lock body scroll when drawer open ──────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ── Move indicator under active nav item ───────────────
  const updateIndicator = useCallback((currentPath: string) => {
    if (!navRef.current || !indicatorRef.current) return;

    const navEl = navRef.current;
    const item = NAV_ITEMS.find(
      (n) => n.href === currentPath || (n.href && currentPath.startsWith(n.href))
    );
    if (!item) {
      navEl.style.setProperty("--ind-opacity", "0");
      return;
    }

    const idx = NAV_ITEMS.indexOf(item);
    const li = navEl.querySelectorAll(":scope > li")[idx];
    if (!li) return;
    const anchor = li.querySelector("a, button") as HTMLElement | null;
    if (!anchor) return;

    const navRect = navEl.getBoundingClientRect();
    const itemRect = anchor.getBoundingClientRect();
    const left = itemRect.left - navRect.left;
    const width = itemRect.width;

    navEl.style.setProperty("--ind-left", `${left}px`);
    navEl.style.setProperty("--ind-width", `${width}px`);
    navEl.style.setProperty("--ind-opacity", "1");
  }, []);

  useEffect(() => {
    updateIndicator(pathname);
  }, [pathname, updateIndicator]);

  useEffect(() => {
    const t = setTimeout(() => updateIndicator(pathname), 200);
    return () => clearTimeout(t);
  }, [pathname, updateIndicator]);

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay}${mobileOpen ? ` ${styles.open}` : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <nav
        className={`${styles.mobileDrawer}${mobileOpen ? ` ${styles.open}` : ""}`}
        aria-label="Mobile navigation"
      >
        <ul className={styles.mobileNav}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={pathname === item.href ? styles.active : ""}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileCtaWrap}>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>
            <ContactButton />
          </Link>
        </div>
      </nav>

      {/* Header Root */}
      <header
        className={`${styles.headerRoot}${scrolled ? ` ${styles.scrolled}` : ""}`}
        role="banner"
      >
        <div className={styles.headerGlowLine} aria-hidden="true" />
        <div className={styles.headerInner}>
          {/* Logo */}
          <Link
            href="/home"
            className={styles.headerLogo}
            aria-label="Miss Legacy - Trang chủ"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <Image
              src="/logo.png"
              alt="Miss Legacy Logo"
              width={200}
              height={45}
              priority
              className="brightness-0 invert"
              style={{ height: "clamp(32px, 4vw, 45px)", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.headerNav} ref={navRef} role="list">
            {/* Sliding Gold indicator */}
            <div className={styles.navIndicator} ref={indicatorRef} aria-hidden="true" />

            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`${styles.navBtn}${pathname === item.href ? ` ${styles.active}` : ""}`}
                  style={{ textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: CTA + Hamburger 3-bar */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/contact" className={styles.headerCtaWrapper}>
              <ContactButton />
            </Link>

            <button
              className={`${styles.hamburgerBtn}${mobileOpen ? ` ${styles.open}` : ""}`}
              onClick={() => setMobileOpen((p) => !p)}
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileOpen}
            >
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
