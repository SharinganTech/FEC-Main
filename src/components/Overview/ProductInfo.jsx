import React, { useEffect, useContext, useState } from 'react';
import Price from './Price';
import { CurrentProduct } from './Overview';

function ProductInfo({ currentStyle }) {
  const product = useContext(CurrentProduct);
  console.log(product);
  return (
    <div>
      <p>
        Star rating -
        <a href="https://www.google.com/">Read all [#] Reviews!</a>
      </p>
      <h3>{product.category}</h3>
      <h1>{product.name}</h1>
      <h2>{product.title}</h2>
      <Price currentStyle={currentStyle} />

    </div>
  );
}

export default ProductInfo;
