import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Trang chủ",
  description:
    "QTM MediaTech — Strategic MediaTech Partner. 16 năm kinh nghiệm đồng hành cùng doanh nghiệp chuyển hóa Chiến lược, Công nghệ, Sáng tạo và Dữ liệu thành giải pháp truyền thông đo lường được.",
  openGraph: {
    title: "Trang chủ | QTM MediaTech",
    description:
      "16 năm đồng hành cùng doanh nghiệp. 200+ dự án. 100+ khách hàng. Strategic MediaTech Partner.",
    url: "/home",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
