import PrimaryButton from "@/components/buttons/PrimaryButton";
import ArrowButton from "@/components/buttons/arrow_button/ArrowButton";
import SectionDescription from "@/components/titles/SectionDescription";
import SectionTitle from "@/components/titles/SectionTitle";
import CustomSwiper from "./CustomSwiper";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import { getDict } from "@/dictionaries/dictionaries";

export default async function ProductsSection() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);

  return (
    <section className="flex flex-col gap-20 max-2xl:gap-10">
      <div className="flex flex-col gap-7">
        <SectionTitle text={dict.pages.index.products.title} />
        <div className="flex items-center justify-between">
          <SectionDescription text={dict.pages.index.products.description} />
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
        <PrimaryButton className="self-center">
          {dict.pages.index.products.viewAll}
        </PrimaryButton>
      </div>
    </section>
  );
}
