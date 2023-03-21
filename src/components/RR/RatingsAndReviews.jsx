import React, { useContext } from 'react';
import Ratings from './Ratings/Ratings';
import ReviewList from './Reviews/ReviewList';
import ProductContext from '../../contexts/ProductContext';

function RatingsAndReviews() {
  const prodID = useContext(ProductContext);

  return prodID !== 0 ? (
    <div>
      <Ratings prodID={prodID} />
      <ReviewList prodID={prodID} />
    </div>
  ) : null;
}

export default RatingsAndReviews;
