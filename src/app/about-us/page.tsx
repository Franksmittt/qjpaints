// src/app/about-us/page.tsx - FULL REPLACEMENT (Image Responsiveness Fix)

import Image from "next/image";
import { Users, Handshake, Briefcase, Paintbrush, Car, Factory, BrainCircuit, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata = {
  title: "Our Story | The QJ Paint World Difference (10-Year Family Business)",
  description: "Learn about QJ Paint World: a 10-year owner-driven family business built on technical expertise, serving Alberton's Decorative, Automotive, and Industrial needs.",
};

// 1. Data for the "Expert Generalist" model
const verticals = [
  {
    icon: Paintbrush,
    title: "Decorative Expertise",
    description: "We go beyond simple colour mixing. We provide contractors and homeowners with expert advice on surface preparation, waterproofing (Flash Harry), and choosing the right trade-grade systems (Top Paints, ILEX) for long-term durability.",
  },
  {
    icon: Car,
    title: "Automotive Refinish",
    description: "Our background is in high-performance automotive science. We are the trusted partner for bodyshops, supplying premium mipa and HB BODY systems backed by our high-tech spectrophotometer for a perfect match, every time.",
  },
  {
    icon: Factory,
    title: "Industrial & Protective",
    description: "We are engineers first. We provide on-site consultations and certified specifications for heavy-duty asset protection, from Amalgamated & Paintchem systems to specialized anti-corrosion and epoxy floor coatings.",
  },
];

// 2. Data for the "Commitment" (values) section
const commitmentCards = [
  {
    icon: Handshake,
    title: "Owner-Driven Partnership",
    description: "We're a family business, not a chain. When you talk to us, you're talking to decision-makers who are personally invested in your project's success.",
  },
  {
    icon: BrainCircuit,
    title: "Technical Expertise First",
    description: "Our foundation is built on deep technical knowledge. We don't just sell products; we provide proven, certified solutions that solve problems.",
  },
  {
    icon: Award,
    title: "Unwavering Quality",
    description: "We only stock brands we personally trust and use. From mipa to Top Paints, our inventory is curated for professional-grade performance and reliability.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Serving Alberton for over 10 years, we're dedicated to building up our local community of contractors, bodyshops, and homeowners.",
  },
];

// 3. Data for the Timeline
const timelineEvents = [
  { year: "2014", event: "QJ Paint World Founded", description: "Our family business opens its doors in Alberton with a mission to provide expert paint advice." },
  { year: "2017", event: "Automotive Division Launch", description: "Expanded to serve professional bodyshops with high-tech matching and premium refinish systems." },
  { year: "2020", event: "Industrial Coatings Hub", description: "Launched our B2B industrial division, offering on-site consultation for heavy-duty protective coatings." },
  { year: "2024", event: "Consumables Hub Created", description: "Launched a dedicated consumables category to become a one-stop shop for all trade professionals." },
  { year: "2025", event: "Contractor's Hub Program", description: "Introduced our official Trade Partner Program to provide pricing, delivery, and leads to our loyal contractors." },
];

export default function AboutUsPage() {
  return (
    <main>
      
      {/* --- HERO SECTION: RESPONSIVENESS FIX --- */}
      <section className="bg-neutral-900 py-12 sm:py-16 md:py-24 text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Image Div: order-2 (bottom on mobile), md:order-1 (left on desktop) */}
            <div className="order-2 md:order-1 relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/family-business-owner.png" // Image path
                alt="The QJ Paint World owners standing proudly outside the Alberton Trade Centre"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>

            {/* Text Div: order-1 (top on mobile), md:order-2 (right on desktop) */}
            <div className="order-1 md:order-2 w-full px-4 sm:px-0">
              <span className="text-sm font-semibold uppercase text-primary">Our Legacy, Your Advantage</span>
              {/* Heading size adjusted for small screens */}
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                Your Technical Partner, Built on 10+ Years of Expertise
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-lg break-words">
                We are not a franchise. We are an owner-driven family business that has spent a decade building a reputation for technical advice, specialist matching, and unwavering quality right here in Alberton.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild variant="ghost" size="lg" className="border border-white text-white hover:bg-white hover:text-neutral-900 whitespace-nowrap">
                   <Link href="/trade-partner-program">Partner with Us →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "EXPERT GENERALIST" (3 PILLARS) SECTION */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold">The Expert Generalist: Our 3 Pillars</h2>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300">
              We are the only supplier in Alberton providing unified technical expertise across the three core paint verticals. This is our strategic advantage—and yours.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {verticals.map((vertical) => (
              <Card key={vertical.title} className="flex flex-col p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-xl dark:bg-neutral-800/50">
                <CardHeader className="flex flex-row items-center space-x-4 p-0">
                  <div className="bg-primary/10 p-3 rounded-full inline-block flex-shrink-0">
                    <vertical.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{vertical.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-4">
                  <CardDescription className="text-base">{vertical.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE LAYOUT: Horizontal Card Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-secondary/10 dark:bg-neutral-900">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey: A Decade of Growth</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {timelineEvents.map((item) => (
              <div key={item.year} className="flex flex-col p-6 rounded-lg border-2 border-primary/20 bg-white dark:bg-neutral-800 shadow-md hover:shadow-xl transition-shadow">
                <span className="text-3xl font-bold text-primary">{item.year}</span>
                <h3 className="text-xl font-semibold mt-2">{item.event}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 flex-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Our Commitment" Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Commitment To You</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {commitmentCards.map((card) => (
              <Card key={card.title} className="p-4 hover:shadow-lg transition-shadow duration-300 dark:bg-neutral-800/50">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <card.icon className="h-10 w-10 text-accent flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{card.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA: Updated to point to Trade Program */}
      <section className="py-16 bg-accent dark:bg-accent/80 text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Join Our Network of Professionals</h2>
          <p className="mt-4 text-xl font-medium">
            Our story is built on partnerships. If you&apos;re a professional contractor, painter, or bodyshop owner, our Contractor&apos;s Hub is designed to help you save money, get support, and find more clients.
          </p>
          <Button asChild size="lg" className="mt-8 bg-white text-neutral-900 hover:bg-neutral-200 text-lg py-7 px-10">
            <Link href="/trade-partner-program">
              Explore the Contractor&apos;s Hub <Briefcase className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

    </main>
  );
}