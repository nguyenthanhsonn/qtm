"use client";

import React, { useState } from "react";
import styles from "@/scss/about_us/ContactModal.module.scss";
import Card3DTilt from "@/components/Card3DTilt";
import CursorGrid from "@/uiux/CursorGrid";

const SERVICE_OPTIONS = [
  "Hội nghị - Hội thảo",
  "Billboard",
  "Chương trình Ca nhạc",
  "CSR",
  "Khác",
];

const BUDGET_OPTIONS = [
  "500 triệu – 1 tỷ VNĐ",
  "1 – 2 tỷ VNĐ",
  "2 – 3 tỷ VNĐ",
  "Trên 3 tỷ VNĐ",
  "Chưa xác định / Cần tư vấn",
];

const TIMELINE_OPTIONS = [
  "Càng sớm càng tốt",
  "Trong 01 tháng",
  "Trong 03 tháng",
  "Trên 03 tháng",
];

const GOAL_OPTIONS = [
  "Tăng nhận diện thương hiệu",
  "Tổ chức hội nghị / Hội thảo",
  "Ra mắt sản phẩm",
  "Quảng bá Billboard",
  "Chương trình Ca nhạc",
  "CSR & ESG",
  "Chuyển đổi truyền thông bằng AI",
  "Khác",
];

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Đồng hành dài hạn",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Giải pháp phù hợp mục tiêu kinh doanh",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38CFC8" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Quy trình minh bạch",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFC72C" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Hiệu quả đo lường được",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    title: "",
    phone: "",
    email: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", company: "", title: "", phone: "", email: "", message: "" });
      setSelectedServices([]);
      setSelectedBudget("");
      setSelectedTimeline("");
      setSelectedGoals([]);
    }, 3000);
  };

  return (
    <section id="contact" className="section section--contact relative overflow-hidden py-16 px-4">
      {/* Background Interactive Cursor Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <CursorGrid
          color="#38CFC8"
          cellSize={65}
          gridOpacity={0.05}
          maxOpacity={0.4}
          fillOpacity={0.12}
          radius={150}
          clickPulse={true}
        />
      </div>

      <div className="section__content relative z-10 max-w-7xl mx-auto">
        <div className={styles.flatPageContainer}>
          <div className={styles.modalBodyGrid}>
            {/* Left Column: Brand Value Proposition */}
            <div className={styles.leftInfoCol}>
              <div className={styles.brandHeaderGroup}>
                <span className={styles.brandTag}>
                  LET&apos;S BUILD TOGETHER <span className={styles.tagLine} />
                </span>
                <h1 className={styles.brandTitle}>
                  Sẵn sàng kiến tạo dự án tiếp theo{" "}
                  <span className={styles.titleHighlight}>cùng QTM?</span>
                </h1>
                <p className={styles.brandDesc}>
                  Chúng tôi không chỉ cung cấp dịch vụ. Chúng tôi đồng hành
                  cùng doanh nghiệp chuyển hóa chiến lược thành kết quả bằng{" "}
                  <strong className={styles.highlightPill}>
                    Quality • Technology • Mindset.
                  </strong>
                </p>
              </div>

              {/* 4 Feature Cards Grid */}
              <div className={styles.featuresGrid}>
                {FEATURES.map((feat) => (
                  <div key={feat.title} className={styles.featureCard}>
                    <div className={styles.featureIconBox}>{feat.icon}</div>
                    <span className={styles.featureTitle}>{feat.title}</span>
                  </div>
                ))}
              </div>

              {/* Guarantee Note Box */}
              <div className={styles.guaranteeBox}>
                <span className={styles.clockIcon}>🕒</span>
                <p className={styles.guaranteeText}>
                  Chia sẻ nhu cầu của bạn, đội ngũ QTM sẽ tư vấn giải pháp
                  phù hợp trong vòng <strong>24 giờ làm việc</strong>.
                </p>
              </div>
            </div>

            {/* Right Column: Solution Consulting Form */}
            <div className={styles.rightFormCol}>
              <div className={styles.formTitleWrap}>
                <h2 className={styles.formMainTitle}>NHẬN TƯ VẤN GIẢI PHÁP</h2>
                <div className={styles.titleAccentLine} />
              </div>

              <form onSubmit={handleSubmit} className={styles.modalForm}>
                {submitted && (
                  <div className={styles.modalSuccessMsg}>
                    ✓ Đã gửi yêu cầu tư vấn thành công! Đội ngũ chuyên gia QTM sẽ liên hệ với bạn trong vòng 24h.
                  </div>
                )}

                {/* Contact Info Inputs (2 Columns) */}
                <div className={styles.inputGrid2Col}>
                  <div className={styles.formGroup}>
                    <label htmlFor="page-name">Họ và tên *</label>
                    <input
                      id="page-name"
                      type="text"
                      required
                      placeholder="Nhập họ và tên"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="page-company">Doanh nghiệp *</label>
                    <input
                      id="page-company"
                      type="text"
                      required
                      placeholder="Nhập tên doanh nghiệp"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="page-title">Chức vụ</label>
                    <input
                      id="page-title"
                      type="text"
                      placeholder="Nhập chức vụ"
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="page-phone">Số điện thoại *</label>
                    <input
                      id="page-phone"
                      type="tel"
                      required
                      placeholder="Nhập số điện thoại"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.colSpanFull}`}>
                    <label htmlFor="page-email">Email *</label>
                    <input
                      id="page-email"
                      type="email"
                      required
                      placeholder="Nhập email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Service Selection Checkboxes */}
                <div className={styles.sectionBlock}>
                  <span className={styles.sectionLabel}>
                    Bạn quan tâm dịch vụ nào?{" "}
                    <span className={styles.subNote}>(Chọn nhiều lựa chọn)</span>
                  </span>
                  <div className={styles.checkboxFlexWrap}>
                    {SERVICE_OPTIONS.map((srv) => {
                      const isChecked = selectedServices.includes(srv);
                      return (
                        <label
                          key={srv}
                          className={`${styles.customChip} ${
                            isChecked ? styles.chipActive : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleService(srv)}
                          />
                          <span className={styles.chipBox}>
                            {isChecked && <span className={styles.checkmark}>✓</span>}
                          </span>
                          <span className={styles.chipText}>{srv}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Detailed Parameters: Budget, Timeline, Goals (3 Columns) */}
                <div className={styles.paramGrid3Col}>
                  {/* Budget Selection (Radio) */}
                  <div className={styles.paramCol}>
                    <span className={styles.paramTitle}>
                      Quy mô ngân sách dự kiến *
                    </span>
                    <div className={styles.radioList}>
                      {BUDGET_OPTIONS.map((bgt) => {
                        const isSelected = selectedBudget === bgt;
                        return (
                          <label
                            key={bgt}
                            className={`${styles.radioItem} ${
                              isSelected ? styles.radioActive : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="page-budget"
                              checked={isSelected}
                              onChange={() => setSelectedBudget(bgt)}
                            />
                            <span className={styles.radioCircle}>
                              {isSelected && <span className={styles.radioDot} />}
                            </span>
                            <span className={styles.radioText}>{bgt}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline Selection (Radio) */}
                  <div className={styles.paramCol}>
                    <span className={styles.paramTitle}>
                      Thời gian triển khai dự kiến *
                    </span>
                    <div className={styles.radioList}>
                      {TIMELINE_OPTIONS.map((tml) => {
                        const isSelected = selectedTimeline === tml;
                        return (
                          <label
                            key={tml}
                            className={`${styles.radioItem} ${
                              isSelected ? styles.radioActive : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="page-timeline"
                              checked={isSelected}
                              onChange={() => setSelectedTimeline(tml)}
                            />
                            <span className={styles.radioCircle}>
                              {isSelected && <span className={styles.radioDot} />}
                            </span>
                            <span className={styles.radioText}>{tml}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Business Goals Selection (Checkbox) */}
                  <div className={styles.paramCol}>
                    <span className={styles.paramTitle}>
                      Mục tiêu của doanh nghiệp{" "}
                      <span className={styles.subNote}>(Chọn nhiều lựa chọn)</span>
                    </span>
                    <div className={styles.radioList}>
                      {GOAL_OPTIONS.map((goal) => {
                        const isChecked = selectedGoals.includes(goal);
                        return (
                          <label
                            key={goal}
                            className={`${styles.radioItem} ${
                              isChecked ? styles.radioActive : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleGoal(goal)}
                            />
                            <span className={styles.chipBox}>
                              {isChecked && <span className={styles.checkmark}>✓</span>}
                            </span>
                            <span className={styles.radioText}>{goal}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Detailed Message Textarea */}
                <div className={styles.formGroup}>
                  <label htmlFor="page-message">Mô tả nhu cầu chi tiết</label>
                  <textarea
                    id="page-message"
                    rows={3}
                    placeholder="Vui lòng chia sẻ chi tiết về mục tiêu, quy mô, đối tượng, yêu cầu đặc biệt..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {/* Primary Submit Button */}
                <button type="submit" className={styles.modalSubmitBtn}>
                  <span>NHẬN TƯ VẤN CHIẾN LƯỢC</span>
                </button>

                {/* Privacy Note */}
                <div className={styles.privacyNote}>
                  <span>Thông tin của bạn được bảo mật tuyệt đối</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="orb orb--cyan orb--sm" aria-hidden="true" />
      <div className="orb orb--purple orb--sm orb--right" aria-hidden="true" />
    </section>
  );
}

