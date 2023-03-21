import axios from 'axios';
import React, { useContext, createContext, useState, useEffect } from 'react';
import ProductInfo from './ProductInfo';
import ProductOverview from './ProductOverview';
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
  const [styleID, setStyleID] = useState('');

  console.log('in Overview: ', prodID);

  useEffect(() => {
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
          headers: { Authorization: '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' },
        })
      ))
      .then((response) => {
        console.log('styles get', response.data);
        setStyles(response.data.results);
        setStyleID(response.data.product_id);
        setCurrentStyle(response.data.results[0]);
      })
      .catch((err) => {
        console.log('error getting prod styles: ', err);
      });
  }, []);

  const changeStyle = (e) => {
    e.preventDefault();
    console.log(styleID);
  };
  if (!dataRetrieved) {
    return (<div>Retrieving data</div>);
  }
  return (
    <div>
      <CurrentProduct.Provider value={prodDetails}>
        <Gallery />
        <div className="float-right">
          <ProductInfo currentStyle={currentStyle} />
          <StyleSelector styles={styles} changeStyle={changeStyle} />
        </div>
        <div className="relative float-bottom">
          <ProductOverview />
        </div>
      </CurrentProduct.Provider>
    </div>
  );
}

export default Overview;
