"use client";

import { ICategorySwiper } from "types";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "../cards/category_card";
import "swiper/css";

export default function CategorySwiper({ data, swiperProps }: ICategorySwiper) {
  return (
    <Swiper {...swiperProps}>
      {data.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <CategoryCard {...item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
