import BannerContent from "@/components/titles/BannerContent";
import Image from "next/image";

export default function NewArrivalSection() {
  return (
    <section className="grid grid-cols-4 grid-rows-2 h-[700px] gap-10">
      <div
        className="col-span-2 row-span-2 bg-[url(/images/home/ps5.png)] bg-color-bg-1 bg-no-repeat bg-contain bg-bottom
      flex items-end p-10 rounded-sm"
      >
        <BannerContent
          description="Black and White version of PS5 coming out on sale"
          title="PlayStation 5"
        />
      </div>
      <div
        className="col-span-2 flex items-end p-10 rounded-sm bg-[url(/images/home/girl-with-hat.png)] bg-color-bg-1 bg-no-repeat bg-contain bg-right
        shadow-[inset_-100px_0_100px_10px_rgba(255,255,255,0.2)]"
      >
        <BannerContent
          description="Featured woman collections that give you another vibe."
          title="Women’s Collections"
        />
      </div>
      <div className="flex items-end p-10 rounded-sm bg-color-bg-1 relative">
        <Image
          alt="banner"
          src={"/images/home/speakers.png"}
          width={300}
          height={300}
          className="h-60 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        />
        <BannerContent
          description="Amazon wireless speakers"
          title="Speakers"
          className="absolute bottom-0 left-0 p-10"
        />
      </div>
      <div className="flex items-end p-10 bg-color-bg-1 rounded-sm relative">
        <Image
          alt="banner"
          src={"/images/home/perfume.png"}
          width={300}
          height={300}
          className="h-60 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        />
        <BannerContent
          description="GUCCI INTENSE OUD EDP"
          title="Perfume"
          className="absolute bottom-0 left-0 p-10"
        />
      </div>
    </section>
  );
}
