import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import Image from "next/image";
import { twMerge as tw } from "tailwind-merge";
import { interMediumFont } from "fonts";
import SignUpForm from "@/components/pages/sign_up/SignUpForm";
import { ILangProps } from "@/shared/types";
import { getDict } from "@/dictionaries/dictionaries";

export default async function page({ params }: ILangProps) {
  const dict = await getDict(params.lang);

  return (
    <section
      className={tw(
        `flex items-center justify-between`,
        topMarginSaving,
        bottomMarginSaving,
        horizontalMarginLimit,
        "ml-0 mt-20"
      )}
    >
      <Image
        alt="phones"
        src={"/images/sign_up/phones.png"}
        width={800}
        height={800}
        className="w-[1000px] object-contain"
        priority
      />

      <div className="text-color-text-3 flex flex-col gap-14 flex-[0_0_25%]">
        <div className="flex flex-col items-start gap-5">
          <h1 className={`${interMediumFont.className} text-[40px]`}>
            Create an account
          </h1>
          <p className="text-lg">Enter your details below</p>
        </div>
        <SignUpForm />
      </div>
    </section>
  );
}
