import { horizontalMarginLimit } from "@/shared/constants";
import { interBoldFont, poppinsMediumFont } from "fonts";
import FooterInput from "./FooterInput";
import { footerNav, footerNav1, footerNav2 } from "@/data";
import FooterLink from "./FooterLink";
import { IClassName } from "types";
import { AiOutlineCopyright as CopyRightIcon } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { twMerge as tw } from "tailwind-merge";
import { AiFillApple as AppleIcon } from "react-icons/ai";
import { BiLogoFacebook as FacebookIcon } from "react-icons/bi";
import { FiTwitter as TwitterIcon } from "react-icons/fi";
import { AiOutlineInstagram as InstagramIcon } from "react-icons/ai";
import { FaLinkedinIn as LinkedinIcon } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-color-bg-1 text-color-text-1">
      <div
        className={tw(
          `mt-16 mb-14 flex flex-wrap justify-between`,
          horizontalMarginLimit
        )}
      >
        <div className="flex flex-col items-start gap-3 flex-[0_0_17%]">
          <Link
            href={"/"}
            className={tw("text-3xl mb-3", interBoldFont.className)}
          >
            Exlusive
          </Link>
          <FooterTitle text="subscribe" className="mb-0" />
          <div className="space-y-2">
            <p className="text-lg">Get 10% off your first order</p>
            <FooterInput />
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 flex-[0_0_17%]">
          <FooterTitle text="support" />
          {footerNav.map((item, i) => (
            <FooterLink key={i} {...item} isIndependent />
          ))}
        </div>
        <div className="flex flex-col items-start gap-3 flex-[0_0_10%]">
          <FooterTitle text="account" />
          {footerNav1.map((item, i) => (
            <FooterLink isIndependent={false} key={i} {...item} />
          ))}
        </div>
        <div className="flex flex-col items-start gap-3 flex-[0_0_10%]">
          <FooterTitle text="quick link" />
          {footerNav2.map((item, i) => (
            <FooterLink isIndependent={false} key={i} {...item} />
          ))}
        </div>
        <div className="flex flex-col items-start gap-3 flex-[0_0_17%]">
          <FooterTitle text="download app" />
          <div className="space-y-2">
            <p className={tw("text-color-text-2", poppinsMediumFont.className)}>
              Save $3 with App New User Only
            </p>
            <div className="flex gap-2 items-center">
              <Image
                alt="qr-code"
                width={100}
                height={100}
                src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fgithub.com%2FGurbanmyradowSerdar&chs=180x180&choe=UTF-8&chld=L|2"
                className="w-28 h-28 object-contain"
              />
              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-1 px-2 py-2 border-2 border-color-primary rounded-md">
                  <Image
                    alt=""
                    src={"/google-play.png"}
                    width={100}
                    height={100}
                    className="w-6 h-6 object-contain"
                  />
                  <p className={poppinsMediumFont.className}>Google Play</p>
                </button>
                <button className="flex items-center gap-1 px-2 py-2 border-2 border-color-primary rounded-md">
                  <AppleIcon className="w-6 h-6 object-contain" />
                  <p className={poppinsMediumFont.className}>App Store</p>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <a href="#">
                <FacebookIcon className="w-7 h-7 object-contain" />
              </a>
              <a href="#">
                <TwitterIcon className="w-7 h-7 object-contain" />
              </a>
              <a href="#">
                <InstagramIcon className="w-7 h-7 object-contain" />
              </a>
              <a href="https://linkedin.com/in/serdar-gurbanmyradow">
                <LinkedinIcon className="w-7 h-7 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border-t-[1px] border-color-footer-copyright gap-2 text-color-footer-copyright py-3">
        <CopyRightIcon className="w-6 h-6" />
        <p className="text-lg">Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}

function FooterTitle({ className, text }: IClassName & { text: string }) {
  return (
    <h3
      className={tw(
        `text-[22px] capitalize mb-3`,
        poppinsMediumFont.className,
        className
      )}
    >
      {text}
    </h3>
  );
}
