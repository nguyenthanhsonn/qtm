"use client";

import "@/scss/solution.scss";
import Card3DTilt from "@/components/Card3DTilt";

const solutions = [
  {
    icon: "🧠",
    title: "Tư vấn chiến lược",
    desc: "Phân tích hiện trạng, xây dựng lộ trình số hóa phù hợp với từng doanh nghiệp.",
    tags: ["Strategy", "Roadmap", "Analysis"],
  },
  {
    icon: "⚙️",
    title: "Phát triển công nghệ",
    desc: "Thiết kế và xây dựng hệ thống phần mềm, ứng dụng web, mobile theo yêu cầu.",
    tags: ["Web App", "Mobile", "API"],
  },
  {
    icon: "📊",
    title: "Phân tích dữ liệu",
    desc: "Khai thác dữ liệu, xây dựng dashboard, BI và mô hình AI/ML cho doanh nghiệp.",
    tags: ["BI", "AI/ML", "Dashboard"],
  },
  {
    icon: "☁️",
    title: "Hạ tầng đám mây",
    desc: "Triển khai, tối ưu hạ tầng Cloud (AWS, GCP, Azure) đảm bảo hiệu năng và an toàn.",
    tags: ["AWS", "DevOps", "Security"],
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="section section--solutions">
      <div className="section__content">
        <div className="section__header">
          <span className="section__label">GIẢI PHÁP</span>
          <h2 className="section__title">
            Dịch vụ <span className="gradient-text">toàn diện</span>
          </h2>
          <p className="section__desc">
            Chúng tôi cung cấp đầy đủ các giải pháp từ tư vấn đến triển khai,
            giúp doanh nghiệp chuyển đổi số thành công.
          </p>
        </div>

        {/* Grid — Tailwind */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <Card3DTilt
              key={s.title}
              className="solution-card h-full"
              maxTilt={14}
              scale={1.035}
              glareColor="rgba(0, 212, 255, 0.35)"
              glareOpacity={0.4}
            >
              <span className="solution-card__icon">{s.icon}</span>
              <h3 className="solution-card__title">{s.title}</h3>
              <p className="solution-card__desc">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 solution-card__tags">
                {s.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="solution-card__glow" aria-hidden="true" />
            </Card3DTilt>
          ))}
        </div>
      </div>

      <div className="orb orb--cyan orb--sm" aria-hidden="true" />
    </section>
  );
}
