import React from 'react';
import Stars from './Stars';

function Review({ body, rating }) {
  // const { myReview } = review;
  return (
    <div>
      {/* <Stars rating={rating} /> */}
      <div>{body}</div>
    </div>
  );
}

export default Review;
