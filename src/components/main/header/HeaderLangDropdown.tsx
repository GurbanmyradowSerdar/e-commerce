"use client";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { TLanguages } from "types";

export default function HeaderLangDropdown() {
  const [lang, setLang] = useState<TLanguages>("en");

  return (
    <Select
      value={lang}
      onChange={(e) => setLang(e.target.value as TLanguages)}
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
