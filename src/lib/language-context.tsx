"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { track } from "@vercel/analytics";
import { TEXTS, type Lang } from "./content";

type LanguageContextValue = {
  lang: Lang;
  t: (typeof TEXTS)["es"];
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang ?? "es");

  const value: LanguageContextValue = {
    lang,
    t: TEXTS[lang],
    toggleLang: () => {
      const next = lang === "es" ? "en" : "es";
      // remembers the manual choice so a later geo-based default doesn't override it
      document.cookie = `lang=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
      track("language_toggle", { to: next });
      setLang(next);
    },
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
