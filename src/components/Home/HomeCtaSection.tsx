"use client";

import styles from "./HomeCtaSection.module.scss";
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
    subtitle: "TƯ DUY & VĂN HÓA ĐỒNG HÀNH",
    items: [
      { head: "Tư duy đối tác (Partner Mindset)", desc: "Xem sự thành công của khách hàng là thước đo giá trị của QTM." },
      { head: "Tinh gọn & Linh hoạt (Agile & Lean)", desc: "Tối ưu nguồn lực, phản ứng nhanh với biến động thị trường." },
      { head: "Minh bạch & Tin cậy (Transparency & Trust)", desc: "Rõ ràng trong chi phí, quy trình và báo cáo hiệu quả." },
      { head: "Hướng tới giá trị bền vững", desc: "Xây dựng nền tảng truyền thông dài hạn thay vì các chiến dịch ngắn hạn." },
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
    <section id="values" className={`section ${styles.sectionHomeCta}`}>
      {/* Redesigned Premium Background Grid */}
      <CtaGridBackground />

      {/* Interactive Data Particles */}
      <ParticleField />

      <div className={`section__content ${styles.homeCtaContent}`}>

        {/* Title & Desc */}
        <h2
          className={styles.homeCtaTitle}
          data-aos="zoom-in"
        >
          GIÁ <span className={styles.techBoxHighlight}>TRỊ</span> <span className={styles.textNavy}>CỐT</span> <span className={styles.titleHighlight}>LÕI</span>
        </h2>

        <motion.p
          className={styles.homeCtaDesc}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.15, ease: easeOut }}
        >
          Những giá trị cốt lõi là kim chỉ nam cho mọi hành động của QTM, tạo nên sự khác biệt và giá trị bền vững cho khách hàng.
        </motion.p>

        {/* 3 HUD Cards */}
        <motion.div
          className={styles.homeCtaValuesGrid}
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
                className={`${styles.hudCard} h-full`}
                maxTilt={14}
                scale={1.035}
                glareColor="rgba(56, 207, 200, 0.35)"
                glareOpacity={0.45}
              >
                {/* Nội dung Card */}
                <div className={styles.hudTitle}>
                  <span>{val.title}</span>
                  <span className={styles.hudSubLabel}>{val.subtitle}</span>
                </div>

                <div className={styles.hudContent}>
                  <ul className={styles.cardList}>
                    {val.items.map((item, itemIdx) => (
                      <li
                        key={item.head}
                        data-aos="fade-right"
                        data-aos-delay={(colIdx + itemIdx) * 100 + 100}
                        data-aos-duration="600"
                      >
                        <span className={styles.itemHead}>
                          <span className={styles.scifiBulletDot} /> {item.head}:
                        </span>
                        <span className={styles.itemDesc}>{item.desc}</span>
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
          className={styles.homeCtaQuoteCard}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
        >
          {/* Tech Corner Accent Marks */}
          <div className={`${styles.cornerMark} ${styles.topLeft}`} aria-hidden="true" />
          <div className={`${styles.cornerMark} ${styles.topRight}`} aria-hidden="true" />
          <div className={`${styles.cornerMark} ${styles.bottomLeft}`} aria-hidden="true" />
          <div className={`${styles.cornerMark} ${styles.bottomRight}`} aria-hidden="true" />

          {/* Brand Manifesto Tag & Icon */}
          <div className={styles.quoteBrandHeader}>
            <span className={styles.quoteBrandIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2095AD" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </span>
            <span className={styles.quoteBrandTag}>TUYÊN NGÔN THƯƠNG HIỆU</span>
          </div>

          {/* Top Accent Line */}
          <div className={styles.quoteDivider} aria-hidden="true" />

          {/* Quote Text Container with Watermark */}
          <div className={styles.quoteTextContainer}>
            <span className={styles.quoteWatermarkMark} aria-hidden="true">&ldquo;</span>

            <p className={styles.quoteText}>
              &ldquo;Ba giá trị cốt lõi kết hợp tạo nên <span className={styles.quoteAccent}>DNA QTM</span>, là nền tảng cho mọi giải pháp và cam kết đồng hành cùng doanh nghiệp trên hành trình <span className={styles.quoteAccent}>tăng trưởng bền vững</span>.&rdquo;
            </p>
          </div>

          {/* Bottom Accent Line */}
          <div className={styles.quoteDivider} aria-hidden="true" />
        </motion.div>

      </div>
    </section>
  );
}
