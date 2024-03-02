import React from 'react';

const ProductDescription = () => {
  return (
    <div className='product-description justify-between mt-10 px-10 bg-gray-100 '>
      <div>
        <h2 className='mt-20 mb-10 text-3xl font-bold text-center'>
          Unique and Authentic Vintage Designer Jewellery
        </h2>
      </div>
      <div className='main-container flex gap-10 justify-center'>
        <div className='1st-column-1stdiv flex-rows-2 '>
          <div className='1st-col-1st-row'>
            <h2 className='font-semibold'>
              Using Good Quality Materials
            </h2>
            <h3 className='text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
          </div>
          <div className='1st-col-2ndt-row mt-5'>
            <h2 className='font-semibold'>
              Modern Fashion Design
            </h2>
            <h3 className='text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
          </div>
        </div>
        <div className='2nd-col-1st-row '>
            <div className='1st-column-1stdiv flex-rows-2 '>
        
                <h2 className='font-semibold'>
                    100% Handmade Products
                </h2>
                <h3 className='text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
            </div>
            <div className='1st-col-2ndt-row mt-5'>
            <h2 className='font-semibold'>
            Discount for Bulk Orders
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
          </div>
        </div>

        <div className='3rd-col-1st-row bg-blue-400 h-full w-full'>
          <div>
            <img src="/images/p9.webp" alt="Product"
            height={400}
            width={400} />
          </div>
        </div>
        <div className='4th-col-1st-row h-full w-medium flex-end '>
          <h2 className='font-semibold'>
            Ethically Crafted
          </h2>
          <h3 className='text-justify'>
            This piece is ethically crafted in our small family-owned workshop in Peru
            with unmatched attention to detail and care. The Natural color is the actual
            natural color of the fiber, undyed and 100% traceable.
          </h3>
          <button className='px-5 mt-10 border bg-gray-800 rounded hover:bg-gray-400 text-white'>
            See All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
