// src/app/industrial-coatings/mining-manufacturing-solutions/page.tsx - FULL REPLACEMENT (Unused Import Removed)

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Drill, Layers, HardHat, Beaker } from "lucide-react"; // Wrench, Package removed
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"; // CardHeader removed

export const metadata: Metadata = {
  title: "Specialized Coatings for Mining & Manufacturing | QJ Industrial",
  description: "Specialized protective coatings (SHIELD) for extreme abrasion, chemical resistance, and Corrosion Under Insulation (CUI) for the South African industrial sectors.",
};

const industryChallenges = [
  {
    icon: Drill,
    title: "Extreme Abrasion Resistance",
    description: "Coatings designed to withstand constant mechanical impact and high-traffic friction from heavy machinery and materials handling.",
  },
  {
    icon: Beaker, 
    title: "Chemical & Acid Resistance",
    description: "Protection against process chemicals, acids, caustics, and aggressive effluent common in mining and chemical processing plants.",
  },
  {
    icon: Layers,
    title: "Corrosion Under Insulation (CUI)",
    description: "Specialist coatings engineered for pipes and equipment operating under thermal insulation where moisture and heat accelerate corrosion.",
  },
];

export default function MiningManufacturingSolutionsPage() {
  return (
    <main>
      
      {/* Hero Section: Specialized Industry Focus */}
      <section className="bg-neutral-900 py-12 sm:py-16 md:py-24 text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full px-4 sm:px-0">
              <HardHat className="h-12 w-12 text-accent mb-4" />
              <span className="text-sm font-semibold uppercase text-accent">For South African Heavy Industry</span>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                Mining & Manufacturing Coating Solutions
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-lg break-words">
                We move beyond general industrial paint to offer **certified, high-performance systems** tailored for the unique demands of heavy manufacturing and mining operations.
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-neutral-900 whitespace-nowrap">
                <Link href="/services/on-site-technical-consultation">
                  Request Specification Consult <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/mining-manufacturing-hero.png" // Placeholder image for heavy industry
                alt="Industrial setting with protective coatings on heavy machinery"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Grid: Problem-Solution */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Solving High-Stakes Industrial Challenges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industryChallenges.map((item) => (
              <Card key={item.title} className="flex flex-col h-full p-4 text-center hover:shadow-lg transition-shadow">
                <item.icon className="h-10 w-10 text-primary fill-primary/10 mx-auto mb-4" />
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardContent className="flex-1 pt-2">
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Tools and Application Equipment (REMOVED) */}

      {/* Final CTA: Updated to point to new consumables page */}
      <section className="py-16 bg-secondary/10 dark:bg-neutral-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Need Application Tools or Solvents?</h2>
          <p className="mt-2 text-xl font-medium text-neutral-600 dark:text-neutral-300">
            We supply the entire workflow, from PREPSOL degreasers to thick-film rollers.
          </p>
          <Button asChild size="lg" className="mt-6 bg-accent text-white hover:bg-accent/90">
            <Link href="/consumables/industrial-heavy-duty">
              View Industrial Consumables <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

    </main>
  );
}