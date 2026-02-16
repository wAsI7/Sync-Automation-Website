"use client";

import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";

// Section 1 - Hero from home-4
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";

// Section 3 - Cooperation from home-2
import AboutOne from "@/components/about/about-one";

// Section 4 - Horizontal scrolling image cards from home-4 (GalleryOne - beach/cube/figure)
import GalleryOne from "@/components/gallery/gallery-one";

// Section 6 - Project cards from home-4
import ProjectFour from "@/components/project/project-four";

// Section 5 - Text animation from home-4
import AboutThree from "@/components/about/about-three";

// Section 6 - Services from home-3
import ServiceThree from "@/components/service/service-three";

// Section 7 - Awards & Recognitions from home-1
import AwardOne from "@/components/award/award-one";

// Animations
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import { aboutAnim } from "@/utils/about-anim";
import { serviceMarqueAnim } from "@/utils/scroll-marque";
import { bounceAnimation, charAnimation } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";

export default function CustomHomePage() {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      // Global animations for all sections
      fadeAnimation();
      revelAnimationOne();
      textInvert();
      hoverBtn();
      bounceAnimation();
      charAnimation();
      aboutAnim();
      serviceMarqueAnim();

      // Section 5: ProjectFour horizontal image cards (pin + scrub animation)
      projectThreeAnimation();

      // Single refresh after layout and GSAP are ready (avoids double refresh + layout thrash)
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, 150);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* SECTION 1 - Hero "We're a high-end digital agency" from home-4 */}
            <section className="tp-hero-section">
              <HeroBannerFour />
            </section>

            {/* SECTION 2 - Horizontal scrolling image cards (beach/cube/figure) from home-4 */}
            <section className="tp-gallery-section pt-130 pb-130">
              <GalleryOne />
            </section>

            {/* SECTION 3 - "What we do" / We tell visual stories from home-4 */}
            <section className="tp-about-three-section">
              <AboutThree />
            </section>

            {/* SECTION 4 - Awards & Recognitions from home-1 */}
            <section className="tp-award-section">
              <AwardOne cls="pt-125 pb-125" />
            </section>

            {/* SECTION 5 - Project cards from home-4 */}
            <section className="tp-projects-section">
              <ProjectFour />
            </section>

            {/* SECTION 6 - Service cards from home-3 */}
            <section className="tp-service-section">
              <ServiceThree />
            </section>

            {/* SECTION 7 - Cooperation section from home-2 */}
            <section className="tp-about-section">
              <AboutOne />
            </section>
          </main>
        </div>
      </div>
    </Wrapper>
  );
}
