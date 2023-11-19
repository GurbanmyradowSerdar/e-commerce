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
            <ProductCard
              images={item.images}
              name={item.name}
              price={item.price}
              rating={item.rating}
              ratingAmount={item.ratingAmount}
              colors={item.colors}
              discount={item.discount}
              isFavorite={item.isFavorite}
              isNew={item.isNew}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
