import type { Metadata } from "next";
import { Adamina } from "next/font/google";
import "./globals.css";

const adamina = Adamina({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Aion Solutions",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={adamina.className}>{children}</body>
    </html>
  );
}
