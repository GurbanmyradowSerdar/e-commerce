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
        className="w-auto h-auto"
      />
      <div className="space-y-1">
        <h5
          className={`${poppinsSemiBoldFont.className} uppercase text-[20px]`}
        >
          {title}
        </h5>
        <p>{subtitle}</p>
      </div>
    </article>
  );
}
