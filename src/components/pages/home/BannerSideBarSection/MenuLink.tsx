"use client";

import { IHomeSideBarMenuLink } from "@/shared/types";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight as ArrowIcon } from "react-icons/md";

export default function MenuLink({
  menuItems,
  menuName,
}: IHomeSideBarMenuLink) {
  return (
    <Menu placement="right-start">
      <MenuButton className="w-full">
        <div className="flex items-center w-full justify-between capitalize gap-5 whitespace-nowrap">
          <p>{menuName}</p>
          <ArrowIcon />
        </div>
      </MenuButton>
      <MenuList className="grid grid-cols-5 gap-1">
        {menuItems.map((menuItem, i) => (
          <MenuItem
            key={i}
            className="duration-300 transition-colors hover:bg-gray-200 rounded-sm"
          >
            <Link href={`/en/${menuItem.href}`}>{menuItem.name}</Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
