"use client";

import "@/scss/carousel-3d.scss";
import { useEffect, useRef, useState } from "react";

export type CarouselItem = {
  id: number;
  title: string;
  tag: string;
  imageSrc: string;
  alt: string;
};

interface Carousel3DProps {
  items: CarouselItem[];
}

export default function Carousel3D({ items }: Carousel3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate items to form a full 3D cylinder ring
  const fullItems = items.length < 10 ? [...items, ...items] : items;
  const total = fullItems.length;
  const angleStep = 360 / total;

  const [radius, setRadius] = useState(760);
  const [frontIndex, setFrontIndex] = useState(0);

  // Live status state for technical HUD display
  const [hudState, setHudState] = useState({
    velocityDisplay: "0.12",
    statusText: "AUTO_PANNING",
  });

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
    let lastHudUpdate = 0;

    const animate = (timestamp: number) => {
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

      // Throttle HUD status updates to ~10Hz
      if (timestamp - lastHudUpdate > 100) {
        lastHudUpdate = timestamp;
        let st = "AUTO_PANNING";
        if (isDragging.current) st = "USER_DRAGGING";
        else if (Math.abs(targetVelocityRef.current) === 0) st = "INSPECT_PAUSED";
        else if (Math.abs(velocityRef.current) > 0.4) st = "HIGH_SPEED_ROTATE";

        setHudState({
          velocityDisplay: Math.abs(velocityRef.current * 10).toFixed(2),
          statusText: st,
        });
      }

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
      className="c3d-root"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMoveCapture={handleDragMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* HUD Ambient Grid Lines */}
      <div className="c3d-hud-bg" aria-hidden="true">
        <div className="hud-line-glow" />
        <div className="hud-circle-center" />
      </div>

      {/* 3D Cylinder Stage */}
      <div className="c3d-stage">
        <div ref={trackRef} className="c3d-cylinder-track">
          {fullItems.map((item, index) => {
            const cardAngle = index * angleStep;
            const isFront = index === frontIndex;

            return (
              <div
                key={`${item.id}-${index}`}
                className={`c3d-card${isFront ? " c3d-card--front" : ""}`}
                style={{
                  transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                }}
              >
                <div className="c3d-card-inner">
                  {/* Technical HUD Corner Brackets */}
                  <div className="c3d-card-hud-corner c3d-card-hud-corner--tl" />
                  <div className="c3d-card-hud-corner c3d-card-hud-corner--tr" />
                  <div className="c3d-card-hud-corner c3d-card-hud-corner--bl" />
                  <div className="c3d-card-hud-corner c3d-card-hud-corner--br" />

                  <div
                    className="c3d-card-image"
                    style={{ backgroundImage: `url('${item.imageSrc}')` }}
                    role="img"
                    aria-label={item.alt}
                  >
                    <div className="c3d-card-overlay">
                      <span className="c3d-card-tag">{item.tag}</span>
                      <h3 className="c3d-card-title">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical HUD System Status Bar */}
      <div className="c3d-tech-status-bar">
        <div className="status-item">
          <span className="status-dot" />
          <span>SYS_3D_STATUS: <span className="val-highlight">{hudState.statusText}</span></span>
        </div>
        <div className="status-item">
          <span>VELOCITY: <span className="val-highlight">{hudState.velocityDisplay} RPM</span></span>
        </div>
        <div className="status-item">
          <span>ACTIVE_NODE: <span className="val-highlight">0{frontIndex + 1} / 0{total}</span></span>
        </div>
      </div>
    </div>
  );
}
