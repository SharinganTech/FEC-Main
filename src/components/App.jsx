import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Overview from './Overview';
import RatingsAndReviews from './RR';
// import QA from './QA';
// import RelatedItemsAndComparison from './RIC';
import ProductContext from '../contexts/ProductContext';

// const useFetchData = async (url, options) => {
//   const res = await axios.get(url, { headers: { Authorization: 'key'}, ...options})

//   return res.json()
// }

function App() {
  const [productId, setProductId] = useState(0);

  useEffect(() => {
    axios
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {
        headers: {
          Authorization: process.env.AUTH_TOKEN,
        },
        params: {
          count: 10,
        },
      })
      .then((result) => {
        console.log('results data', result.data);
        setProductId(result.data[0].id);
      })
      .catch((err) => {
        throw new Error('Error in getting data', err);
      });
  }, []);

  return (
    <ProductContext.Provider value={productId}>
      {/* <Overview /> */}
      {/* <RelatedItemsAndComparison /> */}
      {/* <QA /> */}
      <RatingsAndReviews />
    </ProductContext.Provider>
  );
}

export default App;
