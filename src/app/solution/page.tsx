"use client";

import React from "react";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionPainPoints from "@/components/solution/SolutionPainPoints";
import SolutionEcosystem from "@/components/solution/SolutionEcosystem";
import SolutionValueReceived from "@/components/solution/SolutionValueReceived";
import SolutionFeaturedProjects from "@/components/solution/SolutionFeaturedProjects";
import SolutionFooterContact from "@/components/solution/SolutionFooterContact";

export default function SolutionsPage() {
  return (
    <main style={{ width: "100%", overflow: "visible" }}>
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

      {/* BLOCK 6 - CONTACT / FOOTER */}
      <SolutionFooterContact />
    </main>
  );
}
