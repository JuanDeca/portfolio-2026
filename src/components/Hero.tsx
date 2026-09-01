"use client";

import { track } from "@vercel/analytics";
import { useLanguage } from "@/lib/language-context";
import { ACCENT, NAME } from "@/lib/content";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative px-6 sm:px-10 min-h-[88vh] flex flex-col justify-center border-b-2 border-white/[0.14] overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 80%)",
        }}
      />
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: "-15%",
          right: "-10%",
          width: "55%",
          height: "70%",
          background: `radial-gradient(circle, ${ACCENT}26 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-center font-mono text-[13px] tracking-[0.35em] text-white/[0.18] whitespace-nowrap select-none z-10">
        FULLSTACK · FULLSTACK · FULLSTACK
      </div>
      <div
        className="relative z-10 font-mono text-sm tracking-wide mb-6"
        style={{ color: ACCENT }}
      >
        {`// ${t.heroKicker}`}
      </div>
      <h1 className="relative z-10 m-0 font-black leading-[0.92] tracking-tight max-w-4xl text-[clamp(56px,9vw,140px)]">
        {NAME.first}
        <br />
        <span className="ml-[8vw]">{NAME.last}</span>
      </h1>
      <p className="relative z-10 max-w-xl mt-9 text-lg leading-relaxed text-white/70">
        {t.heroBio}
      </p>
      <div className="relative z-10 flex gap-4 mt-10 items-center flex-wrap">
        <a
          href="#projects"
          onClick={() => track("cta_click", { target: "projects" })}
          className="no-underline font-bold text-sm px-7 py-4 inline-flex items-center gap-2.5"
          style={{ background: ACCENT, color: "#0a0a0a" }}
        >
          {t.ctaProjects} →
        </a>
        <a
          href="#contact"
          onClick={() => track("cta_click", { target: "contact" })}
          className="no-underline border border-white/30 text-[#f3f2ef] font-bold text-sm px-7 py-4"
        >
          {t.ctaContact}
        </a>
      </div>
    </section>
  );
}
