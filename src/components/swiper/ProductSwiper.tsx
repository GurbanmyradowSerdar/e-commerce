"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { IProductSwiper } from "types";
import ProductCard from "../cards/product_card/ProductCard";
import { twMerge as tw } from "tailwind-merge";

export default function ProductSwiper({
  data,
  swiperProps,
  itemsCentered,
}: IProductSwiper) {
  return (
    <Swiper {...swiperProps}>
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <div
            className={tw(
              "flex items-center",
              itemsCentered && "justify-center"
            )}
          >
            <ProductCard {...item} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
