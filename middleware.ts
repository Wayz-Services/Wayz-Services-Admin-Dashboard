import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { getCookie } from 'cookies-next';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { nextUrl } = request;

  // Handle the root "/" path before intl middleware does
  if (nextUrl.pathname === '/') {
    const locale = nextUrl.locale || 'en';

    // TODO: Replace this with your real auth logic (e.g., cookies, headers)
    const token = getCookie('token', { req: request });

    const userIsLoggedIn = Boolean(token);

    const redirectTo = userIsLoggedIn
      ? `/${locale}/dashboard/overview`
      : `/${locale}/sign-in`;

    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  // Fallback to the default intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(ar|en)/:path*'],
};
