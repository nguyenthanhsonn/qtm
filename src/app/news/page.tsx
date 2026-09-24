"use client";

import React, { useMemo, useState } from "react";
import AboutBackground from "@/components/about/AboutBackground";
import NewsHero from "@/components/news/NewsHero";
import NewsGrid from "@/components/news/NewsGrid";
import { NEWS_ARTICLES } from "@/data/newsData";
import type { NewsCategory } from "@/types/news";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>("Tất cả");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Category article counts
  const categoryCounts = useMemo(() => {
    const counts: Record<NewsCategory, number> = {
      "Tất cả": NEWS_ARTICLES.length,
      "Xu hướng Event 2026": 0,
      "Công nghệ & AI Sự kiện": 0,
      "Quản trị & Vận hành": 0,
      "Truyền thông & Branding": 0,
      "Chuyên sâu & Case Study": 0,
    };

    NEWS_ARTICLES.forEach((art) => {
      if (counts[art.category] !== undefined) {
        counts[art.category] += 1;
      }
    });

    return counts;
  }, []);

  const handleResetFilters = () => {
    setSelectedCategory("Tất cả");
    setSearchQuery("");
  };

  return (
    <main style={{ position: "relative", minHeight: "100vh", backgroundColor: "#040C1A", overflow: "hidden" }}>
      {/* Background Cyber Particles Layer */}
      <AboutBackground />

      {/* Hero Section with Search Bar & Category Filter */}
      <NewsHero
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalArticlesCount={NEWS_ARTICLES.length}
        categoryCounts={categoryCounts}
      />

      {/* Main Articles Grid & Sidebar Showcase */}
      <NewsGrid
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onResetFilters={handleResetFilters}
      />
    </main>
  );
}
