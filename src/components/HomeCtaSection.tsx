"use client";

import "@/scss/home-cta.scss";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/TechBackground/ParticleField";
import Card3DTilt from "@/components/Card3DTilt";

type CoreValue = {
  title: string;
  subtitle: string;
  items: { head: string; desc: string }[];
};

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
      {/* Light Grid Background & Laser Scanbeam */}
      <div className="home-cta__bg" aria-hidden="true" />
      <div className="home-cta__glow" aria-hidden="true" />

      {/* Interactive Data Particles */}
      <ParticleField />

      {/* Technical HUD Corner Indicators */}
      <div className="home-cta__hud-corner home-cta__hud-corner--top-left" aria-hidden="true">
        <span className="hud-dot" />
        <span>SYS_CORE_DNA // 02</span>
      </div>
      <div className="home-cta__hud-corner home-cta__hud-corner--top-right" aria-hidden="true">
        <span>LAT: 21.0285 / LON: 105.83</span>
      </div>
      <div className="home-cta__hud-corner home-cta__hud-corner--bottom-left" aria-hidden="true">
        <span>GRID_MATRIX_STATUS: ACTIVE</span>
      </div>
      <div className="home-cta__hud-corner home-cta__hud-corner--bottom-right" aria-hidden="true">
        <span>QTM_TECH_STANDARDS</span>
      </div>

      <div className="section__content home-cta__content">
        {/* Badge Header */}
        <motion.div
          className="home-cta__badge"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <span>BLOCK 02</span>
          <span>•</span>
          <span>GIÁ TRỊ TẠO NÊN QTM</span>
        </motion.div>

        {/* Title & Desc */}
        <motion.h2
          className="home-cta__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          GIÁ TRỊ <span className="title-highlight">CỐT LÕI</span>
        </motion.h2>

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
          {coreValues.map((val) => (
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
                {/* Điểm nhấn 4 góc */}
                <div className="corner-mark top-left" aria-hidden="true" />
                <div className="corner-mark top-right" aria-hidden="true" />
                <div className="corner-mark bottom-left" aria-hidden="true" />
                <div className="corner-mark bottom-right" aria-hidden="true" />

                {/* Nội dung Card */}
                <div className="hud-title">
                  <span>{val.title}</span>
                  <span className="hud-sub-label">{val.subtitle}</span>
                </div>

                <div className="hud-content">
                  <ul className="card-list">
                    {val.items.map((item) => (
                      <li key={item.head}>
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

        {/* Frameless Large Animated Gradient Quote Typography (MediaTech Partner Style) */}
        <motion.div
          className="home-cta__frameless-quote"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.25, ease: easeOut }}
        >
          <p className="quote-text">
            &ldquo;Ba giá trị cốt lõi kết hợp tạo nên <span className="quote-highlight">DNA QTM</span>, là nền tảng cho mọi giải pháp và cam kết đồng hành cùng doanh nghiệp trên hành trình tăng trưởng bền vững.&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
