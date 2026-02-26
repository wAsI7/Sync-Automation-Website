import React from "react";
import Image from "next/image";
import { ProjectShape, RightArrow } from "../svg";
import cta from '@/assets/img/home-03/cta/cta-1.png';
import Link from "next/link";

export default function ContactOne() {
  return (
    <div className="tp-cta-area black-bg pt-120 pb-120 z-index fix">
      <div className="container">
        <div className="col-xl-12">
          <div className="tp-cta-title-box p-relative">
            <h4 className="tp-cta-title cta-text">
              Let’s talk
              <span>about it</span>
            </h4>
            <p className="tp_fade_bottom">
              We engineer seamless smart automation experiences designed for refined modern homes.
            </p>
            <div className="tp-cta-btn-box">
              <a href="#" className="tp-btn-zikzak p-relative">
                <span className="zikzak-content">
                  Get <br /> In Touch
                  <RightArrow clr="#19191A" />
                </span>
                <ProjectShape />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
