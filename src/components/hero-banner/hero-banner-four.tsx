"use client";

// HERO STRUCTURE LOCKED – DO NOT REFACTOR

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowBg, RightArrowTwo } from "../svg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";

export default function HeroBannerFour() {
  const patternRef = useRef<HTMLSpanElement>(null);

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
  }, []);

  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              {/* Sync Logo - Top Center */}
              <div className="hero-logo">
                <Image
                  src="/assets/img/logo/logo.png"
                  alt="Sync Automation Logo"
                  width={220}
                  height={70}
                  priority
                />
              </div>

              {/* Background Pattern with Rotation */}
              <div className="tp-hero-3-circle-shape">
                <span ref={patternRef}></span>
              </div>

              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">Intelligence meets</span>
                <span className="tp-reveal-line">design</span>
              </h4>
              <span className="tp-hero-3-category tp_reveal_anim">
                Redefining smart home control with precision-engineered automation
              </span>
              <span className="tp-btn-black-2" role="button">
                Explore Products{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
