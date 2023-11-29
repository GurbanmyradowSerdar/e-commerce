"use client";

import { FaArrowUp as ArrowIcon } from "react-icons/fa";
import { IArrowButton } from "types";
import { twMerge as tw } from "tailwind-merge";

export default function ArrowButton({
  direction,
  className,
  isScrolling,
}: IArrowButton) {
  function applyDirectionToArrow(): string {
    switch (direction) {
      case "up":
        return "";
      case "left":
        return "-rotate-90";
      case "right":
        return "rotate-90";
    }
  }

  function detectClick() {
    if (isScrolling) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    } else {
    }
  }

  return (
    <button
      onClick={() => {
        detectClick();
      }}
      className={tw(
        "bg-color-secondary rounded-full duration-300 ease-in-out transition-colors hover:bg-color-secondary-hover",
        className
      )}
    >
      <ArrowIcon
        className={tw(
          "m-3 w-5 h-5 max-2xl:w-4 max-2xl:h-4",
          applyDirectionToArrow()
        )}
      />
    </button>
  );
}
