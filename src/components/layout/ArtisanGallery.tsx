import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";

const galleryItems = [
    { 
        title: "High-Gloss Automotive Clearcoat", 
        vertical: "Automotive", 
        image: "/images/gallery-auto-gloss.png", // CORRECTED: Using .png
        link: "/automotive-paint",
        badgeColor: "primary",
    },
    { 
        title: "Thermal Shock Polyurethane Screed", 
        vertical: "Industrial", 
        image: "/images/gallery-industrial-floor.png", // CORRECTED: Using .png
        link: "/industrial-coatings",
        badgeColor: "accent",
    },
    { 
        title: "Custom Decorative Color Match", 
        vertical: "Decorative", 
        image: "/images/gallery-decorative-custom.png", // CORRECTED: Using .png
        link: "/services/expert-paint-colour-matching",
        badgeColor: "primary",
    },
    { 
        title: "Zinc-Rich Primer Anti-Corrosion", 
        vertical: "Industrial", 
        image: "/images/gallery-anti-corrosion.png", // CORRECTED: Using .png
        link: "/industrial-coatings/anti-corrosion-protective-coatings",
        badgeColor: "accent",
    },
];

/**
 * High-Density, Visually Driven Gallery Component.
 */
export function ArtisanGallery() {
    return (
        <section className="w-full bg-white py-16 md:py-24 dark:bg-neutral-800">
            <div className="container px-4 md:px-6">
                
                {/* Header: Title and Subtitle */}
                <div className="mx-auto max-w-4xl text-center mb-12">
                    <Zap className="h-6 w-6 text-primary mx-auto mb-3" />
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
                        Artisan&apos;s Praxis: Proof of Finish Quality {/* FIX 1: Apostrophe */}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        The difference is in the depth, gloss, and texture. See real-world applications of our high-performance coatings.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {galleryItems.map((item) => (
                        <Link href={item.link} key={item.title} className="group">
                            <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-2xl dark:bg-neutral-900">
                                <div className="relative aspect-square w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        className={cn(
                                            "object-cover transition-transform duration-500",
                                            // Grayscale filter removed permanently, maintaining scale-up on hover
                                            "group-hover:scale-105" 
                                        )}
                                    />
                                    {/* Badge Overlay */}
                                    <Badge 
                                        className={cn(
                                            "absolute top-3 left-3 px-3 py-1 text-xs font-bold",
                                            item.badgeColor === "primary" ? "bg-primary text-primary-foreground" : "bg-accent text-white"
                                        )}
                                    >
                                        {item.vertical}
                                    </Badge>
                                </div>
                                
                                <CardContent className="p-4 flex-1 flex flex-col justify-between">
                                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                                        {item.title}
                                    </CardTitle>
                                    <span className="mt-2 text-sm text-accent flex items-center">
                                        View Details <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}