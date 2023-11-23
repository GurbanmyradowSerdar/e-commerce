"use client";

import NavigationTrain from "@/components/navigation_train";
import DefaultText from "@/components/titles/DefaultText";
import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import { twMerge as tw } from "tailwind-merge";
import { useState } from "react";
import { TPrice } from "@/components/pages/cart/CartTotalSection";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { interMediumFont } from "fonts";

export default function page() {
  // const [price, setPrice] = useState<TPrice>({
  //   deliveryPrice: 0,
  //   subTotal: 0,
  //   total: 0,
  // });
  return (
    <div
      className={tw(
        "",
        topMarginSaving,
        bottomMarginSaving,
        horizontalMarginLimit
      )}
    >
      <NavigationTrain />
      {/* <div className="flex items-center gap-6">
        <input
          type="text"
          placeholder="Coupon Code"
          className="p-4 w-80 rounded-sm border-color-bg-1 border duration-300 transition-colors focus-within:outline-color-bg-1"
        />
        <PrimaryButton>apply coupon</PrimaryButton>
      </div> */}
      {/* <div className="space-y-5">
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
      </div> */}
      {/* <h1 className={`${interMediumFont.className} text-[40px]`}>
        Billing Details
      </h1> */}
    </div>
  );
}
