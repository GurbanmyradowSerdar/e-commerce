"use client";

import DefaultText from "@/components/titles/DefaultText";
import { cartProductsState } from "@/shared/recoil_states/atoms";
import { ICartProductCard } from "@/shared/types";
import {
  addNewItemToCart,
  decreaseAmount,
  editExistItemInCart,
  increaseAmount,
  removeItemFromCartViaIndex,
} from "@/shared/utils";
import Image from "next/image";
import { useEffect, useState, ChangeEvent } from "react";
import { RxCross2 as CrossIcon } from "react-icons/rx";
import { useRecoilState } from "recoil";
import {
  IoMdArrowDropdown as DownArrowIcon,
  IoMdArrowDropup as UpArrowIcon,
} from "react-icons/io";

export default function CartCard(props: ICartProductCard) {
  const { images, name, price, discount, isFavorite } = props;
  const [amount, setAmount] = useState(props.amount);
  const [cartProducts, setCartProducts] = useRecoilState(cartProductsState);

  useEffect(() => {
    let tempArr = cartProducts.filter((item) => item.name === name);
    if (tempArr.length > 0) {
      setAmount(tempArr[0].amount);
    }
  }, [cartProducts]);

  useEffect(() => {
    let itemIndex = cartProducts.findIndex((value) => value.name === name);

    if (itemIndex !== -1) {
      if (amount > 0) {
        setCartProducts(
          editExistItemInCart({
            amount,
            cartProducts,
            isFavorite,
            itemIndex,
            props,
          })
        );
      } else {
        setCartProducts(
          removeItemFromCartViaIndex({ cartProducts, itemIndex })
        );
      }
    } else {
      if (amount > 0) {
        setCartProducts(
          addNewItemToCart({ amount, cartProducts, isFavorite, props })
        );
      }
    }
  }, [amount]);

  function discountCkecing() {
    if (discount) {
      return price * (discount / 100);
    } else {
      return price;
    }
  }

  return (
    <div
      className="grid grid-cols-4 shadow-[0px_0px_20px_1px_rgba(25,25,25,0.1)] px-6 py-7 content-center place-content-center gap-3
    max-2xl:py-5 max-2xl:px-4"
    >
      <div className="flex items-center gap-5 pl-10">
        <div className="relative">
          <Image
            alt={name}
            src={`/images/products/${images[0]}`}
            width={100}
            height={100}
            className="w-16 object-contain max-2xl:w-14"
          />
          <div
            className="absolute -top-2 -left-2 z-10 bg-color-button-1 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer
            hover:bg-color-button-1-hover duration-300 transition-colors ease-in-out
            max-2xl:w-5 max-2xl:h-5"
            onClick={() => setAmount(0)}
          >
            <CrossIcon className="text-color-text-1 w-5 h-5" />
          </div>
        </div>
        <DefaultText text={name} />
      </div>
      <>
        {discount ? (
          <div className="flex flex-col items-center justify-center">
            <DefaultText
              text={`$${price * (discount / 100)}`}
              className="text-color-secondary-2"
            />
            <DefaultText
              text={`$${price}`}
              className="line-through text-color-text-2"
            />
          </div>
        ) : (
          <DefaultText
            text={`$${discountCkecing()}`}
            className="text-center self-center"
          />
        )}
      </>
      <div className="text-center flex items-center justify-center gap-2">
        <p className="text-base max-2xl:text-sm">{amount}</p>
        <div className="flex flex-col">
          <UpArrowIcon
            onClick={() => setAmount(increaseAmount(amount))}
            className="cursor-pointer hover:bg-gray-200 rounded-sm w-5 h-5 max-2xl:w-4 max-2xl:h-4"
          />
          <DownArrowIcon
            onClick={() => setAmount(decreaseAmount(amount))}
            className="cursor-pointer hover:bg-gray-200 rounded-sm w-5 h-5 max-2xl:w-4 max-2xl:h-4"
          />
        </div>
      </div>
      <div className="remove-tap-highlight selection:bg-transparent text-center self-center">
        <DefaultText text={`$${discountCkecing() * amount}`} />
      </div>
    </div>
  );
}
