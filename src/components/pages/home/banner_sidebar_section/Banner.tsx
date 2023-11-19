"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { homeBanners } from "@/data";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function Banner() {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      style={{
        marginTop: "40px",
        marginLeft: "60px",
      }}
      modules={[Pagination]}
    >
      {homeBanners.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <Image
              alt={item}
              src={`/images/home/${item}`}
              width={1300}
              height={1300}
              className="w-full object-contain "
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
