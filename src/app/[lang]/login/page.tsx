import PrimaryButton from "@/components/buttons/PrimaryButton";
import InputWithLine from "@/components/inputs/InputWithLine";
import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import Image from "next/image";
import { twMerge as tw } from "tailwind-merge";
import { interMediumFont } from "fonts";

export default function page() {
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
            Log in to Exclusive
          </h1>
          <p className="text-lg">Enter your details below</p>
        </div>
        <form className="flex flex-col gap-14">
          <div className="flex flex-col gap-12">
            <InputWithLine
              props={{
                type: "text",
                placeholder: "email or phone number",
                required: true,
              }}
            />
            <InputWithLine
              props={{
                type: "password",
                placeholder: "password",
                required: true,
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <PrimaryButton>log in</PrimaryButton>
            <button className="text-color-button-1 text-lg capitalize">
              forget password?
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
