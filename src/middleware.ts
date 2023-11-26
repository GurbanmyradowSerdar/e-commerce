import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ru", "tm"];

export async function middleware(request: NextRequest) {
  // ! set lang in headers
  const requestHeaders = new Headers(request.headers);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set("locale", request.nextUrl.pathname.split("/")[1]);

  // ! handling localization
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return response;

  const locale = locales[0];
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
