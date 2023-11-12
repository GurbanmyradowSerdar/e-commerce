"use client";

import { INavigationTrain } from "types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { twMerge as tw } from "tailwind-merge";
import { horizontalMarginLimit } from "@/shared/constants";
import PlainLink from "./PlainLink";
import LastLink from "./LastLink";

export default function NavigationTrain({ isNotFound }: INavigationTrain) {
  const pathname = usePathname();
  let pathArray = pathname
    .split("/")
    .filter((item) => item !== "en" && item !== "tm" && item !== "ru");

  return (
    <div className={tw("absolute top-14 left-0", horizontalMarginLimit)}>
      <div className="flex items-center gap-3 text-color-text-2">
        {isNotFound ? (
          <>
            <Link
              href={"/en"}
              className="duration-300 transition-colors hover:text-color-text-2-hover"
            >
              Home
            </Link>
            <span className="italic">/</span>
            <span className="text-color-text-3">404 Error</span>
          </>
        ) : (
          pathArray.map((item, i) =>
            pathArray.length - 1 !== i ? (
              <PlainLink t={item} key={i} />
            ) : (
              <LastLink t={item} key={i} />
            )
          )
        )}
      </div>
    </div>
  );
}
