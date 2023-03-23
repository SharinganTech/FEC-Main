import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Overview from './Overview';
// import RelatedItemsAndComparison from './RIC';
import QA from './QA';
// import RatingsAndReviews from './RR';
import ProductContext from '../contexts/ProductContext';

// const useFetchData = async (url, options) => {
//   const res = await axios.get(url, { headers: { Authorization: 'key'}, ...options});
//   return res.json()
// }

function App() {
  const [product, setProduct] = useState({});
  // const [productId, setProductId] = useState(0);
  // const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?count=${20}`, {
        headers: {
          Authorization: process.env.AUTH_TOKEN,
        },
      })
      .then((result) => {
        // console.log('results data', result.data);
        setProduct(result.data[6]);
        // setProductId(result.data[3].id);
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
      <h1 className="text-4xl">Welcome to Akatsuki Headquarters</h1>
      {!product.id ? <div>Loading...</div>
        : (
          <div>
            {/* <Overview /> */}
            <QA />
            {/* <RatingsAndReviews /> */}
            {/* <RelatedItemsAndComparison /> */}
          </div>
        )}
    </ProductContext.Provider>
  );
}

export default App;
