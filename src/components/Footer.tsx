"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 sm:px-10 py-6 flex justify-between items-center font-mono text-xs text-white/40">
      <span>© {year} Juan Decastelli</span>
      <span>{t.footerNote}</span>
    </footer>
  );
}
