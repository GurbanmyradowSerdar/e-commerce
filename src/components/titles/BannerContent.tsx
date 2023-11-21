import { IBannerContent } from "types";
import BannerButton from "../buttons/BannerButton";
import { twMerge as tw } from "tailwind-merge";
import { poppinsSemiBoldFont } from "fonts";

export default function BannerContent({
  description,
  title,
  className,
}: IBannerContent) {
  return (
    <div className={tw("space-y-4", className)}>
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
