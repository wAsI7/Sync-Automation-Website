import React from "react";
// internal imports
import { FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {
  return (
    <div className="tp-about-3-area pt-35 pb-80">
      <div className="container">
        <div className="tp-about-3-content-wrapper">
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
          <div className="tp-about-3-content">
            <p className="mb-0 tp_fade_bottom">
              Smart homes shouldn&apos;t feel complicated. Sync panels blend into architecture while giving you absolute control, lighting, climate, audio and security, all through interfaces designed for human touch. Invisible until you need it. Precise when you do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
