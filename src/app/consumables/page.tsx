// src/app/consumables/page.tsx - CREATE NEW FILE

import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight, Wrench, Car, Factory, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Paint Consumables & Accessories Hub | QJ Paint World",
  description: "Your one-stop shop for all paint consumables. Find abrasives, safety PPE, automotive bodyshop supplies, and heavy-duty industrial application tools.",
};

// Data for the three main sub-categories
const consumableCategories = [
  {
    title: "General Paint Supplies",
    href: "/consumables/general-paint-supplies",
    description: "The essential tools for any job: Abrasives, masking tape, brushes, rollers, mixing cups, and safety PPE.",
    icon: Settings,
  },
  {
    title: "Automotive Bodyshop",
    href: "/consumables/automotive-bodyshop",
    description: "Specialized supplies for refinishing: Fillers, putties, degreasers (PREPSOL), polishing compounds (Farécla), and spray equipment (SATA).",
    icon: Car,
  },
  {
    title: "Industrial & Heavy-Duty",
    href: "/consumables/industrial-heavy-duty",
    description: "Tools for asset protection: Rust converters, specialized solvents, thick-film rollers, and high-strength adhesives (Q-Bond).",
    icon: Factory,
  },
];

export default function ConsumablesIndexPage() {
  return (
    <main>
      
      {/* Hero Section: Consumables Focus */}
      <section className="bg-neutral-900 py-12 sm:py-16 md:py-24 text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 w-full px-4 sm:px-0">
              <Wrench className="h-12 w-12 text-primary mb-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                Consumables & Accessories Hub
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-lg break-words">
                The right finish requires the right tools. We are your one-stop shop for every consumable required for a professional job, from preparation to final polish.
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 whitespace-nowrap">
                <Link href="/trade-partner-program">
                  Join the Contractor&apos;s Hub <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/bodyshop-consumables-kit.png" // Using this image as it's a good overview
                alt="A collection of professional paint consumables including abrasives, tape, and tools"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Key Sub-Pages */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Shop Consumables by Vertical</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {consumableCategories.map((item) => (
              <Card key={item.title} className="flex flex-col h-full hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <item.icon className="h-8 w-8 text-accent fill-accent/10 mb-2" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button asChild variant="link" className="text-primary hover:text-primary/80">
                    <Link href={item.href}>
                        View Products <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}