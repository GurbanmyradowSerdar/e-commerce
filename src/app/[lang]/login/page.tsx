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
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import { getDict } from "@/dictionaries/dictionaries";

export default async function page() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);

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
        className="w-[1000px] object-contain max-3xl:w-[750px] max-2xl:w-[600px]"
        priority
      />

      <div
        className={tw(
          "text-color-text-3 flex flex-col gap-14 flex-[0_0_25%] max-3xl:flex-[0_0_30%] max-2xl:gap-8",
          horizontalMarginLimit,
          "ml-0 max-3xl:ml-0 max-2xl:ml-0"
        )}
      >
        <div className="flex flex-col items-start gap-5 max-2xl:gap-2">
          <h1
            className={`${interMediumFont.className} text-[40px] max-2xl:text-3xl`}
          >
            {dict.pages.registration.login.title}
          </h1>
          <p className="text-lg max-2xl:text-base">
            {dict.pages.registration.login.subtitle}
          </p>
        </div>
        <form className="flex flex-col gap-14">
          <div className="flex flex-col gap-12">
            <InputWithLine
              props={{
                type: "text",
                placeholder: dict.pages.registration.login.emailOrPhone,
                required: true,
              }}
            />
            <InputWithLine
              props={{
                type: "password",
                placeholder: dict.pages.registration.login.password,
                required: true,
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <PrimaryButton>{dict.pages.registration.login.login}</PrimaryButton>
            <button className="text-color-button-1 text-lg capitalize max-2xl:text-base">
              {dict.pages.registration.login.forgetPassword}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
