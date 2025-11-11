"use client"

import React from 'react';
// FIX 6: Removed unused 'cn' import
import { Zap } from "lucide-react";

// IMPORT FOR BRAND SLIDER INTEGRATION (Still needed for bottom of section)
import { BrandSlider } from "@/components/layout/BrandSlider"; 

/**
 * Final Clean Hero Component with Centered Text over Video.
 */
export function SpectrometerDemo() {
    return (
        // 1. Height Correction retained
        <section 
            className="relative w-full bg-neutral-950 text-white overflow-hidden flex flex-col justify-end"
            style={{ minHeight: 'calc(100vh - 96px)' }}
        >
            
            {/* 1. VIDEO BACKGROUND LAYER (Z-0) */}
            <div className="absolute inset-0 z-0">
                <video 
                    // Reference the public path where the video file should be located
                    src="/images/Cars Driving Tunnel Road Stock Video Footage.mp4" 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
                {/* 2. DARK OVERLAY (OPACITY REDUCED FROM 80% TO 60%) */}
                <div className="absolute inset-0 bg-neutral-950 opacity-60" />
            </div>

            {/* CONTENT LAYER (Z-30) - Centered and Simplified */}
            <div className="container relative z-30 px-4 md:px-6 py-10 md:py-16 flex items-center justify-center">
                
                {/* Centered Content Block (Text Alignment) */}
                <div className="flex flex-col items-center justify-center space-y-6 max-w-4xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary flex items-center space-x-2">
                        <Zap className="h-4 w-4 fill-primary text-neutral-950" />
                        <span>The Technical Difference</span>
                    </span>
                    
                    {/* TEXT SHADOW APPLIED HERE */}
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl leading-tight text-shadow-lg">
                        Paint is <span className="text-hyper-red">Science</span>, not just color.
                    </h1>
                    
                    {/* TEXT SHADOW APPLIED HERE */}
                    <p className="max-w-xl text-lg leading-relaxed text-neutral-300 mx-auto mt-4 text-shadow-lg">
                        We are the expert supplier for Automotive, Industrial, and Decorative certified systems, providing guaranteed technical support right here in Alberton.
                    </p>

                </div>

            </div>
            
            {/* BRAND SLIDER INTEGRATION: Fixed to bottom edge of Hero Section */}
            <div className="relative z-40 w-full">
                <BrandSlider />
            </div>

        </section>
    );
}