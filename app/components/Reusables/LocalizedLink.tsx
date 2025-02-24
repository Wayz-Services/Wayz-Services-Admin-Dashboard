"use client";

import Link, { LinkProps } from "next/link";
import { useLocale } from "next-intl";
import { ComponentProps, useMemo } from "react";

type LocalizedLinkProps = LinkProps &
  ComponentProps<"a"> & {
    children: React.ReactNode;
    hreflang?: string;
  };

export default function LocalizedLink({
  href,
  children,
  hreflang,
  ...props
}: LocalizedLinkProps) {
  const locale = useLocale();

  // Memoize the localized href to avoid unnecessary recalculations
  const localizedHref = useMemo(() => {
    if (typeof href === "string") {
      // If href is a string, prepend the locale if it's not already included
      return href.startsWith(`/${locale}`) ? href : `/${locale}${href}`;
    }
    return href;
  }, [href, locale]);

  return (
    <Link
      href={localizedHref}
      hrefLang={hreflang || locale} // Use the provided hreflang or fallback to the current locale
      {...props}
    >
      {children}
    </Link>
  );
}
