import React, { useContext, useState, useEffect } from 'react';
import CardList from './CardList';
import Loading from './Loading';
import YourOutfit from './YourOutfit';
import ProductContext from '../../contexts/ProductContext';

function RelatedItemsAndComparison() {
  const product = useContext(ProductContext);
  const prodDes = { product };
  const prod = prodDes.product;
  const [yourOutfit, setYourOutfit] = useState([]);
  // console.log(prodId);
  // const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem('Outfit');
    if (data !== null) setYourOutfit(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('Outfit', JSON.stringify(yourOutfit));
  }, [yourOutfit]);

  return (
    <div className="h-[28rem]">
      {prod.id === undefined
        ? <Loading />
        : (
          <div>
            <div className="h-[28rem]">
              <CardList prodId={prod.id} />
              {/* <CardList outfit={outfit} /> */}
            </div>
            <div className="h-[28rem] z-0">
              <YourOutfit prod={prod} yourOutfit={yourOutfit} setYourOutfit={setYourOutfit} />
              {/* <CardList outfit={outfit} /> */}
            </div>
          </div>
        )}
    </div>
  );
}

export default RelatedItemsAndComparison;
