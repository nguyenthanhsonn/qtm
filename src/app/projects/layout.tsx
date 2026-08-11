import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dự án",
  description:
    "Xem các dự án tiêu biểu của QTM MediaTech — hội nghị, sự kiện quy mô lớn, truyền thông billboard, giải trí và phát triển thương hiệu cho các tập đoàn lớn tại Việt Nam.",
  openGraph: {
    title: "Dự án | QTM MediaTech",
    description:
      "200+ dự án tiêu biểu: hội nghị, đại nhạc hội, billboard, truyền thông thương hiệu cho các tập đoàn lớn.",
    url: "/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
