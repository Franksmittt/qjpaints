// src/app/consumables/automotive-bodyshop/page.tsx - FULL REPLACEMENT (Unused Import Removed & Apostrophe Fix)

import Image from "next/image";
import { CheckCircle, Car, Wrench, Sparkles, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // CardDescription removed
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive Bodyshop Consumables | Fillers, Degreasers, Polishing",
  description: "One-stop shop for professional bodyshop consumables including HB BODY fillers, PREPSOL degreasers, Farécla polishing compounds, and SATA spray guns.",
};

// Data based on your provided list
const fillersSupplies = [
  "Body Filler (Polyester)",
  "Spot Putty",
  "Hardener Paste (BPO)",
];
const cleaningSupplies = [
  "Wax & Silicone Removers (PREPSOL)",
  "Tack Cloths",
  "Lint-Free Wipes",
];
const finishingSupplies = [
  "Cutting Compounds (Farécla)",
  "Polishing Compounds (Farécla)",
  "Clear Coats (Aerosol & Bulk)",
];
const equipmentSupplies = [
  "Spray Guns (SATA)",
  "Air Hoses & Compressors",
  "Spray Gun System Cups (PPS)",
];

export default function AutomotiveConsumablesPage() {
  return (
    <main>
      
      {/* Hero Section */}
      <section className="bg-secondary/10 py-12 sm:py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full px-4 sm:px-0">
              <Car className="h-12 w-12 text-primary mb-4" />
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                Automotive Refinish & Bodyshop Consumables
              </h1>
              {/* APOSTROPHE FIX HERE */}
              <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-lg break-words">
                Maximize your shop&apos;s efficiency. We stock the complete workflow of consumables, from **HB BODY** fillers and **PREPSOL** degreasers to **SATA** spray guns and **Farécla** compounds.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  <Link href="/contact-us">Place a Consumables Order</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white whitespace-nowrap">
                  <Link href="/automotive-paint/mipa-paint-supplier">View mipa Paint Systems →</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/bodyshop-consumables-kit.png"
                alt="A pile of automotive abrasives, fillers, and masking tape"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supplies List Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Organized by Your Workflow</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <CategoryCard title="Fillers & Putties" icon={Wrench} supplies={fillersSupplies} />
            <CategoryCard title="Surface Cleaning" icon={Beaker} supplies={cleaningSupplies} />
            <CategoryCard title="Polishing & Finishing" icon={Sparkles} supplies={finishingSupplies} />
            <CategoryCard title="Equipment" icon={Wrench} supplies={equipmentSupplies} />

          </div>
        </div>
      </section>
      
    </main>
  );
}

// Helper component for the cards
const CategoryCard = ({ title, icon: Icon, supplies }: { title: string, icon: React.ElementType, supplies: string[] }) => (
  <Card className="flex flex-col">
    <CardHeader className="flex flex-row items-center space-x-3">
      <Icon className="h-6 w-6 text-primary" />
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-1">
      <ul className="space-y-2">
        {supplies.map((item) => (
          <li key={item} className="flex items-center">
            <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
            <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);