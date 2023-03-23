import React, { useEffect, useState } from 'react';
import axios from 'axios';
// <<<<<<< HEAD
// import Overview from './Overview';
// import RatingsAndReviews from './RR';
import QA from './QA';
// import RelatedItemsAndComparison from './RIC';
import ProductContext from '../contexts/ProductContext';

// const useFetchData = async (url, options) => {
//   const res = await axios.get(url, { headers: { Authorization: 'key'}, ...options});
//   return res.json()
// }

function App() {
  const [product, setProduct] = useState({});
  const [canRender, setCanRender] = useState(false);
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
        // console.log('results data', result.data);
        setProduct(result.data[4]);
      })
      .catch((err) => {
        throw new Error('Error in getting data', err);
      });
  }, []);

  // if (productId === 0) {
  //   return (
  //     <div>Loading Page</div>
  //   );
  // }
  return (
    <ProductContext.Provider value={product}>
      {/* <Overview /> */}
      <RelatedItemsAndComparison />
      {/* <QA /> */}
      {/* <RatingsAndReviews /> */}
    </ProductContext.Provider>
  );
}

export default App;
