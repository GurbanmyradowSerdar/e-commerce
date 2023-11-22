import WishListSection from "@/components/pages/wishlist";
import { bottomMarginSaving, horizontalMarginLimit } from "@/shared/constants";
import { twMerge as tw } from "tailwind-merge";

export default function page() {
  return (
    <div
      className={tw(
        "space-y-20 mt-28",
        horizontalMarginLimit,
        bottomMarginSaving
      )}
    >
      <WishListSection />
    </div>
  );
}
