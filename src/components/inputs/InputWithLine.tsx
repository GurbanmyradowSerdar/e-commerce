import { IInputWithoutLabel } from "types";

export default function InputWithLine({ props }: IInputWithoutLabel) {
  return (
    <input
      {...props}
      className="outline-none border-b-2 border-color-divider duration-300 ease-in-out transition-colors focus-within:border-b-color-secondary-2 placeholder:capitalize
      text-lg border-spacing-10"
    />
  );
}
