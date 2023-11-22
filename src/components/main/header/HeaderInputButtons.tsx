"use client";

import { PiHeart as HeartIcon } from "react-icons/pi";
import { GrCart as CartIcon } from "react-icons/gr";
import { FiSearch as SearchIcon } from "react-icons/fi";
import { useRecoilValue } from "recoil";
import {
  cartProductsState,
  favoriteProductsState,
} from "@/shared/recoil_states/atoms";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeaderInputButtons() {
  const amountOfFavorites = useRecoilValue(favoriteProductsState);
  const [amount, setAmount] = useState(0);
  const amountOfCart = useRecoilValue(cartProductsState);
  const [amountCart, setAmountCart] = useState(0);

  useEffect(() => {
    setAmount(amountOfFavorites.length);
  }, [amountOfFavorites]);

  useEffect(() => {
    setAmountCart(
      amountOfCart.reduce((prev, current) => prev + current.amount, 0)
    );
  }, [amountOfCart]);

  return (
    <>
      <div className="flex items-center bg-color-secondary px-6 py-3 gap-4">
        <input
          type="text"
          placeholder="What are you looking for? "
          className="text-sm placeholder:text-color-text-2 bg-transparent outline-none"
        />
        <SearchIcon className="w-7 h-7 cursor-pointer" />
      </div>
      <Link href={"/en/wishlist"} className="relative cursor-pointer">
        {amount > 0 && <AmountOfItems text={amount.toString()} />}
        <HeartIcon className="w-8 h-8" />
      </Link>
      <Link href={"/en/cart"} className="relative cursor-pointer">
        {amountCart > 0 && (
          <AmountOfItems
            text={amountCart > 99 ? `${amountCart}+` : amountCart.toString()}
          />
        )}
        <CartIcon className="w-7 h-7" />
      </Link>
    </>
  );
}

function AmountOfItems({ text }: { text: string }) {
  return (
    <p
      className="text-sm text-color-text-1 bg-color-secondary-2 rounded-full absolute -top-3 -right-3 w-6 h-6
    flex items-center justify-center"
    >
      {text}
    </p>
  );
}
