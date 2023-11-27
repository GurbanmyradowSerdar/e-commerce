import { ICategoryCard } from "types";

export default function CategoryCard({ Icon, title }: ICategoryCard) {
  return (
    <div
      className="flex flex-col items-center py-5 px-12 border-2 border-color-divider rounded-md gap-4
    group cursor-pointer transition-colors duration-300 ease-in-out hover:border-transparent hover:bg-color-secondary-2
    active:bg-color-button-1-hover text-center"
    >
      {Icon}
      <p className="text-lg capitalize group-hover:text-color-text-1 transition-colors duration-300 ease-in-out">
        {title}
      </p>
    </div>
  );
}
