import React, { useContext } from 'react';
import ProductInfo from './ProductInfo';
import { ProductContext } from '../App';

function Overview() {
  const prodId = useContext(ProductContext);

  return (
    <div>
      Hello from Overview
      <ProductInfo />
    </div>
  );
}

export default Overview;
