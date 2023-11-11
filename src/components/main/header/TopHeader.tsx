import { horizontalMarginLimit } from "@/shared/constants";
import Link from "next/link";
import { twMerge as tw } from "tailwind-merge";
import { poppinsSemiBoldFont } from "fonts";
import HeaderLangDropdown from "./HeaderLangDropdown";

export default function TopHeader() {
  return (
    <div className="bg-color-bg-1 text-color-text-1">
      <div
        className={tw(
          `flex items-center justify-center relative py-3`,
          horizontalMarginLimit
        )}
      >
        <div className="flex items-center gap-3">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link
            className={tw(
              "underline cursor-pointer",
              poppinsSemiBoldFont.className
            )}
            href={"/"}
          >
            ShopNow
          </Link>
        </div>
        <div className="absolute right-0 top-2/4 -translate-y-2/4">
          <HeaderLangDropdown />
        </div>
      </div>
    </div>
  );
}
