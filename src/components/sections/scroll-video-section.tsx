"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "@/plugins";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
      // Warm-up: force browser to initialize video decoding pipeline for production frame updates
      video.muted = true;
      video.playsInline = true;
      video
        .play()
        .then(() => {
          video.pause();
        })
        .catch(() => {});

      const initScrollTrigger = () => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
          pinType: "transform",
          invalidateOnRefresh: true,
          onEnter: () => {
            const smoother = ScrollSmoother.get();
            if (smoother) smoother.paused(true);
          },
          onLeave: () => {
            const smoother = ScrollSmoother.get();
            if (smoother) smoother.paused(false);
          },
          onEnterBack: () => {
            const smoother = ScrollSmoother.get();
            if (smoother) smoother.paused(true);
          },
          onLeaveBack: () => {
            const smoother = ScrollSmoother.get();
            if (smoother) smoother.paused(false);
          },
          onUpdate: (self) => {
            if (!video.duration) return;
            video.currentTime = video.duration * self.progress;
          },
        });
      };

      const onLoadedMetadata = () => {
        console.log("[ScrollVideoSection] Video metadata loaded", {
          src: video.src,
          duration: video.duration,
          readyState: video.readyState,
        });
        initScrollTrigger();
      };

      // Log and validate video src
      const videoSrc = video.src || video.getAttribute("src") || "";
      console.log("[ScrollVideoSection] Video loading status", {
        src: videoSrc,
        resolved: Boolean(videoSrc),
      });

      if (video.readyState >= 1) {
        initScrollTrigger();
      } else {
        video.addEventListener("loadedmetadata", onLoadedMetadata);
      }

      return () => {
        video.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-video-section"
      data-speed="1"
      style={{
        height: "100vh",
        position: "relative",
        backgroundColor: "#000000",
        marginBottom: "-2px",
        isolation: "isolate",
      }}
    >
      {/* Pinned container handled by ScrollTrigger */}
      <div
        ref={pinRef}
        className="scroll-video-background"
        style={{
          position: "relative",
          isolation: "isolate",
          height: "100vh",
          zIndex: 0,
        }}
      >
        {/* Absolute video layer behind content */}
        <video
          ref={videoRef}
          src="/video/ambience-control.mp4"
          muted
          autoPlay
          playsInline
          preload="auto"
          onError={(e) => {
            const target = e.currentTarget;
            console.error("[ScrollVideoSection] Video failed to load", {
              src: target.src,
              error: target.error ? { code: target.error.code, message: target.error.message } : null,
            });
          }}
          onLoadedMetadata={() => {
            console.log("[ScrollVideoSection] Video metadata loaded (element)");
          }}
          onLoadStart={() => {
            console.log("[ScrollVideoSection] Video load started");
          }}
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

