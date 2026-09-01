import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiDocker,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

export const TECH_ICONS: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: SiPython, color: "#3776AB" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  Django: { icon: SiDjango, color: "#44B78B" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Git: { icon: SiGit, color: "#F05032" },
};
