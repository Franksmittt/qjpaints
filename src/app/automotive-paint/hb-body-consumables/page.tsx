// src/app/automotive-paint/hb-body-consumables/page.tsx - NEW FILE

import Image from "next/image";
import { MoveRight, Package, HardHat, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Targeting the high-volume consumables market
  title: "HB BODY Consumables Supplier Alberton | Fillers, Primers, and Polishes",
  description: "Official supplier of HB BODY fillers, primers, and clearcoats. We stock a full range of automotive refinish consumables, including Farécla compounds and PREPSOL degreasers.",
};

// Features focused on the practical needs of a busy bodyshop
const consumablesFocus = [
  {
    icon: Package,
    title: "All-in-One Supply Chain",
    description: "Source all necessary consumables—from HB BODY fillers to 3M abrasives—from a single supplier, reducing logistics time and cost.",
  },
  {
    icon: HardHat,
    title: "Professional-Grade Fillers & Putties",
    description: "High-quality, easy-to-sand HB BODY fillers and putties that guarantee flawless surface repairs and minimize labor time.",
  },
  {
    icon: Layers,
    title: "Integrated Refinish Solutions",
    description: "Consumables selected to integrate seamlessly with the mipa paint system, ensuring chemical compatibility from bare metal to final clearcoat.",
  },
];

export default function HbBodyConsumablesPage() {
  return (
    <main>
      
      {/* Hero Section: Consumables Focus (Problem-Solution Positioning) */}
      <section className="bg-neutral-900 py-16 md:py-24 text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold uppercase text-primary">Surface Prep & Finishing Essentials</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Official HB BODY Consumables Supplier
            </h1>
            <p className="mt-4 text-xl text-neutral-300 max-w-lg">
              **HB BODY** provides the crucial primers, fillers, and polishes needed for professional automotive refinishing. We stock the high-volume consumables that keep your shop profitable.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/automotive-paint/mipa-paint-supplier">Explore mipa Paint Systems</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                <Link href="/services/trade-delivery-program">Priority Trade Delivery →</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/hb-body-fillers-polishes.png" // Placeholder image for HB BODY products
              alt="Assortment of HB BODY fillers, putties, and clearcoats"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Consumables Advantage Grid: Focus on Workflow Efficiency */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">The QJ Consumables Advantage (HB BODY & More)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {consumablesFocus.map((item) => (
              <Card key={item.title} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <item.icon className="h-6 w-6 text-primary" /> <span>{item.title}</span>
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

      {/* Final CTA: Related Consumables */}
      <section className="py-16 bg-secondary/10 dark:bg-neutral-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Need 3M Abrasives or Farécla Polishing Compounds?</h2>
          <p className="mt-2 text-xl font-medium text-neutral-600 dark:text-neutral-300">
            We stock the full range of preparation, cutting, and polishing accessories.
          </p>
          <Button asChild size="lg" className="mt-6 bg-accent text-white hover:bg-accent/90">
            <Link href="/automotive-paint/bodyshop-consumables-abrasives-fillers">
              View All Bodyshop Consumables <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
    </main>
  );
}