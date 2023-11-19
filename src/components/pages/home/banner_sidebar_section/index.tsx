import SideBar from "./SideBar";
import Banner from "./Banner";
import MainDivider from "@/components/main/dividers";

export default function BannerSideBarSection() {
  return (
    <section className={"flex"}>
      <SideBar />
      <MainDivider dir="vertical" />
      <Banner />
    </section>
  );
}
