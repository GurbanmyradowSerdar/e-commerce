import ArrowButton from "@/components/buttons/arrow_button/ArrowButton";
import BannerSideBarSection from "@/components/pages/home/banner_sidebar_section";
import BestSellingSection from "@/components/pages/home/BestSellingSection";
import CategoriesSection from "@/components/pages/home/CategoriesSection";
import SalesSection from "@/components/pages/home/SalesSection";
import { bottomMarginSaving, horizontalMarginLimit } from "@/shared/constants";
import { twMerge as tw } from "tailwind-merge";

export default function Home() {
  return (
    <div
      className={tw(
        `flex flex-col gap-52`,
        bottomMarginSaving,
        horizontalMarginLimit
      )}
    >
      <ArrowButton
        direction="up"
        className="fixed bottom-12 right-20"
        isScrolling
      />
      <BannerSideBarSection />
      <SalesSection salesUntil={new Date("12-30-2023")} />
      <CategoriesSection />
      <BestSellingSection />
    </div>
  );
}
