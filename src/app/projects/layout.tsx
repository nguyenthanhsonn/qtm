import type { Metadata } from "next";
import React from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Dự án",
  description:
    "Xem các dự án tiêu biểu của QTM MediaTech — hội nghị, sự kiện quy mô lớn, truyền thông billboard, giải trí và phát triển thương hiệu cho các tập đoàn lớn tại Việt Nam.",
  path: "/projects",
  keywords: ["dự án truyền thông", "case study sự kiện", "billboard", "QTM MediaTech dự án"],
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
