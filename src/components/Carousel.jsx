import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/slider-1.jpg" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider-2.jpg" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider-3.jpg" className="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
