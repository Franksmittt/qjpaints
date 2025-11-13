// src/app/automotive-paint/page.tsx - FULL REPLACEMENT (Consumables Card Removed)

import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Automotive Refinish Systems Alberton | mipa, HB BODY, Consumables",
  description: "The expert supplier for professional bodyshops. We stock premium mipa, HB BODY systems, and all essential consumables, backed by spectrophotometer matching.",
};

// Data structure based on Header.tsx internal links. (UPDATED TO NEW BRANDS)
const AutomotivePaintData = [
  {
    title: "mipa Coating Systems",
    href: "/automotive-paint/mipa-paint-supplier", // Assumed New Page
    description: "Premium mipa Professional Coating Systems for a flawless finish.",
  },
  {
    title: "HB BODY Consumables",
    href: "/automotive-paint/hb-body-consumables", // Assumed New Page
    description: "HB BODY, Farécla, and PREPSOL essentials for prep and polishing.",
  },
  {
    title: "Advanced Paint Matching",
    href: "/automotive-paint/spectrophotometer-paint-matching",
    description: "Our high-tech spectrophotometer service for a perfect blend.",
  },
];

export default function AutomotivePaintIndexPage() {
  return (
    <main>
      
      {/* Hero Section: Automotive Focus */}
      <section className="bg-neutral-900 py-12 sm:py-16 md:py-24 text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 w-full px-4 sm:px-0">
              <Car className="h-12 w-12 text-primary mb-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                Professional Automotive Refinish
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-lg break-words">
                Maximize bodyshop throughput and guarantee customer satisfaction with mipa paint systems, supported by HB BODY consumables and accurate colour matching.
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 whitespace-nowrap">
                <Link href="/trade-partner-program">
                  Join the Bodyshop Hub <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/automotive.png" // Reusing main category image
                alt="A car being professionally spray painted in a bodyshop booth"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Key Sub-Pages */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Automotive Solutions</h2>
          {/* UPDATED GRID TO 3 COLUMNS */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {AutomotivePaintData.map((item) => (
              <Card key={item.title} className="flex flex-col h-full hover:border-accent transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button asChild variant="link" className="text-accent hover:text-accent/80">
                    <Link href={item.href}>
                        Explore Solution <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}