"use client";

import React, { useEffect, useState } from "react";
import styles from "@/scss/missLagecy/MissLegacyStoryProgress.module.scss";

const CHAPTERS = [
  { id: "hero", num: "01", label: "01. KHỞI ĐẦU" },
  { id: "mission", num: "02", label: "02. SỨ MỆNH" },
  { id: "impact", num: "03", label: "03. TÁC ĐỘNG" },
  { id: "awards", num: "04", label: "04. GIẢI THƯỞNG" },
  { id: "partners", num: "05", label: "05. ĐỒNG HÀNH" },
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
      {/* Top Number */}
      <span className={styles.topNum}>01</span>

      <div className={styles.trackerTrack}>
        {/* Connecting Vertical Line */}
        <div className={styles.storyLine} />

        {/* Nodes and Dots */}
        {CHAPTERS.map((ch, idx) => {
          const isActive = activeId === ch.id;
          return (
            <React.Fragment key={ch.id}>
              {/* Node Button */}
              <button
                type="button"
                className={`${styles.chapterNode} ${isActive ? styles.active : ""}`}
                onClick={() => scrollToSection(ch.id)}
                aria-label={ch.label}
              >
                <span className={styles.chapterLabel}>{ch.label}</span>
                <div className={styles.dotBox}>
                  {isActive ? (
                    <div className={styles.activeRing}>
                      <span className={styles.activeCenterDot} />
                    </div>
                  ) : (
                    <span className={styles.inactiveDot} />
                  )}
                </div>
              </button>

              {/* Intermediate connector dot between nodes */}
              {idx < CHAPTERS.length - 1 && (
                <div className={styles.interDot} aria-hidden="true" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Bottom Number */}
      <span className={styles.bottomNum}>05</span>
    </aside>
  );
}
