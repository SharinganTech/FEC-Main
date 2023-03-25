import React from 'react';
import Price from './Price';

function ProductInfo({ currentStyle, category, name }) {
  return (
    <div className="flex flex-col justify-start max-h-[215px]">
      <div className="text-[1.45rem] font-pastelBlack">{category}</div>
      <div className="text-[2.50rem] font-bold">{name}</div>
      <Price currentStyle={currentStyle} />
    </div>
  );
}

export default ProductInfo;
