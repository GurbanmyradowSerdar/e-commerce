import NavigationTrain from "@/components/navigation_train";
import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import Image from "next/image";
import { twMerge as tw } from "tailwind-merge";
import { poppinsMediumFont } from "fonts";
import InputWithoutLabel from "@/components/inputs/InputWithoutLabel";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function page() {
  return (
    <div
      className={tw(
        `flex gap-16 max-3xl:gap-14`,
        topMarginSaving,
        horizontalMarginLimit,
        bottomMarginSaving
      )}
    >
      <NavigationTrain />
      <div
        className="text-color-text-3 space-y-8 flex-[0_0_20%] shadow-[0px_0px_20px_1px_rgba(25,25,25,0.1)] p-5
      max-3xl:flex-[0_0_25%] max-2xl:justify-evenly max-2xl:flex max-2xl:flex-col"
      >
        <div className="flex flex-col items-start gap-4 max-3xl:gap-3">
          <div className="flex items-center gap-4">
            <Image
              alt="phone"
              src={"/icons/contact/phone.svg"}
              width={100}
              height={100}
              className="w-auto h-auto"
            />
            <p
              className={tw(
                "text-lg capitalize max-2xl:text-base",
                poppinsMediumFont.className
              )}
            >
              call to us
            </p>
          </div>
          <p className="text-base max-2xl:text-sm">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-base max-2xl:text-sm">Phone: +8801611112222</p>
        </div>
        <div className="w-full h-[2px] bg-color-divider" />
        <div className="flex flex-col items-start gap-4 max-3xl:gap-3">
          <div className="flex items-center gap-4">
            <Image
              alt="phone"
              src={"/icons/contact/email.svg"}
              width={100}
              height={100}
              className="w-auto h-auto"
            />
            <p
              className={tw(
                "text-lg capitalize max-2xl:text-base",
                poppinsMediumFont.className
              )}
            >
              write to us
            </p>
          </div>
          <p className="text-base max-2xl:text-sm">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-base max-2xl:text-sm">
            Emails: customer@exclusive.com
          </p>
          <p className="text-base max-2xl:text-sm">
            Emails: support@exclusive.com
          </p>
        </div>
      </div>
      <form className="flex-1 flex flex-col shadow-[0px_0px_20px_1px_rgba(25,25,25,0.1)] p-5 justify-between gap-10">
        <div className="flex items-center justify-between">
          <InputWithoutLabel
            props={{
              type: "text",
              placeholder: "Your Name *",
              required: true,
            }}
          />
          <InputWithoutLabel
            props={{
              type: "email",
              placeholder: "Your Email *",
              required: true,
            }}
          />
          <InputWithoutLabel
            props={{
              type: "tel",
              placeholder: "Your Phone *",
              required: true,
            }}
          />
        </div>
        <textarea
          rows={10}
          cols={10}
          placeholder="Enter your message..."
          className="placeholder:text-color-text-2 px-4 py-3 bg-color-secondary rounded-sm
          outline-color-secondary duration-300 ease-in-out transition-all resize-none
          focus-within:outline-2 focus-within:outline-color-primary-1 text-base
          max-2xl:text-sm"
          required
        ></textarea>
        <PrimaryButton className="self-end">send message</PrimaryButton>
      </form>
    </div>
  );
}
