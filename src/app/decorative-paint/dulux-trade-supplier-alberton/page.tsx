import Image from "next/image";
import { DollarSign, Layers, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata = {
  title: "Dulux Trade Paint Stockist Alberton | Coverage Data & Expert Advice",
  description: "QJ Paint World is your specialist Dulux Trade stockist in Alberton. We prove why Trade paint saves contractors time and labor with superior coverage and durability metrics.",
};

const tradeAdvantage = [
  {
    icon: Layers,
    title: "Superior Coverage",
    description: "Trade formulas often cover up to 17m² per litre, compared to 13m² for retail. This means fewer cans and less labor per job.",
  },
  {
    icon: DollarSign,
    title: "Higher Durability",
    description: "Built to last. Trade paints contain higher solid content, ensuring a more robust finish that reduces call-backs and maintenance.",
  },
  {
    icon: Clock,
    title: "Optimized Application",
    description: "Professional formulas are easier to apply with a better flow and faster drying time, optimizing your team's on-site efficiency.",
  },
];

export default function DuluxTradeSupplierPage() {
  return (
    <main>
      
      {/* Hero Section: Trade Advantage Focus (Architect's Precision) */}
      <section className="bg-neutral-50 py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold uppercase text-primary">B2B Decorative Solutions</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Dulux Trade Stockist: Save Labour, Not Quality
            </h1>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-lg">
              We provide definitive proof of why Dulux Trade products are the only smart choice for professional painters. **Higher coverage means lower cost per square meter.**
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/trade-partner-program">Apply for Trade Pricing</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                <Link href="#comparison">See the Proof &rarr;</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/dulux-trade-cans.png" // Placeholder image for Dulux Trade cans
              alt="Stacks of Dulux Trade paint cans in a warehouse environment"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Technical Feature Grid: Data-Driven Proof (Artisan's Praxis) */}
      <section id="comparison" className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">The Trade Advantage: Superior Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tradeAdvantage.map((item) => (
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

      {/* Final CTA: Local Service */}
      <section className="py-16 bg-accent dark:bg-accent/80 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Need a Trade Order Now?</h2>
          <p className="mt-2 text-xl font-medium">
            Contact our Alberton Trade Centre for bulk pricing and priority delivery to your site.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-neutral-900 hover:bg-neutral-200">
            <Link href="tel:010-216-9131">Call QJ Paint World <CheckCircle className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
      
    </main>
  );
}