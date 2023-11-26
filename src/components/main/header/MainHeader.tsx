import { horizontalMarginLimit } from "@/shared/constants";
import { twMerge as tw } from "tailwind-merge";
import { interBoldFont } from "fonts";
import { headerNav } from "@/data";
import HeaderLink from "./HeaderLink";
import HeaderInputButtons from "./HeaderInputButtons";
import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="bg-color-bg text-color-text-3 border-b border-color-divider">
      <div
        className={tw(
          `flex items-center justify-between pt-9 pb-4`,
          horizontalMarginLimit
        )}
      >
        <Link href={"/"} className={tw("text-3xl", interBoldFont.className)}>
          Exlusive
        </Link>
        <div className="flex items-center gap-52">
          <nav className="flex items-center gap-12">
            {headerNav.map((item, i) => (
              <HeaderLink {...item} key={i} />
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <HeaderInputButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
