"use client";

import React from "react";
import ContactModal from "@/components/about/ContactModal";
import type { SolutionContactModalProps } from "@/types/solution";

export default function SolutionContactModal({
  isOpen,
  onClose,
  contextTitle = "NHẬN TƯ VẤN GIẢI PHÁP",
}: SolutionContactModalProps) {
  return (
    <ContactModal
      isOpen={isOpen}
      onClose={onClose}
      contextTitle={contextTitle}
    />
  );
}

