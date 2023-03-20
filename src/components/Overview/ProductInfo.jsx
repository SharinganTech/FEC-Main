import React, { useEffect, useContext, useState } from 'react';
import { ProductContext } from '../App';
import axios from 'axios';
import { CurrentProduct } from './Overview';

function ProductInfo() {
  const product = useContext(CurrentProduct);
  return (
    <div>
      <p>
        Star rating -
        <a href="https://www.google.com/">Read all [#] Reviews!</a>
      </p>
      <h3>{product.category}</h3>
      <h2>{product.title}</h2>

    </div>
  );
}

export default ProductInfo;
