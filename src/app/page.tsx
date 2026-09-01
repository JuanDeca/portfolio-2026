import { headers } from "next/headers";
import Portfolio from "@/components/Portfolio";
import type { Lang } from "@/lib/content";

export default async function Home() {
  const headersList = await headers();
  const lang = headersList.get("x-lang") === "en" ? "en" : ("es" as Lang);

  return <Portfolio initialLang={lang} />;
}
