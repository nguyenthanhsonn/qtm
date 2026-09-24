import type { Metadata } from "next";
import React from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tin tức & Kiến thức Ngành Sự kiện",
  description:
    "Cập nhật những xu hướng MediaTech mới nhất, ứng dụng AI trong quản trị sự kiện, kịch bản dàn dựng sân khấu, chiến lược đo lường ROI và kiến thức chuyên sâu từ QTM MediaTech.",
  path: "/news",
  keywords: [
    "tin tức sự kiện",
    "kiến thức ngành sự kiện",
    "AI sự kiện",
    "MediaTech",
    "quản trị sự kiện",
    "xu hướng event 2026",
    "QTM MediaTech news",
  ],
});

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
