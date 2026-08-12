import type { Metadata } from "next";
import React from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Trang chủ",
  description:
    "QTM MediaTech — Strategic MediaTech Partner. 16 năm kinh nghiệm đồng hành cùng doanh nghiệp chuyển hóa Chiến lược, Công nghệ, Sáng tạo và Dữ liệu thành giải pháp truyền thông đo lường được.",
  path: "/home",
  keywords: ["QTM MediaTech", "media tech", "truyền thông đo lường", "giải pháp truyền thông"],
});

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
