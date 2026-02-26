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

      // Feature items fade in progressively on scroll
      const features = gsap.utils.toArray<HTMLElement>(".scroll-video-feature");

      features.forEach((feature) => {
        gsap.fromTo(
          feature,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: feature,
              start: "top 80%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });

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
      style={{ minHeight: "200vh", position: "relative" }}
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
          src="/assets/video/sync-showcase.mp4"
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

      {/* Foreground content that scrolls over the video */}
      <div
        className="scroll-video-content"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <div className="scroll-video-intro text-center">
                <h2 className="tp-section-title-60">
                  Immerse into intelligent living
                </h2>
                <p className="tp_fade_bottom">
                  Scroll to explore how Sync Automation orchestrates lighting,
                  climate, and security into one seamless experience.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-60">
            <div className="col-xl-4 col-md-6">
              <div className="scroll-video-feature">
                <h3 className="tp-section-title-24">Adaptive Ambience</h3>
                <p>
                  Lighting scenes that adjust automatically with time of day,
                  presence, and mood.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="scroll-video-feature">
                <h3 className="tp-section-title-24">Silent Climate Control</h3>
                <p>
                  Precision temperature orchestration that feels natural, not
                  noticeable.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="scroll-video-feature">
                <h3 className="tp-section-title-24">Secure by Design</h3>
                <p>
                  Perimeter, access, and presence awareness engineered to
                  protect without intruding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

