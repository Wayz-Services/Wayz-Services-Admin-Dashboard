import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Initialize next-intl middleware
const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  // Apply next-intl middleware first (for locale handling)
  const response = intlMiddleware(request);

  // Authentication logic
  const authCookie = request.cookies.get("authToken"); // Adjust based on your auth system
  const isAuthPage = request.nextUrl.pathname.includes("/signIn");

  // If the user is NOT authenticated and NOT visiting the sign-in page, redirect to sign-in
  if (!authCookie && !isAuthPage) {
    return NextResponse.redirect(
      new URL(`/${routing.defaultLocale}/signIn`, request.url)
    );
  }

  return response;
}

// Match only internationalized pathnames
export const config = {
  matcher: ["/", "/(ar|en)/buildingServices"],
};
