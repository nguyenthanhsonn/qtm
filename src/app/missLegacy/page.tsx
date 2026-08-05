import "@/scss/missLegacy.scss";

const projects = [
  {
    id: "01",
    name: "FinTech Platform",
    category: "Công nghệ tài chính",
    desc: "Xây dựng nền tảng giao dịch trực tuyến xử lý 1M+ transaction/ngày.",
    tech: ["React", "Node.js", "PostgreSQL", "K8s"],
    color: "#00D4FF",
  },
  {
    id: "02",
    name: "Smart Logistics",
    category: "Chuỗi cung ứng",
    desc: "Hệ thống tối ưu vận chuyển thời gian thực với AI routing engine.",
    tech: ["Python", "TensorFlow", "FastAPI", "Redis"],
    color: "#7C4DFF",
  },
  {
    id: "03",
    name: "HealthCare Portal",
    category: "Y tế số",
    desc: "Cổng kết nối bệnh viện - bệnh nhân, tích hợp telehealth & EMR.",
    tech: ["Next.js", "GraphQL", "MongoDB", "AWS"],
    color: "#4FD1E8",
  },
  {
    id: "04",
    name: "EduTech LMS",
    category: "Giáo dục trực tuyến",
    desc: "Nền tảng học trực tuyến cho 500K+ học viên toàn quốc.",
    tech: ["Vue", "Laravel", "MySQL", "CDN"],
    color: "#5EEAD4",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section section--projects">
      <div className="section__content">
        <div className="section__header">
          <span className="section__label">DỰ ÁN</span>
          <h2 className="section__title">
            Công trình <span className="gradient-text">tiêu biểu</span>
          </h2>
          <p className="section__desc">
            Những dự án chúng tôi tự hào đã đồng hành và tạo nên giá trị thực sự.
          </p>
        </div>

        {/* Grid — Tailwind */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="project-card"
              style={{ "--accent": p.color } as React.CSSProperties}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="project-card__id">{p.id}</span>
                <span className="project-card__category">{p.category}</span>
              </div>
              <h3 className="project-card__name">{p.name}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="tag tag--accent">{t}</span>
                ))}
              </div>
              <div className="project-card__bar" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      <div className="orb orb--purple" aria-hidden="true" />
    </section>
  );
}
