import { IBannerButton } from "types";
import { AiOutlineArrowRight as ArrowIcon } from "react-icons/ai";
import { twMerge as tw } from "tailwind-merge";
import { poppinsMediumFont } from "fonts";

export default function BannerButton({ text }: IBannerButton) {
  return (
    <button
      className={tw(
        `flex items-center gap-4 text-color-text-1 bg-transparent group`,
        poppinsMediumFont.className
      )}
    >
      <p className="underline capitalize underline-offset-[10px] text-lg">
        {text}
      </p>
      <ArrowIcon className="w-6 h-6 opacity-0 -translate-x-4 duration-300 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
    </button>
  );
}
