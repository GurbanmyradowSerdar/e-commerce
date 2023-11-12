import { IInputWithoutLabel } from "types";

export default function InputWithoutLabel({ props }: IInputWithoutLabel) {
  return (
    <input
      {...props}
      className="placeholder:text-color-text-2 px-4 py-3 bg-color-secondary rounded-sm
      outline-color-secondary duration-300 transition-all flex-[0_0_30%]
      focus-within:outline-2 focus-within:outline-color-primary-1"
    />
  );
}
