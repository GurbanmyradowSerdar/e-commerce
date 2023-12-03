"use client";

import OutlinedButton from "@/components/buttons/OutlinedButton";
import CartCard from "@/components/cards/cart_card";
import DefaultText from "@/components/titles/DefaultText";
import {
  cartProductsState,
  deliveryPriceState,
  subTotalPriceState,
} from "@/shared/recoil_states/atoms";
import { ICartProductCard, IDict } from "@/shared/types";
import { calculateDeliveryPrice, calculateSubtotal } from "@/shared/utils";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function CartProductsSection({ dict }: IDict) {
  const cartProducts = useRecoilValue(cartProductsState);
  const [array, setArray] = useState<ICartProductCard[]>([]);
  const setSubTotal = useSetRecoilState(subTotalPriceState);
  const setDeliveryPrice = useSetRecoilState(deliveryPriceState);

  useEffect(() => {
    // ! update cost while changing the amount of items
    setSubTotal((prev) => calculateSubtotal(cartProducts, prev));
    setDeliveryPrice((prev) => calculateDeliveryPrice(cartProducts, prev));
    setArray(cartProducts);
  }, [cartProducts]);

  return (
    <section className="flex flex-col gap-8">
      {array.length > 0 ? (
        <>
          <div
            className="grid grid-cols-4 shadow-[0px_0px_10px_1px_rgba(25,25,25,0.1)] px-6 py-7 gap-3
          max-2xl:py-5 max-2xl:px-4"
          >
            <DefaultText
              text={dict.pages.cart.topLevelTexts.product}
              className="self-center place-self-center"
            />
            <DefaultText
              text={dict.pages.cart.topLevelTexts.price}
              className="self-center place-self-center"
            />
            <DefaultText
              text={dict.pages.cart.topLevelTexts.quantity}
              className="self-center place-self-center"
            />
            <DefaultText
              text={dict.pages.cart.topLevelTexts.subtotal}
              className="self-center place-self-center"
            />
          </div>
          <div className="flex flex-col gap-8">
            {array.map((item, i) => (
              <CartCard key={i} {...item} />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <OutlinedButton
              buttonProps={{
                onClick: () => console.log("hello"),
              }}
            >
              {dict.pages.cart.buttons.return}
            </OutlinedButton>
            <OutlinedButton> {dict.pages.cart.buttons.update}</OutlinedButton>
          </div>
        </>
      ) : (
        <DefaultText text="Nothing to show" className="text-center text-4xl" />
      )}
    </section>
  );
}
