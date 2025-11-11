// src/components/layout/HeroSection.tsx - FULL REPLACEMENT (Final Clean-up of Unused Imports)

"use client" // Required if component uses useState/useEffect or non-Next.js features

// FIX: Removed unused imports: Link, cn
import { BrandSlider } from "@/components/layout/BrandSlider"; // Keep the BrandSlider import
// RE-ADDED: Imports for components/icons used in the BrandSlider/Hero logic (which were previously removed by mistake)



// --- VIDEO HERO COMPONENT ---
export function HeroSection() {
  
  const videoPath = "/images/Cars Driving Tunnel Road Stock Video Footage.mp4"; // The requested video asset

  return (
    // Height correction retained from SpectrometerDemo
    <section 
        className="relative w-full bg-neutral-950 text-white overflow-hidden flex flex-col justify-end"
        style={{ minHeight: 'calc(100vh - 96px)' }}
    >
        
        {/* 1. VIDEO BACKGROUND LAYER (Z-0) */}
        <div className="absolute inset-0 z-0">
            <video 
                src={videoPath} // Use the verified path
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
            {/* 2. DARK OVERLAY (Ensures text contrast and readability) */}
            <div className="absolute inset-0 bg-neutral-950 opacity-60" />
        </div>

        {/* CONTENT LAYER (Z-30) - Centered Heading & Subtext */}
        <div className="container relative z-30 px-4 md:px-6 py-10 md:py-16 flex items-center justify-center">
            
            {/* Centered Content Block */}
            <div className="flex flex-col items-center justify-center space-y-6 max-w-5xl text-center">
                
                {/* H1: Main Heading */}
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl leading-tight">
                    Paint is <span className="text-hyper-red">Science</span>, not just color.
                </h1>
                
                {/* Subtext */}
                <p className="max-w-3xl text-xl leading-relaxed text-neutral-300 mx-auto mt-4">
                    We are the expert supplier for Industrial, Automotive, and Decorative **certified systems**, providing guaranteed technical support right here in Alberton.
                </p>

                {/* NOTE: Buttons and secondary info removed as requested */}
                
            </div>

        </div>
        
        {/* BRAND SLIDER INTEGRATION: Fixed to bottom edge of Hero Section */}
        <div className="relative z-40 w-full">
            {/* Reusing the BrandSlider component which appears at the bottom of the old hero */}
            <BrandSlider /> 
        </div>
    </section>
  )
}