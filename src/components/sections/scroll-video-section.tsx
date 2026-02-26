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
    if (!sectionRef.current || !pinRef.current || !videoRef.current) return;

    const section = sectionRef.current;
    const pin = pinRef.current;
    const video = videoRef.current;

    const ctx = gsap.context(() => {
      const initScrollTrigger = () => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 3, // slow cinematic scrub
          pin: pin,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (!video.duration) return;
            video.currentTime = video.duration * self.progress;
          },
        });
      };

      if (video.readyState >= 1) {
        initScrollTrigger();
      } else {
        video.addEventListener("loadedmetadata", initScrollTrigger, {
          once: true,
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-video-section"
      style={{
        minHeight: "600vh",
        position: "relative",
        backgroundColor: "#000000",
        marginBottom: "-2px",
      }}
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
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}

