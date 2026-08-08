"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./SolutionScrollProgress.module.scss";

const SOLUTION_STEPS = [
  { id: "hero", num: "01", label: "01 // TỔNG QUAN GIẢI PHÁP" },
  { id: "painpoints", num: "02", label: "02 // THỰC TRẠNG DOANH NGHIỆP" },
  { id: "ecosystem", num: "03", label: "03 // HỆ SINH THÁI QTM" },
  { id: "values", num: "04", label: "04 // GIÁ TRỊ NHẬN ĐƯỢC" },
  { id: "featured-projects", num: "05", label: "05 // DỰ ÁN TIÊU BIỂU" },
];

export default function SolutionScrollProgress() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [showTooltip, setShowTooltip] = useState<boolean>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initial 2.5s timer on load
    timerRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 2500);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const step of SOLUTION_STEPS) {
        const el = document.getElementById(step.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (activeId !== step.id) {
              setActiveId(step.id);
              // Show label briefly for 2.2s when switching blocks
              setShowTooltip(true);
              if (timerRef.current) clearTimeout(timerRef.current);
              timerRef.current = setTimeout(() => {
                setShowTooltip(false);
              }, 2200);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeId]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className={styles.solutionProgressRoot} aria-label="Solution Page Navigation Progress">
      <div className={styles.trackLine} />
      {SOLUTION_STEPS.map((step) => {
        const isActive = activeId === step.id;
        return (
          <button
            key={step.id}
            type="button"
            className={`${styles.stepNode} ${isActive ? styles.active : ""} ${
              isActive && showTooltip ? styles.visibleTooltip : ""
            }`}
            onClick={() => scrollToSection(step.id)}
            title={step.label}
          >
            <span className={styles.stepLabel}>{step.label}</span>
            <div className={styles.dotBox}>
              <span className={styles.num}>{step.num}</span>
              <span className={styles.pulseBeacon} />
            </div>
          </button>
        );
      })}
    </aside>
  );
}
