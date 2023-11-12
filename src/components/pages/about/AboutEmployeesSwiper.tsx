"use client";

import AboutEmployeeCard from "@/components/cards/about_employee_card";
import { aboutEmployeeSwiper } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutEmployeesSwiper() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      loop
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
    >
      {aboutEmployeeSwiper.map((item, i) => {
        return (
          <SwiperSlide key={i} className="">
            <AboutEmployeeCard
              href={item.href}
              image={item.image}
              name={item.name}
              status={item.status}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
