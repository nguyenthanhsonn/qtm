import React from "react";

export type RoadmapNode = {
  year: string;
  title: string;
  desc: string;
  iconSvg: React.ReactNode;
};

export type CulturePillar = {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  gradientClass: string;
};

export type CommitmentItem = {
  id: string;
  gradientClass: string;
  iconSvg: React.ReactNode;
  title: string;
  desc: string;
};

export type TargetLogo = {
  name: string;
  logoSrc?: string;
  iconSvg?: React.ReactNode;
};

export type TargetColumn = {
  id: string;
  title: string;
  badgeClass: string;
  desc: string;
  logos?: TargetLogo[];
  smeFeatures?: string[];
};

export interface AboutHeroDot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
}

export interface AboutParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
  contextTitle?: string;
}
