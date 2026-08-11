import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Tìm hiểu về QTM MediaTech — đội ngũ chuyên nghiệp với 16 năm kinh nghiệm trong lĩnh vực truyền thông, sự kiện, công nghệ và dữ liệu tại Việt Nam.",
  openGraph: {
    title: "Về chúng tôi | QTM MediaTech",
    description:
      "16 năm kinh nghiệm. Đội ngũ chuyên nghiệp. Sứ mệnh đồng hành cùng doanh nghiệp tăng trưởng bền vững.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
