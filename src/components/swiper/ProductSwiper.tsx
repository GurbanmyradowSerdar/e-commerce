"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import { IProductSwiper } from "types";
import ProductCard from "../cards/product_card/ProductCard";
import { twMerge as tw } from "tailwind-merge";
import "swiper/css";

export default function ProductSwiper({
  data,
  swiperProps,
  itemsCentered,
}: IProductSwiper) {
  return (
    <Swiper {...swiperProps} className="cursor-grab">
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <div
            className={tw(
              "flex items-center p-1",
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
