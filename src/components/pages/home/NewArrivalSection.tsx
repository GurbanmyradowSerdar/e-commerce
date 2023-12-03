import BannerContent from "@/components/titles/BannerContent";
import SectionDescription from "@/components/titles/SectionDescription";
import SectionTitle from "@/components/titles/SectionTitle";
import { getDict } from "@/dictionaries/dictionaries";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import Image from "next/image";

export default async function NewArrivalSection() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);
  return (
    <section className="felx flex-col space-y-10 max-2xl:space-y-8">
      <div className="space-y-7">
        <SectionTitle text={dict.pages.index.newArrival.title} />
        <SectionDescription text={dict.pages.index.newArrival.description} />
      </div>
      <div className="grid grid-cols-4 grid-rows-2 h-[600px] gap-10 max-2xl:h-[500px]">
        <div
          className="col-span-2 row-span-2 bg-[url(/images/home/ps5.png)] bg-color-bg-1 bg-no-repeat bg-contain bg-bottom
      flex items-end p-10 rounded-sm"
        >
          <BannerContent
            description={dict.pages.index.newArrival.ps5.description}
            title={dict.pages.index.newArrival.ps5.title}
          />
        </div>
        <div
          className="col-span-2 flex items-end p-10 rounded-sm bg-[url(/images/home/girl-with-hat.png)] bg-color-bg-1 bg-no-repeat bg-contain bg-right
        shadow-[inset_-100px_0_100px_10px_rgba(255,255,255,0.2)]"
        >
          <BannerContent
            description={dict.pages.index.newArrival.women.description}
            title={dict.pages.index.newArrival.women.title}
          />
        </div>
        <div className="flex items-end p-10 rounded-sm bg-color-bg-1 relative">
          <Image
            alt="banner"
            src={"/images/home/speakers.png"}
            width={300}
            height={300}
            className="h-52 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] max-2xl:h-40"
          />
          <BannerContent
            description={dict.pages.index.newArrival.speakers.description}
            title={dict.pages.index.newArrival.speakers.title}
            className="absolute bottom-0 left-0 p-10"
          />
        </div>
        <div className="flex items-end p-10 bg-color-bg-1 rounded-sm relative">
          <Image
            alt="banner"
            src={"/images/home/perfume.png"}
            width={300}
            height={300}
            className="h-52 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] max-2xl:h-40"
          />
          <BannerContent
            description={dict.pages.index.newArrival.perfume.description}
            title={dict.pages.index.newArrival.perfume.title}
            className="absolute bottom-0 left-0 p-10"
          />
        </div>
      </div>
    </section>
  );
}
