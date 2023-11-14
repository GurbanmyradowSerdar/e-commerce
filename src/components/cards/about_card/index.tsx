import { IAboutCard } from "types";
import { interBoldFont } from "fonts";

export default function AboutCard({ Icon, subtitle, title }: IAboutCard) {
  return (
    <div
      className="flex flex-col flex-[0_0_20%] items-center py-5 px-12 border-2 border-color-divider rounded-md gap-4
      group transition-colors duration-300 ease-in-out hover:border-transparent hover:bg-color-secondary-2"
    >
      {Icon}
      <div className="space-y-3 text-center">
        <p
          className={`${interBoldFont.className} text-4xl group-hover:text-color-text-1 transition-colors duration-300 ease-in-out`}
        >
          {title}
        </p>
        <p className="text-lg group-hover:text-color-text-1 transition-colors duration-300 ease-in-out">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
