import { ICategoryCard, TIconName } from "types";
import CameraIcon from "@/components/cards/category_card/icons/CameraIcon";
import ComputerIcon from "@/components/cards/category_card/icons/ComputerIcon";
import GamingIcon from "@/components/cards/category_card/icons/GamingIcon";
import HeadPhonesIcon from "@/components/cards/category_card/icons/HeadPhonesIcon";
import PhoneIcon from "@/components/cards/category_card/icons/PhoneIcon";
import WatchIcon from "@/components/cards/category_card/icons/WatchIcon";

const iconComponents: { [key in string]: JSX.Element } = {
  CameraIcon: <CameraIcon />,
  ComputerIcon: <ComputerIcon />,
  GamingIcon: <GamingIcon />,
  HeadPhonesIcon: <HeadPhonesIcon />,
  PhoneIcon: <PhoneIcon />,
  WatchIcon: <WatchIcon />,
};

export default function CategoryCard({ icon, title }: ICategoryCard) {
  return (
    <div
      className="flex flex-col items-center py-5 px-12 border-2 border-color-divider rounded-md gap-4
    group cursor-pointer transition-colors duration-300 ease-in-out hover:border-transparent hover:bg-color-secondary-2
    active:bg-color-button-1-hover text-center"
    >
      {iconComponents[icon]}
      <p className="text-lg capitalize group-hover:text-color-text-1 transition-colors duration-300 ease-in-out">
        {title}
      </p>
    </div>
  );
}
