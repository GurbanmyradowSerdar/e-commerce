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
import { useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function ProductCard({
  images,
  name,
  price,
  rating,
  ratingAmount,
  colors,
  discount,
  isFavorite,
  isNew,
}: IProductCard) {
  const [color, setColor] = useState(colors ? colors[0] : "");
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
      <div className="bg-color-secondary p-12 px-16 flex items-center justify-center relative">
        <Image
          alt={name}
          src={`/images/products/${images[0]}`}
          width={200}
          height={200}
          className="w-32 h-32 object-contain"
        />
        <PrimaryButton
          className="absolute bottom-0 w-full py-1 bg-color-bg-1 hover:bg-color-bg-1 group-hover:flex
        transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 rounded-tr-none rounded-tl-none"
        >
          add to cart
        </PrimaryButton>
        {isFavorite ? (
          <FilledHeartIcon className="w-10 h-10 absolute top-2 right-3 text-color-secondary-2 cursor-pointer bg-color-bg rounded-full p-2" />
        ) : (
          <HeartIcon className="w-10 h-10 absolute top-2 right-3 text-color-bg-1 cursor-pointer bg-color-bg rounded-full p-2" />
        )}

        <div className="absolute top-2 left-2 flex text-center gap-2">
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
        </div>
      </div>
      <div
        className={`${poppinsMediumFont.className} flex flex-col items-start gap-1`}
      >
        <p className="text-lg text-color-text-3 capitalize">{name}</p>
        <div
          className={tw(
            "flex items-center gap-3",
            discount ? "flex-col items-start gap-1" : ""
          )}
        >
          <div className="flex items-center gap-2">
            <p className="text-color-secondary-2 text-lg">
              ${discount ? `${price - (price / 100) * discount}` : price}
            </p>
            {discount ? (
              <p className="text-color-text-2 line-through text-lg">${price}</p>
            ) : null}
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">{rating.map(getStar)}</div>
            <p
              className={`${poppinsSemiBoldFont.className} text-color-text-2`}
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
