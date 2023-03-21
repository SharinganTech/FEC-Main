import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Overview from './Overview';
import RatingsAndReviews from './RR';
import QA from './QA';
import RelatedItemsAndComparison from './RIC';

// const fs = require('fs');
// const dotenv = require('dotenv');

// dotenv.config({ path: '.env' });
// console.log(process.env.GITHUB_TOKEN);

export const ProductContext = createContext(null);

function App() {
  const [productId, setProductId] = useState(0);

  useEffect(() => {
    axios
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {
        headers: {
          Authorization: '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',
        },
      })
      .then((result) => {
        // console.log('results data', result.data);
        setProductId(result.data[0].id);
      })
      .catch((err) => console.error('Error in getting data', err));
  }, []);

  return (
    <ProductContext.Provider value={productId}>
      <Overview />
      <RelatedItemsAndComparison />
      <QA />
      <RatingsAndReviews />
    </ProductContext.Provider>
  );
}

export default App;
