// src/components/layout/Testimonials.tsx - Fix Unescaped Entities

import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// We'll create some realistic testimonial data based on your business verticals.
// You should replace these with your real Google reviews later.
const testimonials = [
  {
    name: "Jaco Van Der Merwe",
    title: "JvDM Contractors",
    rating: 5,
    review:
      "QJ Paint is the only supplier I trust for my industrial floor coating projects. Their technical advice on the epoxy and polyurethane systems is always spot-on. They get what contractors need.",
  },
  {
    name: "Mike's Panelbeaters",
    title: "Automotive Refinishing",
    rating: 5,
    review:
      "The spectrophotometer they have for colour matching is unbelievable. It saves us so much time and rework. Their stock of R-M and baslac is always full. 10/10 service.",
  },
  {
    name: "Sarah Richards",
    title: "Homeowner, Meyersdal",
    rating: 5,
    review:
      "I had no idea what paint to use for my roof. The team at QJ Paint (Alberton) didn't just sell me a bucket; they explained *why* I needed a specific waterproofing paint. Amazing service!",
  },
];
// Helper component for star ratings
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating
              ? "text-primary fill-primary" // Changed to primary for consistency
              : "text-neutral-300"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    // We'll use a light grey background to contrast the dark CTA section
    <section className="w-full bg-neutral-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Trusted by Professionals in Alberton
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Don&apos;t just take our word for it. Here&apos;s what our customers say about
            our expert service and technical support.
          </p>
        </div>

        {/* 3-Column Testimonial Grid */}
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="flex flex-col overflow-hidden bg-white shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold text-neutral-900">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-sm text-neutral-600">
                      {testimonial.title}
                    </p>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700">&quot;{testimonial.review}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}