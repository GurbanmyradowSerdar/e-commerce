import { IPrimaryButton } from "types";
import PrimaryButton from "./PrimaryButton";
import { twMerge as tw } from "tailwind-merge";

export default function SecondaryButton({
  children,
  className,
}: IPrimaryButton) {
  return (
    <PrimaryButton
      className={tw(
        `bg-color-bg text-color-text-3 border-2 
      border-color-divider py-2 px-3 rounded-md uppercase 
      hover:text-color-text-1 hover:bg-color-button-1 
      hover:border-color-button-1`,
        className
      )}
    >
      {children}
    </PrimaryButton>
  );
}
