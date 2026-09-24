"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "@/scss/news/NewsWireframeLayout.module.scss";

export default function NewsWireframeFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Chi phí triển khai ứng dụng AI & Check-in khuôn mặt cho sự kiện là bao nhiêu?",
      a: "Ngân sách phụ thuộc vào quy mô số lượng khách và yêu cầu phần cứng tại địa điểm. QTM cung cấp các gói linh hoạt từ 1.000 đến 15.000+ khách, tối ưu tới 40% chi phí nhân sự vận hành thủ công.",
    },
    {
      q: "Nên chọn Màn hình LED, Máy chiếu hay Backdrop in cho sân khấu sự kiện?",
      a: "LED phù hợp cho sự kiện cần nội dung động và thay đổi liên tục; máy chiếu thích hợp cho các thiết kế 3D Mapping nghệ thuật; backdrop in là giải pháp tối ưu chi phí cho không gian chụp ảnh cố định. QTM sẽ tư vấn phương án phối hợp tối ưu nhất.",
    },
    {
      q: "Quy trình khảo sát và sản xuất kịch bản sự kiện diễn ra trong bao lâu?",
      a: "Đối với sự kiện quy mô vừa (300 - 1.000 khách), thời gian chuẩn bị tiêu chuẩn từ 2 - 4 tuần. Với sự kiện quy mô lớn (trên 3.000 khách), quy trình khảo sát địa điểm, lập hồ sơ kỹ thuật và tổng duyệt diễn ra từ 1 - 2 tháng.",
    },
    {
      q: "QTM kiểm soát và xử lý các sự cố kỹ thuật tại hiện trường như thế nào?",
      a: "QTM áp dụng nguyên tắc dự phòng 1-1-1: Mỗi thiết bị chính (máy phát, bộ đàm, mạng, âm thanh) đều có 1 thiết bị dự phòng bật sẵn, 1 kỹ thuật viên chuyên trách và 1 kịch bản ứng phó sự cố khẩn cấp.",
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.faqGrid}>
          {/* Left Column: Heading */}
          <div className={styles.faqLeftCol}>
            <span className={styles.sectionTagBadge}>FAQ SECTION</span>
            <h2 className={styles.sectionMainTitle}>
              Câu hỏi <span className={styles.titleHighlight}>Thường gặp</span>
            </h2>
            <div className={styles.titleUnderline} style={{ margin: "0 0 1.25rem 0" }} />
            <p className={styles.sectionSubDesc} style={{ margin: 0 }}>
              Giải đáp các thắc mắc phổ biến về công nghệ MediaTech, quy trình sản xuất và phương án vận hành sự kiện chuyên nghiệp.
            </p>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className={styles.accordionList}>
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
                >
                  <button
                    className={styles.accordionHeader}
                    onClick={() => toggleAccordion(idx)}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.accordionToggleIcon}>{isOpen ? "−" : "+"}</span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={styles.accordionBody}>{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
