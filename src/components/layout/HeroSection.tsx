// src/components/layout/HeroSection.tsx - FULL REPLACEMENT (Glitter & Swirl Animation)

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Zap } from "lucide-react" // Removed unused Phone import
import { cn } from "@/lib/utils";
import { BrandSlider } from "@/components/layout/BrandSlider";


// Helper Component for Staggered Reveal (from previous step)
const AnimatedDiv = ({ 
    children, 
    delay = 0,
    className,
}: {
    children: React.ReactNode; 
    delay?: number;
    className?: string;
}) => (
    <div 
        className={cn("opacity-0 [animation-fill-mode:forwards] animate-fade-in-up", className)}
        style={{ animationDelay: `${delay}ms` }}
    >
        {children}
    </div>
);
export function HeroSection() {
  return (
    // Primary Black/Deep background for contrast
    <section className="relative w-full bg-neutral-950 text-white flex flex-col justify-end overflow-hidden">
        
        {/* === ANIMATION LAYERS (0, 1, 2, 3) === */}
        <div className="absolute inset-0 z-0">
            {/* LAYER 1: PULSATING/SWIRLING PAINT EFFECT (The main liquid motion) */}
            <div 
  
              className={cn(
                    "absolute w-[250%] h-[250%] md:w-[200%] md:h-[200%] top-1/2 left-1/2 opacity-60",
                    "bg-radial-gradient from-accent/70 via-transparent to-neutral-950/0 rounded-full",
                    // Swirl animation sped up here
          
                    "animate-swirl" 
                )}
                style={{ transform: "translate(-50%, -50%)" }}
            />
            
            {/* LAYER 2: GLITTER/METALLIC BURST OVERLAY (NEW) */}
          
            <div 
                className={cn(
                    "absolute inset-0 z-10 opacity-70",
                    "animate-glitter-burst" // Applied faster animation
                )}
                // This custom radial-gradient creates the metallic particle look
                style={{
                    backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.2) 1px, transparent 0%)',
                    backgroundSize: '20px 20px', // Smaller size for dense particles
                   
                    backgroundRepeat: 'repeat',
                }}
            />
            
             {/* LAYER 3: Subtle High-Tech Grid Overlay (Kept for depth) */}
            <div 
                className="absolute inset-0 z-20 opacity-10"
   
                style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%236b7280' d='M0 0h1v1H0zM15 0h1v1h-1zM0 15h1v1H0zM15 15h1v1h-1zM4 4h1v1H4zM11 4h1v1h-1zM4 11h1v1H4zM11 11h1v1h-1z'/%3E%3C/svg%3E")`
                }}
            />
        </div>


        {/* === CONTENT LAYER (Z-30) - Main Text Block now takes full width === */}
        <div className="container relative z-30 px-4 md:px-6 py-12 md:py-16">
            
            <div className="flex flex-col md:w-3/4 space-y-6">
                
                <div className="flex flex-col justify-center space-y-4">

           
                    <AnimatedDiv delay={100} className="text-sm font-semibold uppercase tracking-widest text-primary flex items-center space-x-2">
                        <Zap className="h-4 w-4 fill-primary text-neutral-950" />
                        <span>The Technical Difference</span>
                    </AnimatedDiv>

       
                    <AnimatedDiv delay={300}>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
                            Paint is <span className="text-hyper-red">Science</span>, not just color.
                        </h1>
                    </AnimatedDiv>

                    <AnimatedDiv delay={500} className="max-w-xl text-lg leading-relaxed text-neutral-300 border-l-4 border-primary pl-4">
                        We are the expert supplier for Industrial, Automotive, and Decorative **certified systems**, providing guaranteed technical support right here in Alberton.
                    </AnimatedDiv> 

                    <AnimatedDiv delay={700} className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-primary fill-primary animate-pulse" />
                        <span className="text-md font-medium text-white">
                  
                            4,824 Verified Google Reviews
                        </span>
                    </AnimatedDiv>

                    <AnimatedDiv delay={900} className="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-y-0 sm:space-x-4">
               
                        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href="/services/on-site-technical-consultation">
                                <Zap className="mr-2 h-5 w-5" />
                     
                                Book Technical Consult
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
    
                            <Link href="/contact-us/alberton-north">
                                <MapPin className="mr-2 h-5 w-5" />
                                Find Our Store
     
                            </Link>
                        </Button>
                    </AnimatedDiv>
                </div>

            </div>
     
        </div>

        {/* === BRAND SLIDER LAYER (Z-40) === */}
        <div className="relative z-40 w-full">
            <BrandSlider />
        </div>
    </section>
  )
}