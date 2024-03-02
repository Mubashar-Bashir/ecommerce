import { Products } from "@/app/utils/mocks";
import ProductCard from "@/components/ProductCard";
import { StaticImageData } from "next/image";

const getProductsByCategory = (category: string) => {
  if (category === "products") {
    return Products.filter((product) => 
    product.category === "products"
    ||product.category ==='male'
    ||product.category ==='female'
    ||product.category ==='kids'
    );
  } else {
    return Products.filter((product) => product.category === category);
  }
};

export default function Page({ params }: { params: { slug?: string } }) {
  const result = params?.slug ? getProductsByCategory(params.slug) : [];

  return (
    <>
      <div className="flex justify-evenly mt-16 py-10 flex-wrap">
        {result.length > 0 ? (
          result.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              img={product.img as StaticImageData}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  );
}
