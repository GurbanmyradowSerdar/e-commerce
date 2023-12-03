"use client";

import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import { favoriteProductsState } from "@/shared/recoil_states/atoms";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import { IDict, IProductCard } from "@/shared/types";
import ProductCard from "@/components/cards/product_card/ProductCard";
import SectionTitle from "@/components/titles/SectionTitle";
import { relatedProducts } from "@/data";

export default function WishListSection({ dict }: IDict) {
  const products = useRecoilValue(favoriteProductsState);
  const [array, setArray] = useState<IProductCard[]>([]);

  useEffect(() => {
    setArray(products);
  }, [products]);

  return (
    <>
      <section className="flex flex-col gap-14">
        <div className="flex items-center justify-between">
          <h1 className="capitalize text-2xl max-2xl:text-xl">
            {dict.pages.wishlist.wishlist} ({array.length})
          </h1>
          <OutlinedButton>{dict.pages.wishlist.moveAllBag}</OutlinedButton>
        </div>
        <div className="grid grid-cols-5 auto-cols-auto gap-10 max-2xl:grid-cols-4 max-2xl:gap-12">
          {array.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-14">
        <div className="flex items-center justify-between">
          <SectionTitle
            text={dict.pages.wishlist.forYou}
            className="text-color-text-3"
          />
          <OutlinedButton>{dict.pages.wishlist.seeAll}</OutlinedButton>
        </div>
        <div className="grid grid-cols-5 auto-cols-auto gap-10 max-2xl:grid-cols-4">
          {relatedProducts.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
