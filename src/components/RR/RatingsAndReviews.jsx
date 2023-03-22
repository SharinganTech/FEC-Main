import React, { useContext } from 'react';
import Ratings from './Ratings/Ratings';
import ReviewList from './Reviews/ReviewList';
import ProductContext from '../../contexts/ProductContext';

function RatingsAndReviews() {
<<<<<<< HEAD
  return (
    <div className="text-green-600">
      {/* <div>Hello from R&R</div> */}
=======
  const prodID = useContext(ProductContext);

  return prodID !== 0 ? (
    <div className="grid grid-cols-[1fr_3fr] gap-2">
      <Ratings prodID={prodID} />
      <ReviewList prodID={prodID} />
>>>>>>> main
    </div>
  ) : null;
}

export default RatingsAndReviews;
