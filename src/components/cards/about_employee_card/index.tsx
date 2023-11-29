import Image from "next/image";
import { IAboutEmployeeCard } from "types";
import { interMediumFont } from "fonts";
import { FiTwitter as TwitterIcon } from "react-icons/fi";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaLinkedinIn as LinkedinIcon } from "react-icons/fa";

export default function AboutEmployeeCard({
  href,
  image,
  status,
  name,
}: IAboutEmployeeCard) {
  return (
    <div className="flex items-center justify-center text-color-text-3">
      <div className="flex flex-col gap-5 items-start">
        <div className="bg-color-secondary">
          <Image
            alt={name}
            src={`/images/about/${image}`}
            width={200}
            height={200}
            className="h-80 object-bottom object-contain mx-14 mt-5
            max-3xl:h-64 max-3xl:mx-10
            max-2xl:h-48 max-2xl:mx-8"
          />
        </div>
        <div className="flex flex-col items-start gap-4 max-3xl:gap-2">
          <div
            className="flex flex-col items-start gap-2 capitalize
          max-3xl:gap-1"
          >
            <p
              className={`${interMediumFont.className} text-4xl max-3xl:text-3xl max-2xl:text-2xl`}
            >
              {name}
            </p>
            <p className="text-lg max-2xl:text-base">{status}</p>
          </div>
          <div className="flex items-center gap-5">
            <a href={href.twitter}>
              <TwitterIcon className="w-7 h-7 stroke-[1.5px] max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5" />
            </a>
            <a href={href.instagram}>
              <InstagramIcon className="w-7 h-7 max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5" />
            </a>
            <a href={href.linkedin}>
              <LinkedinIcon className="w-7 h-7 max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
