import React, { useState } from 'react';
import { arrayOfQuantities } from './helpers';

function AddToCart({ inventory }) {
  // console.log('addtocart; ', inventory);
  const [currentSize, setCurrentSize] = useState('');
  const [maxQuantity, setMaxQuantity] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState(null);
  const [styleDisabled, setStyleDisabled] = useState(false);
  const inven = Object.values(inventory);

  const sizeOptions = () => (
    inven.map((size, index) => (
      (size.quantity !== 0)
        ? <option key={index} value={size.size}>{size.size}</option>
        : null
    ))
  );

  const quantityOptions = (quantity) => {
    const quant = inven.filter((size) => size.quantity === quantity);
    const maxCount = quant[0].quantity;
    const arr = arrayOfQuantities(maxCount);
    return arr.map((number, index) => (
      <option key={index} value={number}>{number}</option>
    ));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentSize(e.target.value);

    const quant = inven.filter((size) => (size.size === e.target.value));
    setMaxQuantity(quant[0].quantity);
  };

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setCurrentQuantity(e.target.value);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (currentQuantity && currentSize) {
      const cart = { size: currentSize, quantity: currentQuantity };
      console.log('my cart: ', cart);
    }
  };
  return (
    <div className="flex flex-wrap w-[425px]">
      <select className="boarder-solid border-black border-4 bg-white m-[10px] h-[60px] w-[200px] text-center" id={currentSize} value={currentSize} onChange={handleChange}>
        <option value="">{!styleDisabled ? <span>Select Size</span> : <span>OUT OF STOCK</span>}</option>
        {sizeOptions()}
      </select>
      <select className="boarder-solid border-black border-4 bg-white m-[10px] h-[60px] w-[125px] text-center" id={maxQuantity} value={currentQuantity} onChange={handleQuantityChange}>
        {(!maxQuantity)
          ? <option value="">QUANTITY</option>
          : quantityOptions(maxQuantity)}
      </select>
      <button
        className="boarder-solid border-black border-4 bg-white m-[10px] h-[60px] w-[125px] text-center"
        type="button"
        value=""
        onClick={handleAddToCart}
      >
        ADD TO BAG +
      </button>
      <button
        className="boarder-solid border-black border-4 bg-white m-[10px] h-[60px] w-[200px] text-center"
        type="button"
      >
        ADD TO FAVORITE +
      </button>
    </div>
  );
}

export default AddToCart;
