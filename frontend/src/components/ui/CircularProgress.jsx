import React, { useEffect, useState } from "react";

export function CircularProgress({
  value = 0, // 0 to 100
  size = 120,
  strokeWidth = 10,
  label = "",
  invertColor = false, // if true: high value is red/danger, low is green/success
  className = "",
}) {
  const [offset, setOffset] = useState(251.2);
  const radius = 40;
  const circumference = 2 * Math.PI * radius; // ~251.32

  useEffect(() => {
    const progressOffset = circumference - (value / 100) * circumference;
    setOffset(progressOffset);
  }, [value, circumference]);

  // Color mapping logic
  const getColor = (val) => {
    const isSuccess = invertColor ? val < 35 : val >= 70;
    const isDanger = invertColor ? val >= 70 : val < 40;

    if (isSuccess) return "stroke-sage text-sage";
    if (isDanger) return "stroke-madder text-madder";
    return "stroke-turmeric text-turmeric";
  };

  const colorClass = getColor(value);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Track circle (light ivory background track) */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="stroke-charcoal stroke-opacity-5"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          className={`transition-all duration-1000 ease-out fill-transparent ${colorClass.split(" ")[0]}`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      {/* Centered text display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className={`text-2xl font-display font-black leading-none ${colorClass.split(" ")[1]}`}>
          {value}%
        </span>
        {label && (
          <span className="text-[10px] uppercase font-bold text-charcoal text-opacity-50 mt-1 leading-none">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
