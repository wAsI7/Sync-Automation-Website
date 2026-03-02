"use client";

import React, { useRef } from "react";
import useScrollScrubVideo from "@/hooks/use-scroll-scrub-video";

interface ScrollVideoSplitProps {
  videoSrc: string;
  heading: string;
  description: string;
  layout?: "left" | "right";
  scrollMultiplier?: number;
}

export default function ScrollVideoSplit({
  videoSrc,
  heading,
  description,
  layout = "right",
  scrollMultiplier = 100,
}: ScrollVideoSplitProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useScrollScrubVideo({ sectionRef, videoRef, scrollMultiplier });

  const textPanel = (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 80px",
        height: "100%",
      }}
    >
      <h2 className="tp-section-title">{heading}</h2>
      <p className="tp-section-desc">{description}</p>
    </div>
  );

  const videoPanel = (
    <div
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />
    </div>
  );

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        {layout === "left" ? (
          <>
            {videoPanel}
            {textPanel}
          </>
        ) : (
          <>
            {textPanel}
            {videoPanel}
          </>
        )}
      </div>
    </section>
  );
}
