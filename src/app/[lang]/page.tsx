import ProductCard from "@/components/cards/ProductCard";

export default function Home() {
  return (
    <div className="mx-32 h-screen mt-20">
      <ProductCard
        images={["kids-car.png"]}
        name="kids electric car"
        price={960}
        rating={[1, 1, 1, 1, 1]}
        ratingAmount={65}
        colors={["red", "pink"]}
        isNew
      />
    </div>
  );
}
