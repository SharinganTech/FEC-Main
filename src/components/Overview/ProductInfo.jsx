import React from 'react';
import Price from './Price';

function ProductInfo({ currentStyle, category, name }) {
  return (
    <div>
      <p>
        Star rating -
        <a href="https://www.google.com/">Read all [#] Reviews!</a>
      </p>
      <div className="text-[1.30rem] text-pastelBlack">{category}</div>
      <div className="text-[2.25rem] font-bold">{name}</div>
      <Price currentStyle={currentStyle} />

    </div>
  );
}

export default ProductInfo;
