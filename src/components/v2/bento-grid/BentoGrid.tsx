"use client";

const tiles = [
  {
    id: 1,
    size: "large",
    title: "Built-In Architecture",
    sub: "Engineered from ground up for smart spaces",
    accent: "bg-zinc-900",
  },
  {
    id: 2,
    size: "small",
    title: "Secured Control",
    sub: "End-to-end encrypted device management",
    accent: "bg-neutral-800",
  },
  {
    id: 3,
    size: "small",
    title: "SYNC AI",
    sub: "Adaptive automation that learns your routine",
    accent: "bg-zinc-800",
    glow: true,
  },
  {
    id: 4,
    size: "large",
    title: "Charge & Connect",
    sub: "Seamless integration with every major platform",
    accent: "bg-neutral-900",
  },
];

export default function BentoGrid() {
  return (
    <section
      id="BentoGrid"
      className="min-h-screen w-full bg-black text-white px-6 py-24"
    >
      {/* Header */}
      <div className="mb-16">
        <span className="text-xs font-light tracking-[0.3em] uppercase text-white/40">
          Why Sync
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
          Engineered for the way you live
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-max">
        {tiles.map((tile, index) => {
          const isFirstLarge = index === 0 && tile.size === "large";
          const isLarge = tile.size === "large";

          return (
            <div
              key={tile.id}
              className={`
                relative rounded-2xl overflow-hidden border border-white/5
                cursor-pointer transition-transform duration-300 hover:scale-[1.02]
                flex flex-col justify-end p-8
                ${isFirstLarge ? "md:col-span-2" : "md:col-span-1"}
                ${isLarge ? "min-h-80" : "min-h-48"}
                ${tile.accent}
              `}
            >
              {/* Glow effect if applicable */}
              {tile.glow && (
                <div
                  aria-hidden="true"
                  className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"
                />
              )}

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {tile.title}
                </h3>
                <p className="text-sm text-white/50 font-light">
                  {tile.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
