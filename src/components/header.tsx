"use client";

import styles from "@/scss/global/Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactButton from "@/uiux/btn_contact";
import { useCallback, useEffect, useRef, useState } from "react";

// Maps nav label → route href
const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Trang chủ",   href: "/home" },
  { label: "Về chúng tôi",  href: "/about" },
  { label: "Giải pháp",   href: "/solution" },
  { label: "Dự án",      href: "/projects" },
  { label: "Miss Legacy", href: "/missLegacy" },
];

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);

  // Active route tracking
  const pathname = usePathname();

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

  // ── AOS (Animate on Scroll) Integration ──────────────────
  useEffect(() => {
    const initAOS = () => {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1500,
          once: true,
          easing: "ease-out-quad",
        });
        (window as any).aosInitialized = true;
      });
    };

    try {
      if ((window as any).aosInitialized || sessionStorage.getItem("qtm_intro_v3")) {
        initAOS();
      }
    } catch {}

    window.addEventListener("intro-finished", initAOS);

    return () => {
      window.removeEventListener("intro-finished", initAOS);
    };
  }, []);

  useEffect(() => {
    import("aos").then((AOS) => {
      if ((window as any).aosInitialized) {
        AOS.refresh();
      } else {
        try {
          if (sessionStorage.getItem("qtm_intro_v3")) {
            AOS.init({
              duration: 1500,
              once: true,
              easing: "ease-out-quad",
            });
            (window as any).aosInitialized = true;
          }
        } catch {}
      }
    });
  }, [pathname]);

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay}${mobileOpen ? ` ${styles.open}` : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <nav className={`${styles.mobileDrawer}${mobileOpen ? ` ${styles.open}` : ""}`} aria-label="Mobile navigation">
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
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
          >
            <ContactButton />
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className={`${styles.headerRoot}${scrolled ? ` ${styles.scrolled}` : ""}`} role="banner">
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
            {/* Sliding indicator */}
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

          {/* Right: CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/contact">
              <ContactButton />
            </Link>
            <button
              className={`${styles.hamburgerBtn}${mobileOpen ? ` ${styles.open}` : ""}`}
              onClick={() => setMobileOpen((p) => !p)}
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
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
