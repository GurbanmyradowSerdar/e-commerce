import { FaArrowUp as ArrowIcon } from "react-icons/fa";
import { IArrowButton } from "types";
import { twMerge as tw } from "tailwind-merge";

export default function TopArrowButton({ direction }: IArrowButton) {
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

  return (
    <button className="bg-color-secondary rounded-full duration-300 ease-in-out transition-colors hover:bg-color-secondary-hover">
      <ArrowIcon className={tw("m-3 w-5 h-5", applyDirectionToArrow())} />
    </button>
  );
}
