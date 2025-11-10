// src/app/automotive-paint/bodyshop-consumables-abrasives-fillers/page.tsx - FULL REPLACEMENT (New Brands)

import Image from "next/image";
// FIX: 'Truck' and 'MoveRight' removed from this import
import { Wrench, Layers, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bodyshop Consumables, Abrasives & Fillers Supplier | QJ Paint World",
  // UPDATED: Added approved brands
  description: "One-stop shop for professional bodyshop consumables including **HB BODY** fillers, **3M/KLINGSPOR** abrasives, **SATA PIENAAR** equipment, and **Farécla** polishing compounds. Optimized for efficient workflow.",
};
const consumableCategories = [
  {
    icon: Wrench,
    title: "Surface Preparation (PREPSOL, HB BODY)",
    // UPDATED: Added approved brands
    description: "**HB BODY** fillers, putties, and **PREPSOL** degreasers designed for fast, flawless initial surface repair and shaping.",
  },
  {
    icon: Scan,
    title: "Abrasives & Cutting (3M, KLINGSPOR)",
    // UPDATED: Added approved brands
    description: "High-grade **3M** and **KLINGSPOR** abrasives, masking tapes, and films that prevent bleed-through and contamination in the paint booth.",
  },
  {
    icon: Layers,
    title: "Application & Finishing (SATA, Tork Craft)",
    // UPDATED: Added approved brands
    description: "**SATA PIENAAR** spray equipment, **Tork Craft** tools, and **Farécla** compounds needed for the final, showroom-quality finish.",
  },
];
export default function BodyshopConsumablesPage() {
  return (
    <main>
      
      {/* Hero Section: One-Stop Shop (Innovator's Horizon) */}
      <section className="bg-secondary/10 py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase text-primary">Workflow Efficiency</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Bodyshop Consumables & Equipment
            </h1>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-lg">
              Maximize your shop&apos;s efficiency by ordering all your high-volume consumables, from **3M** abrasives and **HB BODY** fillers to **SATA PIENAAR** spray guns, in one place.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact-us">Place a Consumables Order</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                <Link 
                  href="/automotive-paint/mipa-paint-supplier">View mipa Paint Systems →</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/bodyshop-consumables-kit.png" // Placeholder image for consumables
              alt="A pile of automotive abrasives, fillers, and masking tape"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Consumables by Process Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Organized by Your Workflow</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {consumableCategories.map((item) => (
              <Card key={item.title} className="hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <item.icon className="h-8 w-8 text-accent fill-accent/10 mb-3" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA: Trade Delivery */}
      <section className="py-12 bg-accent dark:bg-accent/80 text-white">
        <div 
          className="container text-center">
          <h2 className="text-3xl font-bold">Priority Delivery to Your Bodyshop</h2>
          <p className="mt-2 text-xl font-medium">
            Ensure zero downtime. Our Trade Delivery Program gets your order to you on time.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-neutral-900 hover:bg-neutral-200">
            <Link href="/trade-partner-program">Join the Trade Hub →</Link>
          </Button>
        </div>
      </section>
      
    </main>
  );
}