import Image from "next/image";
import Hero from "@/components/Hero";
import Main_Hero from "@/views/page";
import { ProductList } from "@/views/productlist";
import Promotions from "@/components/Promotions";
import NewsLetter from "@/components/NewsLetter";
import MySwiperComponent from "@/components/MySwiperComponent";
import ProductDescription from "@/components/productDiscription";
export default function Home() {
  return (
    <div className="min-h-screen mt-10 px-10">
      {/* <Hero /> */}
      <Main_Hero />
      <Promotions />
      <div className="product">
      <h3 className="text-blue-600 font-bold center mt-20">PRODUCTS</h3>
      <h1 className="text-4xl center font-bold mt-10">Check What We Have</h1>    
    </div>
      {/* <Productlist  /> */}
      <MySwiperComponent />
      <ProductDescription/>
      <NewsLetter />

    </div>
  );
}
