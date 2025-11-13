// src/app/industrial-coatings/page.tsx - FULL REPLACEMENT (Unused Import Removed)

import Image from "next/image";
import Link from "next/link";
import { MoveRight, Factory, Hammer, Warehouse, Shield } from "lucide-react"; // MapPin removed
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Metadata } from "next";
// <<< FIX: MISSING IMPORT

export const metadata: Metadata = {
  title: "Industrial Coatings Hub Johannesburg | Anti-Corrosion, Epoxy, Mining",
  description: "The definitive B2B supplier for specialized anti-corrosion, protective coatings, and heavy-duty epoxy/polyurethane floor systems in Johannesburg South.",
};
// Data structure based on the strategic sitemap (Problem/Solution Focus)
const IndustrialPaintData = [
  {
    title: "Heavy-Duty Floor Coatings",
    href: "/industrial-coatings/epoxy-polyurethane-floor-coatings",
    description: "Epoxy vs. Polyurethane systems for factory floors, chemical, and high-traffic areas.",
    icon: Warehouse,
  },
  {
    title: "Anti-Corrosion & Steel Protection",
    href: "/industrial-coatings/anti-corrosion-protective-coatings",
    description: "Zinc-Rich primers, DTM systems, and protective coatings for structural steel.",
    icon: Shield,
  },
  {
    title: "Mining & Manufacturing Solutions",
    href: "/industrial-coatings/mining-manufacturing-solutions",
    description: "Specialized systems for extreme abrasion, chemical resistance, and CUI prevention.",
    icon: Hammer,
  },
  {
    title: "Industrial Case Studies",
    href: "/industrial-coatings/case-studies",
    description: "Proof of performance: Download local case studies of our JHB South projects.",
    icon: Factory,
  },
];
export default function IndustrialPaintIndexPage() {
  return (
    <main>
      
      {/* Hero Section: Industrial Focus (B2B Positioning) */}
      <section className="bg-neutral-900 py-12 sm:py-16 md:py-24 text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full px-4 sm:px-0">
              <span className="text-sm font-semibold uppercase text-accent">QJ Industrial B2B Solutions</span>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                Specialized Industrial Coatings Hub
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-lg break-words">
                We move beyond retail. This is the central resource for engineers and facility managers needing certified, heavy-duty systems for **asset protection** and **floor longevity**.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  <Link href="/services/on-site-technical-consultation">Request On-Site Specification</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white whitespace-nowrap">
                  <Link href="/industrial-coatings/case-studies">View Proof of Performance →</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/industrial-hero-hub.png" // Placeholder image for industrial hub
                alt="Industrial steel components protected with a high-performance coating"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Key Sub-Pages (Pincer Strategy in action) */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Industrial Solutions Organized by Problem</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {IndustrialPaintData.map((item) => (
              <Card key={item.title} className="flex flex-col h-full hover:border-accent transition-colors duration-300">
                <CardHeader>
                  <item.icon className="h-8 w-8 text-accent fill-accent/10 mb-2" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button asChild variant="link" className="text-accent hover:text-accent/80">
                    <Link href={item.href}>
                        Explore System <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA: Wadeville Hub (REMOVED) */}

    </main>
  );
}