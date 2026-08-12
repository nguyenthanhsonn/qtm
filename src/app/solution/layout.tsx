import type { Metadata } from "next";
import React from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Giải pháp",
  description:
    "Khám phá các giải pháp truyền thông toàn diện của QTM MediaTech: Tư vấn chiến lược, Truyền thông & MediaTech, Phát triển công nghệ, Phân tích dữ liệu, Sự kiện & Trải nghiệm.",
  path: "/solution",
  keywords: ["giải pháp truyền thông", "tư vấn chiến lược truyền thông", "sự kiện", "billboard", "MediaTech"],
});

export default function SolutionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
