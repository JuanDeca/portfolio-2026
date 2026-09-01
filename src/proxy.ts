import { NextRequest, NextResponse } from "next/server";

const SPANISH_SPEAKING_COUNTRIES = new Set([
  "AR", "BO", "CL", "CO", "CR", "CU", "DO", "EC", "SV", "GQ",
  "GT", "HN", "MX", "NI", "PA", "PY", "PE", "PR", "ES", "UY", "VE",
]);

const ONE_YEAR = 60 * 60 * 24 * 365;

export function proxy(request: NextRequest) {
  const existingLang = request.cookies.get("lang")?.value;
  const hasValidCookie = existingLang === "es" || existingLang === "en";

  let lang = hasValidCookie ? existingLang! : "es";

  if (!hasValidCookie) {
    // Vercel-only header; other hosts fall back to "es".
    const country = request.headers.get("x-vercel-ip-country");
    if (country) {
      lang = SPANISH_SPEAKING_COUNTRIES.has(country) ? "es" : "en";
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-lang", lang);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  if (!hasValidCookie) {
    response.cookies.set("lang", lang, { path: "/", maxAge: ONE_YEAR });
  }

  return response;
}

export const config = {
  matcher: "/",
};
