import axios from 'axios';
import React, { useContext, createContext, useState, useEffect } from 'react';
import ProductInfo from './ProductInfo';
import ProductOverview from './ProductOverview';
import Price from './Price';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import Gallery from './Gallery';
import ProductContext from '../../contexts/ProductContext';

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
      <Gallery />
      Hello from Overview
      <ProductInfo />
      <Price currentStyle={currentStyle} />
      <StyleSelector styles={styles} />
      <ProductOverview />
    </CurrentProduct.Provider>
  );
}

export default Overview;
