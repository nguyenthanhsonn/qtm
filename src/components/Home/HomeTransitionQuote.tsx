"use client";

import React from "react";

export default function HomeTransitionQuote() {
  return (
    <div className="home-quote-floating-wrapper" aria-label="Tuyên ngôn đồng hành">
      <div className="home-quote__card">
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
  );
}
