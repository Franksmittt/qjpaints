// src/app/decorative-paint/top-paints-genkem-stockist/page.tsx - NEW FILE

import Image from "next/image";
import { DollarSign, Layers, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Paints & Genkem Stockist Alberton | Full Range Supplier",
  description: "Official stockist of Top Paints decorative products and Genkem specialty adhesives/coatings. Get bulk trade pricing and reliable local supply for both brands.",
};

const brandFocus = [
  {
    title: "Top Paints: Quality & Value",
    logo: "/images/logo-top-paints.png", // Placeholder image
    description: "Known for their comprehensive range of interior and exterior decorative paint that balances quality, durability, and cost-effectiveness for trade use.",
  },
  {
    title: "Genkem: Specialty Solutions",
    logo: "/images/logo-genkem.png", // Placeholder image
    description: "We stock Genkem's essential specialty coatings, adhesives, and sealants needed for complex preparation work and demanding applications.",
  },
];

const serviceAdvantage = [
  {
    icon: Layers,
    title: "Consolidated Supply",
    description: "Order all your Top Paints and Genkem essentials from one reliable source, streamlining logistics and ensuring inventory consistency.",
  },
  {
    icon: DollarSign,
    title: "Trade Pricing Available",
    description: "Access bulk pricing and credit facilities designed to maximize your profit margins on high-volume Top Paints projects.",
  },
  {
    icon: Clock,
    title: "Immediate Tinting & Fulfillment",
    description: "Get immediate fulfillment and quick tinting services for your full Top Paints color palette right at our Alberton Trade Centre.",
  },
];

export default function TopPaintsGenkemStockistPage() {
  return (
    <main>
      
      {/* Hero Section: Dual Brand Focus */}
      <section className="bg-neutral-900 py-12 sm:py-16 md:py-24 text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 w-full px-4 sm:px-0">
              <span className="text-sm font-semibold uppercase text-primary">Your Local Expert Stockist</span>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                Official Top Paints & Genkem Supplier
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-lg break-words">
                We provide the full line of **Top Paints** decorative coatings and **Genkem** specialty adhesives. We are your local source for both value and versatile performance.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  <Link href="/trade-partner-program">Apply for Trade Pricing</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white whitespace-nowrap">
                  <Link href="/decorative-paint/paintchem-trade-supplier">View PAINTCHEM Trade →</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/top-paints-genkem-stock.png" // Placeholder image for Top Paints/Genkem stock
                alt="Stock of Top Paints and Genkem specialty products"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand & Value Proposition Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Dual Brands, Single Reliable Source</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {brandFocus.map((brand) => (
              <Card key={brand.title} className="p-6 text-center shadow-lg hover:border-primary transition-colors duration-300">
                <Image
                  src={brand.logo}
                  alt={brand.title}
                  width={150}
                  height={50}
                  className="mx-auto mb-4 object-contain"
                />
                <CardTitle className="text-2xl mb-2">{brand.title}</CardTitle>
                <p className="text-neutral-600 dark:text-neutral-400">{brand.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Advantages Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-secondary/10 dark:bg-neutral-950">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Trade Advantage: Why QJ is the Best Supplier</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceAdvantage.map((item) => (
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

      {/* Final CTA: Colour Matching */}
      <section className="py-16 bg-accent dark:bg-accent/80 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Need a Unique Color Matched to the Top Paints System?</h2>
          <p className="mt-2 text-xl font-medium">
            Bring your sample to our Alberton Trade Centre for a guaranteed digital colour match.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-neutral-900 hover:bg-neutral-200">
            <Link href="/services/expert-paint-colour-matching">Book Colour Consultation <CheckCircle className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
      
    </main>
  );
}