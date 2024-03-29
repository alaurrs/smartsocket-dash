import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/app/ui/sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smartsocket Dash",
  description: "An ESIEE Student project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${inter.className} antialiased bg-gray-100`}>{children}</body>
      </html>
  );
}
