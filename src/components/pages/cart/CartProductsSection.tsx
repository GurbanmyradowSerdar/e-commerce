"use client";

import OutlinedButton from "@/components/buttons/OutlinedButton";
import CartCard from "@/components/cards/cart_card";
import DefaultText from "@/components/titles/DefaultText";
import { cartProductsState } from "@/shared/recoil_states/atoms";
import { ICartProductCard } from "@/shared/types";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function CartProductsSection() {
  const [cartProducts, setCartProducts] = useRecoilState(cartProductsState);
  const [array, setArray] = useState<ICartProductCard[]>([]);

  useEffect(() => {
    setArray(cartProducts);
  }, [cartProducts]);
  return (
    <section className="flex flex-col gap-8">
      {array.length > 0 ? (
        <>
          <div className="grid grid-cols-4 shadow-[0px_0px_10px_1px_rgba(25,25,25,0.1)] px-6 py-7 gap-3">
            <DefaultText
              text="Product"
              className="self-center place-self-center"
            />
            <DefaultText
              text="Price"
              className="self-center place-self-center"
            />
            <DefaultText
              text="Quantity"
              className="self-center place-self-center"
            />
            <DefaultText
              text="Subtotal"
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
                onClick: function () {
                  console.log("hello");
                },
              }}
            >
              return to shop
            </OutlinedButton>
            <OutlinedButton>update cart</OutlinedButton>
          </div>
        </>
      ) : (
        <DefaultText text="Nothing to show" className="text-center text-4xl" />
      )}
    </section>
  );
}
