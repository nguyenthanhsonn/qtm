"use client";

import React from "react";
import AboutBackground from "@/components/about/AboutBackground";
import SolutionScrollProgress from "@/components/solution/SolutionScrollProgress";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionPainPoints from "@/components/solution/SolutionPainPoints";
import SolutionEcosystem from "@/components/solution/SolutionEcosystem";
import SolutionValueReceived from "@/components/solution/SolutionValueReceived";
import SolutionFeaturedProjects from "@/components/solution/SolutionFeaturedProjects";

export default function SolutionsPage() {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      {/* Global Fixed Background Layer for Entire Solution Page */}
      <AboutBackground />

      {/* Floating Vertical Solution Scroll Progress Navigation */}
      <SolutionScrollProgress />

      <main style={{ position: "relative", zIndex: 2, width: "100%", overflow: "visible" }}>
        {/* BLOCK 1 - HERO */}
        <SolutionHero />

        {/* BLOCK 2 - DOANH NGHIỆP ĐANG GẶP ĐIỀU GÌ */}
        <SolutionPainPoints />

        {/* BLOCK 3 - HỆ SINH THÁI GIẢI PHÁP QTM */}
        <SolutionEcosystem />

        {/* BLOCK 4 - GIÁ TRỊ KHÁCH HÀNG NHẬN ĐƯỢC */}
        <SolutionValueReceived />

        {/* BLOCK 5 - DỰ ÁN TIÊU BIỂU */}
        <SolutionFeaturedProjects />
      </main>
    </div>
  );
}
