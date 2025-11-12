// src/app/industrial-coatings/anti-corrosion-protective-coatings/page.tsx - FULL REPLACEMENT (Unused Import Removed)

import Image from "next/image";
import { Shield, Hammer, Layers } from "lucide-react"; // Removed Factory & MoveRight
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Targeting B2B specifiers in Johannesburg
  title: "SHIELD Anti-Corrosion Coatings & Steel Protection Johannesburg | QJ Industrial",
  // UPDATED: Added SHIELD
  description: "Specialized supplier of SHIELD anti-corrosion and protective coatings for steel in mining and manufacturing. Solutions include Zinc-Rich Primers and DTM systems for asset protection.",
};
const solutionHighlights = [
  {
    icon: Shield,
    title: "SHIELD Zinc-Rich Primers",
    // UPDATED: Added SHIELD context
    description: "Sacrificial protection. The essential first step for long-term corrosion resistance on steel assets in harsh, industrial environments.",
  },
  {
    icon: Layers,
    title: "Direct-to-Metal (DTM) Systems",
    description: "High-solids, low-VOC systems designed to eliminate the need for a separate primer, speeding up maintenance cycles and saving labor.",
  },
  {
    icon: Hammer,
    title: "Abrasion Resistance Topcoats",
    description: "Tough topcoats formulated to withstand mechanical impact and friction typical of heavy manufacturing and port operations. Ideal for industrial machinery.",
  },
];
export default function AntiCorrosionPage() {
  return (
    <main>
      
      {/* Hero Section: Asset Protection Focus (Storyteller's Heart) */}
      <section className="bg-neutral-900 py-16 md:py-24 text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase text-accent">High-Stakes Asset Protection with SHIELD</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Anti-Corrosion & Protective Coatings
            </h1>
            <p className="mt-4 text-xl text-neutral-300 max-w-lg">
              Corrosion costs money and downtime. We partner with engineers and specifiers to provide **certified SHIELD protective systems** that guarantee the longevity of your steel assets in the harshest environments.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/services/on-site-technical-consultation">Request On-Site Specification</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                <Link href="/industrial-coatings/case-studies">View Local Case Studies →</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/anti-corrosion-pipes.png" // Placeholder image for corrosion protection
              alt="Industrial steel pipes protected with a blue anti-corrosion coating"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Solutions Grid: Technical Depth (Architect's Precision) */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">SHIELD Certified Solutions for Mining & Manufacturing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutionHighlights.map((item) => (
              <Card key={item.title} className="hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <item.icon className="h-6 w-6 text-accent" /> <span>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA to Industrial Hub (REMOVED) */}

    </main>
  );
}