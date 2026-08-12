import type { Metadata } from "next";
import React from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Miss Legacy",
  description:
    "Miss Legacy là dự án tôn vinh vẻ đẹp di sản, bản lĩnh phụ nữ và các giá trị cộng đồng bền vững do QTM MediaTech đồng hành phát triển.",
  path: "/missLegacy",
  keywords: ["Miss Legacy", "di sản", "phụ nữ", "dự án cộng đồng", "QTM MediaTech"],
});

export default function MissLegacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
