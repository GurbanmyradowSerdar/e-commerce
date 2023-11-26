"use client";
import { IHeaderLink } from "types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLink({ href, text }: IHeaderLink) {
  const pathname = usePathname();

  return (
    <Link
      href={`/en${href}`}
      className={`capitalize ${
        pathname.split("/")[2] === href.slice(1)
          ? "underline underline-offset-4"
          : pathname.split("/").length === 2 && href.length === 1
          ? "underline underline-offset-4"
          : ""
      } `}
    >
      {text}
    </Link>
  );
}
