import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Montserrat, Nunito_Sans, Chakra_Petch } from "next/font/google";
import "../scss/globals.css";
import "@/scss/sections.scss";
import LayoutWrapper from "@/components/LayoutWrapper";
import ScrollApertureIntro from "@/components/ScrollApertureIntro";
import ClickSpark from "@/uiux/ClickSpark";
import "aos/dist/aos.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

// Primary Tech-Geometric Heading Fallback for SVN-Aguda
const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Fallback for SVN-Aguda (commercial font) — geometric, thick, rounded
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Fallback for Proxima Nova (commercial font) — neutral, humanist, readable
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qtmmedia.vn";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "QTM MediaTech — Strategic MediaTech Partner",
    template: "%s | QTM MediaTech",
  },
  description:
    "QTM MediaTech — Đơn vị đồng hành cùng doanh nghiệp chuyển hóa Chiến lược, Công nghệ, Sáng tạo và Dữ liệu thành giải pháp truyền thông đo lường được. 16 năm kinh nghiệm, 200+ dự án.",
  keywords: ["QTM MediaTech", "truyền thông", "sự kiện", "billboard", "media tech", "Miss Legacy"],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "QTM MediaTech",
    title: "QTM MediaTech — Strategic MediaTech Partner",
    description:
      "Đồng hành cùng doanh nghiệp chuyển hóa Chiến lược – Công nghệ – Sáng tạo – Dữ liệu thành giải pháp truyền thông có thể đo lường.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QTM MediaTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QTM MediaTech — Strategic MediaTech Partner",
    description:
      "Đồng hành cùng doanh nghiệp chuyển hóa Chiến lược – Công nghệ – Sáng tạo – Dữ liệu thành giải pháp truyền thông có thể đo lường.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${chakraPetch.variable} ${montserrat.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ClickSpark
          sparkColor="#ffffff"
          sparkSize={12}
          sparkRadius={25}
          sparkCount={7}
          duration={500}
        >
          <ScrollApertureIntro />
          <LayoutWrapper>{children}</LayoutWrapper>
        </ClickSpark>
      </body>
    </html>
  );
}
