import React, { useState } from 'react';
import { arrayOfQuantities } from './helpers';

function AddToCart({ inventory, incrementCart }) {
  const [currentSize, setCurrentSize] = useState('');
  const [maxQuantity, setMaxQuantity] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [liked, setLiked] = useState(false);
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
      (index <= 14)
        ? <option key={index} value={number}>{number}</option>
        : null
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

  const likeItem = (e) => {
    e.preventDefault();
    setLiked(!liked);
  };

  return (
    <div data-testid="quantityDropDown" className="flex flex-col flex-nowrap w-[320px]">
      <div className="flex flex-row mb-2">
        <select data-testid="sizeDropdown" className="w-[50%] bg-transparent text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded" id={currentSize} value={currentSize} onChange={handleChange}>
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
          onClick={incrementCart}
        >
          ADD TO CART
        </button>
        <button
          data-testid="favorite"
          className={liked
            ? 'bg-[#926AA6] text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded w-[40%]'
            : 'text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded w-[40%]'}
          type="button"
          onClick={likeItem}
        >
          FAVORITE
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
