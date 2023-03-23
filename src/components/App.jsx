import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Overview from './Overview';
<<<<<<< HEAD
// import RelatedItemsAndComparison from './RIC';
import QA from './QA';
import RatingsAndReviews from './RR';
=======
// import RatingsAndReviews from './RR';
// import QA from './QA';
// import RelatedItemsAndComparison from './RIC';
>>>>>>> main
import ProductContext from '../contexts/ProductContext';

// const useFetchData = async (url, options) => {
//   const res = await axios.get(url, { headers: { Authorization: 'key'}, ...options});
//   return res.json()
// }

function App() {
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState(0);
<<<<<<< HEAD
  // const [canRender, setCanRender] = useState(false);
=======
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
        console.log('results data', result.data);
=======
        // console.log('results data', result.data);
        setProduct(result.data[3]);
>>>>>>> main
        setProductId(result.data[3].id);
      })
      .catch((err) => {
        throw new Error('Error in getting data', err);
      });
  }, []);

  return (
<<<<<<< HEAD
    <ProductContext.Provider value={productId} className="relative">
=======
    <ProductContext.Provider value={product}>
>>>>>>> main
      <Overview />
      {/* <RelatedItemsAndComparison /> */}
      <QA />
      <RatingsAndReviews />
    </ProductContext.Provider>
  );
}

export default App;
