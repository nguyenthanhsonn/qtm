"use client";

import "@/scss/header.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

// Maps nav label → route href
const NAV_ITEMS: { label: string; href?: string; dropdown?: { label: string; href: string }[] }[] = [
  { label: "Trang chủ",   href: "/home" },
  { label: "Về chúng tôi",  href: "/about" },
  {
    label: "Giải pháp",
    href: "/solution",
    dropdown: [
      { label: "Tư vấn", href: "/solution" },
      { label: "Công nghệ",  href: "/solution" },
      { label: "Phân tích",   href: "/solution" },
    ],
  },
  { label: "Miss Legacy", href: "/missLegacy" },
  { label: "Liên hệ",    href: "/contact"  },
];

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Active route tracking
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLLIElement>(null);
  const navRef      = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // ── Scroll handler ──────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Check initial scroll position
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Click outside dropdown ──────────────────────────────
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  // ── Lock body scroll when drawer open ──────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // ── Move indicator under active nav item ───────────────
  const updateIndicator = useCallback((currentPath: string) => {
    if (!navRef.current || !indicatorRef.current) return;

    const navEl = navRef.current;
    
    // Find the item matching the pathname
    const item = NAV_ITEMS.find((n) => n.href === currentPath || (n.href && currentPath.startsWith(n.href)));
    if (!item) {
      navEl.style.setProperty("--ind-opacity", "0");
      return;
    }

    // Find the matching <a> or <button> inside the <ul>
    const idx = NAV_ITEMS.indexOf(item);
    const li = navEl.querySelectorAll(":scope > li")[idx];
    if (!li) return;
    const anchor = li.querySelector("a, button") as HTMLElement | null;
    if (!anchor) return;

    const navRect    = navEl.getBoundingClientRect();
    const itemRect   = anchor.getBoundingClientRect();
    const left  = itemRect.left - navRect.left;
    const width = itemRect.width;

    navEl.style.setProperty("--ind-left",    `${left}px`);
    navEl.style.setProperty("--ind-width",   `${width}px`);
    navEl.style.setProperty("--ind-opacity", "1");
  }, []);

  useEffect(() => {
    updateIndicator(pathname);
  }, [pathname, updateIndicator]);

  // Re-run after fonts/layout settle
  useEffect(() => {
    const t = setTimeout(() => updateIndicator(pathname), 200);
    return () => clearTimeout(t);
  }, [pathname, updateIndicator]);

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay${mobileOpen ? " open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <nav className={`mobile-drawer${mobileOpen ? " open" : ""}`} aria-label="Mobile navigation">
        <ul className="mobile-nav">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <li key={item.label}>
                <button
                  onClick={() => setDropdownOpen((p) => !p)}
                  aria-expanded={dropdownOpen}
                  className={pathname.startsWith(item.href || "") ? "active" : ""}
                >
                  {item.label}{" "}
                  <span className={`arrow-icon${dropdownOpen ? " open" : ""}`}>▾</span>
                </button>
                <ul className={`mobile-sub${dropdownOpen ? " open" : ""}`}>
                  {item.dropdown.map((sub) => (
                    <li key={sub.label}>
                      <Link href={sub.href} onClick={() => setMobileOpen(false)}>{sub.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href || "/"}
                  className={pathname === item.href ? "active" : ""}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="mobile-cta-wrap">
          <Link
            href="/contact"
            className="cta-btn"
            onClick={() => setMobileOpen(false)}
          >
            LIÊN HỆ <i className="cta-arrow">→</i>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className={`header-root${scrolled ? " scrolled" : ""}`} role="banner">
        <div className="header-glow-line" aria-hidden="true" />
        <div className="header-inner">

          {/* Logo */}
          <Link
            href="/home"
            className="header-logo"
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
          <ul className="header-nav" ref={navRef} role="list">
            {/* Sliding indicator */}
            <div className="nav-indicator" ref={indicatorRef} aria-hidden="true" />

            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <li key={item.label} ref={dropdownRef}>
                  <button
                    className={`nav-btn${pathname.startsWith(item.href || "") ? " active" : ""}`}
                    onClick={() => setDropdownOpen((p) => !p)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    id="solutions-btn"
                  >
                    {item.label}
                    <span className={`arrow-icon${dropdownOpen ? " open" : ""}`} aria-hidden="true">▾</span>
                  </button>
                  <div
                    className={`dropdown-panel${dropdownOpen ? " open" : ""}`}
                    role="menu"
                    aria-labelledby="solutions-btn"
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href || "/"}
                    className={`nav-btn${pathname === item.href ? " active" : ""}`}
                    style={{ textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Right: CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/contact" className="cta-btn" aria-label="Liên hệ">
              LIÊN HỆ <i className="cta-arrow" aria-hidden="true">→</i>
            </Link>
            <button
              className={`hamburger-btn${mobileOpen ? " open" : ""}`}
              onClick={() => setMobileOpen((p) => !p)}
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
            >
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </button>
          </div>

        </div>
      </header>
    </>
  );
}
