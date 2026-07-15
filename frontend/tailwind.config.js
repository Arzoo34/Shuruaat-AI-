/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: "#C05C36",
        turmeric: "#E8A33D",
        indigo: "#2B4570",
        madder: "#A13D42",
        sage: "#7A8B69",
        ivory: "#FBF6EE",
        charcoal: "#2E2A26",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Poppins", "Noto Sans", "sans-serif"],
      },
      boxShadow: {
        warm: "0 10px 25px -5px rgba(192, 92, 54, 0.15), 0 8px 10px -6px rgba(192, 92, 54, 0.1)",
        "warm-hover": "0 20px 25px -5px rgba(192, 92, 54, 0.25), 0 10px 10px -6px rgba(192, 92, 54, 0.15)",
      },
    },
  },
  plugins: [],
}
