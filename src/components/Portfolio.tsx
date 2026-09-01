"use client";

import { LanguageProvider } from "@/lib/language-context";
import type { Lang } from "@/lib/content";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TechMarquee from "./TechMarquee";
import TechGrid from "./TechGrid";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio({ initialLang }: { initialLang?: Lang }) {
  return (
    <LanguageProvider initialLang={initialLang}>
      <div className="bg-[#0a0a0a] text-[#f3f2ef] min-h-screen overflow-x-hidden relative">
        <Navbar />
        <Hero />
        <TechMarquee />
        <TechGrid />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
