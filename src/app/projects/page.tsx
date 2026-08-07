"use client";

import React, { useState } from "react";
import AboutBackground from "@/components/about/AboutBackground";
import ProjectsBlogHero from "@/components/projects/ProjectsBlogHero";
import ProjectsBlogGrid from "@/components/projects/ProjectsBlogGrid";
import ContactModal from "@/components/about/ContactModal";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [contactModalState, setContactModalState] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: "",
  });

  const handleCloseContact = () => {
    setContactModalState({ isOpen: false, title: "" });
  };

  return (
    <main style={{ position: "relative", minHeight: "100vh", backgroundColor: "#040C1A", overflow: "hidden" }}>
      {/* Cyber Particle Background */}
      <AboutBackground />

      {/* Hero & Category Filter Bar */}
      <ProjectsBlogHero
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Projects Showcase Blog Grid with Direct Link Navigation */}
      <ProjectsBlogGrid
        selectedCategory={selectedCategory}
      />

      {/* Project Consulting Contact Modal */}
      <ContactModal
        isOpen={contactModalState.isOpen}
        onClose={handleCloseContact}
        contextTitle={contactModalState.title || "TƯ VẤN DỰ ÁN QTM"}
      />
    </main>
  );
}