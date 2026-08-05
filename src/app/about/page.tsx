import "@/scss/about.scss";

export default function AboutSection() {
  const values = [
    { icon: "⚡", title: "Đổi mới",  desc: "Luôn đứng ở tuyến đầu công nghệ, mang tới giải pháp tiên phong." },
    { icon: "🎯", title: "Hiệu quả", desc: "Tập trung vào kết quả đo lường được, cam kết ROI rõ ràng." },
    { icon: "🤝", title: "Đối tác",  desc: "Đồng hành cùng khách hàng như một thành viên nội bộ." },
    { icon: "🔒", title: "Tin cậy",  desc: "Bảo mật dữ liệu và minh bạch trong mọi quy trình." },
  ];

  return (
    <section id="about" className="section section--about">
      <div className="section__content">
        <div className="section__header">
          <span className="section__label">VỀ CHÚNG TÔI</span>
          <h2 className="section__title">
            Đội ngũ <span className="gradient-text">chuyên gia</span> hàng đầu
          </h2>
          <p className="section__desc">
            Với hơn 12 năm kinh nghiệm, Miss Legacy đã giúp hàng trăm doanh nghiệp
            từ startup đến tập đoàn lớn tối ưu hoạt động và tăng trưởng bền vững
            thông qua sức mạnh của công nghệ.
          </p>
        </div>

        {/* Values grid — Tailwind */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((v) => (
            <div key={v.title} className="value-card">
              <span className="value-card__icon">{v.icon}</span>
              <h3 className="value-card__title">{v.title}</h3>
              <p className="value-card__desc">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Decorative ring visual — Tailwind layout */}
        <div className="relative flex items-center justify-center h-56">
          <div className="about__ring"     aria-hidden="true" />
          <div className="about__ring about__ring--2" aria-hidden="true" />
          <div className="about__core">
            <span className="gradient-text text-3xl font-bold">Miss Legacy</span>
          </div>
        </div>
      </div>

      <div className="orb orb--purple orb--sm" aria-hidden="true" />
    </section>
  );
}
