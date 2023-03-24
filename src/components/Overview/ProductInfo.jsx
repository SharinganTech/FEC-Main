import React from 'react';
import Price from './Price';

function ProductInfo({ currentStyle, category, name }) {
  return (
    <div className="flex flex-col justify-center h-[215px]">
      <p>
        Star rating -
        <a href="https://www.google.com/">Read all [#] Reviews!</a>
      </p>
      <div className="text-[1.45rem] font-pastelBlack">{category}</div>
      <div className="text-[2.50rem] font-bold">{name}</div>
      <Price currentStyle={currentStyle} />

    </div>
  );
}

export default ProductInfo;
