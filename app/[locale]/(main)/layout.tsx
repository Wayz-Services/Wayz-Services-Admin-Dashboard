import type { Metadata } from "next";
import "../globals.css";
import { getMessages } from "next-intl/server";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "WAYZ",
  description: "Welcome to WAYZ applicatoin!",
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
