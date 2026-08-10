import React from "react";

export type CoreValue = {
  title: string;
  subtitle: string;
  items: { head: string; desc: string }[];
};

export type SolutionItem = {
  id: string;
  badge: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  desc: string;
  link: string;
  accentColor: string;
};

export type PartnerItem = {
  id: string;
  name: string;
  category: string;
  svgIcon?: React.ReactNode;
  logoSrc?: string;
};

export type HomeIconProps = {
  className?: string;
};
