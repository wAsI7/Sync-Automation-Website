"use client";

// TODO: Add GSAP ScrollTrigger fade/scale transition

const banners = [
  {
    id: 1,
    headline: "Precision. Automated.",
    sub: "Every switch. Every curtain. Every light.",
    bg: "bg-zinc-900",
  },
  {
    id: 2,
    headline: "Control. Redefined.",
    sub: "One keypad to rule your entire space.",
    bg: "bg-neutral-900",
  },
  {
    id: 3,
    headline: "Silence. Engineered.",
    sub: "Motors so quiet, you only notice the result.",
    bg: "bg-stone-900",
  },
];

export default function StickyBanner() {
  return (
    <section
      id="StickyBanner"
      className="relative w-full bg-black text-white"
      aria-label="Immersive sticky banner section"
    >
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`sticky top-0 h-screen w-full overflow-hidden ${
            index === 0 ? "z-10" : index === 1 ? "z-20" : "z-30"
          }`}
        >
          {/* Background placeholder (lifestyle photo simulation) */}
          <div
            className={`absolute inset-0 ${banner.bg}`}
            aria-hidden="true"
          />

          {/* Radial gradient overlay for depth */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Content layer */}
          <div className="relative h-full w-full flex flex-col justify-between p-12">
            {/* Top right counter */}
            <div className="flex justify-end">
              <span className="text-sm text-white/40 tracking-widest font-light">
                {String(index + 1).padStart(2, "0")} / {String(banners.length).padStart(2, "0")}
              </span>
            </div>

            {/* Bottom left headline + subtitle */}
            <div className="pb-16">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-4 text-white">
                {banner.headline}
              </h2>
              <p className="text-lg text-white/50 font-light max-w-2xl">
                {banner.sub}
              </p>
            </div>
          </div>

          {/* Bottom border */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px border-t border-white/10"
            aria-hidden="true"
          />
        </div>
      ))}
    </section>
  );
}
