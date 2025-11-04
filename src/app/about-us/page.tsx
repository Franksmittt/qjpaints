import Image from "next/image";
import { Users, Handshake, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata = {
  title: "Our Story | The QJ Paint World Difference (10-Year Family Business)",
  description: "Learn about QJ Paint World: a 10-year owner-driven family business built on technical expertise, serving Alberton's Decorative, Automotive, and Industrial needs.",
};

const ethosCards = [
  {
    icon: Handshake,
    title: "Family-Owned Partnership",
    description: "We are an owner-driven family business. That means when you talk to us, you are talking directly to the decision-makers who care about your project.",
  },
  {
    icon: Users,
    title: "Expertise First",
    description: "Our foundation is built on deep technical knowledge across three complex verticals. We don't just sell; we consult.",
  },
  {
    icon: MapPin,
    title: "Local Legacy, National Reach",
    description: "Serving Alberton for over 10 years, we combine local reliability with the industrial capacity needed for Johannesburg's largest projects.",
  },
];

export default function AboutUsPage() {
  return (
    <main>
      
      {/* Hero Section: The Narrative Anchor (Storyteller's Heart) */}
      <section className="bg-neutral-900 py-16 md:py-24 text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold uppercase text-primary">Our Legacy, Your Trust</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              QJ Paint World: A 10-Year Family Story
            </h1>
            <p className="mt-4 text-xl text-neutral-300 max-w-lg">
              We are not a franchise. We are an **owner-driven family business** that has spent a decade building a reputation for technical advice, specialist matching, and unwavering quality right here in Alberton.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/contact-us">Meet the Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-900">
                <Link href="/trade-partner-program">Partner with Us &rarr;</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/family-business-owner.png" // Placeholder image for owners/staff
              alt="The QJ Paint World owners standing proudly outside the Alberton Trade Centre"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Ethos Grid: Why We Are Different (Architect's Precision) */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Guiding Ethos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ethosCards.map((card) => (
              <Card key={card.title} className="p-4 hover:border-primary transition-colors duration-300">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <card.icon className="h-8 w-8 text-primary fill-primary/10" />
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{card.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA: Driving to Action */}
      <section className="py-12 bg-accent dark:bg-accent/80 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Ready to Work with a True Partner?</h2>
          <p className="mt-2 text-xl font-medium">
            Contact us today to discuss your next project, big or small.
          </p>
          <Button asChild size="lg" className="mt-6 bg-neutral-900 text-white hover:bg-black/80">
            <Link href="/contact-us">Get in Touch <CheckCircle className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

    </main>
  );
}