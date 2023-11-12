import BannerButton from "@/components/buttons/BannerButton";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import CategoryCard from "@/components/cards/category_card";
import PhoneIcon from "@/components/cards/category_card/icons/PhoneIcon";
import ProductCard from "@/components/cards/product_card/ProductCard";
import CustomLink from "@/components/custom_link";

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

      {/* <OutlinedButton>return to shop</OutlinedButton> */}
      {/* <SecondaryButton>xs</SecondaryButton> */}
    </div>
  );
}
