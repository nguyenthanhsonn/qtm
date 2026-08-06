"use client";

import React from "react";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionPainPoints from "@/components/solution/SolutionPainPoints";
import SolutionEcosystem from "@/components/solution/SolutionEcosystem";
import SolutionValueReceived from "@/components/solution/SolutionValueReceived";
import SolutionFeaturedProjects from "@/components/solution/SolutionFeaturedProjects";
import SolutionFooterContact from "@/components/solution/SolutionFooterContact";
import SectionDivider from "@/components/about/SectionDivider";
import "@/scss/solution.scss";

export default function SolutionsPage() {
  return (
    <main className="solutions-page-root">
      {/* BLOCK 1 - HERO: Nền SÁNG */}
      <SolutionHero />

      {/* Divider SÁNG -> TỐI */}
      <SectionDivider type="light-to-dark" topColor="#F8FAFC" bottomColor="#050C1A" />

      {/* BLOCK 2 - DOANH NGHIỆP ĐANG GẶP ĐIỀU GÌ: Nền TỐI */}
      <SolutionPainPoints />

      {/* BLOCK 3 - HỆ SINH THÁI GIẢI PHÁP QTM: Nền TỐI (Đậm nhất - Điểm nhấn chính) */}
      <SolutionEcosystem />

      {/* Divider TỐI -> SÁNG */}
      <SectionDivider type="dark-to-light" topColor="#050C1A" bottomColor="#F8FAFC" />

      {/* BLOCK 4 - GIÁ TRỊ KHÁCH HÀNG NHẬN ĐƯỢC: Nền SÁNG */}
      <SolutionValueReceived />

      {/* BLOCK 5 - DỰ ÁN TIÊU BIỂU: Nền SÁNG / Light Gray */}
      <SolutionFeaturedProjects />

      {/* Divider SÁNG -> TỐI */}
      <SectionDivider type="light-to-dark" topColor="#F1F5F9" bottomColor="#050C1A" />

      {/* BLOCK 6 - CONTACT / FOOTER: Nền TỐI (Replacing video banner) */}
      <SolutionFooterContact />
    </main>
  );
}
