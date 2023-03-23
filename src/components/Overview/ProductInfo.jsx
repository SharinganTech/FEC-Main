import React, { useEffect, useContext, useState } from 'react';
import Price from './Price';
import { CurrentProduct } from './Overview';

function ProductInfo({ currentStyle }) {
  const product = useContext(CurrentProduct);
  return (
    <div>
      <p>
        Star rating -
        <a href="https://www.google.com/">Read all [#] Reviews!</a>
      </p>
      <div className="text-[1.30rem]">{product.category}</div>
      <div className="text-[2.25rem] font-bold">{product.name}</div>
      <Price currentStyle={currentStyle} />

    </div>
  );
}

export default ProductInfo;
