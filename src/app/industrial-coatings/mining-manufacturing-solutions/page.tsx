import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Drill, Layers, HardHat, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";
// FIX: CardHeader removed from this import
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Coatings for Mining & Manufacturing | Heavy-Duty Industrial Systems",
  description: "Specialized protective coatings for the South African mining and manufacturing sectors. Solutions include acid-resistant coatings, DTM systems, and high-solids polyurethane.",
};

const industryChallenges = [
  {
    icon: Drill,
    title: "Extreme Abrasion",
    description: "Coatings designed to withstand constant mechanical impact and high-traffic friction from heavy machinery and materials handling.",
  },
  {
    icon: Beaker, 
    title: "Chemical Resistance",
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
      <section className="bg-neutral-900 py-16 md:py-24 text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <HardHat className="h-12 w-12 text-accent mb-4" />
            <span className="text-sm font-semibold uppercase text-accent">For South African Heavy Industry</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Coatings for Mining & Manufacturing
            </h1>
            <p className="mt-4 text-xl text-neutral-300 max-w-lg">
              We move beyond general industrial paint to offer **certified, high-performance systems** tailored for the unique physical and chemical demands of heavy manufacturing and mining operations.
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