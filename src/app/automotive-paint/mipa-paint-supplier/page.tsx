// src/app/automotive-paint/mipa-paint-supplier/page.tsx - NEW FILE

import Image from "next/image";
import { Layers, Factory, MoveRight, Wrench } from "lucide-react"; // Removed Package
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
export const metadata: Metadata = {
  // Targeting high-value B2B search terms
  title: "mipa Professional Coating Systems Supplier Alberton | Automotive Refinish",
  description: "Official mipa supplier in Johannesburg South. Full range of mipa paint systems, including DTM primers and clearcoats, backed by QJ's spectrophotometer matching service.",
};
// Features focused on professional shop efficiency and finish quality
const mipaAdvantages = [
  {
    icon: Layers,
    title: "High-Quality Topcoats & Clearcoats",
    description: "mipa systems provide exceptional depth, gloss retention, and durability required for a showroom-quality finish and customer satisfaction.",
  },
  {
    icon: Wrench,
    title: "Reliable Color Accuracy",
    description: "The mipa mixing system integrates seamlessly with our spectrophotometer, guaranteeing precise color mixing and reducing costly rework.",
  },
  {
    icon: Factory,
    title: "Versatile Application",
    description: "Suitable for everything from minor spot repairs to complete refinishes, mipa offers solutions for both modern car models and restoration projects.",
  },
];
export default function MipaPaintSupplierPage() {
  return (
    <main>
      
      {/* Hero Section: mipa Brand Focus */}
      <section className="bg-neutral-900 py-12 sm:py-16 md:py-24 text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 w-full px-4 sm:px-0">
              <span className="text-sm font-semibold uppercase text-primary">German Engineering for Professional Shops</span>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                Official mipa Professional Coating Systems
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-lg break-words">
                Maximize your panel shop&apos;s output with the reliable quality of **mipa**. We supply the full range of primers, basecoats, and clearcoats engineered for flawless, efficient refinishing.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  <Link href="/contact-us">Place an mipa Order Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white whitespace-nowrap">
                  <Link href="/automotive-paint/hb-body-consumables">View HB BODY Consumables →</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/mipa-systems-stock.png" // Placeholder image for mipa stock
                alt="Stock of mipa primers and clearcoats in a warehouse"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* mipa Advantage Grid: Focus on Quality & Efficiency */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">The mipa Quality & Workflow Advantage</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {mipaAdvantages.map((item) => (
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

      {/* Final CTA: Technical Support */}
      <section className="py-12 sm:py-16 bg-secondary/10 dark:bg-neutral-900">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Need Colour Matching for Your mipa System?</h2>
          <p className="mt-2 text-xl font-medium text-neutral-600 dark:text-neutral-300">
            Our expert technicians use advanced spectrophotometer technology to guarantee the perfect formula.
          </p>
          <Button asChild size="lg" className="mt-6 bg-accent text-white hover:bg-accent/90">
            <Link href="/automotive-paint/spectrophotometer-paint-matching">
              Explore Digital Matching <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
    </main>
  );
}