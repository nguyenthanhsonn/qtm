"use client";

import AboutBackground from "@/components/about/AboutBackground";
import AboutHero from "@/components/about/AboutHero";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutRoadmap from "@/components/about/AboutRoadmap";
import AboutAiCulture from "@/components/about/AboutAiCulture";
import AboutTargetAudience from "@/components/about/AboutTargetAudience";
import AboutCommitments from "@/components/about/AboutCommitments";

export default function AboutPage() {
  return (
    <div className="about-page-root">
      {/* Global Fixed Background Layer for Entire About Page */}
      <AboutBackground />

      <main className="about-page-wrapper">
        {/* BLOCK 1 - HERO */}
        <AboutHero />

        {/* BLOCK 2 - TẦM NHÌN & SỨ MỆNH */}
        <AboutVisionMission />

        {/* BLOCK 3 - ROADMAP 5 NĂM */}
        <AboutRoadmap />

        {/* BLOCK 4 - VĂN HÓA AI */}
        <AboutAiCulture />

        {/* BLOCK 5 - KHÁCH HÀNG MỤC TIÊU & ĐỐI TÁC */}
        <AboutTargetAudience />

        {/* BLOCK 6 - CAM KẾT */}
        <AboutCommitments />
      </main>
    </div>
  );
}
