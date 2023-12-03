import NavigationTrain from "@/components/navigation_train";
import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import { twMerge as tw } from "tailwind-merge";
import { interSemiboldFont } from "fonts";
import Image from "next/image";
import AboutCard from "@/components/cards/about_card";
import AboutEmployeesSwiper from "@/components/pages/about/AboutEmployeesSwiper";
import ServiceCard from "@/components/cards/service_card";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import { getDict } from "@/dictionaries/dictionaries";

export default async function page() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);
  return (
    <div
      className={tw(
        `flex flex-col text-color-text-3 gap-56 max-3xl:gap-48 max-2xl:gap-32`,
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
            className={tw(
              "text-6xl capitalize max-2xl:text-4xl",
              interSemiboldFont.className
            )}
          >
            {dict.pages.aboutUs.section1.title}
          </h1>
          <p className="text-lg max-2xl:text-base">
            {dict.pages.aboutUs.section1.text1}
          </p>
          <p className="text-lg max-2xl:text-base">
            {dict.pages.aboutUs.section1.text2}
          </p>
        </div>
        <Image
          alt="girls"
          src={"/images/about/girls.png"}
          width={700}
          height={700}
          className="w-[900px] object-contain
          max-3xl:w-[600px] max-2xl:w-[500px]"
          priority
        />
      </section>
      {/* about cards */}
      <section className="flex justify-between">
        {dict.pages.aboutUs.section2.aboutCards.map((item, i) => (
          <AboutCard key={i} {...item} i={i} />
        ))}
      </section>
      {/* swiper employees */}
      <section>
        <AboutEmployeesSwiper dict={dict} />
      </section>
      {/* service cards */}
      <section className="flex items-center justify-evenly">
        {dict.pages.aboutUs.section4.services.map((item, i) => (
          <ServiceCard key={i} {...item} />
        ))}
      </section>
    </div>
  );
}
