"use client";

import React, { useState, useEffect } from "react";
import styles from "./SolutionContactModal.module.scss";
import { motion, AnimatePresence } from "motion/react";

interface SolutionContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextTitle?: string;
}

export default function SolutionContactModal({
  isOpen,
  onClose,
  contextTitle = "Liên hệ tư vấn giải pháp",
}: SolutionContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.contactModalBackdrop} onClick={onClose}>
          <motion.div
            className={styles.contactModalContainer}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.darkGlassModal}>
              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className={styles.modalCloseBtn}
                aria-label="Đóng cửa sổ"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className={styles.modalHudHeader}>
                <span className={styles.hudTag}>// QTM_SOLUTIONS_CONSULTING</span>
                <h3 className={styles.modalTitle}>
                  <span className={styles.gradientTealMint}>{contextTitle}</span>
                </h3>
                <p className={styles.modalDesc}>
                  Để lại thông tin, chuyên gia truyền thông của QTM sẽ kết nối và tư vấn giải pháp chuyên biệt cho doanh nghiệp của bạn trong vòng 24h.
                </p>
              </div>

              {/* Quick Contact Info Row */}
              <div className={styles.modalInfoBar}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Hotline tư vấn</span>
                    <a href="tel:0988888888" className={styles.infoVal}>098.888.8888</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✉️</span>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Email hỗ trợ</span>
                    <a href="mailto:contact@qtm.vn" className={styles.infoVal}>contact@qtm.vn</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Trụ sở chính</span>
                    <span className={styles.infoVal}>Hà Nội &amp; TP.HCM</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className={styles.modalForm}>
                {isSubmitted && (
                  <div className={styles.modalSuccessMsg}>
                    ✓ Đã gửi thông tin yêu cầu tư vấn thành công! QTM sẽ liên hệ với bạn trong thời gian sớm nhất.
                  </div>
                )}

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="modal-name">Họ và tên *</label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="modal-email">Email doanh nghiệp *</label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="modal-phone">Số điện thoại *</label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      placeholder="0912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="modal-company">Tên doanh nghiệp</label>
                    <input
                      id="modal-company"
                      type="text"
                      placeholder="Công ty ABC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="modal-message">Nhu cầu / Thách thức cần tư vấn</label>
                  <textarea
                    id="modal-message"
                    rows={3}
                    placeholder="Mô tả ngắn gọn về quy mô chiến dịch, mục tiêu hoặc ngân sách mong muốn..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className={styles.modalSubmitBtn}>
                  <span>GỬI YÊU CẦU TƯ VẤN</span>
                  <span className={styles.arrow}>→</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
