"use client";
import { IFooterLink } from "@/shared/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterLink({ href, text, isIndependent }: IFooterLink) {
  const pathname = usePathname();

  return (
    <Link href={isIndependent ? href : `${pathname}/${href}`}>{text}</Link>
  );
}
