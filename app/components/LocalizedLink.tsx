"use client";

import { useLocale } from "next-intl";
import Link, { LinkProps } from "next/link";
import { ComponentProps } from "react";

type LocalizedLinkProps = LinkProps &
  ComponentProps<"a"> & {
    children: React.ReactNode;
    hreflang?: string; // Optional if you want to customize
  };

export default function LocalizedLink({
  href,
  children,
  hreflang,
  ...props
}: LocalizedLinkProps) {
  const locale = useLocale();

  // Prepend locale if href is not already localized
  const localizedHref =
    typeof href === "string" && !href.startsWith(`/${locale}`)
      ? `/${locale}${href}`
      : href;

  return (
    <Link
      href={localizedHref}
      hrefLang={hreflang || locale} // THIS WORKS DIRECTLY ON LINK NOW!
      {...props}
    >
      {children}
    </Link>
  );
}
