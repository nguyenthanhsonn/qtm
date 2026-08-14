"use client";

import styles from "@/scss/home/HomeEcosystemSection.module.scss";
import Carousel3D from "@/components/Carousel3D";
import { CarouselItem } from "@/types/components";
import { motion, useReducedMotion } from "motion/react";

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

const ecosystemItems: CarouselItem[] = [
  {
    id: 1,
    title: "Hội nghị - Hội thảo",
    tag: "Conference",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786449673/panel-events.webp",
    alt: "Không gian sự kiện và hội trường",
  },
  {
    id: 2,
    title: "Truyền thông Đô thị & OOH",
    tag: "MEDIA TECH SOLUTIONS",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786449674/panel-city.webp",
    alt: "Truyền thông đô thị và OOH",
  },
  {
    id: 3,
    title: "Festival & Đại nhạc hội Quy mô lớn",
    tag: "FESTIVAL & CONCERT",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786449674/panel-concert.webp",
    alt: "Sản xuất sự kiện quy mô lớn",
  },
  {
    id: 4,
    title: "Kiến tạo Giá trị Bền vững",
    tag: "SUSTAINABLE GROWTH",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786449673/panel-growth.webp",
    alt: "Phát triển bền vững",
  },
  {
    id: 5,
    title: "Chương trình Đại sứ Thương hiệu",
    tag: "MISS LEGACY AMBASSADOR PROGRAM",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786449673/panel-office.webp",
    alt: "Chương trình Đại sứ Miss Legacy",
  },
  {
    id: 6,
    title: "Công nghệ & Phân tích Dữ liệu",
    tag: "ANALYTICS & DATA TECH",
    imageSrc: "https://res.cloudinary.com/s3qilvce/image/upload/v1786449672/panel-data.webp",
    alt: "Công nghệ và phân tích dữ liệu",
  },
];

export default function HomeEcosystemSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="ecosystem" className={`section ${styles.sectionHomeEcosystem}`}>
      <div className={`section__content ${styles.homeEcosystemContent}`}>
        <motion.header
          className={styles.homeEcosystemHeader}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <p className={styles.homeEcosystemLead}>Chúng tôi không tạo chiến dịch.</p>
          <h2 className={styles.homeEcosystemTitle}>
            Chúng tôi kiến tạo{" "}
            <span className={styles.homeEcosystemTitleGradient}>hệ sinh thái truyền thông</span>
            <span className={styles.homeEcosystemTitleDot}>.</span>
          </h2>
        </motion.header>

        {/* Interactive 3D Carousel Stage */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          transition={{ duration: 0.75, delay: 0.15, ease: easeOut }}
        >
          <Carousel3D items={ecosystemItems} autoPlayDuration={4000} />
        </motion.div>
      </div>
    </section>
  );
}
