"use client";

import { track } from "@vercel/analytics";
import { useLanguage } from "@/lib/language-context";
import { ACCENT, CONTACT, CV_URL } from "@/lib/content";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="px-6 sm:px-10 py-24 sm:py-32"
      style={{ background: ACCENT, color: "#0a0a0a" }}
    >
      <div className="font-mono text-[13px] tracking-wide mb-4 opacity-70">
        04 · {t.contactLabel}
      </div>
      <h2 className="text-[clamp(40px,7vw,90px)] font-black tracking-tight m-0 mb-12 leading-[0.98] max-w-4xl">
        {t.contactTitle}
      </h2>
      <div className="flex flex-wrap gap-4 sm:gap-12 items-center">
        <a
          href={`mailto:${CONTACT.email}`}
          onClick={() => track("contact_click", { channel: "email" })}
          className="no-underline text-[#0a0a0a] font-bold text-lg border-b-2 border-[#0a0a0a] pb-0.5"
        >
          {CONTACT.email}
        </a>
        <a
          href={CONTACT.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("contact_click", { channel: "github" })}
          className="no-underline text-[#0a0a0a] font-bold text-lg border-b-2 border-[#0a0a0a] pb-0.5"
        >
          {CONTACT.github}
        </a>
        <a
          href={CONTACT.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("contact_click", { channel: "linkedin" })}
          className="no-underline text-[#0a0a0a] font-bold text-lg border-b-2 border-[#0a0a0a] pb-0.5"
        >
          {CONTACT.linkedin}
        </a>
      </div>

      <div className="flex flex-wrap gap-4 mt-12">
        <a
          href={CV_URL}
          download
          onClick={() => track("download_cv")}
          className="no-underline font-bold text-sm px-6 py-3.5 inline-flex items-center gap-2.5 bg-[#0a0a0a] text-[#f3f2ef]"
        >
          ↓ {t.downloadCv}
        </a>
      </div>
    </section>
  );
}
