import TopArrowButton from "@/components/buttons/arrow_button/ArrowButton";
import BannerSideBarSection from "@/components/pages/home/BannerSideBarSection";
import { bottomMarginSaving, horizontalMarginLimit } from "@/shared/constants";
import { twMerge as tw } from "tailwind-merge";

export default function Home() {
  return (
    <div className={tw(bottomMarginSaving, horizontalMarginLimit)}>
      <TopArrowButton
        direction="up"
        className="fixed bottom-12 right-20"
        isScrolling
      />
      <BannerSideBarSection />
    </div>
  );
}

// {/* <ProductCard
//         images={["kids-car.png"]}
//         name="kids electric car"
//         price={960}
//         rating={[1, 1, 1, 1, 1]}
//         ratingAmount={65}
//         colors={["red", "pink"]}
//         isNew
//         discount={50}
//       /> */}

//       {/* <CategoryCard title="phones" Icon={<PhoneIcon />} /> */}
//       {/* <CustomLink href="all-products">
//         <PrimaryButton>view all products</PrimaryButton>
//       </CustomLink> */}
//       {/* <BannerButton text="shop now" /> */}

//       {/* <ArrowButton direction="up" clickHandle={() => {}} /> */}
//       {/* <SectionDescription text="explore our products" /> */}
//       {/* <SectionTitle text="our products" /> */}
//       {/* <BannerContent
//         title="playstation 5"
//         description="Black and White version of the PS5 coming out on sale."
//       /> */}
