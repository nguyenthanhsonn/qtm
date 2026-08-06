"use client";

import "@/scss/about.scss";
import AboutHero from "@/components/about/AboutHero";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutRoadmap from "@/components/about/AboutRoadmap";
import AboutAiCulture from "@/components/about/AboutAiCulture";
import AboutTargetAudience from "@/components/about/AboutTargetAudience";
import AboutCommitments from "@/components/about/AboutCommitments";
import SectionDivider from "@/components/about/SectionDivider";

export default function AboutPage() {
  return (
    <main className="about-page-wrapper">
      {/* BLOCK 1 - HERO (Dark) */}
      <AboutHero />

      {/* Transition: Dark → Light */}
      <SectionDivider type="dark-to-light" bottomColor="#F8FAFC" />

      {/* BLOCK 2 - TẦM NHÌN & SỨ MỆNH (Light) */}
      <AboutVisionMission />

      {/* Transition: Light → Dark */}
      <SectionDivider type="light-to-dark" bottomColor="#050C1A" />

      {/* BLOCK 3 - ROADMAP 5 NĂM (Dark) */}
      <AboutRoadmap />

      {/* Transition: Dark → Light */}
      <SectionDivider type="dark-to-light" bottomColor="#F8FAFC" />

      {/* BLOCK 4 - VĂN HÓA AI (Light) */}
      <AboutAiCulture />

      {/* Transition: Light → Dark */}
      <SectionDivider type="light-to-dark" bottomColor="#081225" />

      {/* BLOCK 5 - KHÁCH HÀNG MỤC TIÊU & ĐỐI TÁC (Dark) */}
      <AboutTargetAudience />

      {/* Transition: Dark → Light */}
      <SectionDivider type="dark-to-light" bottomColor="#FFFFFF" />

      {/* BLOCK 6 - CAM KẾT (Light + Dark CTA Band) */}
      <AboutCommitments />
    </main>
  );
}
