import React from "react";

export function Button({
  children,
  variant = "primary", // 'primary' | 'secondary' | 'danger'
  type = "button",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  ...props
}) {
  const baseStyle = "relative flex items-center justify-center font-display font-bold text-base rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none min-h-[48px] px-6 py-3 w-full shadow-sm hover:shadow-md";
  
  const variants = {
    primary: "bg-turmeric text-charcoal hover:bg-opacity-95 focus:ring-turmeric",
    secondary: "bg-transparent text-terracotta border-2 border-terracotta hover:bg-terracotta hover:bg-opacity-5 focus:ring-terracotta",
    danger: "bg-madder text-ivory hover:bg-opacity-95 focus:ring-madder",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          {/* Animated spinner */}
          <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
