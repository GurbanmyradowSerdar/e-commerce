"use client";
import { IFooterLink } from "types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterLink({ href, text, isIndependent }: IFooterLink) {
  const locale = usePathname().split("/")[1];

  return (
    <Link
      href={isIndependent ? href : `/${locale}/${href}`}
      className="hover:text-color-text-2 transition-colors duration-300 ease-in-out text-base max-2xl:text-sm"
    >
      {text}
    </Link>
  );
}
