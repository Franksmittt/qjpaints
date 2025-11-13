// src/app/consumables/industrial-heavy-duty/page.tsx - CREATE NEW FILE

import Image from "next/image";
import { CheckCircle, Beaker, Wrench, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial & Heavy-Duty Consumables | QJ Paint World",
  description: "Specialized B2B consumables for industrial applications. Find rust converters, heavy-duty degreasers, thick-film rollers, and Q-Bond adhesives.",
};

// Data based on your provided list
const prepSupplies = [
  "Specialized Degreasers & Solvents",
  "Rust Converters & Treatments",
  "Caulking & Sealants (Industrial Grade)",
];
const applicationSupplies = [
  "Thick-film Paint Rollers & Trays",
  "Heavy-duty Applicators (Screeds)",
  "Lead Check Swabs",
];

export default function IndustrialConsumablesPage() {
  return (
    <main>
      
      {/* Hero Section */}
      <section className="bg-neutral-900 py-12 sm:py-16 md:py-24 text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full px-4 sm:px-0">
              <Beaker className="h-12 w-12 text-primary mb-4" />
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                Industrial & Heavy-Duty Consumables
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-lg break-words">
                Beyond standard supplies. These are specialized, B2B-grade consumables engineered for extreme durability and specific industrial challenges.
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 whitespace-nowrap">
                <Link href="/services/on-site-technical-consultation">Request On-Site Specification</Link>
              </Button>
            </div>
            <div className="relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/industrial-consumables.png" // Placeholder
                alt="Heavy-duty industrial consumables like solvents, rollers, and sealants"
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Industrial Supply Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <CategoryCard title="Prep & Cleaning" icon={Beaker} supplies={prepSupplies} />
            <CategoryCard title="Specialty Application" icon={Wrench} supplies={applicationSupplies} />
            
            {/* Special card for Q-Bond */}
            <Card className="flex flex-col border-primary border-2">
              <CardHeader className="flex flex-row items-center space-x-3">
                <LinkIcon className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Adhesives & Specialty Glues</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <CardDescription>
                  For rapid, structural-strength repairs on plastics, metals, and more.
                </CardDescription>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-semibold">Q-Bond Adhesive Kits</span>
                </div>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/consumables/q-bond-adhesives">View Q-Bond Details</Link>
                </Button>
              </CardContent>
            </Card>

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