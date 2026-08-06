import React, { ElementType } from "react";

export interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (default: 12)
  scale?: number; // Scale multiplier on hover (default: 1.03)
  glareColor?: string; // Color of the interactive light glare spotlight
  glareOpacity?: number; // Maximum opacity of glare spotlight (default: 0.35)
  style?: React.CSSProperties;
  onClick?: () => void;
}

export type CarouselItem = {
  id: number;
  title: string;
  tag: string;
  imageSrc: string;
  alt: string;
};

export interface Carousel3DProps {
  items: CarouselItem[];
  autoPlayDuration?: number;
}

export interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}
