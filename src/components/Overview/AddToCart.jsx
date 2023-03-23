import React, { useState } from 'react';
import DropDownOptions from './DropDown';
import { arrayOfQuantities } from './helpers';

function AddToCart({ inventory }) {
  console.log('addtocart; ', inventory);
  const [currentSize, setCurrentSize] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState(null);
  const sizeOptions = () => {
    const inven = Object.values(inventory);
    return inven.map((size) => (
      (size.quantity !== 0) ? <option value={size.size}>{size.size}</option> : <option value="- Select -">- Select -</option>
    ));
  };
  const quantityOptions = (quantity) => {
    if (!quantity) {
      return <option value="pick a size">pick a size</option>;
    }
    const inven = Object.values(inventory);
    console.log('the size: ', inven);
    const quant = inven.filter((size) => size.quantity === quantity);
    console.log(quant[0].quantity);
    const maxCount = quant[0].quantity;
    const arr = arrayOfQuantities(maxCount);
    console.log('result: ', arr);
    return arr.map((number) => (
      (number === 1)
        ? <option selected value={number}>{number}</option>
        : <option value={number}>{number}</option>
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
    <div>
      <select name={currentSize} id={currentSize} value={currentSize} onChange={handleChange}>
        <option value="">-- Select --</option>
        {sizeOptions(null)}
      </select>
      <select name="Quantity" id="Quantity" value={currentQuantity}>
        {quantityOptions(currentQuantity)}
      </select>
    </div>
  );
}

export default AddToCart;
