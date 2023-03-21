import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Overview from './Overview';
// import RatingsAndReviews from './RR';
import QA from './QA';
// import RelatedItemsAndComparison from './RIC';
import ProductContext from '../contexts/ProductContext';

// const useFetchData = async (url, options) => {
//   const res = await axios.get(url, { headers: { Authorization: 'key'}, ...options})

//   return res.json()
// }

function App() {
  const [productId, setProductId] = useState(0);
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    axios
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {
        headers: {
<<<<<<< HEAD
          Authorization: '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',
=======
          Authorization: process.env.AUTH_TOKEN,
>>>>>>> main
        },
      })
      .then((result) => {
        // console.log('results data', result.data);
        setProductId(result.data[0].id);
<<<<<<< HEAD
        setCanRender(true);
      })
      .catch((err) => {
        console.log('err getting list of products: ', err);
=======
      })
      .catch((err) => {
        throw new Error('Error in getting data', err);
>>>>>>> main
      });
  }, []);

  if (!canRender) {
    return (
      <div>Loading Page</div>
    );
  }
  return (
    <ProductContext.Provider value={productId}>
<<<<<<< HEAD
      <Overview />
      {/* <RelatedItemsAndComparison /> */}
      {/* <QA /> */}
=======
      {/* <Overview /> */}
      {/* <RelatedItemsAndComparison /> */}
      <QA />
>>>>>>> main
      {/* <RatingsAndReviews /> */}
    </ProductContext.Provider>
  );
}

export default App;
