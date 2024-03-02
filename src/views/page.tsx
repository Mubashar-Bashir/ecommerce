import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Mail, ShoppingCart } from "lucide-react";
import { Button } from '@/components/ui/button';
import heroImage from '/images/Hero_image.webp';
import Image from 'next/image';

const MainHero = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-y-10 py-6'>
      {/* Left Div */}
      <div className='flex-1'>
      <Badge className='px-5 py-2 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-300 font-bold'>
          Sale 70%
        </Badge>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight mt-5 lg:mt-10">
          An Industrial <br /> Take on <br /> Streetwear
        </h1>
        <p className="leading-7 mt-3 md:mt-6">
          Anyone can beat you, but no one can <br /> beat your outfit as long as you wear <br /> Dine outfits.
        </p>
          {/* Shopping cart */}
          <Button className='mt-5 md:mt-10 hover:bg-slate-700 text-white font-bold py-2 px-4 md:px-6 lg:px-8 border-b-4 border-slate-900 rounded-md'>
          <ShoppingCart className="mr-2 h-4 w-4 md:h-6 md:w-6 font-bold" /> Start Shopping
        </Button>
        <div className='flex mt-6 md:mt-8 gap-x-4 md:gap-x-8'>
          <Image src="/images/Featured1.png" alt='Featured1' height={60} width={60} />
          <Image src="/images/Featured2.webp" alt='Featured2' height={60} width={60} />
          <Image src="/images/Featured3.webp" alt='Featured3' height={60} width={60} />
          <Image src="/images/Featured4.webp" alt='Featured4' height={60} width={60} />
        </div>
      </div>
      {/* Right Div */}
      <div className='relative flex-1 scale-120'>
        <div className='absolute inset-0 flex items-center justify-center bg-red-100 rounded-full'>
          {/* Circle background */}
        </div>
        <div className='relative z-2'>
          <Image
            src="/images/Hero_image.webp"
            alt="Hero Image"
            width={600}
            height={600}
            className='rounded-full'
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default MainHero;
