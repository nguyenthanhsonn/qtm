"use client";

import "@/scss/about.scss";
import AboutHero from "@/components/about/AboutHero";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutRoadmap from "@/components/about/AboutRoadmap";
import AboutAiCulture from "@/components/about/AboutAiCulture";
import AboutTargetAudience from "@/components/about/AboutTargetAudience";
import AboutCommitments from "@/components/about/AboutCommitments";

export default function AboutPage() {
  return (
    <main className="about-page-wrapper">
      {/* BLOCK 1 - HERO (Dark #050c1a) */}
      <AboutHero />

      {/* BLOCK 2 - TẦM NHÌN & SỨ MỆNH (Light #F8FAFC) */}
      <AboutVisionMission />

      {/* BLOCK 3 - ROADMAP 5 NĂM (Dark #050c1a) */}
      <AboutRoadmap />

      {/* BLOCK 4 - VĂN HÓA AI (Light #F8FAFC) */}
      <AboutAiCulture />

      {/* BLOCK 5 - KHÁCH HÀNG MỤC TIÊU & ĐỐI TÁC (Dark #081225) */}
      <AboutTargetAudience />

      {/* BLOCK 6 - CAM KẾT (Light + Dark CTA Band) */}
      <AboutCommitments />
    </main>
  );
}
