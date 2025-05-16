import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const supportedLocales = ['en', 'ar'];
const defaultLocale = 'en';

export default function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;

  const token = cookies.get('token')?.value;
  const userIsLoggedIn = Boolean(token);

  const pathname = nextUrl.pathname;
  const pathLocale = pathname.split('/')[1];
  const cookieLocale = cookies.get('NEXT_LOCALE')?.value || defaultLocale;

  // Handle root "/" and locale root like "/en" or "/ar"
  if (
    pathname === '/' ||
    (supportedLocales.includes(pathLocale) && pathname === `/${pathLocale}`)
  ) {
    const locale = supportedLocales.includes(pathLocale)
      ? pathLocale
      : cookieLocale;
    const redirectPath = userIsLoggedIn ? 'dashboard' : 'sign-in';

    return NextResponse.redirect(
      new URL(`/${locale}/${redirectPath}`, request.url),
    );
  }

  // If path does not start with a supported locale, prefix it
  if (!supportedLocales.includes(pathLocale)) {
    const locale = cookieLocale;
    const url = new URL(request.url);
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Redirect unauthenticated users away from protected routes
  const isSignInPage = pathname.startsWith(`/${pathLocale}/sign-in`);
  const isProtectedRoute = !isSignInPage && !userIsLoggedIn;

  if (isSignInPage && userIsLoggedIn) {
    return NextResponse.redirect(
      new URL(`/${pathLocale}/dashboard`, request.url),
    );
  }

  if (isProtectedRoute) {
    return NextResponse.redirect(
      new URL(`/${pathLocale}/sign-in`, request.url),
    );
  }

  // Fallback to intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/((?!_next|favicon\\.ico|images|api).*)', // exclude static assets & API
  ],
};
