import React, { useEffect, useContext, useState } from 'react';
import { ProductContext } from '../App';
import axios from 'axios';

function ProductInfo() {
  const prodID = useContext(ProductContext);
  const [dataRetrieved, setDataRetrieved] = useState(false);
  const [prodDetails, setProdDetails] = useState({});
  console.log('in productInfo: ', prodID);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodID}`, {
      headers: { Authorization: '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' },
    })
      .then((response) => {
        console.log('response: ', response.data);
        setDataRetrieved(true);
        setProdDetails(response.data);
      })
      .catch((err) => {
        console.log('error getting prod info: ', err);
      });
  }, []);

  if (!dataRetrieved) {
    return (<div>Retrieving Data</div>);
  }

  return (
    <div>
      <p>
        Star rating -
        <a href="https://www.google.com/">Read all [#] Reviews!</a>
      </p>
      <h1>{prodDetails.category}</h1>

    </div>
  );
}

export default ProductInfo;
