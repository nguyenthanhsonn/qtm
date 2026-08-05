"use client";

import { motion, useReducedMotion } from "motion/react";
import React from "react";

/**
 * GlassPanels Component
 * Renders floating glassmorphic panels placed at staggered absolute positions.
 * Uses motion/react for gentle floating loop animations and supports prefers-reduced-motion.
 */
export const GlassPanels: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const panels = [
    {
      id: "panel-top-left",
      className: "top-[12%] left-[6%] w-[220px] h-[140px] -rotate-6 hidden lg:block",
      delay: 0,
      duration: 7,
    },
    {
      id: "panel-top-right",
      className: "top-[18%] right-[8%] w-[260px] h-[160px] rotate-3 hidden md:block",
      delay: 1.5,
      duration: 8,
    },
    {
      id: "panel-bottom-left",
      className: "bottom-[15%] left-[10%] w-[240px] h-[150px] rotate-2 hidden md:block",
      delay: 3,
      duration: 7.5,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-[3] overflow-hidden" aria-hidden="true">
      {panels.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-2xl border border-[rgba(56,207,200,0.2)] bg-white/5 backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(18,58,83,0.37)] ${p.className}`}
          animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: p.duration,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: p.delay,
                }
          }
        >
          {/* Decorative glass inner glow highlight */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
};

export default GlassPanels;
