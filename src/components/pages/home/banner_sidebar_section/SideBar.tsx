import Link from "next/link";
import MenuLink from "./MenuLink";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import { getDict } from "@/dictionaries/dictionaries";

export default async function SideBar() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);

  return (
    <aside className="text-color-text-3 text-lg z-10 flex flex-col items-start gap-4 mt-10 pr-4">
      {/* links with menu */}
      {dict.pages.index.sideMenu.otherMenu.map((item, i) => (
        <MenuLink key={i} {...item} />
      ))}

      {/* usual links */}
      {dict.pages.index.sideMenu.plainMenu.map((item, i) => (
        <Link href={`/${locale}/${item.href}`} className="capitalize" key={i}>
          {item.name}
        </Link>
      ))}
    </aside>
  );
}
