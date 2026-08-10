"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Card3DTilt from "@/components/Card3DTilt";
import Link from "next/link";
import ContactModal from "@/components/about/ContactModal";
import styles from "@/scss/about_us/AboutHero.module.scss";

/* ─── Viewport / easing constants ─────────────────────────────────────────── */
const viewport = { once: true, amount: 0.15 } as const;
const easeOut  = [0.22, 1, 0.36, 1] as const;

/* ─── Network / Dot-connect canvas ────────────────────────────────────────── */
import type { AboutHeroDot as Dot } from "@/types/about";

function NetworkCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    const DOTS = 55;
    const MAX_DIST = 130;
    let dots: Dot[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      dots = Array.from({ length: DOTS }, () => ({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        vx:    (Math.random() - 0.5) * 0.38,
        vy:    (Math.random() - 0.5) * 0.38,
        r:     Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.5 + 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* move */
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width)  d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      });

      /* lines */
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.22;
            ctx.strokeStyle = `rgba(56, 207, 200, ${alpha})`;
            ctx.lineWidth   = 0.8;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      /* dots */
      dots.forEach(d => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 207, 200, ${d.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);
    resize();
    init();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

/* ─── Feature metric cards data ───────────────────────────────────────────── */
const FEATURES = [
  {
    label: "Quality",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Technology",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    label: "Mindset",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    label: "MediaTech",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
];

/* ─── Carousel Images ───────────────────────────────────────────────────────── */
const HERO_IMAGES = [
  {
    src: "/about_us/img_team_tech.png",
    alt: "Đội ngũ QTM MediaTech đang phân tích dữ liệu trên màn hình điều khiển",
  },
  {
    src: "/about_us/img_team_tech2.png",
    alt: "Studio sản xuất truyền thông công nghệ cao QTM MediaTech",
  },
  {
    src: "/about_us/img_team_tech3.png",
    alt: "Trung tâm chiến lược và điều hành truyền thông QTM MediaTech",
  },
];

/* ─── Main component ───────────────────────────────────────────────────────── */
export default function AboutHero() {
  const reduceMotion = useReducedMotion();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const openModal  = useCallback(() => setModalOpen(true),  []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  // 2-second auto image carousel switch
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 },           visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 36 },    visible: { opacity: 1, y: 0 } };

  return (
    <>
      <section id="about-hero" className={`section ${styles.sectionAboutHero}`}>
        {/* Network / dot-connect background */}
        <NetworkCanvas className={styles.networkCanvas} />

        {/* Radial gradient overlay */}
        <div className={styles.bgGradient} aria-hidden="true" />

        {/* Subtle grid */}
        <div className={styles.bgGrid} aria-hidden="true" />

        {/* Ambient orbs */}
        <div className={styles.orbCyan}   aria-hidden="true" />
        <div className={styles.orbPurple} aria-hidden="true" />

        <div className={`section__content ${styles.heroContent}`}>

          {/* ── Eyebrow badge ─────────────────────────────────────────────── */}
          <motion.div
            className={styles.eyebrowBadge}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowCompany}>QTM Communication Technology</span>
            <span className={styles.eyebrowSep}>•</span>
            <span className={styles.eyebrowTagline}>Tinh gọn · Linh hoạt · Hiệu quả</span>
          </motion.div>

          {/* ── 2-column grid ─────────────────────────────────────────────── */}
          <div className={styles.twoColGrid}>

            {/* ─── LEFT COLUMN ─────────────────────────────────────────────── */}
            <div className={styles.leftCol}>

              {/* H1 heading */}
              <motion.h1
                className={styles.heroTitle}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
              >
                Chúng tôi không chỉ<br />làm truyền thông.
              </motion.h1>

              {/* Sub-heading */}
              <motion.p
                className={styles.heroSubHeading}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.65, delay: 0.13, ease: easeOut }}
              >
                Chúng tôi đồng hành cùng doanh nghiệp kiến tạo tăng trưởng.
              </motion.p>

              {/* Description paragraphs */}
              <motion.div
                className={styles.descBlock}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
              >
                <p className={styles.descText}>
                  Trong bối cảnh truyền thông đang thay đổi mạnh mẽ bởi{" "}
                  <strong className={styles.hlWhite}>công nghệ và trí tuệ nhân tạo</strong>,
                  doanh nghiệp không còn cần một đơn vị chỉ thực hiện sự kiện hay triển khai
                  truyền thông đơn lẻ. Điều doanh nghiệp cần là một đối tác có khả năng
                  tư duy chiến lược, ứng dụng công nghệ và đồng hành lâu dài.
                </p>
                <p className={styles.descText}>
                  QTM được xây dựng với định hướng trở thành doanh nghiệp{" "}
                  <strong className={styles.hlCyan}>Công nghệ Truyền thông (MediaTech)</strong>,
                  kết hợp giữa{" "}
                  <strong className={styles.hlWhite}>chiến lược, sáng tạo, công nghệ và dữ liệu</strong>{" "}
                  để tạo nên những giải pháp truyền thông hiệu quả, có thể đo lường và tạo giá trị bền vững.
                </p>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                className={styles.ctaRow}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.7, delay: 0.22, ease: easeOut }}
              >
                <Link
                  href="/solution"
                  className={styles.btnPrimary}
                  id="about-hero-explore-btn"
                >
                  <span>KHÁM PHÁ GIẢI PHÁP</span>
                  <span className={styles.btnArrow}>→</span>
                </Link>

                <button
                  type="button"
                  className={styles.btnOutline}
                  onClick={openModal}
                  id="about-hero-contact-btn"
                >
                  LIÊN HỆ VỚI QTM
                </button>
              </motion.div>

              {/* 4 feature mini-cards */}
              <motion.div
                className={styles.featureRow}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.75, delay: 0.3, ease: easeOut }}
              >
                {FEATURES.map((feat, i) => (
                  <div
                    key={feat.label}
                    className={styles.featureCard}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className={styles.featureIconBox}>{feat.icon}</div>
                    <span className={styles.featureLabel}>{feat.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ─── RIGHT COLUMN ────────────────────────────────────────────── */}
            <motion.div
              className={styles.rightCol}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            >
              <Card3DTilt
                className={styles.imageCard}
                maxTilt={5}
                scale={1.01}
                glareColor="rgba(56, 207, 200, 0.28)"
                glareOpacity={0.3}
              >
                {/* HUD header */}
                <div className={styles.hudHeader}>
                  <span className={styles.hudBadge}>QTM MEDIATECH PLATFORM</span>
                  <span className={styles.hudLiveDot} title="Active / Live" />
                </div>

                {/* Image Carousel */}
                <div className={styles.imgWrapper}>
                  {HERO_IMAGES.map((img, idx) => (
                    <Image
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      width={640}
                      height={430}
                      className={`${styles.imgCover} ${idx === activeImgIndex ? styles.imgActive : ""}`}
                      priority={idx === 0}
                    />
                  ))}
                  <div className={styles.imgOverlay} />

                  {/* Text overlay inside image (crisp & clear) */}
                  <div className={styles.imgTextOverlay}>
                    <div className={styles.imgGlassPill}>
                      <p className={styles.imgTextMain}>
                        Chúng tôi không chỉ<br />làm truyền thông.
                      </p>
                      <p className={styles.imgTextAccent}>
                        Chúng tôi đồng hành cùng<br />doanh nghiệp kiến tạo tăng trưởng.
                      </p>
                    </div>
                  </div>

                  {/* Carousel indicators (3 dots) */}
                  <div className={styles.carouselDots}>
                    {HERO_IMAGES.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`${styles.carouselDot} ${idx === activeImgIndex ? styles.carouselDotActive : ""}`}
                        onClick={() => setActiveImgIndex(idx)}
                        aria-label={`Chuyển sang ảnh ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Floating stat badge */}
                  <div className={styles.floatingBadge}>
                    <div className={styles.fbDot} />
                    <div className={styles.fbText}>
                      <span className={styles.fbValue}>16+</span>
                      <span className={styles.fbLabel}>Năm kinh nghiệm</span>
                    </div>
                  </div>
                </div>

                {/* Card bottom stats bar */}
                <div className={styles.cardStatsBar}>
                  {[
                    { val: "200+", lbl: "Dự án" },
                    { val: "100+", lbl: "Khách hàng" },
                    { val: "300+", lbl: "Sự kiện" },
                  ].map(s => (
                    <div key={s.lbl} className={styles.cardStat}>
                      <span className={styles.cardStatVal}>{s.val}</span>
                      <span className={styles.cardStatLbl}>{s.lbl}</span>
                    </div>
                  ))}
                </div>
              </Card3DTilt>
            </motion.div>

          </div>{/* /twoColGrid */}
        </div>
      </section>

      {/* Contact modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={closeModal}
        contextTitle="LIÊN HỆ VỚI QTM"
      />
    </>
  );
}
