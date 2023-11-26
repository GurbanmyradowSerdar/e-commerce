import OutlinedButton from "@/components/buttons/OutlinedButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import InputWithLine from "@/components/inputs/InputWithLine";
import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import Image from "next/image";
import Link from "next/link";
import { twMerge as tw } from "tailwind-merge";
import { interMediumFont, poppinsMediumFont } from "fonts";
import SignUpForm from "@/components/pages/sign_up/SignUpForm";

export default function page() {
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
