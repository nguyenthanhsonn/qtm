import "@/scss/home.scss";
import { HomeIconProps } from "@/types/home";
import CountUp from "@/components/CountUp";
import HomeCtaSection from "@/components/Home/HomeCtaSection";
import HomeEcosystemSection from "@/components/Home/HomeEcosystemSection";
import HomeSolutionsSection from "@/components/Home/HomeSolutionsSection";
import HomePartnersSection from "@/components/Home/HomePartnersSection";
import FooterCtaSection from "@/components/FooterCtaSection";
import TextType from "@/components/TextType";
import CyberText from "@/uiux/cyber_text";
import HomeTransitionQuote from "@/components/Home/HomeTransitionQuote";
import CursorGrid from "@/uiux/CursorGrid";

const TrophyIcon = ({ className = "" }: HomeIconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
    <path d="M12 2a7 7 0 0 0-7 7v3.5a7 7 0 0 0 14 0V9a7 7 0 0 0-7-7z" />
  </svg>
);

const BriefcaseIcon = ({ className = "" }: HomeIconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

const UsersIcon = ({ className = "" }: HomeIconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const StarIcon = ({ className = "" }: HomeIconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

function HomeHero() {
  const stats = [
    { value: 15, suffix: "+", label: "Năm kinh nghiệm", icon: TrophyIcon },
    { value: 200, suffix: "+", label: "Dự án đã triển khai", icon: BriefcaseIcon },
    { value: 100, suffix: "+", label: "Khách hàng tin tưởng", icon: UsersIcon },
    { value: 1000, suffix: "+", label: "Sự kiện ấn tượng", icon: StarIcon },
  ];

  return (
    <section id="home" className="section section--home">
      <video
        className="section__bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/kling_20260804_VIDEO_A_cinemati_5058_0.mp4" type="video/mp4" />
      </video>
      <div className="section__bg-overlay" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
        <CursorGrid
          color="#38CFC8"
          cellSize={65}
          gridOpacity={0.06}
          maxOpacity={0.45}
          fillOpacity={0.14}
          radius={160}
          clickPulse={true}
        />
      </div>
      <div className="section__bg-grid" aria-hidden="true" />
      <div className="section__particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="particle" style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>

      {/* Content */}
      <div className="section__content home__content">
        <h1 className="home__title">
          <span className="home__title-line home__title-line--plain">
            <CyberText text="Strategic" />
          </span>
          <span className="home__title-line home__title-line--gradient-teal-blue">
            <CyberText text="MediaTech Partner" />
          </span>
        </h1>

        <div className="home__info-card" data-aos="flip-left" data-aos-delay="300">
          <div className="info-card__title">
            <span className="info-card__dot" />
            15 NĂM ĐỒNG HÀNH CÙNG TRUYỀN THÔNG SỐ
          </div>
          <div className="info-card__divider" />
          <p className="info-card__desc">
            Đồng hành cùng doanh nghiệp chuyển hóa <span className="desc-highlight">Chiến lược – Công nghệ – Sáng tạo – Dữ liệu</span> thành những giải pháp truyền thông có thể đo lường và tạo ra tăng trưởng bền vững.
          </p>
        </div>

        <div className="home__badge-pill">
          <span data-aos="zoom-in" data-aos-delay="150" data-aos-duration="900">Quality</span>
          <span className="badge-pill__dot" data-aos="zoom-in" data-aos-delay="900" data-aos-duration="900">•</span>
          <span data-aos="zoom-in" data-aos-delay="550" data-aos-duration="1200">Technology</span>
          <span className="badge-pill__dot" data-aos="zoom-in" data-aos-delay="950" data-aos-duration="900">•</span>
          <span data-aos="zoom-in" data-aos-delay="1050" data-aos-duration="1400">Mindset</span>
        </div>

        {/* CTA buttons */}
        <div className="home__actions">
          <a href="#contact" className="btn btn--primary home__cta home__cta--primary">
            LIÊN HỆ TƯ VẤN
          </a>
          <a href="#projects" className="btn btn--outline home__cta home__cta--outline">
            KHÁM PHÁ MISS LEGACY <span className="btn__arrow">→</span>
          </a>
        </div>

        {/* Stats bar */}
        <div className="home__stats-bar">
          {stats.map((s, i) => {
            const Icon = s.icon;

            return (
              <div key={s.label} className="home__stat-col">
                <span className="stat-col__icon">
                  <Icon />
                </span>
                <div className="stat-col__info">
                  <span className="stat-col__value">
                    <CountUp to={s.value} duration={2} delay={i * 0.15} />
                    {s.suffix}
                  </span>
                  <span className="stat-col__label">{s.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="home__scroll" aria-hidden="true">
        <span className="home__scroll-dot" />
      </div>

      <div className="orb orb--cyan" aria-hidden="true" />
      <div className="orb orb--purple" aria-hidden="true" />
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTransitionQuote />
      <HomeCtaSection />
      <HomeEcosystemSection />
      <HomeSolutionsSection />
      <HomePartnersSection />
      <FooterCtaSection />
    </>
  );
}