import "server-only";
import { TLanguages } from "@/shared/types";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  tm: () => import("./tm.json").then((module) => module.default),
  ru: () => import("./ru.json").then((module) => module.default),
};

export const getDict = async (locale: TLanguages) => {
  try {
    return dictionaries[locale]();
  } catch (error) {
    return dictionaries.en();
  }
};
