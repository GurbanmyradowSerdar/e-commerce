import { IBannerContent } from "types";
import BannerButton from "../buttons/BannerButton";
import { twMerge as tw } from "tailwind-merge";
import { poppinsSemiBoldFont } from "fonts";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";

export default async function BannerContent({
  description,
  title,
  className,
}: IBannerContent) {
  const locale = getLocaleInServer(headers);
  return (
    <div className={tw("space-y-4", className)}>
      <div className="text-color-text-1 space-y-1">
        <p
          className={tw(
            "text-[26px] capitalize max-2xl:text-2xl",
            poppinsSemiBoldFont.className
          )}
        >
          {title}
        </p>
        <p className="text-base max-2xl:text-sm">{description}</p>
      </div>
      <BannerButton
        text={
          locale === "en"
            ? "shop now"
            : locale === "ru"
            ? "Купить сейчас"
            : "Satyn almak"
        }
      />
    </div>
  );
}
