import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { GooeyCursor } from "@/components/GooeyCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      <body className="min-h-screen w-full overflow-x-hidden bg-[#000] font-[var(--font-inter)] text-white">
        <SmoothScroll>
          <GooeyCursor />
          <Header />
          <main className="w-full">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
