import { IInputWithLabel } from "@/shared/types";
import { twMerge as tw } from "tailwind-merge";

export default function InputWithLabel({
  inputProps,
  label,
  labelSpan,
  className,
  error,
}: IInputWithLabel) {
  return (
    <div className="flex flex-col items-start gap-2 text-lg text-color-text-2">
      <label htmlFor={inputProps.id}>
        {label}
        <span className="text-color-secondary-2">{labelSpan}</span>
      </label>
      <input
        {...inputProps}
        className={tw(
          "bg-color-secondary p-3 px-6 w-[400px] text-color-text-3 duration-300 transition-colors focus-within:outline-color-secondary-2",
          className
        )}
      />
    </div>
  );
}
