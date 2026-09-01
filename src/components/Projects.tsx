"use client";

import { useLanguage } from "@/lib/language-context";
import { ACCENT, PROJECTS } from "@/lib/content";
import ProjectGallery from "./ProjectGallery";

export default function Projects() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="projects"
      className="px-6 sm:px-10 py-24 sm:py-32 border-b-2 border-white/[0.14]"
    >
      <div
        className="font-mono text-[13px] tracking-wide mb-3"
        style={{ color: ACCENT }}
      >
        03 · {t.projLabel}
      </div>
      <h2 className="text-[44px] font-black tracking-tight m-0 mb-14 leading-[1.05]">
        {t.projTitle}
      </h2>
      <div className="flex flex-col gap-px bg-white/[0.14]">
        {PROJECTS.map((pr) => {
          const content = pr[lang];
          return (
            <div key={pr.slotId} className="bg-[#0a0a0a] flex flex-col">
              <ProjectGallery
                images={pr.images}
                alt={content.title}
                placeholderNote={t.placeholderNote}
              />
              <div className="p-8 sm:p-10">
                <div
                  className="font-mono text-xs mb-2.5"
                  style={{ color: ACCENT }}
                >
                  {pr.index}
                </div>
                <h3 className="text-[22px] font-extrabold m-0 mb-2.5">
                  {content.title}
                </h3>
                <p className="text-sm leading-[1.65] text-white/68 m-0 mb-4.5">
                  {content.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pr.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono border border-white/25 px-2.5 py-1 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
