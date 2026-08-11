import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Giải pháp",
  description:
    "Khám phá các giải pháp truyền thông toàn diện của QTM MediaTech: Tư vấn chiến lược, Truyền thông & MediaTech, Phát triển công nghệ, Phân tích dữ liệu, Sự kiện & Trải nghiệm.",
  openGraph: {
    title: "Giải pháp | QTM MediaTech",
    description:
      "Giải pháp truyền thông toàn diện: chiến lược, công nghệ, dữ liệu, sự kiện. Đo lường được — Hiệu quả bền vững.",
    url: "/solution",
  },
};

export default function SolutionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
