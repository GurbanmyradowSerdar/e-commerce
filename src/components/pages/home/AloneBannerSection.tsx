import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryTimeCalc from "@/components/time_calculating/SecondaryTimeCalc";
import SectionDescription from "@/components/titles/SectionDescription";
import SectionTitle from "@/components/titles/SectionTitle";
import Image from "next/image";

export default function AloneBannerSection({
  salesUntil,
}: {
  salesUntil: Date;
}) {
  return (
    <section className="bg-color-bg-1 flex px-16 py-20">
      <div className="flex flex-col items-start justify-between gap-8 flex-1">
        <SectionTitle
          withoutQuadrant
          text="categories"
          className="text-color-text-4"
        />
        <SectionDescription
          text="Enhance Your Music Experience"
          className="text-color-text-1 text-6xl leading-[70px] max-w-xl"
        />
        <SecondaryTimeCalc date={salesUntil} />
        <PrimaryButton className="bg-color-button hover:bg-color-button-hover">
          buy now!
        </PrimaryButton>
      </div>
      <Image
        alt="banner-image"
        src={"/images/home/banner-1.png"}
        width={700}
        height={700}
        className="object-contain drop-shadow-[0_0_100px_rgba(255,255,255,0.5)]"
      />
    </section>
  );
}
