import { IServiceCard } from "types";
import Image from "next/image";
import { poppinsSemiBoldFont } from "fonts";

export default function ServiceCard({ image, subtitle, title }: IServiceCard) {
  return (
    <article className="flex flex-col justify-center items-center text-color-text-3 text-center gap-5">
      <Image
        alt="service"
        src={`/icons/services/${image}`}
        width={100}
        height={100}
        className="w-auto h-auto
        max-2xl:w-16 max-2xl:h-16"
      />
      <div className="space-y-1">
        <h5
          className={`${poppinsSemiBoldFont.className} uppercase text-[20px] max-3xl:text-lg max-2xl:text-base`}
        >
          {title}
        </h5>
        <p className="text-base max-2xl:text-sm">{subtitle}</p>
      </div>
    </article>
  );
}
