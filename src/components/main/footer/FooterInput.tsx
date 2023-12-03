import { getDict } from "@/dictionaries/dictionaries";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import { VscSend as SendIcon } from "react-icons/vsc";

export default async function FooterInput() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);
  return (
    <div
      className="flex items-center justify-between gap-3 border-2 border-color-primary px-4 py-3 rounded-sm text-base
    max-2xl:p-2 max-2xl:text-sm"
    >
      <input
        type="email"
        placeholder={dict.footer.otherTexts.emailPlaceholder}
        className="bg-transparent placeholder:text-color-text-2 outline-none border-none"
      />
      <SendIcon
        className="text-color-primary w-6 h-6 text-lg cursor-pointer
      max-2xl:w-5 max-2xl:h-5"
      />
    </div>
  );
}
