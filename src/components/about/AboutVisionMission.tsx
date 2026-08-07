"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Card3DTilt from "@/components/Card3DTilt";
import styles from "./AboutVisionMission.module.scss";

const viewport = { once: true, amount: 0.2 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutVisionMission() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="vision-mission" className={`section ${styles.sectionAboutVm}`}>
      <div className={`section__content ${styles.aboutVmContent}`}>
        {/* Section Title */}
        <motion.h2
          className={styles.aboutVmTitle}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          TẦM NHÌN &amp; <span className={styles.titleHighlight}>SỨ MỆNH</span>
        </motion.h2>

        <motion.p
          className={styles.aboutVmSubtitle}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
        >
          Định hướng chiến lược dẫn dắt QTM trên hành trình dẫn đầu làn sóng truyền thông công nghệ tại Việt Nam.
        </motion.p>

        {/* 2 Main Side-by-Side Dark Glass Cards */}
        <motion.div
          className={styles.aboutVmGrid}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.15, delayChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Card 1: VISION */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: easeOut }}>
            <Card3DTilt
              className={`${styles.vmLightCard} h-full`}
              maxTilt={6}
              scale={1.01}
              glareColor="rgba(79, 209, 232, 0.25)"
              glareOpacity={0.25}
            >
              <div className={styles.vmCardTopIcon}>
                <div className={`${styles.iconCircle} ${styles.iconCircleBlue}`}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4FD1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
              </div>

              <h3 className={styles.vmCardTitle}>TẦM NHÌN</h3>
              <p className={styles.vmCardHighlightSub}>Trở thành Strategic MediaTech Partner hàng đầu Việt Nam</p>
              <p className={styles.vmCardText}>
                Trở thành Strategic MediaTech Partner hàng đầu Việt Nam, tiên phong ứng dụng AI, dữ liệu và công nghệ trong lĩnh vực truyền thông, sự kiện và xây dựng thương hiệu, đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số và phát triển bền vững.
              </p>
            </Card3DTilt>
          </motion.div>

          {/* Card 2: MISSION */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: easeOut }}>
            <Card3DTilt
              className={`${styles.vmLightCard} h-full`}
              maxTilt={6}
              scale={1.01}
              glareColor="rgba(56, 207, 200, 0.25)"
              glareOpacity={0.25}
            >
              <div className={styles.vmCardTopIcon}>
                <div className={`${styles.iconCircle} ${styles.iconCircleTeal}`}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
              </div>

              <h3 className={styles.vmCardTitle}>SỨ MỆNH</h3>
              <p className={styles.vmCardHighlightSub}>Kiến tạo giá trị bằng công nghệ, dữ liệu và sáng tạo</p>
              <p className={styles.vmCardText}>
                Ứng dụng công nghệ, dữ liệu và tư duy sáng tạo để thiết kế những giải pháp truyền thông hiệu quả, giúp khách hàng gia tăng giá trị thương hiệu, tối ưu hiệu suất kinh doanh và tạo ra tác động tích cực cho cộng đồng.
              </p>
            </Card3DTilt>
          </motion.div>
        </motion.div>

        {/* 5 Value Pillars Row under Mission */}
        <motion.div
          className={styles.aboutVmPillarsRow}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
        >
          <div className={styles.vmPillarItem}>
            <div className={styles.pillarIconBox}>💎</div>
            <span className={styles.pillarText}>Gia tăng giá trị thương hiệu</span>
          </div>

          <div className={styles.vmPillarItem}>
            <div className={styles.pillarIconBox}>🤝</div>
            <span className={styles.pillarText}>Kết nối hiệu quả với khách hàng</span>
          </div>

          <div className={styles.vmPillarItem}>
            <div className={styles.pillarIconBox}>⚡</div>
            <span className={styles.pillarText}>Tối ưu chi phí và nguồn lực</span>
          </div>

          <div className={styles.vmPillarItem}>
            <div className={styles.pillarIconBox}>📊</div>
            <span className={styles.pillarText}>Đo lường rõ ràng hiệu quả truyền thông</span>
          </div>

          <div className={styles.vmPillarItem}>
            <div className={styles.pillarIconBox}>🚀</div>
            <span className={styles.pillarText}>Tạo nền tảng tăng trưởng dài hạn</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
