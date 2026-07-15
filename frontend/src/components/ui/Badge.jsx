import React from "react";

export function Badge({
  children,
  variant = "info", // 'success' (sage) | 'warning' (turmeric) | 'danger' (madder) | 'info' (indigo)
  className = "",
  ...props
}) {
  const styles = {
    success: "bg-sage bg-opacity-15 text-sage border-sage border-opacity-35",
    warning: "bg-turmeric bg-opacity-15 text-turmeric border-turmeric border-opacity-35",
    danger: "bg-madder bg-opacity-15 text-madder border-madder border-opacity-35",
    info: "bg-indigo bg-opacity-15 text-indigo border-indigo border-opacity-35",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
