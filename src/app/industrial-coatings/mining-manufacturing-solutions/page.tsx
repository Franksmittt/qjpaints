// src/app/industrial-coatings/mining-manufacturing-solutions/page.tsx - FULL REPLACEMENT (SATA, Tork Craft, PREPSOL Integration)

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Drill, Layers, HardHat, Beaker, Wrench, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
// FIX: CardHeader import restored
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  // UPDATED: Added new B2B tools and cleaners
  title: "Coatings, Tools & Equipment for Mining & Manufacturing | QJ Industrial",
  description: "Specialized protective coatings (SHIELD), high-end SATA PIENAAR spray guns, Tork Craft tools, and PREPSOL degreasers for the South African industrial sectors.",
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

const equipmentSolutions = [
  {
    icon: Wrench,
    title: "SATA PIENAAR Spray Equipment",
    description: "High-end, professional spray guns and air tools required for precise application of thick-film industrial and protective coatings.",
  },
  {
    icon: Package,
    title: "Tork Craft Tools & Accessories",
    description: "Industrial-grade cutting tools, brushes, and accessories essential for surface preparation and application reliability.",
  },
  {
    icon: Beaker,
    title: "PREPSOL Industrial Cleaners",
    description: "Specialized degreasers and cleaners for critical surface preparation, ensuring maximum adhesion and system performance.",
  },
];

export default function MiningManufacturingSolutionsPage() {
  return (
    <main>
      
      {/* Hero Section: Specialized Industry Focus */}
      <section className="bg-neutral-900 py-16 md:py-24 text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <HardHat className="h-12 w-12 text-accent mb-4" />
            <span className="text-sm font-semibold uppercase text-accent">For South African Heavy Industry</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Coatings, Tools & Equipment for Industry
            </h1>
            <p className="mt-4 text-xl text-neutral-300 max-w-lg">
              We move beyond general industrial paint to offer **certified, high-performance systems** tailored for the unique demands of heavy manufacturing and mining operations, plus the tools to apply them.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-neutral-900">
              <Link href="/services/on-site-technical-consultation">
                Request Specification Consult <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/mining-manufacturing-hero.png" // Placeholder image for heavy industry
              alt="Industrial setting with protective coatings on heavy machinery"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Challenges Grid: Problem-Solution */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
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

      {/* NEW SECTION: Tools and Application Equipment */}
      <section className="py-16 md:py-24 bg-secondary/10 dark:bg-neutral-900">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Application Tools & Surface Preparation Chemicals</h2>
          <p className="text-xl text-center text-neutral-600 dark:text-neutral-300 mb-10">
            We supply more than just **SHIELD** coatings; we provide the entire workflow solution, from prep to application.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {equipmentSolutions.map((item) => (
              <Card key={item.title} className="hover:border-accent transition-colors duration-300">
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

      {/* Final CTA: Wadeville Hub */}
      <section className="py-12 bg-accent dark:bg-accent/80 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Bulk Orders & Specialized Dispatch</h2>
          <p className="mt-2 text-xl font-medium">
            All mining and manufacturing orders are processed by our dedicated team at the Wadeville Industrial Hub.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-neutral-900 hover:bg-black/80">
            <Link href="/contact-us/wadeville">Contact Wadeville Hub <MoveRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

    </main>
  );
}