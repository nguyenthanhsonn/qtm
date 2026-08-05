"use client";

import "@/scss/home-ecosystem.scss";
import Carousel3D, { CarouselItem } from "@/components/Carousel3D";
import { motion, useReducedMotion } from "motion/react";

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

const ecosystemItems: CarouselItem[] = [
  {
    id: 1,
    title: "Hội nghị & Thượng đỉnh Toàn cầu",
    tag: "GLOBAL SUMMIT",
    imageSrc: "/home/ecosystem/panel-events.jpg",
    alt: "Không gian sự kiện và hội trường",
  },
  {
    id: 2,
    title: "Truyền thông Đô thị & OOH",
    tag: "MEDIA TECH SOLUTIONS",
    imageSrc: "/home/ecosystem/panel-city.jpg",
    alt: "Truyền thông đô thị và OOH",
  },
  {
    id: 3,
    title: "Festival & Đại nhạc hội Quy mô lớn",
    tag: "FESTIVAL & CONCERT",
    imageSrc: "/home/ecosystem/panel-concert.jpg",
    alt: "Sản xuất sự kiện quy mô lớn",
  },
  {
    id: 4,
    title: "Kiến tạo Giá trị Bền vững",
    tag: "SUSTAINABLE GROWTH",
    imageSrc: "/home/ecosystem/panel-growth.jpg",
    alt: "Phát triển bền vững",
  },
  {
    id: 5,
    title: "Không gian Trải nghiệm Thương hiệu",
    tag: "QTM EXPERIENCE CENTER",
    imageSrc: "/home/ecosystem/panel-office.jpg",
    alt: "Không gian trải nghiệm & Văn phòng",
  },
  {
    id: 6,
    title: "Công nghệ & Phân tích Dữ liệu",
    tag: "ANALYTICS & DATA TECH",
    imageSrc: "/home/ecosystem/panel-data.jpg",
    alt: "Công nghệ và phân tích dữ liệu",
  },
];

export default function HomeEcosystemSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="ecosystem" className="section section--home-ecosystem">
      <div className="home-ecosystem__bg" aria-hidden="true" />

      <div className="section__content home-ecosystem__content">
        <motion.header
          className="home-ecosystem__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <p className="home-ecosystem__lead">Chúng tôi không tạo chiến dịch.</p>
          <h2 className="home-ecosystem__title">
            Chúng tôi kiến tạo{" "}
            <span className="home-ecosystem__title-gradient">hệ sinh thái truyền thông</span>
            <span className="home-ecosystem__title-dot">.</span>
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
