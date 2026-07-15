import React from "react";
import { useStore } from "../../store/useStore";

const LANGUAGES = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
  { code: "bn", label: "Bengali", native: "বাংলা" },
  { code: "mr", label: "Marathi", native: "मराठी" },
  { code: "kn", label: "Kannada", native: "ಕನ್ನಡ" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
];

export function LanguageSelector({ className = "" }) {
  const { selectedLanguage, setSelectedLanguage } = useStore();

  return (
    <div className={`grid grid-cols-2 gap-3 w-full ${className}`}>
      {LANGUAGES.map((lang) => {
        const isSelected = selectedLanguage === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setSelectedLanguage(lang.code)}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-200 min-h-[56px] ${
              isSelected
                ? "bg-terracotta bg-opacity-5 border-terracotta text-terracotta font-bold shadow-sm"
                : "bg-ivory border-charcoal border-opacity-10 text-charcoal text-opacity-80 hover:border-terracotta hover:border-opacity-30"
            }`}
          >
            <span className="text-base font-semibold leading-tight">{lang.native}</span>
            <span className="text-xs text-opacity-60 leading-none mt-0.5">({lang.label})</span>
          </button>
        );
      })}
    </div>
  );
}
