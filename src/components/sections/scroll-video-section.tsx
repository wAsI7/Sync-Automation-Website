"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const pinEl = pinRef.current;
    const videoEl = videoRef.current;

    if (!sectionEl || !pinEl || !videoEl) return;

    const ctx = gsap.context(() => {
      let scrollTriggerInstance: ScrollTrigger | null = null;

      const createScrollTrigger = () => {
        if (!videoEl.duration || isNaN(videoEl.duration)) {
          return;
        }

        if (scrollTriggerInstance) {
          scrollTriggerInstance.kill();
        }

        scrollTriggerInstance = ScrollTrigger.create({
          trigger: sectionEl,
          scroller: "#smooth-content",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: pinEl,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (!videoEl.duration || isNaN(videoEl.duration)) return;
            videoEl.currentTime = self.progress * videoEl.duration;
          },
        });
      };

      // Initialize when metadata is available so duration is known
      const handleLoadedMetadata = () => {
        createScrollTrigger();
      };

      videoEl.addEventListener("loadedmetadata", handleLoadedMetadata);

      // If metadata is already loaded, create immediately
      if (videoEl.readyState >= 1) {
        createScrollTrigger();
      }

      return () => {
        videoEl.removeEventListener("loadedmetadata", handleLoadedMetadata);
        if (scrollTriggerInstance) {
          scrollTriggerInstance.kill();
        }
      };
    }, sectionEl);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-video-section"
      style={{ minHeight: "400vh", position: "relative" }}
    >
      {/* Pinned container handled by ScrollTrigger */}
      <div
        ref={pinRef}
        className="scroll-video-background"
        style={{
          position: "relative",
          height: "100vh",
        }}
      >
        {/* Absolute video layer behind content */}
        <video
          ref={videoRef}
          src="/video/ambience-control.mp4"
          muted
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}

