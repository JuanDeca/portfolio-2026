import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Juan Decastelli — Desarrollador Fullstack",
  description:
    "Portfolio de Juan Decastelli, desarrollador fullstack especializado en Next.js, Python y PostgreSQL.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headersList = await headers();
  const lang = headersList.get("x-lang") === "en" ? "en" : "es";

  return (
    <html
      lang={lang}
      className={`${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
