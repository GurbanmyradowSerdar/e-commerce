import InputWithLabel from "@/components/inputs/InputWithLabel";
import NavigationTrain from "@/components/navigation_train";
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
      <InputWithLabel
        inputProps={{ id: "firstName" }}
        label="first name"
        labelSpan="*"
      />
    </div>
  );
}
