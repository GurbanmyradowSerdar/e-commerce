"use client";

import { IProductCard } from "types";
import Image from "next/image";
import {
  PiHeart as HeartIcon,
  PiHeartFill as FilledHeartIcon,
} from "react-icons/pi";
import { poppinsMediumFont, poppinsSemiBoldFont } from "fonts";
import RatingStar from "./RatingStar";
import EmptyStar from "./EmptyStar";
import SemiStar from "./SemiStar";
import { useState, useEffect } from "react";
import { twMerge as tw } from "tailwind-merge";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { useRecoilState } from "recoil";
import {
  cartProductsState,
  favoriteProductsState,
} from "@/shared/recoil_states/atoms";
import {
  addNewItemToCart,
  decreaseAmount,
  editExistItemInCart,
  increaseAmount,
  removeItemFromCartViaIndex,
} from "@/shared/utils";

export default function ProductCard(props: IProductCard) {
  const { images, name, price, rating, ratingAmount, colors, discount, isNew } =
    props;
  const [color, setColor] = useState(colors ? colors[0] : "");
  const [favoriteProducts, setFavoriteProducts] = useRecoilState(
    favoriteProductsState
  );
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [amount, setAmount] = useState(0);
  const [cartProducts, setCartProducts] = useRecoilState(cartProductsState);

  useEffect(() => {
    favoriteProducts.length > 0 &&
      setIsFavorite(favoriteProducts.some((item) => item.name === name));
  }, [favoriteProducts]);

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

  function handleFavoriteClick() {
    let index =
      favoriteProducts.length > 0
        ? favoriteProducts.findIndex((item) => item.name === name)
        : -1;

    if (index !== -1) {
      setFavoriteProducts((prev) => {
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      });
      setIsFavorite(false);
    } else {
      setFavoriteProducts((prev) => {
        return [...prev, { ...props, isFavorite }];
      });
      setIsFavorite(true);
    }
  }

  function getStar(item: number, i: number) {
    if (item === 1) {
      return <RatingStar key={i} />;
    } else if (item === 0) {
      return <EmptyStar key={i} />;
    } else {
      return <SemiStar key={i} />;
    }
  }

  return (
    <div className="flex flex-col items-start gap-3 group">
      <div className="bg-color-secondary p-12 px-10 flex items-center justify-center relative">
        <Image
          alt={name}
          src={`/images/products/${images[0]}`}
          width={200}
          height={200}
          className="w-36 h-36 object-contain max-2xl:w-28 max-2xl:h-28"
        />

        <>
          {amount !== 0 ? (
            <div
              className="absolute bottom-0 w-full py-2 bg-color-bg-1 hover:bg-color-bg-1 
            transition-all duration-300 ease-in-out rounded-tr-none 
            rounded-tl-none flex items-center justify-between rounded-sm text-color-text-1 px-4 text-xl
            max-2xl:text-base max-2xl:py-1 max-2xl:px-2
          "
            >
              <button
                onClick={() => setAmount(decreaseAmount(amount))}
                className="px-2 duration-300 transition-colors hover:bg-color-primary-1 text-center rounded-sm"
              >
                -
              </button>
              <p>{amount}</p>
              <button
                onClick={() => setAmount(increaseAmount(amount))}
                className="px-2 duration-300 transition-colors hover:bg-color-primary-1 text-center rounded-sm"
              >
                +
              </button>
            </div>
          ) : (
            <PrimaryButton
              buttonProps={{
                onClick: () => setAmount(increaseAmount(amount)),
              }}
              className="absolute bottom-0 w-full py-2 bg-color-bg-1 hover:bg-color-bg-1 group-hover:flex
              transition-all duration-300 ease-in-out rounded-tr-none rounded-tl-none
              max-2xl:text-base max-2xl:py-1 max-2xl:px-2"
            >
              add to cart
            </PrimaryButton>
          )}
        </>

        <>
          <div
            onClick={handleFavoriteClick}
            className="w-10 h-10 absolute top-2 right-3 cursor-pointer bg-color-bg rounded-full flex items-center justify-center"
          >
            <>
              {isFavorite ? (
                <FilledHeartIcon className="text-color-secondary-2 w-5 h-5" />
              ) : (
                <HeartIcon className="text-color-bg-1 w-5 h-5" />
              )}
            </>
          </div>
          <div className="absolute top-2 left-2 flex text-center gap-2">
            <>
              {isNew ? (
                <p className="uppercase text-color-text-1 rounded-md px-2 py-1 bg-color-button text-sm">
                  new
                </p>
              ) : null}
              {discount ? (
                <p className="uppercase text-color-text-1 rounded-md px-2 py-1 bg-color-button-1 text-sm">
                  -{discount}%
                </p>
              ) : null}
            </>
          </div>
        </>
      </div>
      <div
        className={`${poppinsMediumFont.className} flex flex-col items-start gap-1`}
      >
        <p className="text-lg text-color-text-3 capitalize max-2xl:text-base">
          {name}
        </p>
        <div
          className={tw(
            "flex items-center gap-3",
            discount ? "flex-col items-start gap-1" : ""
          )}
        >
          <div className="flex items-center gap-2">
            <p className="text-color-secondary-2 text-lg max-2xl:text-base">
              ${discount ? `${price - (price / 100) * discount}` : price}
            </p>
            {discount ? (
              <p className="text-color-text-2 line-through text-lg max-2xl:text-base">
                ${price}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">{rating.map(getStar)}</div>
            <p
              className={`${poppinsSemiBoldFont.className} text-color-text-2 text-base max-2xl:text-sm`}
            >{`(${ratingAmount})`}</p>
          </div>
        </div>

        {colors ? (
          <div className="flex items-center gap-2 mt-3">
            {colors.map((item, i) => {
              return (
                <div
                  className={tw(
                    "w-5 h-5 border-2 border-color-bg rounded-full cursor-pointer",
                    color === item ? "outline outline-2 outline-color-bg-1" : ""
                  )}
                  style={{ backgroundColor: item }}
                  key={i}
                  onClick={() => setColor(item)}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
