import PrimaryButton from "@/components/buttons/PrimaryButton";
import PrimaryTimeCalc from "@/components/time_calculating/PrimaryTimeCalc";
import SectionDescription from "@/components/titles/SectionDescription";
import SectionTitle from "@/components/titles/SectionTitle";
import Link from "next/link";
import ProductSwiper from "@/components/swiper/ProductSwiper";
import { homeSalesSwiper } from "@/data";
import ArrowButton from "@/components/buttons/arrow_button/ArrowButton";

export default function SalesSection({ salesUntil }: { salesUntil: Date }) {
  return (
    <section className="flex flex-col gap-7 border-b border-color-divider pb-14">
      <SectionTitle text="today's" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-20">
          <SectionDescription text="flash sales" />
          <PrimaryTimeCalc date={salesUntil} />
        </div>
        <div className="flex items-center gap-2">
          <ArrowButton direction="left" />
          <ArrowButton direction="right" />
        </div>
      </div>
      <div>
        <ProductSwiper
          data={homeSalesSwiper}
          swiperProps={{
            slidesPerView: 5.5,
            spaceBetween: 50,
            breakpoints: {
              1536: {
                slidesPerView: 4.5,
              },
              1620: {
                slidesPerView: 5.5,
              },
            },
          }}
        />
      </div>
      <div className="flex items-center justify-center mt-16">
        <Link href={"/en/products/sales"}>
          <PrimaryButton>view all products</PrimaryButton>
        </Link>
      </div>
    </section>
  );
}
