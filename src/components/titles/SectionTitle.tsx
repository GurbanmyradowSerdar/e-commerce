import { twMerge as tw } from "tailwind-merge";
import { poppinsSemiBoldFont } from "fonts";
import { ISectionTitleWithQuadrant } from "@/shared/types";

export default function SectionTitle({
  text,
  className,
  withoutQuadrant,
}: ISectionTitleWithQuadrant) {
  return withoutQuadrant ? (
    <h2
      className={tw(
        "text-lg text-color-secondary-2 capitalize",
        poppinsSemiBoldFont.className,
        className
      )}
    >
      {text}
    </h2>
  ) : (
    <div
      className={tw(
        "flex items-center gap-3 text-color-secondary-2",
        className
      )}
    >
      <div className="h-10 w-5 bg-color-secondary-2 rounded-sm" />
      <h2 className={tw("text-lg capitalize", poppinsSemiBoldFont.className)}>
        {text}
      </h2>
    </div>
  );
}
