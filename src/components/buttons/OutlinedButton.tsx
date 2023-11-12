import { IPrimaryButton } from "types";
import SecondaryButton from "./SecondaryButton";

export default function OutlinedButton({ children }: IPrimaryButton) {
  return (
    <SecondaryButton
      className="bg-color-bg text-color-text-3 capitalize py-4 px-12 rounded-md
    hover:text-color-text-2 hover:border-color-text-2 hover:bg-color-bg"
    >
      {children}
    </SecondaryButton>
  );
}
