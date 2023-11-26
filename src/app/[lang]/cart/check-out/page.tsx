import NavigationTrain from "@/components/navigation_train";
import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import { twMerge as tw } from "tailwind-merge";
import FormSection from "@/components/pages/cart/check_out/FormSection";
import TotalSection from "@/components/pages/cart/check_out/TotalSection";

export default function page() {
  return (
    <div
      className={tw(
        "flex items-start justify-between",
        topMarginSaving,
        bottomMarginSaving,
        horizontalMarginLimit
      )}
    >
      <NavigationTrain />
      <FormSection />
      <TotalSection />
    </div>
  );
}
