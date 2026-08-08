import React from "react";

export interface SubmitButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  className?: string;
  children?: React.ReactNode;
}
export type ButtonProps = SubmitButtonProps;

export interface ContactButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export interface TypewriterTextProps {
  text?: string;
  highlightText?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  className?: string;
  textClassName?: string;
  highlightClassName?: string;
  cursorClassName?: string;
  showCursor?: boolean;
}

export interface InputFormProps {
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  name?: string;
  required?: boolean;
  isTextArea?: boolean;
  as?: "input" | "textarea";
  rows?: number;
  options?: string[];
  className?: string;
  error?: string;
}
export type InputProps = InputFormProps;

export type Falloff = 'linear' | 'smooth' | 'sharp';

export interface CursorGridProps {
  cellSize?: number;
  color?: string;
  radius?: number;
  falloff?: Falloff;
  holdTime?: number;
  fadeDuration?: number;
  lineWidth?: number;
  maxOpacity?: number;
  fillOpacity?: number;
  gridOpacity?: number;
  cellRadius?: number;
  clickPulse?: boolean;
  pulseSpeed?: number;
  className?: string;
}

export interface GridConfig {
  cellSize: number;
  color: string;
  radius: number;
  falloff: Falloff;
  holdTime: number;
  fadeDuration: number;
  lineWidth: number;
  maxOpacity: number;
  fillOpacity: number;
  gridOpacity: number;
  cellRadius: number;
  clickPulse: boolean;
  pulseSpeed: number;
}

export interface Pulse {
  x: number;
  y: number;
  t0: number;
}

export interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

export interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  extraScale?: number;
  children?: React.ReactNode;
  className?: string;
}

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
  className?: string;
}

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  scaleAmount?: number;
  blurAmount?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}
