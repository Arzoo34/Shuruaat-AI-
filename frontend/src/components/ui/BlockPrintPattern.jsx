import React from "react";

export function BlockPrintPattern({ className = "absolute inset-0 opacity-[0.06] pointer-events-none" }) {
  return (
    <svg 
      className={className} 
      width="100%" 
      height="100%" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="block-print-motif" width="48" height="48" patternUnits="userSpaceOnUse">
          {/* Central floral-star block motif */}
          <path 
            d="M 24 6 L 28 18 L 40 18 L 30 26 L 34 38 L 24 30 L 14 38 L 18 26 L 8 18 L 20 18 Z" 
            fill="#C05C36" 
          />
          <circle cx="24" cy="23" r="3.5" fill="#E8A33D" />
          {/* Subtle corner elements to tie the grid together */}
          <circle cx="4" cy="4" r="1.5" fill="#2B4570" />
          <circle cx="44" cy="4" r="1.5" fill="#2B4570" />
          <circle cx="4" cy="44" r="1.5" fill="#2B4570" />
          <circle cx="44" cy="44" r="1.5" fill="#2B4570" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#block-print-motif)" />
    </svg>
  );
}
