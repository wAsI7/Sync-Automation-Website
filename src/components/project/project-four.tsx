import React from "react";
import Image from "next/image";

// images
import product_1 from "@/assets/img/home-03/portfolio/product-1.jpg";
import product_2 from "@/assets/img/home-03/portfolio/product-2.jpg";
import product_3 from "@/assets/img/home-03/portfolio/product-3.jpg";
import product_4 from "@/assets/img/home-03/portfolio/product-4.jpg";

// product data
const project_data = [
  {
    id: 1,
    img_1: product_1,
    img_2: product_2,
    title: "Sync Keypad Pro",
    subtitle: "Multi-zone control with customizable scenes",
    description: "8-button tactile interface · AC, lighting, curtain control · Day/Night presets",
  },
  {
    id: 2,
    img_1: product_3,
    img_2: product_4,
    title: "Sync Display Panel",
    subtitle: "Intelligent climate & automation hub",
    description: "Circular OLED display · Real-time temperature · Touch-sensitive controls",
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div className={`tp-project-3-area sync-project-black ${style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"}`}>
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Latest <span>Products</span>
                </h4>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_1}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <h4 className="tp-project-3-title-sm">
                        {item.title}
                      </h4>
                      <p className="tp-project-3-subtitle">{item.subtitle}</p>
                      <p className="tp-project-3-description">{item.description}</p>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_2}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
