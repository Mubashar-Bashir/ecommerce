"use client"

import { useState } from 'react';

const QuantitySelector = () => 
{
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
    <div className="flex center space-x-5  ">
      <button
        className=" bg-gray-200 hover:bg-gray-300 center shadow rounded-full h-8 w-8"
        onClick={handleDecrement}> 
        -
     </button>
      <span >{quantity}</span>
      <button className="bg-gray-200 hover:bg-gray-300 text-black center h-8 w-8 shadow  rounded-full"
        onClick={handleIncrement} >
        +
      </button>
    </div></>
  );
};

export default QuantitySelector;
