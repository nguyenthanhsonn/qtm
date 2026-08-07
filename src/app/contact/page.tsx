"use client";

import styles from "./ContactPage.module.scss";
import { useState } from "react";
import Card3DTilt from "@/components/Card3DTilt";
import Input from "@/uiux/input_form";
import SubmitButton from "@/uiux/btn_submit";
import CursorGrid from "@/uiux/CursorGrid";
import TypewriterText from "@/uiux/Typewriter_text";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    need: "",
    message: ""
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({
      name: "",
      company: "",
      phone: "",
      email: "",
      need: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section section--contact relative overflow-hidden">
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
      <div className="section__content">
        {/* Two-column layout — Tailwind */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left — Info */}
          <div className="flex flex-col gap-4">
            <span className="section__label">LIÊN HỆ</span>
            <h2 className="section__title text-left! mx-0!">
              <TypewriterText
                text="Hãy cùng bắt đầu"
                highlightText="bắt đầu"
                speed={90}
                deleteSpeed={45}
                pauseDuration={2500}
                loop={true}
                highlightClassName="gradient-text ml-2"
                cursorClassName="text-[#38CFC8]"
              />
            </h2>
            <p className="section__desc text-left! mx-0!">
              Sẵn sàng chuyển đổi số? Hãy để chúng tôi lắng nghe
              thách thức của bạn và đề xuất giải pháp phù hợp nhất.
            </p>

            <div className="flex flex-col gap-5 mt-2">
              {[
                { icon: "📧", label: "Email", value: "hello@misslegacy.vn" },
                { icon: "📞", label: "Hotline", value: "1800 123 456" },
                { icon: "📍", label: "Địa chỉ", value: "Tầng 12, Tòa nhà Miss Legacy, TP.HCM" },
              ].map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{d.icon}</span>
                  <div>
                    <div className={styles.contactDetailLabel}>{d.label}</div>
                    <div className={styles.contactDetailValue}>{d.value}</div>
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
            <form className={`${styles.contactForm} flex flex-col gap-4`} onSubmit={handleSubmit} noValidate>
              {sent && (
                <div className={styles.contactSuccess} role="status">
                  ✅ Yêu cầu tư vấn của bạn đã được gửi thành công!
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                <Input
                  id="contact-name"
                  label="Họ và tên"
                  type="text"
                  placeholder=" "
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <Input
                  id="contact-company"
                  label="Doanh nghiệp"
                  type="text"
                  placeholder=" "
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  required
                />
                <Input
                  id="contact-phone"
                  label="Số điện thoại"
                  type="tel"
                  placeholder=" "
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
                <Input
                  id="contact-email"
                  label="Email"
                  type="email"
                  placeholder=" "
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <div className="md:col-span-2">
                  <Input
                    id="contact-need"
                    label="Nhu cầu"
                    type="text"
                    placeholder=" "
                    value={form.need}
                    onChange={(e) => setForm({ ...form, need: e.target.value })}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    id="contact-message"
                    label="Nội dung"
                    as="textarea"
                    rows={4}
                    placeholder=" "
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
              </div>

              <SubmitButton type="submit" className="w-full mt-2">
                Gửi yêu cầu tư vấn <span aria-hidden="true">→</span>
              </SubmitButton>
            </form>
          </Card3DTilt>
        </div>
      </div>

      <div className="orb orb--cyan orb--sm" aria-hidden="true" />
      <div className="orb orb--purple orb--sm orb--right" aria-hidden="true" />
    </section>
  );
}
