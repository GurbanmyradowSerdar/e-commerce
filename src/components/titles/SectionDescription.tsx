import { interSemiboldFont } from "fonts";
import { twMerge as tw } from "tailwind-merge";

export default function SectionDescription({ text }: { text: string }) {
  return (
    <h2
      className={tw(
        "text-[40px] text-color-text-3 capitalize",
        interSemiboldFont.className
      )}
    >
      {text}
    </h2>
  );
}
