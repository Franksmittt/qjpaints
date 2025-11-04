import type { Metadata } from "next";
import Link from "next/link";
// FIX: 'Layers' removed from this import
import { MoveRight, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Automotive Refinish Systems Alberton | R-M, baslac, Consumables",
  description: "The expert supplier for professional bodyshops. We stock premium R-M, cost-effective baslac systems, and all essential consumables, backed by spectrophotometer matching.",
};

// Data structure based on Header.tsx internal links.
const AutomotivePaintData = [
  {
    title: "R-M Paint Systems",
    href: "/automotive-paint/rm-paint-supplier",
    description: "Premium, OEM-approved refinish systems for high productivity.",
  },
  {
    title: "baslac® Paint Systems",
    href: "/automotive-paint/baslac-paint-supplier",
    description: "BASF quality for all repair jobs at a cost-effective price.",
  },
  {
    title: "Advanced Paint Matching",
    href: "/automotive-paint/spectrophotometer-paint-matching",
    description: "Our high-tech spectrophotometer service for a perfect blend.",
  },
  {
    title: "Bodyshop Consumables",
    href: "/automotive-paint/bodyshop-consumables-abrasives-fillers",
    description: "Abrasives, fillers, polishing compounds, and more.",
  },
];

export default function AutomotivePaintIndexPage() {
  return (
    <main>
      
      {/* Hero Section: Automotive Focus */}
      <section className="bg-neutral-900 py-16 md:py-24 text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Car className="h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl font-bold md:text-6xl">
              Professional Automotive Refinish
            </h1>
            <p className="mt-4 text-xl text-neutral-300 max-w-lg">
              Maximize bodyshop throughput and guarantee customer satisfaction with BASF-backed R-M and baslac paint systems, supported by accurate colour matching.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
              <Link href="/trade-partner-program">
                Join the Bodyshop Hub <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] min-h-[300px]">
           <Image
              src="/images/automotive.png" // Reusing main category image
              alt="A car being professionally spray painted in a bodyshop booth"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Grid of Key Sub-Pages */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Automotive Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AutomotivePaintData.map((item) => (
              <Card key={item.title} className="flex flex-col h-full hover:border-accent transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button asChild variant="link" className="text-accent hover:text-accent/80">
                    <Link href={item.href}>
                        Explore Solution <MoveRight className="ml-2 h-4 w-4" />
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