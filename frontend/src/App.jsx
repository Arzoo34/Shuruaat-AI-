import React from "react";
import { useTranslation } from "./i18n/useTranslation";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { LanguageSelector } from "./components/ui/LanguageSelector";
import { Badge } from "./components/ui/Badge";
import { CircularProgress } from "./components/ui/CircularProgress";
import { SkeletonLoader } from "./components/ui/SkeletonLoader";

function App() {
  const { t, selectedLanguage } = useTranslation();

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans flex justify-center py-6 px-4">
      {/* Mobile-first constraints (similar to mobile viewport) */}
      <div className="w-full max-w-md bg-ivory flex flex-col gap-6 relative">
        
        {/* Header Section */}
        <header className="text-center pt-4 pb-2">
          <span className="text-xs uppercase tracking-widest font-extrabold text-terracotta bg-terracotta bg-opacity-10 px-3 py-1 rounded-full">
            Shuruaat AI Backend Active
          </span>
          <h1 className="text-4xl mt-3 font-display font-black text-charcoal tracking-tight">
            शुरुआत AI
          </h1>
          <p className="text-sm font-medium text-charcoal text-opacity-70 mt-1">
            Empowering India's Local Artisans & Home Sellers
          </p>
        </header>

        {/* Translation Welcome Test */}
        <Card hasPattern className="border-terracotta border-opacity-20">
          <h2 className="text-xl font-display font-black text-terracotta mb-2">
            {t("welcome")}
          </h2>
          <p className="text-sm text-charcoal text-opacity-80">
            Selected Language Code: <strong className="text-indigo font-bold font-mono">{selectedLanguage}</strong>
          </p>
        </Card>

        {/* Language Selection Test */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal text-opacity-50">
            {t("language_select")}
          </h3>
          <LanguageSelector />
        </section>

        {/* Button Component Test */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal text-opacity-50">
            Base Buttons (Tactile Touch Targets)
          </h3>
          <div className="flex flex-col gap-3">
            <Button variant="primary" onClick={() => alert("Primary CTA Clicked!")}>
              {t("generate_listing")}
            </Button>
            <Button variant="secondary" onClick={() => alert("Secondary Outline Clicked!")}>
              {t("speak_product")}
            </Button>
            <Button variant="danger" onClick={() => alert("Danger Action Clicked!")}>
              Delete Listing
            </Button>
          </div>
        </section>

        {/* Badges Test */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal text-opacity-50">
            Color-coded Badges
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="success">Handcrafted</Badge>
            <Badge variant="warning">Pending Audit</Badge>
            <Badge variant="danger">High Risk</Badge>
            <Badge variant="info">Pure Silk</Badge>
          </div>
        </section>

        {/* Circular Progress Gauge Test */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal text-opacity-50">
            Quality & Risk Circular Gauges
          </h3>
          <div className="grid grid-cols-3 gap-2 justify-items-center bg-charcoal bg-opacity-5 p-4 rounded-2xl">
            <div className="flex flex-col items-center gap-1">
              <CircularProgress value={85} size={80} strokeWidth={8} label="Quality" />
              <span className="text-[10px] font-bold text-sage">Excellent</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CircularProgress value={52} size={80} strokeWidth={8} label="Quality" />
              <span className="text-[10px] font-bold text-turmeric">Needs Work</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CircularProgress value={18} size={80} strokeWidth={8} label="Quality" />
              <span className="text-[10px] font-bold text-madder">Poor</span>
            </div>
          </div>
        </section>

        {/* Skeleton Loaders Test */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal text-opacity-50">
            Pulsing Loading State Placeholders
          </h3>
          <div className="space-y-4">
            {/* Text lines skeleton */}
            <SkeletonLoader variant="text" count={2} />
            {/* Card skeleton */}
            <SkeletonLoader variant="card" />
          </div>
        </section>

        {/* Footer info */}
        <footer className="text-center text-xs text-charcoal text-opacity-40 py-6 border-t border-charcoal border-opacity-5">
          Shuruaat AI © 2026 — Designed for India's Craft Heritage
        </footer>
      </div>
    </div>
  );
}

export default App;
