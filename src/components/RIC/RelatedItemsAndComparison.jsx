import React, { useContext, useState, useEffect } from 'react';
import CardList from './CardList';
import YourOutfit from './YourOutfit';
import ProductContext from '../../contexts/ProductContext';

function RelatedItemsAndComparison({ changeProdClick }) {
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
    <div className="h-[28rem] select-none">
      <div>
        <h1 className="relative left-[103px] text-3xl text-pastelPurple font-bold overline decoration-pastelBlack decoration-wavy decoration-4">Related Items</h1>
        <div className="h-[28rem]">
          <CardList prod={prod} changeProdClick={changeProdClick} />
        </div>
        <h1 className="relative left-[30px] text-3xl text-pastelPurple font-bold overline decoration-pastelBlack decoration-wavy decoration-4">Your Outfit</h1>
        <div className="h-[28rem] z-0">
          <YourOutfit prod={prod} yourOutfit={yourOutfit} setYourOutfit={setYourOutfit} />
        </div>
      </div>
    </div>
  );
}

export default RelatedItemsAndComparison;
