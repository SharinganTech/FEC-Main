import React, { useState, useContext } from 'react';
import Features from './Features';
import { CurrentProduct } from './Overview';

function ProductOverview() {
  const product = useContext(CurrentProduct);
  if (product) {
    return (
      <div data-testid="des-slogan">
        <p>{product.slogan}</p>
        <p>{product.description}</p>
      </div>
    );
  }
}

export default ProductOverview;
