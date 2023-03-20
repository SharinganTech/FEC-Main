import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import CardList from './CardList';
import Loading from './Loading';
import { ProductContext } from '../App';

/* <FontAwesomeIcon icon={farStar} style={{color: "#000000",}} /> */

function RelatedItemsAndComparison() {
  const prodId = useContext(ProductContext);

  return (
    <div>
      {prodId === 0
        ? <Loading />
        : <CardList prodId={prodId} />}
    </div>
  );
}

export default RelatedItemsAndComparison;
