
import Image, { StaticImageData } from 'next/image';
import { Products } from '@/app/utils/mocks';
import { Product } from '@/app/utils/types';
import { Mail, ShoppingCart } from "lucide-react"
import { Button } from '@/components/ui/button'
import QuantitySelector from '@/components/QuantitySelector';

function getProductsById(id: number) {
  return Products.filter((product) => product.id == id);
}

export default function Page({ params }: { params: { id: number } }) {
  const result = getProductsById(params.id);

const Sizes = ['XS', 'S', 'M', 'L', 'XL'];


  function handleAddToCart() {
    // Perform other logic related to adding to the cart
    // ...

    // Dispatch action to increment cart count
   
  }

  return (
    <div className="flex justify-center  py-4 min-h-screen ">
      {result.length > 0 ? (
        result.map((product:Product) => (
          // Left side of the screen Image div
          <div key={product.id} className='flex gap-5' >
            <div>
              <Image src={product.img as StaticImageData} 
              alt={product.title}
              width={600} height={700} />
            </div>
            {/* Right side content */}
            <div>
               <h1 className=" mt-7 text-3xl font-bold underline"> 
              {product.title}
               </h1>
               <h2 className='font-semibold text-base text-gray-400'>{product.type}</h2>
               {/* Select Size Div */}
               <div >
                    <p className="font-s mt-8 font-semibold">SELECT SIZE</p>
               {
                <div className='flex mt-5 gap-6'>
                {Sizes.map(size =>(
                  <div key={size}>
                    <div className='h-10 w-10 bg-gray-200 rounded-full 
                    hover:bg-blue-200 duration-300 boder-2 shadow-md flex 
                    center cursor-pointer'>
                      <span>{size}</span>  
                    </div>
                  </div>
                ))}
                </div>
               }
               </div>

                <div className='flex gap-10 mt-10'>
                  <h3 className=' font-bold'> Quantity: </h3>
                    <div>
                    < QuantitySelector /> 
                    </div>
                
                </div>  
                   {/* Add to cart and price tag */}
                 <div className='mt-5 flex item-center justify-center'>
                 <Button  className=' hover:bg-slate-700 text-white font-bold py-2 px-4 border-b-4 border-slate-900 rounded-md'>
                    <ShoppingCart className="mr-2 h-4 w-4 font-bold" /> Add to Cart 
                 </Button>
                <p className='text-2xl px-5 font-bold '>Price: ${product.price.toFixed(2)}</p>
                </div>
            </div>
          </div>
        ))
      ) : (
        <p>No product found with ID: {params.id}</p>
      )}
    </div>
  );
}
