import "@/scss/insights.scss";

const articles = [
  {
    date: "28 Tháng 7, 2026",
    tag: "AI & Machine Learning",
    title: "Ứng dụng LLM trong tự động hoá quy trình doanh nghiệp",
    desc: "Phân tích xu hướng triển khai Large Language Model vào các nghiệp vụ kế toán, nhân sự và CSKH.",
    readTime: "8 phút đọc",
  },
  {
    date: "15 Tháng 7, 2026",
    tag: "Cloud & DevOps",
    title: "Kiến trúc Microservices: bài học từ thực chiến",
    desc: "Những sai lầm phổ biến khi migrate từ monolith sang microservices và cách khắc phục.",
    readTime: "6 phút đọc",
  },
  {
    date: "2 Tháng 7, 2026",
    tag: "Data Analytics",
    title: "Real-time Analytics với Apache Kafka & ClickHouse",
    desc: "Hướng dẫn xây dựng pipeline phân tích dữ liệu thời gian thực cho hàng triệu sự kiện/giây.",
    readTime: "10 phút đọc",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="section section--insights">
      <div className="section__content">
        <div className="section__header">
          <span className="section__label">INSIGHTS</span>
          <h2 className="section__title">
            Góc nhìn <span className="gradient-text">chuyên sâu</span>
          </h2>
          <p className="section__desc">
            Chia sẻ kiến thức, kinh nghiệm và xu hướng công nghệ từ đội ngũ QTM.
          </p>
        </div>

        {/* Grid — Tailwind */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.title} className="insight-card">
              <div className="flex items-center gap-3 flex-wrap mb-4">
                <span className="tag">{a.tag}</span>
                <span className="insight-card__date">{a.date}</span>
              </div>
              <h3 className="insight-card__title">{a.title}</h3>
              <p className="insight-card__desc">{a.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="insight-card__read">{a.readTime}</span>
                <a href="#" className="insight-card__link">
                  Đọc thêm <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="insight-card__glow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>

      <div className="orb orb--cyan orb--right" aria-hidden="true" />
    </section>
  );
}
