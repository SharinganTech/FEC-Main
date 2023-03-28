import React, { useState, useEffect } from 'react';
import { arrayOfQuantities } from './helpers';

function AddToCart({ inventory }) {
  console.log('addtocart; ', inventory);
  const [currentSize, setCurrentSize] = useState('');
  const [maxQuantity, setMaxQuantity] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(0);
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
  };
  return (
    <div data-testid="quantityDropDown" className="flex flex-wrap w-[100%]">
      <select className="text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded" id={currentSize} value={currentSize} onChange={handleChange}>
        <option value="canPick">{!styleDisabled ? 'SELECT SIZE' : 'OUT OF STOCK'}</option>
        {sizeOptions()}
      </select>
      <select className="text-black border-2 border-black font-bold py-4 px-4 mr-1 rounded" id={maxQuantity} value={currentQuantity} onChange={handleQuantityChange}>
        {(!maxQuantity)
          ? <option value="Quantity">QUANTITY</option>
          : quantityOptions(maxQuantity)}
      </select>
      <button
        data-testid="addToBag"
        className="text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded"
        type="button"
        value="addToBag"
        onClick={handleAddToCart}
      >
        ADD TO CART +
      </button>
      <button
        data-testid="favorite"
        className="text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded"
        type="button"
      >
        FAVORITE
      </button>
    </div>
  );
}

export default AddToCart;
