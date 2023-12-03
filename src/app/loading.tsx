import { poppinsMediumFont } from "fonts";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-black/5">
      <div className="flex flex-col items-center gap-5">
        <div
          className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-color-secondary-2 motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
        <div className={`text-3xl ${poppinsMediumFont.className}`}>
          Loading please wait...
        </div>
      </div>
    </div>
  );
}
