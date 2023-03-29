import React from 'react';
import Price from './Price';

function ProductInfo({ currentStyle, category, name }) {
  return (
    <div className="flex flex-col justify-start">
      <p className="text-[1rem] font-pastelBlack">{category}</p>
      <p className="text-[2rem] font-bold">{name}</p>
      <Price currentStyle={currentStyle} />
    </div>
  );
}

export default ProductInfo;
