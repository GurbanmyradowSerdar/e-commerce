"use client";

import AboutEmployeeCard from "@/components/cards/about_employee_card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IAboutEmployeeCard } from "@/shared/types";

export default function AboutEmployeesSwiper({ dict }: { dict: any }) {
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
      {dict.pages.aboutUs.section3.employeeCards.map(
        (item: IAboutEmployeeCard, i: number) => {
          return (
            <SwiperSlide key={i}>
              <AboutEmployeeCard {...item} />
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
}
