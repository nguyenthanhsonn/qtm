"use client";

import React from "react";

interface RoyalCrownIconProps {
  className?: string;
  gradId?: string;
  glowId?: string;
}

export default function RoyalCrownIcon({
  className,
  gradId = "royalCrownGrad",
  glowId = "royalCrownGlow",
}: RoyalCrownIconProps) {
  return (
    <svg className={className} viewBox="0 0 100 80" fill="none">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5D0" />
          <stop offset="45%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#D4AF37" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter={`url(#${glowId})`}>
        {/* Base Band Ring with Lotus Curves */}
        <path d="M 14,64 Q 50,72 86,64 M 16,58 Q 50,65 84,58" stroke={`url(#${gradId})`} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 14,64 Q 13,61 16,58 M 86,64 Q 87,61 84,58" stroke={`url(#${gradId})`} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="32" cy="62.5" r="1.5" fill="#FFF5D0" />
        <circle cx="50" cy="64.5" r="2" fill="#FFF5D0" />
        <circle cx="68" cy="62.5" r="1.5" fill="#FFF5D0" />

        {/* Art Nouveau Main 5-Peak Line-Art Structure */}
        <path d="M 38,58 C 42,40 44,24 50,14 C 56,24 58,40 62,58" stroke={`url(#${gradId})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 27,59 C 28,45 28,32 33,22 C 37,30 38,42 38,58" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 73,59 C 72,45 72,32 67,22 C 63,30 62,42 62,58" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 16,58 C 14,44 11,34 17,25 C 22,32 25,42 27,59" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 84,58 C 86,44 89,34 83,25 C 78,32 75,42 73,59" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />

        {/* Subtle Inner Lotus Petal Curves */}
        <path d="M 50,14 C 47,26 36,36 33,48 M 50,14 C 53,26 64,36 67,48" stroke={`url(#${gradId})`} strokeWidth="1.2" opacity="0.8" />

        {/* Royal Finials & Top Jewels */}
        <circle cx="50" cy="8" r="3" fill="#FFF5D0" stroke="#D4AF37" strokeWidth="1" />
        <path d="M 50,2 L 50,5 M 47,8 L 53,8" stroke="#FFF5D0" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="33" cy="18" r="2.2" fill="#FFF5D0" stroke="#D4AF37" strokeWidth="0.8" />
        <circle cx="67" cy="18" r="2.2" fill="#FFF5D0" stroke="#D4AF37" strokeWidth="0.8" />
        <circle cx="17" cy="21" r="2" fill="#FFF5D0" stroke="#D4AF37" strokeWidth="0.8" />
        <circle cx="83" cy="21" r="2" fill="#FFF5D0" stroke="#D4AF37" strokeWidth="0.8" />
      </g>
    </svg>
  );
}
