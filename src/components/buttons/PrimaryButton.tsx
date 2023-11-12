import { IPrimaryButton } from "types";
import { poppinsMediumFont } from "fonts";
import { twMerge as tw } from "tailwind-merge";

export default function PrimaryButton({ children, className }: IPrimaryButton) {
  return (
    <button
      className={tw(
        `flex items-center justify-center py-4 px-12 rounded-sm bg-color-button-1 
      transition-colors duration-300 hover:bg-color-button-1-hover 
      text-color-text-1 capitalize text-lg`,
        poppinsMediumFont.className,
        className
      )}
    >
      {children}
    </button>
  );
}
