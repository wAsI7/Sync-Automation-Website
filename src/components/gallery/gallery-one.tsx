import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
// images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';

// New gallery images from 6-products-gallery
const gallery_images = [
  '/assets/img/6-products-gallery/1.webp',
  '/assets/img/6-products-gallery/2.webp',
  '/assets/img/6-products-gallery/3.webp',
  '/assets/img/6-products-gallery/4.webp',
  '/assets/img/6-products-gallery/5.webp',
  '/assets/img/6-products-gallery/6.webp',
  '/assets/img/6-products-gallery/1.webp',
  '/assets/img/6-products-gallery/2.webp',
  '/assets/img/6-products-gallery/3.webp',
  '/assets/img/6-products-gallery/4.webp',
  '/assets/img/6-products-gallery/5.webp',
  '/assets/img/6-products-gallery/6.webp',
]

const imgStyle:CSSProperties = {height: "auto"};

export default function GalleryOne() {
  return (
    <div className="tp-gallery-area fix p-relative">
      <div className="tp-gallery-shape-1">
        <Image className="img-1" src={shape_1} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_1} alt="shape" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <Image className="img-1" src={shape_2} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_2} alt="shape" style={imgStyle} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active">
                <Marquee className="tp-gallery-titming" speed={100} direction='left'>

                  {gallery_images.map((g, i) => (

                    <div key={i}>
                      <div className="tp-gallery-item mr-30">
                        <img 
                          src={g} 
                          alt="gallery-img" 
                        />
                      </div>
                    </div>
                  ))}

                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
