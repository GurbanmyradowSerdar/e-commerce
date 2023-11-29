"use client";
import { IHeaderLink } from "types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLink({ href, text }: IHeaderLink) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <Link
      href={`/${locale}/${href}`}
      className={`capitalize text-base max-2xl:text-sm ${
        pathname.split("/")[2] === href
          ? "underline underline-offset-4"
          : pathname.split("/").length === 2 && href.length === 0
          ? "underline underline-offset-4"
          : ""
      } `}
    >
      {text}
    </Link>
  );
}
