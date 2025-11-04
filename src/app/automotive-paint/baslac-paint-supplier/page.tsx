import Image from "next/image";
// FIX: 'Users' removed from this import
import { DollarSign, MoveRight, Layers, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata = {
  title: "baslac® Automotive Paint Supplier | High Quality, Cost-Effective Refinish",
  description: "Official supplier of baslac (BASF) automotive paint systems. The smart choice for bodyshops needing reliable, high-quality results at a cost-effective price point.",
};

const baslacAdvantages = [
  {
    icon: DollarSign,
    title: "Cost-Effective Quality",
    description: "Optimized product structure designed to provide high-quality, professional results without the high premium associated with top-tier brands.",
  },
  {
    icon: Layers,
    title: "Full System Support",
    description: "A comprehensive range of primers, basecoats, and clearcoats, ensuring you have the full system for every repair job.",
  },
  {
    icon: Factory,
    title: "BASF Technology",
    description: "Built on the technological foundation of BASF, offering peace of mind and reliability in every can.",
  },
];

export default function BaslacPaintSupplierPage() {
  return (
    <main>
      
      {/* Hero Section: Smart Choice Positioning (Architect's Precision) */}
      <section className="bg-neutral-50 py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold uppercase text-accent">BASF Smart Solution</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              baslac® Paint Systems: The Smart Choice
            </h1>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-lg">
              Reliable, robust, and cost-effective. baslac delivers the quality assurance of **BASF technology** at a price point that makes sense for high-volume, professional repair centers.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/trade-partner-program">Apply for Baslac Trade Pricing</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                 <Link href="/automotive-paint/rm-paint-supplier">View R-M (Premium) →</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/baslac-paint-cans.png" // Placeholder image for baslac
              alt="Stacks of baslac paint cans in a mixing room"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Baslac Advantage Grid (Artisan's Praxis) */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Reliability Without the Premium Price</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {baslacAdvantages.map((item) => (
              <Card key={item.title} className="hover:border-accent transition-colors duration-300">
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

      {/* Final CTA: Value and Service */}
      <section className="py-12 bg-primary dark:bg-primary/90 text-neutral-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Place Your baslac Bulk Order</h2>
          <p className="mt-2 text-xl font-medium">
            Contact us for priority delivery and our best trade pricing options.
          </p>
          <Button asChild size="lg" className="mt-6 bg-neutral-900 text-white hover:bg-black/80">
            <Link href="tel:010-216-9131">Call the Trade Desk <MoveRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

    </main>
  );
}