import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PhotoGallery",
  description: "Photography portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="min-h-screen bg-white font-[var(--font-inter)] text-gray-900 antialiased">
        <div className="mx-auto w-full max-w-[100vw] overflow-x-hidden">
          <Header />
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
