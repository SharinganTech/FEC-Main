import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Overview from './Overview';
<<<<<<< HEAD
// import RelatedItemsAndComparison from './RIC';
import QA from './QA';
=======
>>>>>>> main
// import RatingsAndReviews from './RR';
import RelatedItemsAndComparison from './RIC';
// import QA from './QA';
import ProductContext from '../contexts/ProductContext';
import Loading from './RIC/Loading';

// const useFetchData = async (url, options) => {
//   const res = await axios.get(url, { headers: { Authorization: 'key'}, ...options});
//   return res.json()
// }

function App() {
  const [product, setProduct] = useState({});
<<<<<<< HEAD
  // const [productId, setProductId] = useState(0);
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
        // console.log('results data', result.data);
        setProduct(result.data[6]);
        // setProductId(result.data[3].id);
=======
        setProduct(result.data[4]);
>>>>>>> main
      })
      .catch((err) => {
        throw new Error('Error in getting data', err);
      });
  }, []);

  const changeProdClick = (prodId) => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodId}`, {
        headers: {
          Authorization: process.env.AUTH_TOKEN,
        },
      })
      .then((result) => {
        setProduct(result.data);
      })
      .catch((err) => {
        throw new Error('Error in changing product', err);
      });
  };

  return (
    <ProductContext.Provider value={product}>
<<<<<<< HEAD
      <h1 className="text-4xl">Welcome to Akatsuki Headquarters</h1>
      {!product.id ? <div>Loading...</div>
        : (
          <div>
            {/* <Overview /> */}
            <QA />
            {/* <RatingsAndReviews /> */}
            {/* <RelatedItemsAndComparison /> */}
          </div>
=======
      {product.id === undefined
        ? <Loading />
        : (
          <>
            {/* <Overview /> */}
            <div className="h-[2rem]" />
            <RelatedItemsAndComparison changeProdClick={changeProdClick} />
            {/* <QA />
            <RatingsAndReviews /> */}
          </>
>>>>>>> main
        )}
    </ProductContext.Provider>
  );
}

export default App;
