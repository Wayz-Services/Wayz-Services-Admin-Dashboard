import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'WAYZ Dashboard',
  description: 'Welcome to WAYZ dashboard!',
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
