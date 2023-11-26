import NavigationTrain from "@/components/navigation_train";
import AccountSection from "@/components/pages/account";
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
        "",
        topMarginSaving,
        bottomMarginSaving,
        horizontalMarginLimit
      )}
    >
      <NavigationTrain />
      <AccountSection />
    </div>
  );
}
