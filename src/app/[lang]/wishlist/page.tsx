"use client";

import { useRecoilState } from "recoil";
import { twMerge as tw } from "tailwind-merge";
import { useState, useEffect } from "react";
import { favoriteProductsState } from "@/shared/recoil_states/atoms";
import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import { IProductCard } from "@/shared/types";
import ProductCard from "@/components/cards/product_card/ProductCard";
import SectionTitle from "@/components/titles/SectionTitle";
import { relatedProducts } from "@/data";

export default function page() {
  const [products, setProducts] = useRecoilState(favoriteProductsState);
  const [array, setArray] = useState<IProductCard[]>([]);

  useEffect(() => {
    setArray(products);
  }, [products]);

  return (
    <div
      className={tw(
        "space-y-20 mt-28",
        horizontalMarginLimit,
        bottomMarginSaving
      )}
    >
      <section className="flex flex-col gap-14">
        <div className="flex items-center justify-between">
          <h1 className="capitalize text-2xl">Wishlist ({array.length})</h1>
          <OutlinedButton>move all to bag</OutlinedButton>
        </div>
        <div className="grid grid-cols-5 auto-cols-auto gap-10">
          {array.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-14">
        <div className="flex items-center justify-between">
          <SectionTitle text="just for you" className="text-color-text-3" />
          <OutlinedButton>see all</OutlinedButton>
        </div>
        <div className="grid grid-cols-5 auto-cols-auto gap-10">
          {relatedProducts.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
