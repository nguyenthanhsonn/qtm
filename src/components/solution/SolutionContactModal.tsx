"use client";

import React from "react";
import ContactModal from "@/components/about/ContactModal";

interface SolutionContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextTitle?: string;
}

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

