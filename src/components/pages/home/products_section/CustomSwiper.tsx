"use client";

import ProductSwiper from "@/components/swiper/ProductSwiper";
import { homeProductsSwiper } from "@/data";
import { Grid } from "swiper/modules";
import "swiper/css/grid";

export default function CustomSwiper() {
  return (
    <ProductSwiper
      swiperProps={{
        slidesPerView: 5,
        spaceBetween: 20,
        modules: [Grid],
        grid: { rows: 2, fill: "row" },
        style: {
          marginRight: "-70px",
        },
      }}
      data={homeProductsSwiper}
    />
  );
}
