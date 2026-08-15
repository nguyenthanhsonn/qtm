import type { Metadata } from "next";
import NotFoundHero from "@/components/NotFound/NotFoundHero";

export const metadata: Metadata = {
  title: "404 - Không tìm thấy trang | QTM MediaTech",
  description: "Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển trên hệ thống QTM MediaTech.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundHero />;
}