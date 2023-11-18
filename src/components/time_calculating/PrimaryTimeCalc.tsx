"use client";

import { TTime } from "types";
import { calculateTimeLeft } from "@/shared/utils";
import { useEffect, useState } from "react";
import { interBoldFont, poppinsMediumFont } from "fonts";
import { twMerge as tw } from "tailwind-merge";

export default function PrimaryTimeCalc({ date }: { date: Date }) {
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
    <div className="flex items-center gap-3 text-color-text-3 mb-3">
      <div className="flex gap-1">
        <div className="flex flex-col">
          <p className={tw("capitalize text-sm", poppinsMediumFont.className)}>
            days
          </p>
          <p className={tw("text-4xl", interBoldFont.className)}>{time.days}</p>
        </div>
      </div>
      <p
        className={tw(
          "text-color-secondary-2 self-end text-4xl",
          interBoldFont.className
        )}
      >
        :
      </p>
      <div className="flex gap-1">
        <div className="flex flex-col">
          <p className={tw("capitalize text-sm", poppinsMediumFont.className)}>
            hours
          </p>
          <p className={tw("text-4xl", interBoldFont.className)}>
            {time.hours}
          </p>
        </div>
      </div>
      <p
        className={tw(
          "text-color-secondary-2 self-end text-4xl",
          interBoldFont.className
        )}
      >
        :
      </p>
      <div className="flex gap-1">
        <div className="flex flex-col">
          <p className={tw("capitalize text-sm", poppinsMediumFont.className)}>
            minutes
          </p>
          <p className={tw("text-4xl", interBoldFont.className)}>
            {time.minutes}
          </p>
        </div>
      </div>
      <p
        className={tw(
          "text-color-secondary-2 self-end text-4xl",
          interBoldFont.className
        )}
      >
        :
      </p>
      <div className="flex gap-1">
        <div className="flex flex-col">
          <p className={tw("capitalize text-sm", poppinsMediumFont.className)}>
            seconds
          </p>
          <p className={tw("text-4xl", interBoldFont.className)}>
            {time.seconds}
          </p>
        </div>
      </div>
    </div>
  ) : null;
}
