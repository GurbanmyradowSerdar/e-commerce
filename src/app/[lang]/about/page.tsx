import NavigationTrain from "@/components/navigation_train";
import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import { twMerge as tw } from "tailwind-merge";
import { interSemiboldFont } from "fonts";
import Image from "next/image";
import { aboutCards, aboutServicesCards } from "@/data";
import AboutCard from "@/components/cards/about_card";
import AboutEmployeesSwiper from "@/components/pages/about/AboutEmployeesSwiper";
import ServiceCard from "@/components/cards/service_card";

export default function page() {
  return (
    <div
      className={tw(
        `flex flex-col text-color-text-3 gap-56 max-3xl:gap-48`,
        topMarginSaving,
        bottomMarginSaving,
        horizontalMarginLimit
      )}
    >
      <NavigationTrain />
      {/* our story texts */}
      <section className="flex items-center justify-between gap-5">
        <div className="flex flex-col flex-[0_1_40%] gap-12 max-3xl:gap-8 max-3xl:flex-[0_1_45%]">
          <h1
            className={tw("text-6xl capitalize", interSemiboldFont.className)}
          >
            our story
          </h1>
          <p className="text-lg">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-lg">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <Image
          alt="girls"
          src={"/images/about/girls.png"}
          width={700}
          height={700}
          className="w-[900px] object-contain
          max-3xl:w-[600px]"
          priority
        />
      </section>
      {/* about cards */}
      <section className="flex justify-between">
        {aboutCards.map((item, i) => (
          <AboutCard key={i} {...item} />
        ))}
      </section>
      {/* swiper employees */}
      <section>
        <AboutEmployeesSwiper />
      </section>
      {/* service cards */}
      <section className="flex items-center justify-evenly">
        {aboutServicesCards.map((item, i) => (
          <ServiceCard key={i} {...item} />
        ))}
      </section>
    </div>
  );
}
