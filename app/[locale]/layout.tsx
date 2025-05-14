import type { Metadata, Viewport } from 'next';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Cairo, Inter } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import ThemeProvider from '../utils/ThemeProvider';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'WAYZ',
  description: 'Welcome to WAYZ application!',
};

const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b',
};
export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

type Params = Promise<{ locale: string }>;

const inter = Inter({ subsets: ['latin'] });
const cairo = Cairo({ subsets: ['arabic'] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Determine the direction based on locale
  const isRtl = locale === 'ar';
  const fontClass = isRtl ? cairo.className : inter.className;

  const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get('active_theme')?.value;
  const isScaled = activeThemeValue?.endsWith('-scaled');

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
      <body
        className={`${fontClass} ${
          activeThemeValue ? `theme-${activeThemeValue}` : ''
        }${isScaled ? 'theme-scaled' : ''}
        `}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
          enableColorScheme
          enableSystem
        >
          <NextIntlClientProvider messages={messages}>
            <main>{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
