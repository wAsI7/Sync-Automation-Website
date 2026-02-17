"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VideoFullwidthSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !videoRef.current) return;

    const section = sectionRef.current;
    const video = videoRef.current;

    // Set initial scale
    gsap.set(video, { scale: 1 });

    // Pin the section and animate video zoom
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
        pinSpacing: true,
      },
    });

    tl.to(video, {
      scale: 1.2,
      ease: "power1.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="video-fullwidth-section">
      <div className="video-fullwidth-container">
        <video
          ref={videoRef}
          className="video-fullwidth-element"
          src="/video/sync.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}
