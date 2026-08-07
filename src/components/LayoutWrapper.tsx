"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import MissLegacyHeader from "@/components/missLegacy/MissLegacyHeader";
import MissLegacyFooter from "@/components/missLegacy/MissLegacyFooter";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMissLegacy = pathname === "/missLegacy";

  return (
    <>
      {isMissLegacy ? <MissLegacyHeader /> : <Header />}
      <main className="flex-1">{children}</main>
      {isMissLegacy ? <MissLegacyFooter /> : <Footer />}
    </>
  );
}
