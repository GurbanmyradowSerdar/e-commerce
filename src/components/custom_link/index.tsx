"use client";

import { ICustomLink } from "types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ children, className, href }: ICustomLink) {
  const pathname = usePathname();
  return (
    <Link className={className} href={`${pathname}/${href}`}>
      {children}
    </Link>
  );
}
