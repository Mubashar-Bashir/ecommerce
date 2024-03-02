'use client'
import { Products } from '@/app/utils/mocks';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { StaticImageData } from 'next/image';
import ProductCard from './ProductCard';

// Add your necessary imports

function MySwiperComponent() {
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={0}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            img={product.img as StaticImageData}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MySwiperComponent;
