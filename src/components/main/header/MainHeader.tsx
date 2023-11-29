import { horizontalMarginLimit } from "@/shared/constants";
import { twMerge as tw } from "tailwind-merge";
import { interBoldFont } from "fonts";
import HeaderLink from "./HeaderLink";
import HeaderInputButtons from "./HeaderInputButtons";
import Link from "next/link";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import { getDict } from "@/dictionaries/dictionaries";

export default async function MainHeader() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);
  return (
    <div className="bg-color-bg text-color-text-3 border-b border-color-divider">
      <div
        className={tw(
          `flex items-center justify-between pt-9 pb-4 max-2xl:pt-7 max-2xl:pb-3`,
          horizontalMarginLimit
        )}
      >
        <Link
          href={`/${locale}`}
          className={tw("text-3xl max-2xl:text-2xl", interBoldFont.className)}
        >
          Exlusive
        </Link>
        <div className="flex items-center gap-52 max-3xl:gap-40 max-2xl:gap-24">
          <nav className="flex items-center gap-12 max-3xl:gap-10 max-2xl:gap-8">
            {dict.header.links.map((item, i) => (
              <HeaderLink {...item} key={i} />
            ))}
          </nav>
          <div
            className="flex items-center gap-6
          max-3xl:gap-5"
          >
            <HeaderInputButtons dict={dict} lang={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
