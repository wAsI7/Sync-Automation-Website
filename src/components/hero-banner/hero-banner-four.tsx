"use client";

// HERO STRUCTURE LOCKED – DO NOT REFACTOR

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowBg, RightArrowTwo } from "../svg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";

const LOGO_OFFSET = 180;   // total logo vertical block
const BOTTOM_SPACE = 120; // desired bottom spacing

export default function HeroBannerFour() {
  const patternRef = useRef<HTMLSpanElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (patternRef.current) {
      // Set initial rotation and scale
      gsap.set(patternRef.current, { rotation: 0, scale: 1 });

      // Animate rotation from 0 to 90 degrees and scale from 1 to 1.15 on scroll
      gsap.to(patternRef.current, {
        rotation: 90,
        scale: 1.15,
        scrollTrigger: {
          trigger: ".tp-hero-3-area",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        ease: "power1.out",
      });
    }
    // Reveal content after GSAP setup so layout is stable (avoids initial line-break glitch)
    if (heroContentRef.current) {
      heroContentRef.current.style.visibility = "visible";
    }
  }, []);

  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      {/* Sync Logo - Top Center, independent from main content */}
      <div
        className="hero-logo"
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Image
          src="/assets/img/logo/logo.png"
          alt="Sync Automation Logo"
          width={220}
          height={70}
          priority
        />
      </div>

      <section
        className="hero-section"
        style={{
          height: "calc(100vh)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          className="hero-content-wrapper"
          ref={heroContentRef}
          style={{
            position: "absolute",
            top: `${LOGO_OFFSET}px`,
            bottom: `${BOTTOM_SPACE}px`,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          {/* Background Pattern with Rotation */}
          <div className="tp-hero-3-circle-shape">
            <span ref={patternRef}></span>
          </div>

          <h4 className="tp-hero-3-title tp_reveal_anim">
            <span className="tp-reveal-line">Intelligence meets</span>
            <br />
            <span className="tp-reveal-line">design</span>
          </h4>
          <span className="tp-hero-3-category tp_reveal_anim">
            Redefining smart home control with precision-engineered automation
          </span>
        </div>
      </section>
    </div>
  );
}
