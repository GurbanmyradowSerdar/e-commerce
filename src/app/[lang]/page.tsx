import BannerButton from "@/components/buttons/BannerButton";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import ArrowButton from "@/components/buttons/arrow_button/ArrowButton";
import CategoryCard from "@/components/cards/category_card";
import PhoneIcon from "@/components/cards/category_card/icons/PhoneIcon";
import ProductCard from "@/components/cards/product_card/ProductCard";
import ServiceCard from "@/components/cards/service_card";
import CustomLink from "@/components/custom_link";
import BannerContent from "@/components/titles/BannerContent";
import SectionDescription from "@/components/titles/SectionDescription";
import SectionTitle from "@/components/titles/SectionTitle";

export default function Home() {
  return (
    <div className="mx-32 h-screen mt-20 flex items-start">
      {/* <ProductCard
        images={["kids-car.png"]}
        name="kids electric car"
        price={960}
        rating={[1, 1, 1, 1, 1]}
        ratingAmount={65}
        colors={["red", "pink"]}
        isNew
        discount={50}
      /> */}

      {/* <CategoryCard title="phones" Icon={<PhoneIcon />} /> */}
      {/* <CustomLink href="all-products">
        <PrimaryButton>view all products</PrimaryButton>
      </CustomLink> */}
      {/* <BannerButton text="shop now" /> */}

      {/* <ArrowButton direction="up" clickHandle={() => {}} /> */}
      {/* <SectionDescription text="explore our products" /> */}
      {/* <SectionTitle text="our products" /> */}
      {/* <BannerContent
        title="playstation 5"
        description="Black and White version of the PS5 coming out on sale."
      /> */}
    </div>
  );
}
