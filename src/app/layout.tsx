import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Montserrat, Nunito_Sans } from "next/font/google";
import "../scss/globals.css";
import "@/scss/sections.scss";
import LayoutWrapper from "@/components/LayoutWrapper";
import ScrollApertureIntro from "@/components/ScrollApertureIntro";
import ClickSpark from "@/uiux/ClickSpark";
import "aos/dist/aos.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// Fallback for SVN-Aguda (commercial font) — geometric, thick, rounded
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Fallback for Proxima Nova (commercial font) — neutral, humanist, readable
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QTM MediaTech",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
