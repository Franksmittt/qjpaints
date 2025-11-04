import Image from "next/image";
// FIX: 'Truck' removed from this import
import { MapPin, Clock, MoveRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Trade Delivery Program | Priority Paint Delivery Alberton & JHB South",
  description: "Join the QJ Trade Delivery Program for reliable, priority fulfillment and on-site delivery of your paint orders to minimize downtime and maximize your labor efficiency.",
};

const programBenefits = [
  {
    icon: Clock,
    title: "Priority Scheduling",
    description: "Your order is placed into a priority queue for picking and dispatch, minimizing lead times compared to retail customers.",
  },
  {
    icon: MapPin,
    title: "Direct Site Delivery",
    description: "Delivery is made directly to your job site in Alberton, Wadeville, Alrode, and the broader Johannesburg South region.",
  },
  {
    icon: Package,
    title: "Reliable Fulfillment",
    description: "Dedicated dispatch team ensures your specific formulations and bulk orders are fulfilled correctly and arrive complete.",
  },
];

export default function TradeDeliveryPage() {
  return (
    <main>
      
      {/* Hero Section: The Logistics Solution (Innovator's Horizon) */}
      <section className="bg-primary py-16 md:py-24 text-neutral-900">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase text-neutral-900">Contractor Workflow Solution</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Trade Delivery Program
            </h1>
            <p className="mt-4 text-xl text-neutral-800 max-w-lg">
              Time is money. Our Trade Delivery Program ensures your team **never stops working** waiting for paint. Reliable, accurate, and fast delivery, straight to your site.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-neutral-900 text-white hover:bg-black/80">
                <Link href="/trade-partner-program">Join the Program Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white">
                <Link href="tel:010-216-9131">Call Dispatch Now</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/delivery-truck-trade.png" // Placeholder image for delivery
              alt="QJ Paint World delivery truck dropping off supplies at a trade site"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits Designed for Contractor Efficiency</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programBenefits.map((item) => (
              <Card key={item.title} className="hover:border-accent transition-colors duration-300">
                <CardHeader>
                  <item.icon className="h-8 w-8 text-primary fill-primary/10 mb-3" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                   <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA: Trade Hub */}
      <section className="py-12 bg-accent dark:bg-accent/80 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Ready to Simplify Your Logistics?</h2>
          {/* FIX: Replaced ' with &apos; */}
          <p className="mt-2 text-xl font-medium">
            Delivery is managed through the Contractor&apos;s Hub.
            Apply today to activate this priority service.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-neutral-900 hover:bg-neutral-200">
            {/* FIX: Replaced ' with &apos; */}
            <Link href="/trade-partner-program">Join the Contractor&apos;s Hub <MoveRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

    </main>
  );
}