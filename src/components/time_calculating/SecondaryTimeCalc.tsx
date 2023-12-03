"use client";

import { TTime } from "types";
import { calculateTimeLeft } from "@/shared/utils";
import { useEffect, useState } from "react";
import { poppinsSemiBoldFont } from "fonts";
import { twMerge as tw } from "tailwind-merge";

export default function SecondaryTimeCalc({
  date,
  dict,
}: {
  date: Date;
  dict: any;
}) {
  const [time, setTime] = useState<TTime>();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft(date));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return time ? (
    <div className="flex items-center gap-5">
      <div
        className="flex flex-col bg-color-bg items-center justify-center w-[80px] h-[80px] rounded-full -space-y-2
      max-2xl:w-[75px] max-2xl:h-[75px]"
      >
        <p
          className={tw(
            "text-lg max-2xl:text-base",
            poppinsSemiBoldFont.className
          )}
        >
          {time.days}
        </p>
        <p className="capitalize">{dict.pages.index.banner.days}</p>
      </div>
      <div
        className="flex flex-col bg-color-bg items-center justify-center w-[80px] h-[80px] rounded-full -space-y-2
      max-2xl:w-[75px] max-2xl:h-[75px]"
      >
        <p
          className={tw(
            "text-lg max-2xl:text-base",
            poppinsSemiBoldFont.className
          )}
        >
          {time.hours}
        </p>
        <p className="capitalize">{dict.pages.index.banner.hours}</p>
      </div>
      <div
        className="flex flex-col bg-color-bg items-center justify-center w-[80px] h-[80px] rounded-full -space-y-2
      max-2xl:w-[75px] max-2xl:h-[75px]"
      >
        <p
          className={tw(
            "text-lg max-2xl:text-base",
            poppinsSemiBoldFont.className
          )}
        >
          {time.minutes}
        </p>
        <p className="capitalize">{dict.pages.index.banner.minutes}</p>
      </div>
      <div
        className="flex flex-col bg-color-bg items-center justify-center w-[80px] h-[80px] rounded-full -space-y-2
      max-2xl:w-[75px] max-2xl:h-[75px]"
      >
        <p
          className={tw(
            "text-lg max-2xl:text-base",
            poppinsSemiBoldFont.className
          )}
        >
          {time.seconds}
        </p>
        <p className="capitalize">{dict.pages.index.banner.seconds}</p>
      </div>
    </div>
  ) : null;
}
