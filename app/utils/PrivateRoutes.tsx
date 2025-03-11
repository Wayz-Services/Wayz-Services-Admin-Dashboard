"use client";

import { authStore } from "@/app/mobx/AuthStore";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useLayoutEffect } from "react";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const AuthComponent = (props: P) => {
    const router = useRouter();
    const locale = useLocale();

    useLayoutEffect(() => {
      if (!authStore.userInfo.UserID) {
        router.replace(`${locale}/signIn`); // Instant redirect without flash of content
      }
    }, []);

    if (!authStore.userInfo.UserID) {
      return null; // Don't render the component while redirecting
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
