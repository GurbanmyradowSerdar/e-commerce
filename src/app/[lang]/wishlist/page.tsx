import WishListSection from "@/components/pages/wishlist";
import { getDict } from "@/dictionaries/dictionaries";
import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import { twMerge as tw } from "tailwind-merge";

export default async function page() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);
  return (
    <div
      className={tw(
        "space-y-20",
        topMarginSaving,
        horizontalMarginLimit,
        bottomMarginSaving
      )}
    >
      <WishListSection dict={dict} />
    </div>
  );
}
