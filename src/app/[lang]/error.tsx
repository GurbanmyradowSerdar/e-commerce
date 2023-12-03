"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import NavigationTrain from "@/components/navigation_train";
import { horizontalMarginLimit, topMarginSaving } from "@/shared/constants";
import { interMediumFont } from "@/shared/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge as tw } from "tailwind-merge";
export default function Error({
  reset,
}: {
  error: Error & { digset?: string };
  reset: () => void;
}) {
  const pathname = usePathname();

  return (
    <div
      className={tw(
        "flex flex-col items-center justify-center gap-20 min-h-[40dvh] mb-28",
        topMarginSaving,
        horizontalMarginLimit
      )}
    >
      <NavigationTrain isError />
      <div className="flex flex-col text-center gap-10">
        <h1
          className={`${interMediumFont.className} text-8xl capitalize max-2xl:text-6xl`}
        >
          500 Server Error
        </h1>
        <h5 className="text-lg">Something went wrong :(</h5>
      </div>
      <div className="flex items-center gap-5">
        <PrimaryButton
          buttonProps={{
            onClick: () => reset(),
          }}
        >
          Try to fix error
        </PrimaryButton>
        <Link href={`/${pathname.split("/")[1]}`}>
          <PrimaryButton>Back to home page</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
