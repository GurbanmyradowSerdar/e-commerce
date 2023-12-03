import { IAboutCard } from "types";
import { interBoldFont } from "fonts";
import ServiceIcon from "./icons/ServiceIcon";
import MoneyIcon from "./icons/MoneyIcon";
import BagIcon from "./icons/BagIcon";
import MoneyBagIcon from "./icons/MoneyBagIcon";

export default function AboutCard({ subtitle, title, i }: IAboutCard) {
  let Icon = null;

  switch (i) {
    case 0:
      Icon = ServiceIcon();
      break;
    case 1:
      Icon = MoneyIcon();
      break;
    case 2:
      Icon = BagIcon();
      break;
    case 3:
      Icon = MoneyBagIcon();
      break;
    default:
      break;
  }

  return (
    <div
      className="flex flex-col flex-[0_0_20%] items-center py-5 px-12 border-2 border-color-divider rounded-md gap-4
      group transition-colors duration-300 ease-in-out hover:border-transparent hover:bg-color-secondary-2
      max-3xl:py-4 max-3xl:px-9
      max-2xl:py-3 max-2xl:px-3"
    >
      {Icon}
      <div className="space-y-3 text-center">
        <p
          className={`${interBoldFont.className} text-4xl group-hover:text-color-text-1 transition-colors duration-300 ease-in-out
          max-3xl:text-3xl
          max-2xl:text-xl`}
        >
          {title}
        </p>
        <p
          className="text-lg group-hover:text-color-text-1 transition-colors duration-300 ease-in-out
        max-2xl:text-base"
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
