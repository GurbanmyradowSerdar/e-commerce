import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import Image from "next/image";
import { twMerge as tw } from "tailwind-merge";
import { interMediumFont } from "fonts";
import SignUpForm from "@/components/pages/sign_up/SignUpForm";

export default async function page() {
  return (
    <section
      className={tw(
        `flex items-center justify-between`,
        topMarginSaving,
        bottomMarginSaving
      )}
    >
      <Image
        alt="phones"
        src={"/images/sign_up/phones.png"}
        width={800}
        height={800}
        className="w-[1000px] object-contain max-3xl:w-[750px]"
        priority
      />

      <div
        className={tw(
          "text-color-text-3 flex flex-col gap-14 flex-[0_0_25%] max-3xl:flex-[0_0_30%]",
          horizontalMarginLimit,
          "ml-0 max-3xl:ml-0"
        )}
      >
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
