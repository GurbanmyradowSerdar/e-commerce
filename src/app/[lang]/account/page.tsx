import NavigationTrain from "@/components/navigation_train";
import AccountSection from "@/components/pages/account";
import { getDict } from "@/dictionaries/dictionaries";
import {
  bottomMarginSaving,
  horizontalMarginLimit,
  topMarginSaving,
} from "@/shared/constants";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import { twMerge as tw } from "tailwind-merge";

export default async function page() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);

  return (
    <div
      className={tw(topMarginSaving, bottomMarginSaving, horizontalMarginLimit)}
    >
      <NavigationTrain />
      <AccountSection dict={dict} />
    </div>
  );
}
