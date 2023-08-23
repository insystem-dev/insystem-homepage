"use client";

import { adItems } from "@/common/data/dummy";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";

const advertisement = () => {
  SwiperCore.use([Autoplay, EffectFade]);

  const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);

  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        effect: "fade",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        draggable: false,
        loop: true,
      });
    }
  }, [swiperSetting]);

  return (
    <>
      {swiperSetting && (
        <Swiper {...swiperSetting}>
          {adItems.map((item, idx) => {
            const image =
              require(`@/common/assets/image/ads/${item.name}.gif`).default;
            return (
              <SwiperSlide key={idx}>
                <a href={item.src} target="_blank">
                  <img src={image.src} alt={item.name} style={{ width: 400 }} />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export default advertisement;
