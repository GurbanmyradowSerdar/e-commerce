"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { IProductSwiper } from "types";
import ProductCard from "../cards/product_card/ProductCard";

export default function ProductSwiper({ data, swiperProps }: IProductSwiper) {
  return (
    <Swiper {...swiperProps}>
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="flex items-center">
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
