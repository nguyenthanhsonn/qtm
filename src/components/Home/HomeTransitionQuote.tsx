"use client";

import React from "react";
import CursorGrid from "@/uiux/CursorGrid";

export default function HomeTransitionQuote() {
  return (
    <section className="home-quote-section">
      {/* Background split structure to bridge dark hero and light values section */}
      <div className="home-quote-section__bg-split" aria-hidden="true">
        <div className="bg-split__top relative overflow-hidden">
          <CursorGrid
            color="#38CFC8"
            cellSize={60}
            gridOpacity={0.05}
            maxOpacity={0.4}
            fillOpacity={0.12}
            radius={140}
            clickPulse={true}
          />
        </div>
        <div className="bg-split__bottom" />
      </div>

      <div className="section__content home-quote-section__content">
        <div
          className="home-quote__card"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          {/* Cyber corner brackets */}
          <div className="quote-corner quote-corner-tl" />
          <div className="quote-corner quote-corner-tr" />
          <div className="quote-corner quote-corner-bl" />
          <div className="quote-corner quote-corner-br" />

          {/* Sci-fi HUD crosshair accent */}
          <div className="quote-hud-accent" />

          <p className="quote-card__text">
            &ldquo;Chúng tôi không chỉ triển khai một chiến dịch truyền thông hay một chương trình sự kiện, mà đồng hành cùng khách hàng trong việc <span className="highlight">xây dựng thương hiệu</span>, <span className="highlight">nâng cao trải nghiệm khách hàng</span> và tạo ra <span className="highlight">hiệu quả kinh doanh có thể đo lường</span>.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
