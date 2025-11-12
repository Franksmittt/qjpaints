// src/app/consumables/general-paint-supplies/page.tsx - CREATE NEW FILE

import Image from "next/image";
import { CheckCircle, Layers, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Paint Supplies | Abrasives, Masking Tape, Brushes, PPE",
  description: "The core supplies for any paint job. Stock up on sanding paper, masking tape, rollers, brushes, mixing cups, and all essential painter's PPE.",
};

// Data based on your provided list
const prepSupplies = [
  "Sanding Paper & Discs (various grits)",
  "Abrasive Rolls & Sanding Blocks",
  "Wire Brushes & Scrapers",
];
const protectionSupplies = [
  "Masking Tape (All sizes)",
  "Masking Film & Paper",
  "Dust Sheets & Cotton Tarps",
];
const applicationSupplies = [
  "Paint Mixing Sticks & Cups",
  "Paint Filters & Strainers",
  "Spray Gun Cleaning Kits",
  "Paint Brushes (All sizes)",
  "Paint Rollers & Trays (various naps)",
];
const safetySupplies = [
  "Safety Glasses",
  "Face Masks & Respirators",
  "Disposable Overalls",
  "Nitrile & Latex Gloves",
];

export default function GeneralPaintSuppliesPage() {
  return (
    <main>
      
      {/* Hero Section */}
      <section className="bg-secondary/10 py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Wrench className="h-12 w-12 text-primary mb-4" />
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              General Paint Supplies & Accessories
            </h1>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-lg">
              The foundation of every great finish. We stock a complete range of professional-grade core consumables for preparation, application, and safety.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
              <Link href="/contact-us">Place a Bulk Order</Link>
            </Button>
          </div>
          <div className="relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/general-supplies.png" // Placeholder
              alt="A collection of general paint supplies including brushes, rollers, tape, and sandpaper"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Supplies List Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Product Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <CategoryCard title="Abrasives & Preparation" icon={Layers} supplies={prepSupplies} />
            <CategoryCard title="Masking & Protection" icon={Shield} supplies={protectionSupplies} />
            <CategoryCard title="Application & Mixing" icon={Wrench} supplies={applicationSupplies} />
            <CategoryCard title="Safety (PPE)" icon={Shield} supplies={safetySupplies} />

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