import ArrowButton from "@/components/buttons/arrow_button/ArrowButton";
import AloneBannerSection from "@/components/pages/home/AloneBannerSection";
import BannerSideBarSection from "@/components/pages/home/banner_sidebar_section";
import BestSellingSection from "@/components/pages/home/BestSellingSection";
import CategoriesSection from "@/components/pages/home/CategoriesSection";
import NewArrivalSection from "@/components/pages/home/NewArrivalSection";
import ProductsSection from "@/components/pages/home/products_section";
import SalesSection from "@/components/pages/home/SalesSection";
import ServicesSection from "@/components/pages/home/ServicesSection";
import { bottomMarginSaving, horizontalMarginLimit } from "@/shared/constants";
import { twMerge as tw } from "tailwind-merge";

export default function Home() {
  return (
    <div
      className={tw(
        `flex flex-col gap-40 max-3xl:gap-32 max-2xl:gap-28`,
        bottomMarginSaving,
        horizontalMarginLimit
      )}
    >
      <ArrowButton
        direction="up"
        className="fixed bottom-12 right-20 z-10"
        isScrolling
      />
      <BannerSideBarSection />
      <SalesSection salesUntil={new Date("12-30-2023")} />
      <CategoriesSection />
      <BestSellingSection />
      <AloneBannerSection salesUntil={new Date("12-10-2023")} />
      <ProductsSection />
      <NewArrivalSection />
      <ServicesSection />
    </div>
  );
}
