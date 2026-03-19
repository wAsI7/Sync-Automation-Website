"use client";

import HeroV2 from "@/components/v2/hero-v2/HeroV2";
import ProductCarousel from "@/components/v2/carousel/ProductCarousel";
import StickyBanner from "@/components/v2/sticky-banner/StickyBanner";

export default function HomeV2() {
  return (
    <main className="bg-black text-white">
      {/* ─────────────────────────────────────────────────────────────
          Section 1: HeroV2
          Full-screen dark hero — above the fold entry point
      ───────────────────────────────────────────────────────────── */}
      <HeroV2 />

      {/* ─────────────────────────────────────────────────────────────
          Section 2: ProductCarousel
          Interactive product + spec switcher
      ───────────────────────────────────────────────────────────── */}
      <ProductCarousel />

      {/* ─────────────────────────────────────────────────────────────
          Section 3: StickyBanner
          Full-width immersive sticky scroll section
      ───────────────────────────────────────────────────────────── */}
      <StickyBanner />

      {/* ─────────────────────────────────────────────────────────────
          Section 4: BentoGrid
          Asymmetric feature tiles grid
          TODO: Replace with <BentoGrid /> component
      ───────────────────────────────────────────────────────────── */}
      <section id="BentoGrid" className="min-h-screen w-full" />

      {/* ─────────────────────────────────────────────────────────────
          Section 5: AppSection
          Split-layout app / ecosystem section
          TODO: Replace with <AppSection /> component
      ───────────────────────────────────────────────────────────── */}
      <section id="AppSection" className="min-h-screen w-full" />

      {/* ─────────────────────────────────────────────────────────────
          Section 6: CTAV2
          Dark metallic call-to-action section
          TODO: Replace with <CTAV2 /> component
      ───────────────────────────────────────────────────────────── */}
      <section id="CTAV2" className="min-h-screen w-full" />

      {/* ─────────────────────────────────────────────────────────────
          Section 7: FooterV2
          Clean minimal footer
          TODO: Replace with <FooterV2 /> component
      ───────────────────────────────────────────────────────────── */}
      <section id="FooterV2" className="min-h-screen w-full" />
    </main>
  );
}
