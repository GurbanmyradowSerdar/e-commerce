import { IMainDivider } from "types";
import { twMerge as tw } from "tailwind-merge";

export default function MainDivider({ dir, className }: IMainDivider) {
  return dir === "horizontal" ? (
    <div className={tw("bg-color-divider h-px min-w-full", className)} />
  ) : (
    <div className={tw("bg-color-divider w-px min-h-full", className)} />
  );
}
