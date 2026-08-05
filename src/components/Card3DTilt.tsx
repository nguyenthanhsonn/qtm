"use client";

import React, { useRef, useState, useCallback } from "react";
import { useReducedMotion } from "motion/react";

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (default: 12)
  scale?: number; // Scale multiplier on hover (default: 1.03)
  glareColor?: string; // Color of the interactive light glare spotlight
  glareOpacity?: number; // Maximum opacity of glare spotlight (default: 0.35)
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function Card3DTilt({
  children,
  className = "",
  maxTilt = 12,
  scale = 1.03,
  glareColor = "rgba(56, 207, 200, 0.35)",
  glareOpacity = 0.4,
  style,
  onClick,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltTransform, setTiltTransform] = useState<string>("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glareBackground, setGlareBackground] = useState<string>("none");
  const [currentOpacity, setCurrentOpacity] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const reduceMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduceMotion || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles based on mouse distance from center
      const rotateX = parseFloat((((y - centerY) / centerY) * -maxTilt).toFixed(2));
      const rotateY = parseFloat((((x - centerX) / centerX) * maxTilt).toFixed(2));

      // Calculate glare spotlight coordinates in percentage
      const glareX = ((x / rect.width) * 100).toFixed(1);
      const glareY = ((y / rect.height) * 100).toFixed(1);

      setTiltTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
      );
      setGlareBackground(
        `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor} 0%, transparent 65%)`
      );
      setCurrentOpacity(glareOpacity);
    },
    [maxTilt, scale, glareOpacity, glareColor, reduceMotion]
  );

  const handleMouseEnter = useCallback(() => {
    if (reduceMotion) return;
    setIsHovered(true);
  }, [reduceMotion]);

  const handleMouseLeave = useCallback(() => {
    if (reduceMotion) return;
    setIsHovered(false);
    setTiltTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setCurrentOpacity(0);
  }, [reduceMotion]);

  return (
    <div
      ref={cardRef}
      className={`relative transform-gpu ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transform: tiltTransform,
        transition: isHovered
          ? "transform 0.08s ease-out"
          : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
        willChange: "transform",
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}

      {/* Dynamic Interactive Holographic 3D Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] overflow-hidden"
        style={{
          background: glareBackground,
          opacity: currentOpacity,
          borderRadius: "inherit",
          transition: isHovered
            ? "opacity 0.2s ease, background 0.08s ease-out"
            : "opacity 0.5s ease",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
