// src/app/trade-partner-program/page.tsx - FULL REPLACEMENT (Theme Update)

import Image from "next/image";
import { Briefcase, DollarSign, Users, Clock, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export const metadata = {
  title: "Contractor's Hub | QJ Trade Partner Program",
  description: "Join the QJ Trade Partner Program for exclusive discounts, priority delivery, and our QJ-Approved Contractor Referral Directory. Get more work and save money.",
};
const programBenefits = [
  {
    icon: DollarSign,
    title: "Exclusive Trade Pricing & Credit",
    description: "Access trade-only pricing and credit facilities designed to maximize your margins and cash flow. Directly countering competitor offers.",
  },
  {
    icon: Users,
    title: "QJ-Approved Referral Directory",
    description: "The masterstroke: We funnel B2C leads from our marketing directly to you. **We get you more work**.",
  },
  {
    icon: Briefcase,
    title: "Priority Technical Support",
    description: "Dedicated account management and priority scheduling for on-site technical consultations and complex specs. Save time and avoid costly errors.",
  },
  {
    icon: Clock,
    title: "Online Order & Priority Delivery",
    description: "Use our secure online portal to view order history and place quick-orders for reliable, on-site delivery.",
  },
];
export default function TradePartnerProgramPage() {
  return (
    <main>
      
      {/* Hero Section: The Moat (Value and Loyalty) */}
      <section className="bg-accent/90 py-16 md:py-24 text-white">
        <div className="container max-w-screen-xl text-center">
          <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold md:text-6xl">
            The Contractor&apos;s Hub
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl font-medium text-white max-w-3xl mx-auto">
            More than a supplier, we are your **lead-generation partner**. Join the QJ Trade Program to get priority support, exclusive pricing, and clients.
          </h2>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-7 px-10 shadow-2xl">
              <Link href="/contact-us">Apply for Partnership Today →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Benefits Grid (Architect's Precision: Clarity) */}
      {/* CHANGE: bg-white to dark:bg-neutral-900 */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-900">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits that Save You Time, Money, and Get You More Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programBenefits.map((benefit) => (
              <Card key={benefit.title} className="p-4 hover:border-accent transition-colors duration-300">
                <CardHeader className="p-0 mb-4">
                  <benefit.icon className="h-8 w-8 text-accent fill-accent/10" />
                    <CardTitle className="mt-2 text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Referral Directory Section (High-Value USP) */}
      {/* CHANGE: bg-secondary/10 to dark:bg-neutral-950 */}
      <section className="py-16 bg-secondary/10 dark:bg-neutral-950">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video">
            <Image
              src="/images/referral-map-mockup.png" // Placeholder for referral directory mock-up
              alt="Mockup of a map showing QJ-Approved Contractors listed near Johannesburg"
              fill
              className="object-contain rounded-xl shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
              The Ultimate Loyalty Perk: Get Clients from QJ
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Our marketing drives homeowners and businesses to the QJ website looking for experts. Instead of keeping those leads, **we send them directly to you** via our **QJ-Approved Contractor Directory**.
            </p>
            <Button asChild size="lg" className="mt-6 bg-primary hover:bg-primary/90">
              <Link href="/trade-partner-program/find-a-contractor">See How Referrals Work <MoveRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}