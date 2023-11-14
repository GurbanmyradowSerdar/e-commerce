import { IBannerContent } from "@/shared/types";
import BannerButton from "../buttons/BannerButton";
import { twMerge as tw } from "tailwind-merge";
import { poppinsSemiBoldFont } from "fonts";

export default function BannerContent({ description, title }: IBannerContent) {
  return (
    <div className="space-y-4">
      <div className="text-color-text-1 space-y-1">
        <p
          className={tw(
            "text-[26px] capitalize",
            poppinsSemiBoldFont.className
          )}
        >
          {title}
        </p>
        <p>{description}</p>
      </div>
      <BannerButton text="shop now" />
    </div>
  );
}
