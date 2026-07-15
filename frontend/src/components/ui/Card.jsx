import React from "react";
import { BlockPrintPattern } from "./BlockPrintPattern";

export function Card({
  children,
  className = "",
  hasPattern = false,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-ivory border border-terracotta border-opacity-10 rounded-2xl shadow-warm hover:shadow-warm-hover transition-all duration-300 ${
        onClick ? "cursor-pointer active:scale-[0.99]" : ""
      } ${className}`}
      {...props}
    >
      {hasPattern && (
        <BlockPrintPattern className="absolute inset-0 opacity-[0.04] pointer-events-none" />
      )}
      <div className="relative z-10 p-5">
        {children}
      </div>
    </div>
  );
}
