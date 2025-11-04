import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import { Footer } from "@/components/layout/Footer"; // 1. Import the new Footer

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "QJ Paint World | Expert Paint Store in Alberton",
  description: "Your expert partner for decorative, automotive, and industrial paint in Alberton. Official Plascon, Dulux, R-M, and baslac supplier. Call 010 216 9131.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <TopBar />
        <Header />
        
        {/* This '{children}' renders your page.tsx content */}
        {children} 
        
        {/* 2. Add the Footer here, outside/after the children */}
        <Footer />
      </body>
    </html>
  );
}