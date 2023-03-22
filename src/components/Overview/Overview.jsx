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
  const [styleID, setStyleID] = useState(0);
  const [styleName, setStyleName] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [stylePhotos, setStylePhotos] = useState([]);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodID}`, {
      headers: { Authorization: process.env.AUTH_TOKEN },
    })
      .then((response) => {
        setDataRetrieved(true);
        setProdDetails(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log('cant get prod details: ', err);
      })
      .then(() => (
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodID}/styles`, {
          headers: { Authorization: process.env.AUTH_TOKEN },
        })
      ))
      .then((response) => {
        console.log('styles get', response.data);
        setStyles(response.data.results);
        const IDnumber = Number(response.data.results[0].style_id);
        setStyleID(IDnumber);
        setCurrentStyle(response.data.results[0]);
        setStyleName(response.data.results[0].name);
        setMainImage(response.data.results[0].photos[0].url);
        setStylePhotos(response.data.results[0].photos);
      })
      .catch((err) => {
        console.log('error getting prod styles: ', err);
      });
  }, []);

  const changeStyle = (elementID) => {
    setStyleID(elementID);
    const newStyle = styles.filter((style) => style.style_id === Number(elementID));
    console.log('newStyleee: ', newStyle[0].photos[0].url);
    setStyleName(newStyle[0].name);
    setCurrentStyle(newStyle[0]);
    setMainImage(newStyle[0].photos[0].url);
  };
  if (!dataRetrieved) {
    return (<div>Retrieving data</div>);
  }
  return (
    <div className="container">
      <CurrentProduct.Provider value={prodDetails}>
        <Gallery styleID={styleID} stylePhotos={stylePhotos} mainImage={mainImage} />
        <div className="float-right">
          <ProductInfo currentStyle={currentStyle} />
          <StyleSelector styles={styles} styleName={styleName} changeStyle={changeStyle} />
        </div>
        <div className="relative float-bottom">
          <ProductOverview />
        </div>
      </CurrentProduct.Provider>
    </div>
  );
}

export default Overview;
