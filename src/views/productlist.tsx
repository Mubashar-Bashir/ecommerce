import ProductCard from "@/components/ProductCard";
import { Products } from "@/app/utils/mocks";
import { StaticImageData } from "next/image";

export const ProductList = () => {
  const ProdSlicer = Products.slice(0, 12);

  return (
    <div className="flex justify-evenly">
      {ProdSlicer.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          img={product.img as StaticImageData}
        />
      ))}
    </div>
  );
};

export default ProductList;
