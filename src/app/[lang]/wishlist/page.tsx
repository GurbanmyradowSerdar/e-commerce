import WishListSection from "@/components/pages/wishlist";
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
        "space-y-20",
        topMarginSaving,
        horizontalMarginLimit,
        bottomMarginSaving
      )}
    >
      <WishListSection />
    </div>
  );
}
