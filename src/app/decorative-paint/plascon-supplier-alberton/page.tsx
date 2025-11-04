// src/app/decorative-paint/plascon-supplier-alberton/page.tsx
import Image from "next/image";
// FIX: 'MapPin' removed from this import
import { CheckCircle, Truck, Layers, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// FIX: 'CardContent' and 'CardDescription' removed from this import
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Official Plascon Stockist Alberton | TradePro & Full Range Supplier",
  description: "QJ Paint World is your most comprehensive Plascon supplier in Alberton. We stock the full TradePro range, Wall & All, Velvaglo, and offer expert colour matching. Beat the competitors on service.",
};

const productHighlights = [
  {
    icon: Hammer,
    title: "Plascon TradePro Range",
    description: "The essential line for professional painters, offering exceptional value and coverage. We keep large stock levels specifically for contractors.",
  },
  {
    icon: Layers,
    title: "Wall & All™ and Velvaglo™",
    description: "We stock Plascon's flagship retail lines, including the durable exterior Wall & All and the premium Velvaglo enamel.",
  },
  {
    icon: Truck,
    title: "Trade Delivery Priority",
    description: "Priority scheduling for our trade partners. Get your Plascon order delivered directly to your site, fast.",
  },
];

export default function PlasconSupplierPage() {
  return (
    <main>
      
      {/* Hero Section: Direct Competitor Challenge (Storyteller's Heart) */}
      <section className="bg-white py-16 md:py-24 dark:bg-neutral-900">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold uppercase text-accent">Plascon Stockist Alberton</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl text-neutral-900 dark:text-white">
              The Most Comprehensive Plascon Partner in Alberton
            </h1>
            {/* FIX: Replaced Don't with Don&apos;t */}
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-lg">
              Don&apos;t settle for less than the full service. We stock the **entire** range, from the contractor-essential TradePro to the flagship retail lines, backed by expert colour matching and technical advice.
             </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact-us/alberton-north">Visit Our Trade Centre</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                 <Link href="/decorative-paint/dulux-trade-supplier-alberton">Compare with Dulux Trade →</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/plascon-stock.png" // Placeholder image for Plascon display
               alt="QJ Paint World Plascon display showing TradePro and Wall & All lines"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
           </div>
        </div>
      </section>

      {/* Product Highlight Grid: TradePro Focus (Architect's Precision) */}
      <section className="py-16 md:py-24 bg-secondary/10 dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Stocked Ranges & Trade Advantage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {productHighlights.map((item) => (
               <Card key={item.title} className="p-4 flex flex-col items-center text-center">
                <item.icon className="h-10 w-10 text-primary fill-primary/10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
              </Card>
             ))}
          </div>
        </div>
      </section>

      {/* B2C-to-B2B Funnel CTA */}
      <section className="py-16 bg-accent dark:bg-accent/80 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Have a Colour Code?</h2>
          <p className="mt-2 text-xl font-medium">
            {/* FIX: Replaced don't with don&apos;t */}
            Bring your sample to us. We don&apos;t just sell Plascon; we match *any* colour to the Plascon system, guaranteeing your desired look.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-neutral-900 hover:bg-neutral-200">
            <Link href="/services/expert-paint-colour-matching">Book Colour Consultation <CheckCircle className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

    </main>
  );
}