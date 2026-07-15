import React from "react";

export function SkeletonLoader({
  variant = "text", // 'text' | 'rect' | 'circle' | 'card'
  className = "",
  count = 1,
  ...props
}) {
  const baseClass = "bg-charcoal bg-opacity-10 animate-pulse";
  
  const variants = {
    text: "h-4 w-full rounded-md",
    rect: "h-24 w-full rounded-xl",
    circle: "rounded-full",
    card: "h-40 w-full rounded-2xl border border-charcoal border-opacity-5 p-5 flex flex-col justify-between",
  };

  const renderSkeleton = (index) => {
    if (variant === "card") {
      return (
        <div key={index} className={`${variants.card} ${className}`} {...props}>
          <div className="space-y-3">
            <div className="h-6 w-3/4 bg-charcoal bg-opacity-10 rounded-md" />
            <div className="h-4 w-1/2 bg-charcoal bg-opacity-10 rounded-md" />
          </div>
          <div className="h-10 w-full bg-charcoal bg-opacity-10 rounded-full" />
        </div>
      );
    }
    
    return (
      <div
        key={index}
        className={`${baseClass} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  };

  return (
    <div className="space-y-3 w-full">
      {Array.from({ length: count }).map((_, i) => renderSkeleton(i))}
    </div>
  );
}
