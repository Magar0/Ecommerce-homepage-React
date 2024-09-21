import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { feedback } from "../../constants/constants";
import FeedbackCard from "../cards/FeedbackCard";

export default function CarouselComponent() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {feedback.map((ele) => (
          <SwiperSlide className="rounded-xl p-5 bg-white h-fit" key={ele.id}>
            <FeedbackCard item={ele} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
