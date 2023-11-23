import DefaultText from "@/components/titles/DefaultText";
import { ICheckoutCard } from "@/shared/types";
import Image from "next/image";

export default function CheckOutCard({ image, name, price }: ICheckoutCard) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          alt={name}
          src={`/images/products/${image}`}
          width={100}
          height={100}
          className="w-14 object-contain"
        />
        <DefaultText text={name} />
      </div>
      <DefaultText text={`$${price}`} />
    </div>
  );
}
