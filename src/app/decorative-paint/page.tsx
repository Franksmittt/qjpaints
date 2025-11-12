// src/app/decorative-paint/page.tsx - FULL REPLACEMENT (Q-Bond Removed)

import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight, Paintbrush, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Decorative Paint Systems Alberton | PAINTCHEM, Top Paints, Genkem Stockist",
  description: "Your expert local supplier for all decorative paint needs. We stock the full range of PAINTCHEM, Top Paints, and Genkem, backed by specialist colour matching.",
};

// Data structure based on Header.tsx internal links. (UPDATED TO NEW BRANDS)
const DecorativePaintData = [
  {
    title: "PAINTCHEM Trade Systems",
    href: "/decorative-paint/paintchem-trade-supplier",
    description: "Official PAINTCHEM supplier with the full Trade line for contractors.",
  },
  {
    title: "Top Paints & Genkem",
    href: "/decorative-paint/top-paints-genkem-stockist",
    description: "Quality paints (Top Paints) and specialty adhesives (Genkem) in one place.",
  },
  {
    title: "Waterproofing & Roofs",
    href: "/decorative-paint/waterproofing-roof-paint",
    description: "Complete solutions for waterproofing and roof coatings (Flash Harry).",
  },
];

export default function DecorativePaintIndexPage() {
  return (
    <main>
      
      {/* Hero Section: Decorative Focus */}
      <section className="bg-neutral-50 py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl text-center">
          <Paintbrush className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold md:text-6xl">
            Premium Decorative Paint Solutions
          </h1>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Browse our specialist range of interior, exterior, and protective paints. We supply the leading professional and trade-grade systems.
          </p>
        </div>
      </section>

      {/* Grid of Key Sub-Pages */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Decorative Services & Brands</h2>
          {/* UPDATED GRID TO 3 COLUMNS */}
          <div className="grid md:grid-cols-3 gap-8">
            {DecorativePaintData.map((item) => (
              <Card key={item.title} className="flex flex-col h-full hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button asChild variant="link" className="text-primary hover:text-primary/80">
                    <Link href={item.href}>
                        Explore <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA: Matching Service */}
      <section className="py-12 bg-accent dark:bg-accent/80 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Have a Colour Sample?</h2>
          <p className="mt-2 text-xl font-medium">
            Bring any item to our Alberton store for guaranteed digital colour matching.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-neutral-900 hover:bg-neutral-200">
            <Link href="/services/expert-paint-colour-matching">
              Find Our Location <MapPin className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
    </main>
  );
}