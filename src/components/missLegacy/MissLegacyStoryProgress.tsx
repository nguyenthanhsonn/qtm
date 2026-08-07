"use client";

import React, { useEffect, useState } from "react";
import styles from "./MissLegacyStoryProgress.module.scss";

const CHAPTERS = [
  { id: "hero", num: "01", label: "CHƯƠNG I: KHỞI ĐẦU" },
  { id: "mission", num: "02", label: "CHƯƠNG II: SỨ MỆNH" },
  { id: "impact", num: "03", label: "CHƯƠNG III: GIÁ TRỊ" },
  { id: "awards", num: "04", label: "CHƯƠNG IV: AWARDS" },
  { id: "partners", num: "05", label: "CHƯƠNG V: ĐỒNG HÀNH" },
];

export default function MissLegacyStoryProgress() {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const ch of CHAPTERS) {
        const el = document.getElementById(ch.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(ch.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className={styles.storyProgressRoot} aria-label="Hành trình Miss Legacy Story Progress">
      <div className={styles.storyLine} />
      {CHAPTERS.map((ch) => {
        const isActive = activeId === ch.id;
        return (
          <button
            key={ch.id}
            type="button"
            className={`${styles.chapterNode} ${isActive ? styles.active : ""}`}
            onClick={() => scrollToSection(ch.id)}
            title={ch.label}
          >
            <span className={styles.chapterLabel}>{ch.label}</span>
            <div className={styles.dotBox}>
              <span className={styles.num}>{ch.num}</span>
              <svg className={styles.lotusDot} viewBox="0 0 24 24">
                <path d="M12 2C9 7 4 9 4 14a8 8 0 0 0 16 0c0-5-5-7-8-12z" />
              </svg>
            </div>
          </button>
        );
      })}
    </aside>
  );
}
