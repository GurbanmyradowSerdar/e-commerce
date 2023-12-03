import NavigationTrain from "@/components/navigation_train";
import CartProductsSection from "@/components/pages/cart/CartProductsSection";
import CartTotalSection from "@/components/pages/cart/CartTotalSection";
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
        "space-y-24 max-3xl:space-y-16",
        topMarginSaving,
        bottomMarginSaving,
        horizontalMarginLimit
      )}
    >
      <NavigationTrain />
      <CartProductsSection dict={dict} />
      <CartTotalSection dict={dict} lang={locale} />
    </div>
  );
}
