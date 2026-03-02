"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function ScrollVideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current || !videoRef.current) return;

    const section = sectionRef.current;
    const video = videoRef.current;

    const setupAnimation = async () => {
      if (!video.duration) return;

      try {
        await video.play();
        video.pause();
        video.currentTime = 0;
      } catch (e) {
        // Ignore autoplay blocking errors
      }

      const videoProxy = { time: 0 };

      gsap.to(videoProxy, {
        time: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=400%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        onUpdate: () => {
          const delta = Math.abs(video.currentTime - videoProxy.time);
          if (delta > 0.033) {
            video.currentTime = videoProxy.time;
          }
        },
      });
    };

    if (video.readyState >= 1) {
      setupAnimation();
    } else {
      video.addEventListener("loadedmetadata", setupAnimation);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-video-section"
      style={{
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      <div style={{ height: "100vh", position: "relative" }}>
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
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}
