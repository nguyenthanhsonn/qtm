"use client";

import "@/scss/home-cta.scss";
import { CoreValue } from "@/types/home";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";
import Card3DTilt from "@/components/Card3DTilt";
import { CtaGridBackground } from "@/components/TechBackground";

const coreValues: CoreValue[] = [
  {
    title: "QUALITY",
    subtitle: "LẤY CHẤT LƯỢNG LÀM NỀN TẢNG",
    items: [
      {
        head: "Chuẩn hóa quy trình",
        desc: "Mọi quy trình được chuẩn hóa để đảm bảo sự chính xác và nhất quán.",
      },
      {
        head: "Chính xác trong triển khai",
        desc: "Chú trọng từng chi tiết, đảm bảo triển khai đúng – đủ – đạt.",
      },
      {
        head: "Minh bạch trong hợp tác",
        desc: "Minh bạch thông tin, rõ ràng trong mọi cam kết.",
      },
      {
        head: "Cam kết kết quả",
        desc: "Chúng tôi chịu trách nhiệm với kết quả và giá trị mang lại cho khách hàng.",
      },
    ],
  },
  {
    title: "TECHNOLOGY",
    subtitle: "CÔNG NGHỆ LÀ ĐỘNG LỰC PHÁT TRIỂN",
    items: [
      {
        head: "Ứng dụng trí tuệ nhân tạo",
        desc: "AI được tích hợp vào nghiên cứu, sáng tạo, vận hành và phân tích.",
      },
      {
        head: "Khai thác dữ liệu",
        desc: "Dữ liệu là nền tảng cho mọi quyết định chiến lược và sáng tạo.",
      },
      {
        head: "Tự động hóa quy trình",
        desc: "Tối ưu năng suất, giảm chi phí và nâng cao hiệu quả vận hành.",
      },
      {
        head: "Không ngừng đổi mới",
        desc: "Luôn cập nhật công nghệ mới để mang đến những giải pháp tiên tiến nhất.",
      },
    ],
  },
  {
    title: "MINDSET",
    subtitle: "TƯ DUY TẠO NÊN SỰ KHÁC BIỆT",
    items: [
      {
        head: "Tư duy chiến lược",
        desc: "Nhìn xa, hiểu sâu và xây dựng giải pháp dựa trên mục tiêu kinh doanh.",
      },
      {
        head: "Sáng tạo không ngừng",
        desc: "Khuyến khích ý tưởng mới và dám khác biệt để tạo ra giá trị vượt trội.",
      },
      {
        head: "Học hỏi liên tục",
        desc: "Không ngừng học hỏi để thích ứng và phát triển mỗi ngày.",
      },
      {
        head: "Đồng hành dài hạn",
        desc: "Xây dựng mối quan hệ bền vững, cùng nhau phát triển và tạo giá trị lâu dài.",
      },
    ],
  },
];

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function HomeCtaSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="values" className="section section--home-cta">
      {/* Redesigned Premium Background Grid */}
      <CtaGridBackground />

      {/* Interactive Data Particles */}
      <ParticleField />



      <div className="section__content home-cta__content">

        {/* Title & Desc */}
        <h2
          className="home-cta__title"
          data-aos="zoom-in"
        >
          GIÁ TRỊ <span className="title-highlight">CỐT LÕI</span>
        </h2>

        <motion.p
          className="home-cta__desc"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.15, ease: easeOut }}
        >
          Những giá trị cốt lõi là kim chỉ nam cho mọi hành động của QTM, tạo nên sự khác biệt và giá trị bền vững cho khách hàng.
        </motion.p>

        {/* 3 HUD Cards with User's Exact HTML/CSS Structure */}
        <motion.div
          className="home-cta__values-grid"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {coreValues.map((val, colIdx) => (
            <motion.div
              key={val.title}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: easeOut }}
              className="h-full"
            >
              <Card3DTilt
                className="hud-card h-full"
                maxTilt={14}
                scale={1.035}
                glareColor="rgba(56, 207, 200, 0.35)"
                glareOpacity={0.45}
              >


                {/* Nội dung Card */}
                <div className="hud-title">
                  <span>{val.title}</span>
                  <span className="hud-sub-label">{val.subtitle}</span>
                </div>

                <div className="hud-content">
                  <ul className="card-list">
                    {val.items.map((item, itemIdx) => (
                      <li
                        key={item.head}
                        data-aos="fade-right"
                        data-aos-delay={(colIdx + itemIdx) * 100 + 100}
                        data-aos-duration="600"
                      >
                        <span className="item-head">
                          <span className="scifi-bullet-dot" /> {item.head}:
                        </span>
                        <span className="item-desc">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card3DTilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Redesigned Striking Tech Quote Card Block */}
        <motion.div
          className="home-cta__quote-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
        >
          {/* Tech Corner Accent Marks */}
          <div className="corner-mark top-left" aria-hidden="true" />
          <div className="corner-mark top-right" aria-hidden="true" />
          <div className="corner-mark bottom-left" aria-hidden="true" />
          <div className="corner-mark bottom-right" aria-hidden="true" />

          {/* Brand Manifesto Tag & Icon */}
          <div className="quote-brand-header">
            <span className="quote-brand-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </span>
            <span className="quote-brand-tag">TUYÊN NGÔN THƯƠNG HIỆU</span>
          </div>

          {/* Top Accent Line */}
          <div className="quote-divider" aria-hidden="true" />

          {/* Quote Text Container with Watermark */}
          <div className="quote-text-container">
            <span className="quote-watermark-mark" aria-hidden="true">&ldquo;</span>

            <p className="quote-text">
              &ldquo;Ba giá trị cốt lõi kết hợp tạo nên <span className="quote-accent">DNA QTM</span>, là nền tảng cho mọi giải pháp và cam kết đồng hành cùng doanh nghiệp trên hành trình <span className="quote-accent">tăng trưởng bền vững</span>.&rdquo;
            </p>
          </div>

          {/* Bottom Accent Line */}
          <div className="quote-divider" aria-hidden="true" />
        </motion.div>

      </div>
    </section>
  );
}
