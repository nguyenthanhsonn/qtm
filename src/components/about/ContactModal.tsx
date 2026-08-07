"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Card3DTilt from "@/components/Card3DTilt";
import styles from "./ContactModal.module.scss";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.contactModalBackdrop} onClick={onClose} role="dialog" aria-modal="true">
          <motion.div
            className={styles.contactModalContainer}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card3DTilt
              className={styles.darkGlassModal}
              maxTilt={4}
              scale={1}
              glareColor="rgba(56, 207, 200, 0.3)"
              glareOpacity={0.25}
            >
              {/* Close Button */}
              <button
                className={styles.modalCloseBtn}
                onClick={onClose}
                aria-label="Đóng modal liên hệ"
              >
                ✕
              </button>

              {/* HUD Header */}
              <div className={styles.modalHudHeader}>
                <span className={styles.hudTag}>// QTM_CONTACT_GATEWAY</span>
                <h3 className={styles.modalTitle}>
                  LIÊN HỆ VỚI <span className={styles.gradientTealMint}>QTM MEDIA</span>
                </h3>
                <p className={styles.modalDesc}>
                  Để lại thông tin để nhận tư vấn giải pháp truyền thông công nghệ riêng cho doanh nghiệp của bạn.
                </p>
              </div>

              {/* Contact Information Bar */}
              <div className={styles.modalInfoBar}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📧</span>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Email:</span>
                    <a href="mailto:contact@qtm.vn" className={styles.infoVal}>contact@qtm.vn</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Hotline:</span>
                    <a href="tel:02439998888" className={styles.infoVal}>024.3999.8888</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Địa chỉ:</span>
                    <span className={styles.infoVal}>Tầng 12, QTM Building, Hà Nội &amp; TP.HCM</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className={styles.modalForm}>
                {submitted && (
                  <motion.div
                    className={styles.modalSuccessMsg}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Yêu cầu liên hệ đã được gửi thành công! Đội ngũ QTM sẽ phản hồi trong 15 phút.
                  </motion.div>
                )}

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="modal-name">Họ và tên *</label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="modal-email">Email doanh nghiệp *</label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="modal-phone">Số điện thoại / Zalo</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    placeholder="0912 345 678"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="modal-msg">Nội dung trao đổi *</label>
                  <textarea
                    id="modal-msg"
                    rows={4}
                    required
                    placeholder="Mô tả mục tiêu truyền thông hoặc bài toán công nghệ của bạn..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className={styles.modalSubmitBtn}>
                  <span>GỬI THÔNG TIN TƯ VẤN</span>
                  <span className={styles.arrow}>→</span>
                </button>
              </form>
            </Card3DTilt>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
