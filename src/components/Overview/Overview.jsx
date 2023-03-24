import axios from 'axios';
import React, { useContext, createContext, useState, useEffect } from 'react';
import ProductInfo from './ProductInfo';
import ProductOverview from './ProductOverview';
import StyleSelector from './StyleSelector';
// import AddToCart from './AddToCart';
import Gallery from './Gallery';
import ProductContext from '../../contexts/ProductContext';
import Features from './Features';

export const CurrentProduct = createContext(null);

function Overview() {
  const product = useContext(ProductContext);
  const prodDes = { product };
  const prod = prodDes.product;
  const [dataRetrieved, setDataRetrieved] = useState(false);
  const [styles, setStyles] = useState([]);
  const [features, setFeatures] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [inventory, setInventory] = useState({});
  const [styleID, setStyleID] = useState(0);
  const [styleName, setStyleName] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [stylePhotos, setStylePhotos] = useState([]);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prod.id}`, {
      headers: { Authorization: process.env.AUTH_TOKEN },
    })
      .then((response) => {
        setDataRetrieved(true);
        setFeatures(response.data.features);
      })
      .catch((err) => {
        console.log('cant get prod details: ', err);
      })
      .then(() => (
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prod.id}/styles`, {
          headers: { Authorization: process.env.AUTH_TOKEN },
        })
      ))
      .then((response) => {
        setStyles(response.data.results);
        const IDnumber = response.data.results[0].style_id;
        setStyleID(IDnumber);
        setCurrentStyle(response.data.results[0]);
        console.log('current Style', response.data.results[0].skus);
        setInventory(response.data.results[0].skus);
        setStyleName(response.data.results[0].name);
        setMainImage(response.data.results[0].photos[0].url);
        setStylePhotos(response.data.results[0].photos);
      })
      .catch((err) => {
        console.log('error getting prod styles: ', err);
      });
  }, []);

  const changeStyle = (elementID) => {
    setStyleID(Number(elementID));
    const newStyle = styles.filter((style) => style.style_id === Number(elementID));
    console.log('newStyle: ', newStyle);
    setStyleName(newStyle[0].name);
    setCurrentStyle(newStyle[0]);
    setMainImage(newStyle[0].photos[0].url);
    setStylePhotos(newStyle[0].photos);
  };
  const changeMain = (newMainURL) => {
    setMainImage(newMainURL);
  };
  if (!dataRetrieved) {
    return (<div>Retrieving data</div>);
  }
  return (
    <div className="grid grid-cols-8 gap-4 grid-rows-[repeat(8, minmax(0, 1fr))] gap-4">
      <div className="col-start-2 col-end-6 row-start-0 row-end-3">
        <Gallery
          styleID={styleID}
          stylePhotos={stylePhotos}
          mainImage={mainImage}
          changeMain={changeMain}
        />
      </div>
      <div className="col-start-6 col-end-8 row-start-2 row-end-3">
        <ProductInfo
          currentStyle={currentStyle}
          category={prod.category}
          name={prod.name}
        />
        <StyleSelector
          styles={styles}
          styleName={styleName}
          changeStyle={changeStyle}
          styleID={styleID}
        />
        {/* <AddToCart
          inventory={inventory}
        /> */}
      </div>
      <div className="col-start-3 col-end-7 row-start-3 row-end-4 text-center flex flex-row justify-start">
        <ProductOverview slogan={prod.slogan} description={prod.description} />
        <Features features={features} />
      </div>
    </div>
  );
}

export default Overview;
