"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import DefaultText from "@/components/titles/DefaultText";
import {
  deliveryPriceState,
  subTotalPriceState,
} from "@/shared/recoil_states/atoms";
import { poppinsMediumFont } from "fonts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { twMerge as tw } from "tailwind-merge";

export type TPrice = {
  subTotal: number;
  deliveryPrice: number;
  total: number;
};

export default function CartTotalSection() {
  const subTotal = useRecoilValue(subTotalPriceState);
  const deliveryPrice = useRecoilValue(deliveryPriceState);
  const [price, setPrice] = useState<TPrice>({
    deliveryPrice: 0,
    subTotal: 0,
    total: 0,
  });

  useEffect(() => {
    setPrice({
      deliveryPrice,
      subTotal,
      total: subTotal + deliveryPrice,
    });
  }, [subTotal, deliveryPrice]);

  return (
    <section className="flex justify-between items-start">
      <div className="flex items-center gap-6">
        <input
          type="text"
          placeholder="Coupon Code"
          className="p-4 w-80 rounded-sm border-color-bg-1 border duration-300 transition-colors focus-within:outline-color-bg-1"
        />
        <PrimaryButton>apply coupon</PrimaryButton>
      </div>
      <div className="flex flex-col px-10 py-12 rounded-sm border-2 border-color-bg-1 w-[550px] gap-7">
        <h3 className={tw("text-2xl", poppinsMediumFont.className)}>
          Cart Total
        </h3>
        <div className="space-y-5">
          <div className="flex items-center justify-between border-b border-color-divider pb-2">
            <DefaultText text="Subtotal:" />
            <DefaultText text={`$${price.subTotal}`} />
          </div>
          <div className="flex items-center justify-between border-b border-color-divider pb-2">
            <DefaultText text="Shipping:" />
            <DefaultText
              text={`${
                price.deliveryPrice === 0 ? "Free" : `$${price.deliveryPrice}`
              }`}
            />
          </div>
          <div className="flex items-center justify-between pb-2">
            <DefaultText text="Total:" />
            <DefaultText text={`$${price.total}`} />
          </div>
        </div>
        <Link href={"/en/cart/check-out"} className="self-center">
          <PrimaryButton>procees to checkout</PrimaryButton>
        </Link>
      </div>
    </section>
  );
}
