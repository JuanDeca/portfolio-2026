"use client";

import { useLanguage } from "@/lib/language-context";
import { ACCENT, TECH_LIST } from "@/lib/content";
import { TECH_ICONS } from "@/lib/tech-icons";

export default function TechGrid() {
  const { t } = useLanguage();

  return (
    <section
      id="tech"
      className="px-6 sm:px-10 py-24 sm:py-32 border-b-2 border-white/[0.14]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
        <div>
          <div
            className="font-mono text-[13px] tracking-wide mb-3"
            style={{ color: ACCENT }}
          >
            01 · {t.techLabel}
          </div>
          <h2 className="text-[44px] font-black tracking-tight m-0 leading-[1.05]">
            {t.techTitle}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-px bg-white/[0.14]">
          {TECH_LIST.map((tc) => {
            const Icon = TECH_ICONS[tc.name]?.icon;
            const color = TECH_ICONS[tc.name]?.color ?? ACCENT;
            return (
              <div
                key={tc.name}
                className="bg-[#0a0a0a] px-5 py-7 flex flex-col gap-3 transition-colors hover:bg-[#141414]"
              >
                {Icon && <Icon size={28} color={color} />}
                <span className="text-[11px] font-mono text-white/40 tracking-wide">
                  {tc.category}
                </span>
                <span className="text-xl font-bold">{tc.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
