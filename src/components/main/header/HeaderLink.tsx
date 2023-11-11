"use client";
import { IHeaderLink } from "types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLink({ href, text }: IHeaderLink) {
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname}/${href}`}
      className={`capitalize ${
        pathname.includes(href) ? "underline underline-offset-4" : ""
      } `}
    >
      {text}
    </Link>
  );
}
