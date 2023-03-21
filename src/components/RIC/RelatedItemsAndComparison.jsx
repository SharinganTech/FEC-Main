import React, { useContext, useState, useEffect } from 'react';
import CardList from './CardList';
import Loading from './Loading';
import { ProductContext } from '../App';

function RelatedItemsAndComparison() {
  const prodId = useContext(ProductContext);
  // console.log(prodId);
  const [outfit, setOutfit] = useState([]);

  return (
    <div>
      {prodId === 0
        ? <Loading />
        : (
          <div>
            <CardList prodId={prodId} />
            {/* <CardList outfit={outfit} /> */}
          </div>
        )}
    </div>
  );
}

export default RelatedItemsAndComparison;
