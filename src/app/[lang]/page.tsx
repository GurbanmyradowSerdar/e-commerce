import CategoryCard from "@/components/cards/category_card";
import PhoneIcon from "@/components/cards/category_card/icons/PhoneIcon";
import ProductCard from "@/components/cards/product_card/ProductCard";

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
      /> */}

      {/* <CategoryCard title="phones" Icon={<PhoneIcon />} /> */}
    </div>
  );
}
