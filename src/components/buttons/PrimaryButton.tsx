import { IPrimaryButton } from "types";
import { poppinsMediumFont } from "fonts";
import { twMerge as tw } from "tailwind-merge";

export default function PrimaryButton({
  children,
  className,
  buttonProps,
}: IPrimaryButton) {
  return (
    <button
      className={tw(
        `flex items-center justify-center py-4 px-12 rounded-sm bg-color-button-1 
         transition-colors duration-300 ease-in-out hover:bg-color-button-1-hover 
       text-color-text-1 capitalize text-lg text-center
         max-3xl:px-8 max-3xl:py-3`,
        poppinsMediumFont.className,
        className
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
