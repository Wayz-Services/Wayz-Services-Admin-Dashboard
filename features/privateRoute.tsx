'use client';

import { useLocale } from 'next-intl';
import { redirect } from 'next/navigation';

export default function PrivateRoute() {
  const userId = false;

  const locale = useLocale();

  if (!userId) {
    return redirect(`${locale}/sign-in`);
  } else {
    redirect('/dashboard/overview');
  }
}
