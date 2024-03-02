import Image, { StaticImageData } from "next/image";
import Link from "next/link";

function ProductCard(props: { title: string, price: number, img: StaticImageData, category: string, id: number }) {
  return (
    <Link href={`/products/${props.id}`}>
      <div className="py-15 mt-20 relative overflow-hidden group">
        <Image
          src={props.img}
          alt={props.title}
          height={300}
          width={300}
          className="w-full h-full object-cover transition-transform transform scale-90 group-hover:scale-110 duration-200 ease-in-out"
        />
        <h3 className="font-bold text-lg center">{props.title}</h3>
        <p className="font-bold text-lg center">${props.price}</p>
      
      </div>
    </Link>
  );
}

export default ProductCard;
