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
      <div className="flex gap-1 flex-col items-center">
        <p
          className={tw(
            "capitalize text-sm max-2xl:text-xs",
            poppinsMediumFont.className
          )}
        >
          days
        </p>
        <p className={tw("text-4xl max-2xl:text-2xl", interBoldFont.className)}>
          {time.days}
        </p>
      </div>
      <p
        className={tw(
          "text-color-secondary-2 self-end text-4xl max-2xl:text-2xl",
          interBoldFont.className
        )}
      >
        :
      </p>
      <div className="flex flex-col items-center gap-1">
        <p
          className={tw(
            "capitalize text-sm max-2xl:text-xs",
            poppinsMediumFont.className
          )}
        >
          hours
        </p>
        <p className={tw("text-4xl max-2xl:text-2xl", interBoldFont.className)}>
          {time.hours}
        </p>
      </div>
      <p
        className={tw(
          "text-color-secondary-2 self-end text-4xl max-2xl:text-2xl",
          interBoldFont.className
        )}
      >
        :
      </p>
      <div className="flex flex-col items-center gap-1">
        <p
          className={tw(
            "capitalize text-sm max-2xl:text-xs",
            poppinsMediumFont.className
          )}
        >
          minutes
        </p>
        <p className={tw("text-4xl max-2xl:text-2xl", interBoldFont.className)}>
          {time.minutes}
        </p>
      </div>
      <p
        className={tw(
          "text-color-secondary-2 self-end text-4xl max-2xl:text-2xl",
          interBoldFont.className
        )}
      >
        :
      </p>
      <div className="flex flex-col items-center gap-1 ">
        <p
          className={tw(
            "capitalize text-sm max-2xl:text-xs",
            poppinsMediumFont.className
          )}
        >
          seconds
        </p>
        <p className={tw("text-4xl max-2xl:text-2xl", interBoldFont.className)}>
          {time.seconds}
        </p>
      </div>
    </div>
  ) : null;
}
