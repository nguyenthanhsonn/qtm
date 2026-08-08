import React from "react";

export type EcoBlock = {
  id: string;
  code: string;
  title: string;
  desc: string;
  benefits: string[];
  types?: string[];
  ctaLabel: string;
  imageSrc: string;
  align: "left" | "right";
};

export type PainCardItem = {
  id: string;
  num: string;
  title: string;
  desc: string;
  imageSrc: string;
  isFeatured?: boolean;
  gradientClass: string;
  iconSvg: React.ReactNode;
};

export type ValueCardItem = {
  id: string;
  num: string;
  title: string;
  desc: string;
  gradientClass: string;
  iconSvg: React.ReactNode;
};

export type SolutionProjectItem = {
  id: string;
  num: string;
  category: string;
  title: string;
  client: string;
  desc: string;
  imageSrc: string;
  highlights: string[];
};

export interface SolutionContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextTitle?: string;
}
