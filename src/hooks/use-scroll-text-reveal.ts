"use client";

import { RefObject, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";

interface UseScrollTextRevealOptions {
  sectionRef: RefObject<HTMLElement | null>;
  headingSelector: string;
  paragraphSelector: string;
}

export default function useScrollTextReveal({
  sectionRef,
  headingSelector,
  paragraphSelector,
}: UseScrollTextRevealOptions) {
  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      gsap.from(headingSelector, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 40%",
          scrub: false,
          toggleActions: "play none none none",
        },
      });

      gsap.from(paragraphSelector, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 40%",
          scrub: false,
          toggleActions: "play none none none",
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [sectionRef, headingSelector, paragraphSelector]);
}
