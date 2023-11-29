import { ITextWithClassName } from "@/shared/types";
import { twMerge as tw } from "tailwind-merge";

export default function DefaultText({ text, className }: ITextWithClassName) {
  return <p className={tw("text-lg max-2xl:text-base", className)}>{text}</p>;
}
