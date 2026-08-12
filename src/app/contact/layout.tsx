import type { Metadata } from "next";
import React from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Liên hệ",
  description:
    "Liên hệ QTM MediaTech để nhận tư vấn giải pháp truyền thông, sự kiện, billboard, MediaTech và chiến dịch thương hiệu phù hợp mục tiêu kinh doanh.",
  path: "/contact",
  keywords: ["liên hệ QTM MediaTech", "tư vấn truyền thông", "tư vấn sự kiện", "tư vấn billboard"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
