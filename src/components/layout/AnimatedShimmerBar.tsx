// src/components/layout/AnimatedShimmerBar.tsx - FULL REPLACEMENT
import { cn } from "@/lib/utils";

/**
 * Renders a thin, full-width bar with a hyper-color cycling gradient 
 * and a metallic shimmer overlay.
 */
export function AnimatedShimmerBar() {
  return (
    // Height increased to h-1.5 (6px)
    <div className="relative w-full h-1.5 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
      
      {/* Hyper-Color Rainbow Gradient Base */}
      <div 
        className={cn(
          "h-full w-full absolute top-0 left-0",
          // Custom CSS for aggressive, full-spectrum rainbow
          // We use tailwind classes for animation/size but custom inline style for color
          "bg-[length:1000%_1000%] animate-color-cycle",
          // The gradient includes red, green, blue, and yellow stops for max flash
        )}
        style={{
            backgroundImage: "linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3, #FF0000)",
        }} 
      />

      {/* Metallic Shine Overlay */}
      <div 
        className={cn(
          "absolute inset-0 block h-full w-full transform opacity-50",
          "bg-gradient-to-r from-transparent via-white/80 to-transparent",
          // Reuse existing metallic shine animation for the shimmer effect
          "animate-shine pointer-events-none" 
        )}
      />
      
    </div>
  );
}