"use client";

import { TTime } from "types";
import { calculateTimeLeft } from "@/shared/utils";
import { useEffect, useState } from "react";
import { poppinsSemiBoldFont } from "fonts";
import { twMerge as tw } from "tailwind-merge";

export default function SecondaryTimeCalc({ date }: { date: Date }) {
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
      <div className="flex flex-col bg-color-bg items-center justify-center w-[80px] h-[80px] rounded-full -space-y-2">
        <p className={tw("text-lg", poppinsSemiBoldFont.className)}>
          {time.days}
        </p>
        <p className="capitalize">days</p>
      </div>
      <div className="flex flex-col bg-color-bg items-center justify-center w-[80px] h-[80px] rounded-full -space-y-2">
        <p className={tw("text-lg", poppinsSemiBoldFont.className)}>
          {time.hours}
        </p>
        <p className="capitalize">hours</p>
      </div>
      <div className="flex flex-col bg-color-bg items-center justify-center w-[80px] h-[80px] rounded-full -space-y-2">
        <p className={tw("text-lg", poppinsSemiBoldFont.className)}>
          {time.minutes}
        </p>
        <p className="capitalize">minutes</p>
      </div>
      <div className="flex flex-col bg-color-bg items-center justify-center w-[80px] h-[80px] rounded-full -space-y-2">
        <p className={tw("text-lg", poppinsSemiBoldFont.className)}>
          {time.seconds}
        </p>
        <p className="capitalize">seconds</p>
      </div>
    </div>
  ) : null;
}
