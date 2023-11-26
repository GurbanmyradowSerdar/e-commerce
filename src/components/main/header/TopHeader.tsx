import { horizontalMarginLimit } from "@/shared/constants";
import Link from "next/link";
import { twMerge as tw } from "tailwind-merge";
import { poppinsSemiBoldFont } from "fonts";
import HeaderLangDropdown from "./HeaderLangDropdown";
import { headers } from "next/headers";
import { getDict } from "@/dictionaries/dictionaries";
import { getLocaleInServer } from "@/shared/utils";

export default async function TopHeader() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);

  return (
    <div className="bg-color-bg-1 text-color-text-1">
      <div
        className={tw(
          `flex items-center justify-center relative py-3`,
          horizontalMarginLimit
        )}
      >
        <div className="flex items-center gap-3">
          <p>{dict.header.topHeader.text}</p>
          <Link
            className={tw(
              "underline cursor-pointer",
              poppinsSemiBoldFont.className
            )}
            href={`/${locale}`}
          >
            {dict.header.topHeader.href}
          </Link>
        </div>
        <div className="absolute right-0 top-2/4 -translate-y-2/4">
          <HeaderLangDropdown lang={locale} />
        </div>
      </div>
    </div>
  );
}
