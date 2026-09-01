"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { ACCENT } from "@/lib/content";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="px-6 sm:px-10 py-24 sm:py-32 border-b-2 border-white/[0.14]"
    >
      <div
        className="font-mono text-[13px] tracking-wide mb-3"
        style={{ color: ACCENT }}
      >
        02 · {t.expLabel}
      </div>
      <h2 className="text-[44px] font-black tracking-tight m-0 mb-14 leading-[1.05]">
        {t.expTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-10 pt-8 border-t-2 border-white/[0.14]">
        <div className="font-mono text-base text-white/55 flex flex-col gap-4">
          <span>{t.expPeriod}</span>
          <Image
            src="/logos/avellaneda.png"
            alt="Municipalidad de Avellaneda"
            width={851}
            height={293}
            className="w-32 h-auto opacity-90 mx-auto"
          />
        </div>
        <div>
          <h3 className="text-[28px] font-extrabold m-0 mb-1.5">
            {t.expOrg}
          </h3>
          <div className="text-[15px] text-white/55 mb-5 font-mono">
            {t.expRole}
          </div>
          <p className="max-w-2xl text-base leading-[1.7] text-white/75 m-0">
            {t.expDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
