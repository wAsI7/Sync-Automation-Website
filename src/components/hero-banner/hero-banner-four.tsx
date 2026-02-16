"use client";

import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";

export default function HeroBannerFour() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
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
