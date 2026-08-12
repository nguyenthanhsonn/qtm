import type { Metadata } from "next";
import React from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Về chúng tôi",
  description:
    "Tìm hiểu về QTM MediaTech — đội ngũ chuyên nghiệp với 16 năm kinh nghiệm trong lĩnh vực truyền thông, sự kiện, công nghệ và dữ liệu tại Việt Nam.",
  path: "/about",
  keywords: ["về QTM MediaTech", "đội ngũ truyền thông", "công ty mediatech Việt Nam"],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
