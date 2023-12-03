import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryTimeCalc from "@/components/time_calculating/SecondaryTimeCalc";
import SectionDescription from "@/components/titles/SectionDescription";
import SectionTitle from "@/components/titles/SectionTitle";
import { getDict } from "@/dictionaries/dictionaries";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import Image from "next/image";

export default async function AloneBannerSection({
  salesUntil,
}: {
  salesUntil: Date;
}) {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);

  return (
    <section className="bg-color-bg-1 flex px-16 py-20">
      <div className="flex flex-col items-start justify-between gap-8 flex-1">
        <SectionTitle
          withoutQuadrant
          text={dict.pages.index.banner.title}
          className="text-color-text-4"
        />
        <SectionDescription
          text={dict.pages.index.banner.description}
          className="text-color-text-1 text-6xl leading-[70px] max-w-xl max-3xl:text-5xl max-3xl:leading-[60px] max-2xl:max-w-md"
        />
        <SecondaryTimeCalc date={salesUntil} dict={dict} />
        <PrimaryButton className="bg-color-button hover:bg-color-button-hover">
          {dict.pages.index.banner.buy}
        </PrimaryButton>
      </div>
      <Image
        alt="banner-image"
        src={"/images/home/banner-1.png"}
        width={700}
        height={700}
        className="object-contain drop-shadow-[0_0_100px_rgba(255,255,255,0.5)] w-auto h-auto
        max-3xl:w-[500px] max-3xl:drop-shadow-[0_0_60px_rgba(255,255,255,0.5)]
        max-2xl:w-[450px] max-2xl:drop-shadow-[0_0_50px_rgba(255,255,255,0.5)]"
      />
    </section>
  );
}
