import React, { useState, useEffect } from 'react';
import { arrayOfQuantities } from './helpers';

function AddToCart({ inventory }) {
  console.log('addtocart; ', inventory);
  const [currentSize, setCurrentSize] = useState('');
  const [maxQuantity, setMaxQuantity] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const inven = Object.values(inventory);
  const [cartCount, setCartCount] = useState(0);

  const sizeOptions = () => (
    inven.map((size, index) => (
      (size.quantity !== 0)
        ? <option data-testid={`${size.size}`} key={index} value={size.size}>{size.size}</option>
        : null
    ))
  );

  const quantityOptions = (quantity) => {
    const quant = inven.filter((size) => size.quantity === quantity);
    const maxCount = quant[0].quantity;
    const arr = arrayOfQuantities(maxCount);
    return arr.map((number, index) => (
      <option className="text-black bg-red-600 border-2 border-black font-bold py-4 px-4 mr-2 rounded" key={index} value={number}>{number}</option>
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
    setCartCount(cartCount + 1);
  };
  return (
    <div data-testid="quantityDropDown" className="flex flex-col flex-nowrap w-[80%]">
      <div className="flex flex-row mb-2">
        <select data-testid="sizeDropdown" className="w-[45%] bg-transparent text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded" id={currentSize} value={currentSize} onChange={handleChange}>
          <option value="canPick">SELECT SIZE</option>
          {sizeOptions()}
        </select>
        <select className="w-[45%] text-black border-2 bg-transparent border-black font-bold py-4 px-4 mr-1 rounded" id={maxQuantity} value={currentQuantity} onChange={handleQuantityChange}>
          {(!maxQuantity)
            ? <option value="Quantity">QUANTITY</option>
            : quantityOptions(maxQuantity)}
        </select>
      </div>
      <div className="flex flex-row">
        <button
          data-testid="addToCart"
          className="text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded w-[60%]"
          type="button"
          value="addToBag"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
        <button
          data-testid="favorite"
          className="text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded w-[40%]"
          type="button"
        >
          FAVORITE
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
