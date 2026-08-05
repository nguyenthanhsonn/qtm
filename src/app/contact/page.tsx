"use client";

import "@/scss/contact.scss";
import { useState } from "react";
import Card3DTilt from "@/components/Card3DTilt";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="section__content">
        {/* Two-column layout — Tailwind */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left — Info */}
          <div className="flex flex-col gap-4">
            <span className="section__label">LIÊN HỆ</span>
            <h2 className="section__title !text-left !mx-0">
              Hãy cùng <span className="gradient-text">bắt đầu</span>
            </h2>
            <p className="section__desc !text-left !mx-0">
              Sẵn sàng chuyển đổi số? Hãy để chúng tôi lắng nghe
              thách thức của bạn và đề xuất giải pháp phù hợp nhất.
            </p>

            <div className="flex flex-col gap-5 mt-2">
              {[
                { icon: "📧", label: "Email",   value: "hello@misslegacy.vn" },
                { icon: "📞", label: "Hotline", value: "1800 123 456" },
                { icon: "📍", label: "Địa chỉ", value: "Tầng 12, Tòa nhà Miss Legacy, TP.HCM" },
              ].map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{d.icon}</span>
                  <div>
                    <div className="contact-detail__label">{d.label}</div>
                    <div className="contact-detail__value">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form wrapped in 3D Card Tilt */}
          <Card3DTilt
            className="w-full"
            maxTilt={8}
            scale={1.01}
            glareColor="rgba(0, 212, 255, 0.3)"
            glareOpacity={0.35}
          >
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              {sent && (
                <div className="contact__success" role="status">
                  ✅ Tin nhắn đã được gửi! Chúng tôi sẽ liên hệ sớm.
                </div>
              )}

              {[
                { id: "contact-name",    label: "Họ và tên",  type: "text",  placeholder: "Nguyễn Văn A",       key: "name" as const },
                { id: "contact-email",   label: "Email",      type: "email", placeholder: "you@company.com",    key: "email" as const },
              ].map((f) => (
                <div key={f.id} className="flex flex-col gap-1.5">
                  <label htmlFor={f.id} className="form-label">{f.label}</label>
                  <input
                    id={f.id}
                    type={f.type}
                    className="form-input"
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    required
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="form-label">Nội dung</label>
                <textarea
                  id="contact-message"
                  className="form-input form-textarea"
                  placeholder="Mô tả ngắn về dự án hoặc thách thức của bạn..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary w-full justify-center">
                Gửi tin nhắn <span aria-hidden="true">→</span>
              </button>
            </form>
          </Card3DTilt>
        </div>
      </div>

      <div className="orb orb--cyan orb--sm"               aria-hidden="true" />
      <div className="orb orb--purple orb--sm orb--right"  aria-hidden="true" />
    </section>
  );
}
