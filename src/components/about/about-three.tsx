import React from "react";
import Image from "next/image";
// internal imports
import shape from "@/assets/img/home-03/about/ab-shape-img.png";
import { FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {
  return (
    <div className="tp-about-3-area pt-120 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  What we do
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                We design automation that feels invisible
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="tp-about-3-shape text-lg-end">
              <Image src={shape} alt="shape" style={{ height: "auto" }} />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-30 tp_fade_bottom">
                Smart homes shouldn&apos;t feel complicated. Sync panels blend into architecture while giving you absolute control—lighting, climate, audio, security—all through interfaces designed for human touch.
              </p>
              <p className="mb-0 tp_fade_bottom">
                Invisible until you need it. Precise when you do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
