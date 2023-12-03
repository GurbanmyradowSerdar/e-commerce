import ArrowButton from "@/components/buttons/arrow_button/ArrowButton";
import CategorySwiper from "@/components/swiper/CategorySwiper";
import SectionDescription from "@/components/titles/SectionDescription";
import SectionTitle from "@/components/titles/SectionTitle";
import { getDict } from "@/dictionaries/dictionaries";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";

export default async function CategoriesSection() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);
  return (
    <section className="flex flex-col gap-7 border-b border-color-divider pb-14">
      <SectionTitle text={dict.pages.index.category.title} />
      <div className="flex items-center justify-between">
        <SectionDescription text={dict.pages.index.category.description} />
        <div className="flex items-center gap-2">
          <ArrowButton direction="left" />
          <ArrowButton direction="right" />
        </div>
      </div>
      <div className="my-10">
        <CategorySwiper
          data={dict.pages.index.category.categories}
          swiperProps={{
            slidesPerView: 6,
            spaceBetween: 60,
            breakpoints: {
              1: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 5,
              },
              1536: {
                slidesPerView: 6,
              },
            },
          }}
        />
      </div>
    </section>
  );
}
