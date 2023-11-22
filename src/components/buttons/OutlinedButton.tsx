import { IPrimaryButton } from "types";
import SecondaryButton from "./SecondaryButton";
import { twMerge as tw } from "tailwind-merge";

export default function OutlinedButton({
  children,
  className,
  buttonProps,
}: IPrimaryButton) {
  return (
    <SecondaryButton
      className={tw(
        `bg-color-bg text-color-text-3 capitalize py-4 px-12 rounded-md
      hover:text-color-text-2 hover:border-color-text-2 hover:bg-color-bg`,
        className
      )}
      {...buttonProps}
    >
      {children}
    </SecondaryButton>
  );
}
