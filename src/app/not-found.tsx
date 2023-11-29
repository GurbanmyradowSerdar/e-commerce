import PrimaryButton from "@/components/buttons/PrimaryButton";
import Footer from "@/components/main/footer/Footer";
import MainHeader from "@/components/main/header/MainHeader";
import TopHeader from "@/components/main/header/TopHeader";
import NavigationTrain from "@/components/navigation_train";
import { horizontalMarginLimit, topMarginSaving } from "@/shared/constants";
import { interMediumFont } from "fonts";
import Link from "next/link";
import { twMerge as tw } from "tailwind-merge";

export default function NotFound() {
  return (
    <>
      <header>
        <TopHeader />
        <MainHeader />
      </header>
      <main className="flex-grow bg-color-bg text-color-text-3 relative">
        <div
          className={tw(
            "flex flex-col items-center justify-center gap-20 min-h-[40dvh] mb-28",
            topMarginSaving,
            horizontalMarginLimit
          )}
        >
          <NavigationTrain isNotFound />
          <div className="flex flex-col text-center gap-10">
            <h1
              className={`${interMediumFont.className} text-9xl capitalize max-2xl:text-7xl`}
            >
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
      </main>
      <Footer />
    </>
  );
}
