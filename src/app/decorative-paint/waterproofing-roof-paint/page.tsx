// src/app/decorative-paint/waterproofing-roof-paint/page.tsx - FULL REPLACEMENT (Flash Harry)

import Image from "next/image";
// FIX: Restored Home icon import to resolve TypeScript error
import { CloudRain, MoveRight, Layers, Home } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
// FIX: Unused Card components removed
import { Card } from "@/components/ui/card";
import type { Metadata } from "next";
export const metadata: Metadata = {
  // UPDATED: Added Flash Harry to metadata
  title: "Flash Harry Waterproofing & Roof Paint Solutions Alberton | QJ Paint World",
  description: "Specialist supplier of high-performance **Flash Harry** roof paints, sealants, and liquid waterproofing systems. Protect your home and assets against the South African weather.",
};
const protectionTypes = [
  {
    icon: CloudRain,
    title: "Flash Harry Liquid Membranes",
    description: "Fiber-reinforced liquid membranes ideal for complicated flashings, parapet walls, and areas where traditional sheeting fails. The ultimate barrier.",
  },
  {
    icon: Home,
    title: "Elastomeric Roof Paint",
    description: "Highly flexible, water-based coatings that bridge hairline cracks and prevent future leaks, offering long-term weatherproofing.",
  },
  {
    icon: Layers,
    title: "Surface Preparation",
    description: "The most critical step: specialized cleaners and primers engineered for high adhesion and maximum system longevity.",
  },
];
export default function WaterproofingPage() {
  return (
    <main>
      
      {/* Hero Section: Protection Focus (Innovator's Horizon) */}
      <section className="bg-white py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase text-primary">Official Flash Harry Stockist</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Waterproofing & High-Performance Roof Paint
            </h1>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-lg">
              The roof is your first line of defense. We supply specialist **Flash Harry** elastomeric roof paints and liquid waterproofing systems certified to withstand the harsh South African climate.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="#solutions">Explore Flash Harry Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                <Link href="/services/on-site-technical-consultation">Consult a Specialist →</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/roof-waterproofing.png" // Placeholder image for roof coating
              alt="Contractor applying white elastomeric roof paint to a flat roof"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Solution Types Grid (Architect's Precision) */}
      <section id="solutions" className="py-16 md:py-24 bg-secondary/10 dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">The Right Flash Harry System for the Job</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {protectionTypes.map((item) => (
              <Card key={item.title} className="p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <item.icon className="h-10 w-10 text-primary fill-primary/10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA to Industrial Link */}
      <section className="py-16 bg-accent dark:bg-accent/80 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Need Commercial-Grade Flat Roof Protection?</h2>
          <p className="mt-2 text-xl font-medium">
            For high-stakes commercial or industrial flat roofs, check our Industrial Coatings hub for heavy-duty Polyurea systems.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-neutral-900 hover:bg-neutral-200">
            <Link href="/industrial-coatings/anti-corrosion-protective-coatings">View Industrial Solutions <MoveRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
      
    </main>
  );
}