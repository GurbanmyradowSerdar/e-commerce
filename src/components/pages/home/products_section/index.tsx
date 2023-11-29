import PrimaryButton from "@/components/buttons/PrimaryButton";
import ArrowButton from "@/components/buttons/arrow_button/ArrowButton";
import SectionDescription from "@/components/titles/SectionDescription";
import SectionTitle from "@/components/titles/SectionTitle";
import CustomSwiper from "./CustomSwiper";

export default function ProductsSection() {
  return (
    <section className="flex flex-col gap-20 max-2xl:gap-10">
      <div className="flex flex-col gap-7">
        <SectionTitle text="our products" />
        <div className="flex items-center justify-between">
          <SectionDescription text="expore our products" />
          <div className="flex items-center gap-2">
            <ArrowButton direction="left" />
            <ArrowButton direction="right" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div>
          <CustomSwiper />
        </div>
        <PrimaryButton className="self-center">view all products</PrimaryButton>
      </div>
    </section>
  );
}
