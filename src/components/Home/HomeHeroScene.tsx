"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "@/scss/home/HomeHero.module.scss";
import HomeBackgroundVideo from "./HomeBackgroundVideo";

export default function HomeHeroScene({ children }: { children: ReactNode }) {
  const sceneRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const content = contentRef.current;
    if (!scene || !content) return;

    let frame: number | null = null;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      frame = null;
      const distance = content.offsetTop;
      const scrolled = -scene.getBoundingClientRect().top;
      const progress = Math.max(0, Math.min(1, (scrolled - distance * 0.15) / (distance * 0.85)));
      const opacity = reducedMotion.matches
        ? Number(progress > 0)
        : progress * progress * (3 - 2 * progress);

      scene.style.setProperty("--hero-reveal", String(opacity));
      scene.toggleAttribute("data-video-only", progress === 0);
    };

    const scheduleUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sceneRef} id="home" className={styles.homeScene} data-video-only="">
      <HomeBackgroundVideo />
      <div ref={contentRef} className={`section ${styles.sectionHome}`}>
        {children}
      </div>
    </section>
  );
}
