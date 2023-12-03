import PrimaryButton from "@/components/buttons/PrimaryButton";
import ProductSwiper from "@/components/swiper/ProductSwiper";
import SectionDescription from "@/components/titles/SectionDescription";
import SectionTitle from "@/components/titles/SectionTitle";
import { homeBestSellingSwiper } from "@/data";
import { getDict } from "@/dictionaries/dictionaries";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";

export default async function BestSellingSection() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);
  return (
    <section className="flex flex-col gap-20 max-2xl:gap-10">
      <div className="flex flex-col gap-7">
        <SectionTitle text={dict.pages.index.bestSelling.title} />
        <div className="flex items-center justify-between">
          <SectionDescription text={dict.pages.index.bestSelling.description} />
          <PrimaryButton>{dict.pages.index.bestSelling.viewAll}</PrimaryButton>
        </div>
      </div>
      <div>
        <ProductSwiper
          swiperProps={{
            slidesPerView: 5,
            spaceBetween: 50,
            breakpoints: {
              1: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: 4,
              },
              1620: {
                slidesPerView: 5,
              },
            },
          }}
          data={homeBestSellingSwiper}
        />
      </div>
    </section>
  );
}
