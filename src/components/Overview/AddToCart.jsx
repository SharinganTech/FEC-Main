import React, { useState } from 'react';
import DropDownOptions from './DropDown';
import { arrayOfQuantities } from './helpers';

function AddToCart({ inventory }) {
  // console.log('addtocart; ', inventory);
  const [currentSize, setCurrentSize] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState(null);
  const sizeOptions = () => {
    const inven = Object.values(inventory);
    return inven.map((size, index) => (
      (size.quantity !== 0) ? <option key={index} value={size.size}>{size.size}</option> : <option value="- Select -">- Select -</option>
    ));
  };
  const quantityOptions = (quantity) => {
    if (!quantity) {
      return <option value="pick a size">pick a size</option>;
    }
    const inven = Object.values(inventory);
    // console.log('the size: ', inven);
    const quant = inven.filter((size) => size.quantity === quantity);
    // console.log(quant[0].quantity);
    const maxCount = quant[0].quantity;
    const arr = arrayOfQuantities(maxCount);
<<<<<<< HEAD
    // console.log('result: ', arr);
    return arr.map((number) => (
      (number === 1)
        ? <option selected value={number}>{number}</option>
        : <option value={number}>{number}</option>
=======
    console.log('result: ', arr);
    return arr.map((number, index) => (
      <option key={index} value={number}>{number}</option>
>>>>>>> main
    ));
  };
  const handleChange = (e) => {
    e.preventDefault();
    const inven = Object.values(inventory);
    setCurrentSize(e.target.value);

    const quant = inven.filter((size) => (size.size === e.target.value));
    setCurrentQuantity(quant[0].quantity);
  };
  return (
    <div className="flex flex-wrap w-[425px]">
      <select className="boarder-solid border-black border-4 bg-white m-[10px] h-[60px] w-[200px] text-center" name={currentSize} id={currentSize} value={currentSize} onChange={handleChange}>
        <option value="">Size</option>
        {sizeOptions(null)}
      </select>
      <select className="boarder-solid border-black border-4 bg-white m-[10px] h-[60px] w-[125px] text-center" name="Quantity" id="Quantity" value={currentQuantity}>
        {(!currentQuantity)
          ? <option value="">Quantity</option>
          : quantityOptions(currentQuantity)}
      </select>
      <button className="boarder-solid border-black border-4 bg-white m-[10px] h-[60px] w-[125px] text-center" type="button" value="">ADD TO BAG +</button>
      <button className="boarder-solid border-black border-4 bg-white m-[10px] h-[60px] w-[200px] text-center" type="button">ADD TO FAVORITE +</button>
    </div>
  );
}

export default AddToCart;
