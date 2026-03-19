"use client";

import { useState } from "react";

// TODO: Add GSAP slide transition between products

const products = [
  {
    id: 1,
    name: "Sync Display Panel",
    tagline: "Smart Automation Display Hub",
    specs: [
      { label: "Connectivity", value: "Wi-Fi + Zigbee" },
      { label: "Display", value: '7" Touch IPS' },
      { label: "Integration", value: "100+ Devices" },
    ],
    finishes: ["#1a1a1a", "#C0C0C0", "#CD7F32", "#8B7355", "#D4AF37"],
  },
  {
    id: 2,
    name: "Sync Keypad Pro",
    tagline: "Tactile Smart Keypad Interface",
    specs: [
      { label: "Keys", value: "6 Programmable" },
      { label: "Backlight", value: "Adaptive RGB" },
      { label: "Protocol", value: "KNX + Matter" },
    ],
    finishes: ["#1a1a1a", "#C0C0C0", "#CD7F32", "#8B7355", "#D4AF37"],
  },
  {
    id: 3,
    name: "Curtain Controller",
    tagline: "Smart Curtain + Lighting System",
    specs: [
      { label: "Motor", value: "Silent DC Drive" },
      { label: "Control", value: "App + Voice" },
      { label: "Capacity", value: "Up to 50kg" },
    ],
    finishes: ["#1a1a1a", "#C0C0C0", "#CD7F32", "#8B7355", "#D4AF37"],
  },
];

export default function ProductCarousel() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeFinish, setActiveFinish] = useState(0);

  const currentProduct = products[activeProduct];

  const handlePrevProduct = () => {
    setActiveProduct((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    setActiveFinish(0);
  };

  const handleNextProduct = () => {
    setActiveProduct((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    setActiveFinish(0);
  };

  const handleFinishSelect = (index: number) => {
    setActiveFinish(index);
  };

  return (
    <section
      id="ProductCarousel"
      className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-between px-12 py-20"
    >
      {/* ── Top Label ───────────────────────────────────────────── */}
      <div className="text-center">
        <span className="text-xs font-light tracking-[0.3em] uppercase text-white/60">
          Our Products
        </span>
      </div>

      {/* ── Center Content ──────────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full">
        {/* Product name and tagline */}
        <div className="text-center transition-opacity duration-500">
          <h2 className="text-6xl font-bold tracking-tight mb-2">
            {currentProduct.name}
          </h2>
          <p className="text-sm text-white/50 font-light">
            {currentProduct.tagline}
          </p>
        </div>

        {/* Navigation arrows + Product placeholder */}
        <div className="flex items-center justify-center gap-12 my-8">
          {/* Left arrow */}
          <button
            onClick={handlePrevProduct}
            className="p-3 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300 cursor-pointer"
            aria-label="Previous product"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Product placeholder */}
          <div className="transition-opacity duration-500">
            <div className="w-64 h-80 border border-white/10 bg-white/5 rounded-xl flex items-center justify-center">
              <span className="text-xs text-white/40 font-light tracking-wide text-center px-6">
                {currentProduct.name}
              </span>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={handleNextProduct}
            className="p-3 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300 cursor-pointer"
            aria-label="Next product"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Specs Row ───────────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-12 mb-12 border-b border-white/10 pb-8">
        {currentProduct.specs.map((spec, index) => (
          <div key={index} className="text-center flex-1">
            <p className="text-xs text-white/50 font-light tracking-wide uppercase mb-2">
              {spec.label}
            </p>
            <p className="text-sm font-light text-white">{spec.value}</p>
            {index < currentProduct.specs.length - 1 && (
              <div className="absolute h-8 w-px bg-white/10 ml-6" />
            )}
          </div>
        ))}
      </div>

      {/* ── Finish Swatches ─────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-4">
        {currentProduct.finishes.map((finish, index) => (
          <button
            key={index}
            onClick={() => handleFinishSelect(index)}
            className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
              activeFinish === index
                ? "border-white scale-110"
                : "border-white/30 hover:border-white/50"
            }`}
            style={{ backgroundColor: finish }}
            aria-label={`Select finish ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
