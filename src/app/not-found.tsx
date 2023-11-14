import PrimaryButton from "@/components/buttons/PrimaryButton";
import NavigationTrain from "@/components/navigation_train";
import { horizontalMarginLimit, topMarginSaving } from "@/shared/constants";
import { interMediumFont } from "fonts";
import Link from "next/link";
import { twMerge as tw } from "tailwind-merge";

export default function NotFound() {
  return (
    <div
      className={tw(
        "flex flex-col items-center justify-center gap-20 min-h-[40dvh] mb-28",
        topMarginSaving,
        horizontalMarginLimit
      )}
    >
      <NavigationTrain isNotFound />
      <div className="flex flex-col text-center gap-10">
        <h1 className={`${interMediumFont.className} text-9xl capitalize`}>
          404 not found
        </h1>
        <h5 className="text-lg">
          Your visited page not found. You may go home page.
        </h5>
      </div>
      <Link href="/en">
        <PrimaryButton>Back to home page</PrimaryButton>
      </Link>
    </div>
  );
}