"use client";

import React from "react";

interface SectionDividerProps {
  /** 'dark-to-light' or 'light-to-dark' */
  type: "dark-to-light" | "light-to-dark";
  /** Hex color for top section fill */
  topColor?: string;
  /** Hex color for bottom section fill */
  bottomColor?: string;
  className?: string;
}

export default function SectionDivider({
  type,
  topColor,
  bottomColor,
  className = "",
}: SectionDividerProps) {
  if (type === "dark-to-light") {
    // Fill bottom path with light color
    const fill = bottomColor || "#F8FAFC";
    return (
      <div className={`section-divider section-divider--dark-to-light ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          <path
            d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            fill={fill}
          />
        </svg>
      </div>
    );
  }

  // light-to-dark: Fill bottom path with dark color
  const fill = bottomColor || "#050C1A";
  return (
    <div className={`section-divider section-divider--light-to-dark ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <path
          d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
