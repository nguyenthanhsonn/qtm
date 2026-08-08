"use client";

import styles from "@/scss/global/Carousel3D.module.scss";
import { CarouselItem, Carousel3DProps } from "@/types/components";
import { useEffect, useRef, useState } from "react";

export default function Carousel3D({ items }: Carousel3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate items to form a full 3D cylinder ring
  const fullItems = items.length < 10 ? [...items, ...items] : items;
  const total = fullItems.length;
  const angleStep = 360 / total;

  const [radius, setRadius] = useState(760);
  const [frontIndex, setFrontIndex] = useState(0);

  // Physics animation state
  const rotationRef = useRef(0);
  const velocityRef = useRef(0.12);
  const targetVelocityRef = useRef(0.12);
  const animFrameId = useRef<number | null>(null);

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);

  // Responsive cylinder radius calculation
  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setRadius(420);
      } else if (w < 1024) {
        setRadius(600);
      } else {
        setRadius(780);
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // 60fps Animation physics loop with Dynamic Lean (rotateZ)
  useEffect(() => {
    const animate = () => {
      if (!isDragging.current) {
        // Lerp velocity toward targetVelocity
        velocityRef.current += (targetVelocityRef.current - velocityRef.current) * 0.08;
        rotationRef.current += velocityRef.current;
      }

      // Dynamic tilt/lean angle based on velocity (rotateZ)
      const dynamicTiltZ = Math.max(-8, Math.min(8, velocityRef.current * 10));

      if (trackRef.current) {
        trackRef.current.style.transform = `translateZ(-${radius}px) rotateY(${rotationRef.current}deg) rotateZ(${dynamicTiltZ}deg)`;
      }

      // Calculate front card
      const currentRotMod = ((-rotationRef.current % 360) + 360) % 360;
      const closestIdx = Math.round(currentRotMod / angleStep) % total;
      setFrontIndex(closestIdx);

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [radius, angleStep, total]);

  // ── Mouse movement interaction ─────────────────────────────
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const normalizedX = (relativeX / rect.width) * 2 - 1; // -1 (left) to +1 (right)

    // Deadzone in the center (|x| < 0.18) pauses rotation for detailed viewing
    if (Math.abs(normalizedX) < 0.18) {
      targetVelocityRef.current = 0;
    } else {
      const dir = normalizedX > 0 ? -1 : 1;
      const speedFactor = (Math.abs(normalizedX) - 0.18) / 0.82;
      targetVelocityRef.current = dir * speedFactor * 0.85;
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    // Resume gentle auto-scroll on mouse leave
    targetVelocityRef.current = 0.12;
  };

  // ── Mouse & Touch Dragging ─────────────────────────────────
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startRotation.current = rotationRef.current;
    velocityRef.current = 0;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    rotationRef.current = startRotation.current + deltaX * 0.22;
  };

  // Touch support for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startRotation.current = rotationRef.current;
    velocityRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.touches[0].clientX - startX.current;
    rotationRef.current = startRotation.current + deltaX * 0.28;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={styles.c3dRoot}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMoveCapture={handleDragMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Holographic Digital Earth Globe in Center */}
      <div className={styles.c3dHudBg} aria-hidden="true">
        <div className={styles.hudLineGlow} />
        <div className={styles.holoGlobeWrap}>
          <div className={styles.globeAtmosphere} />
          <div className={styles.orbitRingOuter} />
          <div className={styles.orbitRingInner} />
          <div className={styles.globeSphere}>
            <div className={styles.latLine1} />
            <div className={styles.latLine2} />
            <div className={styles.latLine3} />
            <div className={styles.longRing1} />
            <div className={styles.longRing2} />
            <div className={styles.longRing3} />
            <div className={styles.globeCore} />
            <div className={`${styles.globeNode} ${styles.node1}`} />
            <div className={`${styles.globeNode} ${styles.node2}`} />
            <div className={`${styles.globeNode} ${styles.node3}`} />
          </div>
        </div>
      </div>

      {/* 3D Cylinder Stage */}
      <div className={styles.c3dStage}>
        <div ref={trackRef} className={styles.c3dCylinderTrack}>
          {fullItems.map((item, index) => {
            const cardAngle = index * angleStep;
            const isFront = index === frontIndex;

            return (
              <div
                key={`${item.id}-${index}`}
                className={`${styles.c3dCard}${isFront ? ` ${styles.c3dCardFront}` : ""}`}
                style={{
                  transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                }}
              >
                <div className={styles.c3dCardInner}>
                  {/* Technical HUD Corner Brackets */}
                  <div className={`${styles.c3dCardHudCorner} ${styles.c3dCardHudCornerTl}`} />
                  <div className={`${styles.c3dCardHudCorner} ${styles.c3dCardHudCornerTr}`} />
                  <div className={`${styles.c3dCardHudCorner} ${styles.c3dCardHudCornerBl}`} />
                  <div className={`${styles.c3dCardHudCorner} ${styles.c3dCardHudCornerBr}`} />

                  <div
                    className={styles.c3dCardImage}
                    style={{ backgroundImage: `url('${item.imageSrc}')` }}
                    role="img"
                    aria-label={item.alt}
                  >
                    <div className={styles.c3dCardOverlay}>
                      <span className={styles.c3dCardTag}>{item.tag}</span>
                      <h3 className={styles.c3dCardTitle}>{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
