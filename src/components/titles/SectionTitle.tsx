import { twMerge as tw } from "tailwind-merge";
import { poppinsSemiBoldFont } from "fonts";

export default function SectionTitle({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-5 bg-color-secondary-2 rounded-sm" />
      <h2
        className={tw(
          "text-lg text-color-secondary-2 capitalize",
          poppinsSemiBoldFont.className
        )}
      >
        {text}
      </h2>
    </div>
  );
}
