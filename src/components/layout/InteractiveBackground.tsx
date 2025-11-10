// src/components/layout/InteractiveBackground.tsx - CREATE NEW FILE
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

/**
 * Creates a dynamic background effect that tracks the user's cursor position.
 * A radial gradient of vibrant colors follows the mouse, shifting the mood
 * from dark/dull to deep/rich upon interaction.
 */
export function InteractiveBackground() {
  // 1. State to store cursor position {x, y} relative to the viewport
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // 2. State to store the dynamic color stops
  const [colorStops, setColorStops] = useState('transparent, transparent');

  // 3. Memoized handler function to update mouse position
  const handleMouseMove = useCallback((event: MouseEvent) => {
    // We only track the position if the device supports hovering (i.e., not mobile/touch)
    if (!window.matchMedia('(hover: none)').matches) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  }, []);

  // 4. Effect hook for component lifecycle (runs once on mount)
  useEffect(() => {
    // Define the vibrant color mix using CSS custom properties for brand colors
    const colors = 'var(--primary), var(--accent), var(--hyper-red), transparent, transparent';
    setColorStops(colors);
    
    // Attach and clean up the global event listener
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);


  // 5. Calculate the CSS background position dynamically
  const style = {
    // The radial gradient is centered on the cursor position (x, y)
    backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${colorStops})`,
    // The gradient size ensures the effect is localized and fades out quickly
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat',
    // The background starts muted and gains intensity through the gradient opacity
    opacity: 0.5,
  };

  return (
    // The container sits absolutely behind all content (z-20)
    <div 
        className={cn(
            "absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 z-20",
            "bg-neutral-950" // Base background color (Dull/Dampened)
        )}
        style={style}
    >
        {/* Grid overlay for a final technical touch */}
        <div 
            className="absolute inset-0 opacity-10"
            style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%236b7280' d='M0 0h1v1H0zM15 0h1v1h-1zM0 15h1v1H0zM15 15h1v1h-1zM4 4h1v1H4zM11 4h1v1h-1zM4 11h1v1H4zM11 11h1v1h-1z'/%3E%3C/svg%3E")`
            }}
        />
    </div>
  );
}