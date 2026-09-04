"use client";

import { useState } from "react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { track } from "@vercel/analytics";
import { ACCENT } from "@/lib/content";

function GithubBadge({ url, project }: { url: string; project: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ver repositorio en GitHub"
      onClick={() => track("project_github_click", { project })}
      className="absolute top-3 right-3 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black cursor-pointer"
    >
      <SiGithub size={18} />
    </a>
  );
}

export default function ProjectGallery({
  images,
  alt,
  placeholderNote,
  githubUrl,
}: {
  images: string[];
  alt: string;
  placeholderNote: string;
  githubUrl?: string;
}) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div
        className="relative flex items-center justify-center border-b border-white/[0.14] group"
        style={{
          aspectRatio: "1916 / 872",
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 12px)",
        }}
      >
        <span className="font-mono text-xs text-white/35 tracking-wide">
          {placeholderNote}
        </span>
        {githubUrl && <GithubBadge url={githubUrl} project={alt} />}
      </div>
    );
  }

  return (
    <div
      className="relative border-b border-white/[0.14] overflow-hidden bg-black group"
      style={{ aspectRatio: "1916 / 872" }}
    >
      <Image
        src={images[index]}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover object-top"
      />
      {githubUrl && <GithubBadge url={githubUrl} project={alt} />}
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => {
              track("project_gallery_nav", { project: alt, action: "prev" });
              setIndex((i) => (i - 1 + images.length) % images.length);
            }}
            className="absolute left-0 top-0 bottom-0 w-1/3 flex items-center justify-start pl-3 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-black/50 to-transparent cursor-pointer"
          >
            <span className="text-white text-xl font-bold">‹</span>
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => {
              track("project_gallery_nav", { project: alt, action: "next" });
              setIndex((i) => (i + 1) % images.length);
            }}
            className="absolute right-0 top-0 bottom-0 w-1/3 flex items-center justify-end pr-3 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-l from-black/50 to-transparent cursor-pointer"
          >
            <span className="text-white text-xl font-bold">›</span>
          </button>
          <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                aria-label={`Imagen ${i + 1}`}
                onClick={() => {
                  track("project_gallery_nav", {
                    project: alt,
                    action: "dot",
                    index: i,
                  });
                  setIndex(i);
                }}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: i === index ? ACCENT : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
