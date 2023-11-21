import Link from "next/link";
import MenuLink from "./MenuLink";
import { homeSideBarItems } from "@/data";

export default function SideBar() {
  return (
    <aside className="text-color-text-3 text-lg z-10 flex flex-col items-start gap-4 mt-10 pr-4">
      {/* links with menu */}
      {homeSideBarItems[1].map((item, i) => (
        <MenuLink key={i} {...item} />
      ))}

      {/* usual links */}
      {homeSideBarItems[0].map((item, i) => (
        <Link href={`/en/${item.href}`} className="capitalize" key={i}>
          {item.name}
        </Link>
      ))}
    </aside>
  );
}
