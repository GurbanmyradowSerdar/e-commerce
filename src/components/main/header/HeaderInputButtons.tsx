"use client";
import { PiHeart as HeartIcon } from "react-icons/pi";
import { GrCart as CartIcon } from "react-icons/gr";
import { FiSearch as SearchIcon } from "react-icons/fi";

export default function HeaderInputButtons() {
  return (
    <>
      <div className="flex items-center bg-color-secondary px-6 py-3 gap-4">
        <input
          type="text"
          placeholder="What are you looking for? "
          className="text-sm placeholder:text-color-text-2 bg-transparent outline-none"
        />
        <SearchIcon className="w-7 h-7 cursor-pointer" />
      </div>
      <HeartIcon className="w-8 h-8 cursor-pointer" />
      <CartIcon className="w-7 h-7 cursor-pointer" />
    </>
  );
}
