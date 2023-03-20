import axios from 'axios';
import React, { useContext, createContext, useState, useEffect } from 'react';
import ProductInfo from './ProductInfo';
import ProductOverview from './ProductOverview';
import Price from './Price';
import { ProductContext } from '../App';

export const CurrentProduct = createContext(null);

function Overview() {
  const prodID = useContext(ProductContext);
  const [dataRetrieved, setDataRetrieved] = useState(false);
  const [prodDetails, setProdDetails] = useState({});
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});

  console.log('in Overview: ', prodID);

  useEffect(() => {
    //get product details using the current product ID
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodID}`, {
      headers: { Authorization: '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' },
    })
      .then((response) => {
        setDataRetrieved(true);
        setProdDetails(response.data);
      })
      .catch((err) => {
        console.log('cant get prod details: ', err);
      })
      .then(() => (
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodID}/styles`, {
        //get the styles for the current product ID
          headers: { Authorization: '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' },
        })
      ))
      .then((response) => {
        setStyles(response.data.results);
        setCurrentStyle(response.data.results[0]);
      })
      .catch((err) => {
        console.log('error getting prod styles: ', err);
      });
  }, []);
  if (!dataRetrieved) {
    return (<div>Retrieving data</div>);
  }
  return (
    <CurrentProduct.Provider value={prodDetails}>
      Hello from Overview
      <ProductInfo />
      <Price currentStyle={currentStyle} />
      <ProductOverview />
    </CurrentProduct.Provider>
  );
}

export default Overview;
