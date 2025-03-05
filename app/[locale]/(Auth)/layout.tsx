import "../globals.css";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
