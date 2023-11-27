"use client";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { ILangPropsToComponent, TLanguages } from "types";
import { useRouter, usePathname } from "next/navigation";

export default function HeaderLangDropdown({ lang }: ILangPropsToComponent) {
  const [language, setLanguage] = useState<TLanguages>(lang);
  const pathname = usePathname();
  const { push } = useRouter();
  return (
    <Select
      value={language}
      onChange={(e) => {
        setLanguage(e.target.value as TLanguages);

        push(
          `/${e.target.value as TLanguages}/${pathname.split("/")[2] || ""}`
        );
      }}
      className="cursor-pointer"
      focusBorderColor="transparent"
      border={"none"}
      cursor={"pointer"}
    >
      <option value="en" className="bg-color-bg text-color-text-3">
        English
      </option>
      <option value="ru" className="bg-color-bg text-color-text-3">
        Russian
      </option>
      <option value="tm" className="bg-color-bg text-color-text-3">
        Turkmen
      </option>
    </Select>
  );
}
