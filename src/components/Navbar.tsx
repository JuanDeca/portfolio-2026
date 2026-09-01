"use client";

import { useLanguage } from "@/lib/language-context";
import { ACCENT } from "@/lib/content";

const navLinks = [
  { href: "#tech", key: "navTech" },
  { href: "#experience", key: "navExp" },
  { href: "#projects", key: "navProjects" },
  { href: "#contact", key: "navContact" },
] as const;

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 sm:px-10 border-b-2 border-white/[0.14] bg-[#0a0a0a]/85 backdrop-blur-md">
      <div className="font-mono font-black text-xl tracking-tight flex items-baseline gap-0.5">
        JD
        <span
          className="animate-[blink_1.2s_step-end_infinite]"
          style={{ color: ACCENT }}
        >
          _
        </span>
      </div>
      <div className="flex items-center gap-6 sm:gap-9">
        <div className="hidden sm:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[13px] font-medium tracking-wide font-mono text-[#f3f2ef] hover:opacity-70 transition-opacity"
            >
              {t[link.key]}
            </a>
          ))}
        </div>
        <button
          onClick={toggleLang}
          className="flex items-center border border-white/30 cursor-pointer font-mono text-xs font-bold overflow-hidden"
        >
          <span
            className="px-3 py-1.5"
            style={{
              background: lang === "es" ? ACCENT : "transparent",
              color: lang === "es" ? "#0a0a0a" : "#f3f2ef",
            }}
          >
            ES
          </span>
          <span
            className="px-3 py-1.5"
            style={{
              background: lang === "en" ? ACCENT : "transparent",
              color: lang === "en" ? "#0a0a0a" : "#f3f2ef",
            }}
          >
            EN
          </span>
        </button>
      </div>
    </nav>
  );
}
