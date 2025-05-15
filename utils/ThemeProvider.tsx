'use client';

import { useEffect, useState } from 'react';
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps as NextThemeProviderProps,
} from 'next-themes';
import { ReactNode } from 'react';

// Define props for your custom ThemeProvider component
interface ThemeProviderProps extends NextThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This will ensure that the dark mode is only applied on the client-side
    setMounted(true);
  }, []);

  if (!mounted) {
    // If the component hasn't mounted yet, render nothing or a fallback
    return <></>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
