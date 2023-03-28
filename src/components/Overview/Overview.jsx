import axios from 'axios';
import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import ProductInfo from './ProductInfo';
import ProductOverview from './ProductOverview';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import Gallery from './Gallery';
import ProductContext from '../../contexts/ProductContext';
import Features from './Features';
import { generateAverage } from '../RIC/HelperFunctions';
import Stars from '../RIC/Stars';
import ExpandedView from './ExpandedView';

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
  const [rating, setRating] = useState(0);
  const [numOfRatings, setNumOfRatings] = useState(0);
  const [normalView, setNormalView] = useState(true);

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
      });
  }, [prod.id]);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prod.id}/styles`, {
      headers: { Authorization: process.env.AUTH_TOKEN },
    })
      .then((response) => {
        setStyles(response.data.results);
        const IDnumber = response.data.results[0].style_id;
        setStyleID(IDnumber);
        setCurrentStyle(response.data.results[0]);
        // console.log('current Style', response.data.results[0].skus);
        setInventory(response.data.results[0].skus);
        setStyleName(response.data.results[0].name);
        setMainImage(response.data.results[0].photos[0].url);
        setStylePhotos(response.data.results[0].photos);
      })
      .catch((err) => {
        console.log('error getting prod styles: ', err);
      });
  }, [prod.id]);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
      params: {
        product_id: prod.id,
      },
    })
      .then((results) => {
        const avgRating = generateAverage(results.data.ratings);
        setNumOfRatings(avgRating[1]);
        setRating(avgRating[0]);
      })
      .catch((err) => {
        console.log('err getting metadata: ', err);
      });
  }, [prod.id]);

  const changeStyle = (elementID) => {
    setStyleID(Number(elementID));
    console.log(elementID);
    const newStyle = styles.filter((style) => style.style_id === Number(elementID));
    setStyleName(newStyle[0].name);
    setCurrentStyle(newStyle[0]);
    setMainImage(newStyle[0].photos[0].url);
    setStylePhotos(newStyle[0].photos);
    setInventory(newStyle[0].skus);
    console.log('new style: ', newStyle[0]);
  };
  const changeMain = (newMainURL) => {
    setMainImage(newMainURL);
  };
  const changeView = () => {
    setNormalView(!normalView);
  };
  if (!dataRetrieved) {
    return (<div>Retrieving data</div>);
  }

  if (!normalView) {
    return (
      <div className="">
        <div className="">
          <ExpandedView
            styleID={styleID}
            stylePhotos={stylePhotos}
            mainImage={mainImage}
            changeMain={changeMain}
            changeView={changeView}
          />
        </div>

        <div className="">
          <ProductOverview slogan={prod.slogan} description={prod.description} />
          <Features features={features} />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-[70%]">
          <Gallery
            styleID={styleID}
            stylePhotos={stylePhotos}
            mainImage={mainImage}
            normalView={normalView}
            changeMain={changeMain}
            changeView={changeView}
          />
        </div>
        <div className="ml-[10px] max-w-[25%]">
          <Stars rating={rating} numReviews={numOfRatings} />
          <a className="underline scroll-auto" href="#RR">
            Read all
            {' '}
            {numOfRatings}
            {' '}
            Reviews!
          </a>
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
          <AddToCart
            inventory={inventory}
          />
        </div>
      </div>
      <div className="flex w-[100%]">
        <ProductOverview slogan={prod.slogan} description={prod.description} />
        <Features features={features} />
      </div>
    </div>
  );
}

export default Overview;
