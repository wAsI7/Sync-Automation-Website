"use client";

// TODO: Add GSAP fade-in slide-up on mount

export default function HeroV2() {
  return (
    <section
      id="HeroV2"
      style={{ height: "100vh", minHeight: "100vh" }}
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* ── Background anchor ──────────────────────────────────────── */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "#000" }} />

      {/* ── Wordmark ── top center ───────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <span className="text-2xl font-light tracking-[0.3em] uppercase text-white/90 select-none">
          Sync
        </span>
      </div>

      {/* ── Radial halo behind products ──────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
        className="pointer-events-none"
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
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
          zIndex: 5,
        }}
      >
        {/* Left product — angled inward */}
        <div className="w-48 h-64 border border-white/20 bg-white/5 rounded-lg -rotate-6 flex items-center justify-center text-white/40 text-sm transition-opacity duration-700">
          <span className="tracking-wide font-light text-center px-4">
            Display Panel
          </span>
        </div>

        {/* Right product — angled inward */}
        <div className="w-48 h-64 border border-white/20 bg-white/5 rounded-lg rotate-6 flex items-center justify-center text-white/40 text-sm transition-opacity duration-700">
          <span className="tracking-wide font-light text-center px-4">
            Keypad Pro
          </span>
        </div>
      </div>

      {/* ── Bottom left — main heading ───────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: "48px",
          left: "48px",
          zIndex: 10,
          maxWidth: "480px",
        }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
          Intelligent Spaces.
          <br />
          Automated.
        </h1>
      </div>

      {/* ── Bottom right — tagline + descriptor ─────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: "48px",
          right: "48px",
          zIndex: 10,
          textAlign: "right",
        }}
      >
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
