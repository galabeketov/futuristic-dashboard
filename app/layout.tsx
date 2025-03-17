import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Futuristic Dashboard",
  description: "Futuristic Dashboard",
  generator: "Futuristic Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
