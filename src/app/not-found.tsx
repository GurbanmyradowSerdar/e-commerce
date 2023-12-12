import PrimaryButton from "@/components/buttons/PrimaryButton";
import Footer from "@/components/main/footer/Footer";
import MainHeader from "@/components/main/header/MainHeader";
import TopHeader from "@/components/main/header/TopHeader";
import NavigationTrain from "@/components/navigation_train";
import { getDict } from "@/dictionaries/dictionaries";
import { horizontalMarginLimit, topMarginSaving } from "@/shared/constants";
import { getLocaleInServer } from "@/shared/utils";
import { interMediumFont } from "fonts";
import { headers } from "next/headers";
import Link from "next/link";
import { twMerge as tw } from "tailwind-merge";

export default async function NotFound() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);
  return (
    <>
      <header>
        <TopHeader />
        <MainHeader />
      </header>
      <main className="flex-grow bg-color-bg text-color-text-3 relative">
        <div
          className={tw(
            "flex flex-col items-center justify-center gap-20 min-h-[40dvh] mb-28",
            topMarginSaving,
            horizontalMarginLimit
          )}
        >
          <NavigationTrain isNotFound />
          <div className="flex flex-col text-center gap-10">
            <h1
              className={`${interMediumFont.className} text-9xl capitalize max-2xl:text-7xl`}
            >
              {dict.pages.notFound.title}
            </h1>
            <h5 className="text-lg">{dict.pages.notFound.description}</h5>
          </div>
          <Link href={`/${locale}`}>
            <PrimaryButton>{dict.pages.notFound.button}</PrimaryButton>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
