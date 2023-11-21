import PrimaryButton from "@/components/buttons/PrimaryButton";
import ProductSwiper from "@/components/swiper/ProductSwiper";
import SectionDescription from "@/components/titles/SectionDescription";
import SectionTitle from "@/components/titles/SectionTitle";
import { homeBestSellingSwiper } from "@/data";

export default function BestSellingSection() {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col gap-7">
        <SectionTitle text="this month" />
        <div className="flex items-center justify-between">
          <SectionDescription text="best selling products" />
          <PrimaryButton>view all</PrimaryButton>
        </div>
      </div>
      <div>
        <ProductSwiper
          swiperProps={{
            slidesPerView: 5,
            spaceBetween: 120,
          }}
          data={homeBestSellingSwiper}
        />
      </div>
    </section>
  );
}
