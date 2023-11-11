"use client";
import { IProductCard } from "@/shared/types";
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

export default function ProductCard(props: IProductCard) {
  const [color, setColor] = useState(props.colors ? props.colors[0] : "");
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
    <div className="flex flex-col items-start gap-5">
      <div className="bg-color-secondary p-10 px-14 flex items-center justify-center relative">
        <Image
          alt={props.name}
          src={`/images/products/${props.images[0]}`}
          width={100}
          height={100}
          className="w-32 h-32 object-contain"
        />
        {props.isFavorite ? (
          <FilledHeartIcon className="w-10 h-10 absolute top-2 right-3 text-color-secondary-2 cursor-pointer bg-color-bg rounded-full p-2" />
        ) : (
          <HeartIcon className="w-10 h-10 absolute top-2 right-3 text-color-bg-1 cursor-pointer bg-color-bg rounded-full p-2" />
        )}
        {props.isNew ? (
          <p className="uppercase text-color-text-1 rounded-md px-3 py-2 bg-color-button absolute top-2 left-2 text-sm">
            new
          </p>
        ) : null}
      </div>
      <div
        className={`${poppinsMediumFont.className} flex flex-col items-start gap-2`}
      >
        <p className="text-lg text-color-text-3 capitalize">{props.name}</p>
        <div className="flex items-center gap-3">
          <p className="text-color-secondary-2 text-lg">${props.price}</p>
          <div className="flex items-center gap-1">
            {props.rating.map(getStar)}
          </div>
          <p
            className={`${poppinsSemiBoldFont.className} text-color-text-2`}
          >{`(${props.ratingAmount})`}</p>
        </div>
        {props.colors ? (
          <div className="flex items-center gap-1">
            {props.colors.map((item, i) => {
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
