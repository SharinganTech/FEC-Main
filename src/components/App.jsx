import React, { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import Overview from './Overview';
import RatingsAndReviews from './RR';
// import QA from './QA';
=======
// import Overview from './Overview';
>>>>>>> main
// import RelatedItemsAndComparison from './RIC';
import QA from './QA';
// import RatingsAndReviews from './RR';
import ProductContext from '../contexts/ProductContext';

// const useFetchData = async (url, options) => {
//   const res = await axios.get(url, { headers: { Authorization: 'key'}, ...options});
//   return res.json()
// }

function App() {
  const [productId, setProductId] = useState(0);
<<<<<<< HEAD
=======
  // const [canRender, setCanRender] = useState(false);
>>>>>>> main

  useEffect(() => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?count=${20}`, {
        headers: {
          Authorization: process.env.AUTH_TOKEN,
        },
      })
      .then((result) => {
<<<<<<< HEAD
        // console.log('results data', result.data);
        setProductId(result.data[0].id);
=======
        console.log('results data', result.data);
        setProductId(result.data[3].id);
>>>>>>> main
      })
      .catch((err) => {
        throw new Error('Error in getting data', err);
      });
  }, []);

  if (productId === 0) {
    return (
      <div>Loading Page</div>
    );
  }
  return (
<<<<<<< HEAD
    <ProductContext.Provider value={productId}>
      <Overview />
=======
    <ProductContext.Provider value={productId} className="relative">
      {/* <Overview /> */}
>>>>>>> main
      {/* <RelatedItemsAndComparison /> */}
      {/* <QA /> */}
      {/* <RatingsAndReviews /> */}
    </ProductContext.Provider>
  );
}

export default App;
