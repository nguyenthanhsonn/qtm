"use client";

import React from "react";

/**
 * LightRays Component
 * Renders subtle diagonal glowing light rays across the background section.
 */
export const LightRays: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-[4] overflow-hidden" aria-hidden="true">
      {/* Light ray 1: Top-Left to Center-Right */}
      <div
        className="absolute -top-[20%] left-[15%] w-[450px] h-[1200px] -rotate-[35deg] origin-top-left opacity-90 blur-[70px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(56,207,200,0.08) 40%, transparent 100%)",
        }}
      />

      {/* Light ray 2: Top-Right ambient glow beam */}
      <div
        className="absolute -top-[10%] right-[10%] w-[380px] h-[1000px] -rotate-[25deg] origin-top-right opacity-75 blur-[80px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(56,207,200,0.1) 0%, rgba(32,149,173,0.06) 50%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default LightRays;
