"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import DefaultText from "@/components/titles/DefaultText";
import {
  cartProductsState,
  checkoutProductsState,
  deliveryPriceState,
  subTotalPriceState,
} from "@/shared/recoil_states/atoms";
import { IDict, ILangPropsToComponent, TPrice } from "@/shared/types";
import { poppinsMediumFont } from "fonts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { twMerge as tw } from "tailwind-merge";

export default function CartTotalSection({
  dict,
  lang,
}: IDict & ILangPropsToComponent) {
  const subTotal = useRecoilValue(subTotalPriceState);
  const deliveryPrice = useRecoilValue(deliveryPriceState);
  const cartProducts = useRecoilValue(cartProductsState);
  const setCheckoutProducts = useSetRecoilState(checkoutProductsState);
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

  function handleClick() {
    setCheckoutProducts(
      cartProducts.map((item) => {
        const { images, name, price, discount, amount } = item;
        let calculatedPrice = 0;
        if (discount) {
          calculatedPrice = amount * (price * (discount / 100));
        } else {
          calculatedPrice = amount * price;
        }
        return { image: images[0], name, price: calculatedPrice };
      })
    );
  }

  return (
    <section className="flex justify-between items-start">
      <div className="flex items-center gap-6">
        <input
          type="text"
          placeholder={dict.pages.cart.buttons.applyPlaceholder}
          className="p-4 w-80 rounded-sm border-color-bg-1 border duration-300 transition-colors focus-within:outline-color-bg-1 text-base
          max-3xl:p-3 max-2xl:text-sm"
        />
        <PrimaryButton>{dict.pages.cart.buttons.apply}</PrimaryButton>
      </div>
      <div
        className="flex flex-col px-10 py-12 rounded-sm border-2 border-color-bg-1 w-[550px] gap-7
      max-3xl:py-10 max-2xl:w-[440px] max-2xl:gap-5 max-2xl:border"
      >
        <h3
          className={tw(
            "text-2xl max-2xl:text-xl",
            poppinsMediumFont.className
          )}
        >
          {dict.pages.cart.cartTotal.title}
        </h3>
        <div className="space-y-5">
          <div className="flex items-center justify-between border-b border-color-divider pb-2">
            <DefaultText text={dict.pages.cart.cartTotal.subtotal} />
            <DefaultText text={`$${price.subTotal}`} />
          </div>
          <div className="flex items-center justify-between border-b border-color-divider pb-2">
            <DefaultText text={dict.pages.cart.cartTotal.shipping} />
            <DefaultText
              text={`${
                price.deliveryPrice === 0 ? "Free" : `$${price.deliveryPrice}`
              }`}
            />
          </div>
          <div className="flex items-center justify-between pb-2">
            <DefaultText text={dict.pages.cart.cartTotal.total} />
            <DefaultText text={`$${price.total}`} />
          </div>
        </div>
        <Link
          href={`/${lang}/cart/check-out`}
          className="self-center"
          onClick={handleClick}
        >
          <PrimaryButton>{dict.pages.cart.buttons.process}</PrimaryButton>
        </Link>
      </div>
    </section>
  );
}
