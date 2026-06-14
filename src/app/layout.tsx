import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PhotoGallery - The Art of Seeing the World",
  description: "Where Every Click Tells A Story",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="min-h-screen w-full overflow-x-hidden bg-[#2563EB] font-[var(--font-inter)] text-white">
        <Header />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
