import React, { useEffect, useContext, useState } from 'react';
import { ProductContext } from '../App';
import axios from 'axios';

function ProductInfo({ prodDetails }) {
  return (
    <div>
      <p>
        Star rating -
        <a href="https://www.google.com/">Read all [#] Reviews!</a>
      </p>
      <h3>{prodDetails.category}</h3>
      <h2>{prodDetails.title}</h2>

    </div>
  );
}

export default ProductInfo;
