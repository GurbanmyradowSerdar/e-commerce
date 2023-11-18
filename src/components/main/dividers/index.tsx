import { IMainDivider } from "@/shared/types";

export default function MainDivider({ dir }: IMainDivider) {
  return dir === "horizontal" ? (
    <div className="bg-color-divider h-px min-w-full" />
  ) : (
    <div className="bg-color-divider w-px min-h-full" />
  );
}
