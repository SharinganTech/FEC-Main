import React, { useContext, useState, useEffect } from 'react';
import CardList from './CardList';
import YourOutfit from './YourOutfit';
import { ProductContext } from '../../contexts/ProductContext';

function RelatedItemsAndComparison({ changeProdClick }) {
  const { product } = useContext(ProductContext);
  const [yourOutfit, setYourOutfit] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem('Outfit');
    if (data !== null) setYourOutfit(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('Outfit', JSON.stringify(yourOutfit));
  }, [yourOutfit]);

  return (
    <div className="h-[100%] select-none">
      <div>
        <h1 className="relative left-[30px] text-3xl text-pastelPurple font-bold mb-2">Related Items</h1>
        <div className="h-[50%]">
          <CardList prod={product} changeProdClick={changeProdClick} />
        </div>
        <div className="h-[1rem]" />
        <h1 className="relative left-[30px] text-3xl text-pastelPurple font-bold mb-2">Your Outfit</h1>
        <div className="h-[50%] z-0">
          <YourOutfit
            prod={product}
            yourOutfit={yourOutfit}
            setYourOutfit={setYourOutfit}
            changeProdClick={changeProdClick}
          />
        </div>
      </div>
    </div>
  );
}

export default RelatedItemsAndComparison;
