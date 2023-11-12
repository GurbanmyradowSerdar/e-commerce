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
            className="h-80 object-bottom object-contain mx-14 mt-5"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-2 capitalize">
            <p className={`${interMediumFont.className} text-4xl`}>{name}</p>
            <p className="text-lg">{status}</p>
          </div>
          <div className="flex items-center gap-5">
            <a href={href.twitter}>
              <TwitterIcon className="w-7 h-7 stroke-[1.5px]" />
            </a>
            <a href={href.instagram}>
              <InstagramIcon className="w-7 h-7" />
            </a>
            <a href={href.linkedin}>
              <LinkedinIcon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
