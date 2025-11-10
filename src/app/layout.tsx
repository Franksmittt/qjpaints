import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedShimmerBar } from "@/components/layout/AnimatedShimmerBar";
// 1. IMPORT NEW COMPONENT

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  // UPDATED: Removed Plascon, Dulux, R-M, baslac
  title: "QJ Paint World | Expert Paint Store in Alberton",
  description: "Your expert partner for decorative, automotive, and industrial paint in Alberton. Official mipa, HB BODY, PAINTCHEM, and SHIELD supplier. Call 010 216 9131.",
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
        
     
        {/* 2. INSERT THE SHIMMER BAR HERE */}
        <AnimatedShimmerBar />
        
        {/* This '{children}' renders your page.tsx content */}
        {children} 
        
        {/* 2. Add the Footer here, outside/after the children */}
        <Footer />
      </body>
    </html>
  );
}