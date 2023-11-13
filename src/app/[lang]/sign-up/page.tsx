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
        <form className="flex flex-col gap-14">
          <div className="flex flex-col gap-12">
            <InputWithLine
              props={{ type: "text", placeholder: "name", required: true }}
            />
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
          <div className="flex flex-col gap-5">
            <PrimaryButton>create account</PrimaryButton>
            <OutlinedButton className="flex items-center gap-5">
              <Image
                alt=""
                src={"/icons/sign_up/google.svg"}
                width={100}
                height={100}
                className="w-7 h-7"
              />
              <span>sign up with google</span>
            </OutlinedButton>
          </div>
          <div className="flex items-center justify-center gap-4 text-color-text-2 text-lg">
            <p>Already have account</p>
            <Link
              href={"/en/login"}
              className={`${poppinsMediumFont.className} duration-300 transition-colors underline underline-offset-8 hover:text-color-text-2-hover`}
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
