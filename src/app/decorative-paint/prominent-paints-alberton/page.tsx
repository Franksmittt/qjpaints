import Image from "next/image";
// FIX: 'Truck' removed from this import
import { MapPin, Layers, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// FIX: Unused Card components removed
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Prominent Paints Alberton Stockist | Local Expert for Select Range",
  description: "QJ Paint World is your most convenient and knowledgeable Prominent Paints stockist in Alberton. We stock the full Select Range and offer expert local advice, closer than the head office.",
};

const localAdvantages = [
  {
    icon: MapPin,
    title: "Closer Than the HQ",
    description: "Why drive to the Alrode head office? We are right here at your Alberton North Trade Centre with the full range and dedicated trade support.",
  },
  {
    icon: Layers,
    title: "Full Select Range Stock",
    description: "We maintain stock of the professional-grade Select Range, ensuring you get the performance and quality your commercial projects demand.",
  },
  {
    icon: Clock,
    title: "Immediate Tinting & Advice",
    description: "Our in-house tinting machine and expert staff mean instant fulfillment and technical advice, saving you time on every visit.",
  },
];

export default function ProminentPaintsPage() {
  return (
    <main>
      
      {/* Hero Section: Hyper-Local Advantage (Storyteller's Heart) */}
      <section className="bg-white py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold uppercase text-accent">Local Alberton Advantage</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Your Prominent Paints Local Expert
            </h1>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-lg">
              Prominent Paints is local, and so are we. Get the full **Prominent Select Range**, plus local expert service and trade delivery, right here at your Alberton North Trade Centre.
           </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact-us/alberton-north">Visit Our Store Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                 <Link href="/decorative-paint/plascon-supplier-alberton">Compare with Plascon →</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/prominent-trade-cans.png" // Placeholder image for Prominent Paints
              alt="Prominent Paints Select Range cans stacked in a store"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
         </div>
      </section>

      {/* Local Advantage Grid (Architect's Precision) */}
      <section className="py-16 md:py-24 bg-secondary/10 dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">The QJ Local Advantage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {localAdvantages.map((item) => (
              <Card key={item.title} className="p-4 flex flex-col items-center text-center">
                <item.icon className="h-10 w-10 text-primary fill-primary/10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
              </Card>
            ))}
           </div>
        </div>
      </section>

      {/* B2B Services CTA */}
      <section className="py-16 bg-accent dark:bg-accent/80 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Are You a Trade Professional?</h2>
          {/* FIX: Replaced ' with &apos; */}
          <p className="mt-2 text-xl font-medium">
            Join the Contractor&apos;s Hub for Prominent Paints Trade Pricing and priority support.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-neutral-900 hover:bg-neutral-200">
            <Link href="/trade-partner-program">Apply for Partnership <CheckCircle className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

    </main>
  );
}