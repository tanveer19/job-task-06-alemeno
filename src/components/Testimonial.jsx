import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Testimonial.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import SectionTitle from "./SectionTitle";

export default function Testimonial() {
  return (
    <>
      <SectionTitle heading={"Testimonial"}></SectionTitle>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-lg shadow-lg">
            If you're new to meditation and want more structured guidance,
            <br />
            consider attending classes, workshops, or retreats led by
            experienced meditation instructors or seeking out a local meditation
            community.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-lg shadow-lg">
            Remember that meditation is a personal practice, and there is no
            one-size-fits-all approach. It's important to explore different
            techniques and find what works best for you. <br /> Regular practice
            is key to experiencing the full benefits of meditation.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-lg shadow-lg">
            If you're new to meditation and want more structured guidance,
            <br />
            consider attending classes, workshops, or retreats led by
            experienced meditation instructors or seeking out a local meditation
            community.
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
