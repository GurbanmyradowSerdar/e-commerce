import Footer from "@/components/main/footer/Footer";
import MainHeader from "@/components/main/header/MainHeader";
import TopHeader from "@/components/main/header/TopHeader";
import { IChildren } from "@/shared/types";

export default function layout({ children }: IChildren) {
  return (
    <>
      <header>
        <TopHeader />
        <MainHeader />
      </header>
      <main className="flex-grow bg-color-bg text-color-text-3 relative">
        {children}
      </main>
      <Footer />
    </>
  );
}
