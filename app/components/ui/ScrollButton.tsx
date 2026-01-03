"use client";

import { scrollToSection } from "../utils";

interface ScrollButtonProps {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
  headerOffset?: number;
}

export default function ScrollButton({
  sectionId,
  children,
  className,
  headerOffset = 64,
}: ScrollButtonProps) {
  return (
    <button
      onClick={() => scrollToSection(sectionId, headerOffset)}
      className={className}
    >
      {children}
    </button>
  );
}
