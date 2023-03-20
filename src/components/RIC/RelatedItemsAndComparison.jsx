import React, {useState, useContext} from 'react';
import { ProductContext } from '../App';

function RelatedItemsAndComparison() {
  const prodId = useContext(ProductContext);
  console.log(prodId);

  return (
    <div> </div>
  );
}

export default RelatedItemsAndComparison;
