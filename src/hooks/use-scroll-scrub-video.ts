"use client";

import { RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface UseScrollScrubVideoOptions {
  sectionRef: RefObject<HTMLElement | null>;
  videoRef: RefObject<HTMLVideoElement | null>;
  scrollMultiplier?: number;
}

export default function useScrollScrubVideo({
  sectionRef,
  videoRef,
  scrollMultiplier = 100,
}: UseScrollScrubVideoOptions) {
  useGSAP(() => {
    if (!sectionRef.current || !videoRef.current) return;

    const section = sectionRef.current;
    const video = videoRef.current;

    const setupAnimation = async () => {
      if (!video.duration) return;

      try {
        await video.play();
        video.pause();
        video.currentTime = 0.01;
        video.getBoundingClientRect();
      } catch (e) {
        // Ignore autoplay blocking errors
      }

      console.log("VIDEO DURATION:", video.duration);

      const end = `+=${video.duration * scrollMultiplier}%`;
      console.log("SCRUB VALUE:", 0.5);

      const proxy = { time: 0 };

      gsap.to(proxy, {
        time: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        onStart: () => {
          console.log("SCROLL END:", end);
        },
        onUpdate: () => {
          if (Math.abs(video.currentTime - proxy.time) > 0.033) {
            video.currentTime = proxy.time;
          }
        },
      });
    };

    if (video.readyState >= 1) {
      setupAnimation();
    } else {
      video.addEventListener("loadedmetadata", setupAnimation, { once: true });
    }
  }, { scope: sectionRef });
}
