import { APP_LINKS } from "@/app/utils/constants";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

function Header() {
  return (
    <>
    <div className=" flex justify-between items-center py-5 px-14">
      <div>
        <Link href={"/"}>
        <Image
          src={"/images/Logo.webp"}
          
          alt="logo-image"
          width={140}
          height={25}
        /></Link>
      </div>
      <div className="flex gap-10 items-center ">
      {APP_LINKS.map((link, index) => (
  <Link href={link.href} key={index} passHref>
    <div className="font-semibold cursor-pointer transition-colors duration-300 hover:text-blue-500 active:text-blue-500">
      {link.name}
    </div>
  </Link>
))}

      </div>
      <div> 
        <Input  placeholder="Search Products" className="h-8 w-15" />
        {/* <Search /> */}
      </div>
      
      <div className="w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center relative">
        <div className="w-4 h-4 rounded-full flex justify-center items-center bg-red-500 absolute right-1 top-0">
          <p className="text-white text-xs">0</p>
        
        </div>
        <ShoppingCart />
      </div>
    </div>
    </>
  );
}

export default Header;