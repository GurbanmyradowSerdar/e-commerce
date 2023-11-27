import NavigationTrain from "@/components/navigation_train";
import CartProductsSection from "@/components/pages/cart/CartProductsSection";
import CartTotalSection from "@/components/pages/cart/CartTotalSection";
import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import { twMerge as tw } from "tailwind-merge";

export default function page() {
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
      <CartProductsSection />
      <CartTotalSection />
    </div>
  );
}
