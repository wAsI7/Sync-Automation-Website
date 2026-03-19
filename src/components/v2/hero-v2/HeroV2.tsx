"use client";

// TODO: Add GSAP fade-in slide-up on mount

export default function HeroV2() {
  return (
    <section
      id="HeroV2"
      className="relative min-h-screen w-full bg-black text-white overflow-hidden"
    >
      {/* ── Wordmark ── top center ───────────────────────────────── */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
        <span className="text-2xl font-light tracking-[0.3em] uppercase text-white/90 select-none">
          Sync
        </span>
      </div>

      {/* ── Radial halo behind products ──────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 50%, transparent 75%)",
          }}
        />
      </div>

      {/* ── Product placeholders ─ center stage ──────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center gap-8 z-10">
        {/* Left product — angled inward */}
        <div className="flex flex-col items-center gap-3 -rotate-6 transition-opacity duration-700 opacity-100">
          <div className="w-48 h-64 border border-white/20 rounded-lg bg-white/5 flex items-center justify-center">
            <span className="text-sm text-white/50 tracking-wide font-light text-center px-4">
              Display Panel
            </span>
          </div>
        </div>

        {/* Right product — angled inward */}
        <div className="flex flex-col items-center gap-3 rotate-6 transition-opacity duration-700 opacity-100">
          <div className="w-48 h-64 border border-white/20 rounded-lg bg-white/5 flex items-center justify-center">
            <span className="text-sm text-white/50 tracking-wide font-light text-center px-4">
              Keypad Pro
            </span>
          </div>
        </div>
      </div>

      {/* ── Bottom left — main heading ───────────────────────────── */}
      <div className="absolute bottom-12 left-12 z-10 max-w-xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
          Intelligent Spaces.
          <br />
          Automated.
        </h1>
      </div>

      {/* ── Bottom right — tagline + descriptor ─────────────────── */}
      <div className="absolute bottom-12 right-12 z-10 text-right">
        <p className="text-base font-medium tracking-wide text-white/90">
          Starting at ₹{" "}
          <span className="underline underline-offset-4 cursor-pointer hover:text-white transition-colors duration-200">
            Request a Quote
          </span>
        </p>
        <p className="mt-1 text-sm text-white/40 tracking-wide">
          Premium smart home automation systems
        </p>
      </div>
    </section>
  );
}
