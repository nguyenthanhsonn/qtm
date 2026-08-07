"use client";

import React, { useState } from "react";
import MissLegacyHero from "@/components/missLegacy/MissLegacyHero";
import MissLegacyMission from "@/components/missLegacy/MissLegacyMission";
import MissLegacyImpact from "@/components/missLegacy/MissLegacyImpact";
import MissLegacyAwards from "@/components/missLegacy/MissLegacyAwards";
import MissLegacyPartners from "@/components/missLegacy/MissLegacyPartners";
import MissLegacyStoryProgress from "@/components/missLegacy/MissLegacyStoryProgress";
import ContactModal from "@/components/about/ContactModal";

export default function MissLegacyPage() {
  const [modalState, setModalState] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: "",
  });

  const handleOpenModal = (title: string) => {
    setModalState({ isOpen: true, title });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, title: "" });
  };

  return (
    <main style={{ width: "100%", overflow: "visible", backgroundColor: "#04140D", position: "relative" }}>
      {/* Floating Story Chapter Navigation */}
      <MissLegacyStoryProgress />

      {/* CHAPTER 1: HERO & OVERVIEW */}
      <MissLegacyHero onOpenModal={handleOpenModal} />

      {/* CHAPTER 2: SỨ MỆNH & NIỀM TIN */}
      <MissLegacyMission />

      {/* CHAPTER 3: GIÁ TRỊ & TÁC ĐỘNG */}
      <MissLegacyImpact />

      {/* CHAPTER 4: LEGACY WOMEN AWARDS */}
      <MissLegacyAwards />

      {/* CHAPTER 5: ĐƠN VỊ ĐỒNG HÀNH */}
      <MissLegacyPartners />

      {/* Solution Consulting Modal */}
      <ContactModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        contextTitle={modalState.title || "TƯ VẤN DỰ ÁN MISS LEGACY"}
      />
    </main>
  );
}
