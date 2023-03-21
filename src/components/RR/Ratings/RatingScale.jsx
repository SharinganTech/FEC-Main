import React from 'react';

function RatingScale({ stars, numReviews, totalReviews }) {
  return (
    <div>
      <div>
        {stars}
        {' stars '}
        {numReviews}
        {' '}
        {totalReviews}
      </div>
    </div>
  );
}

export default RatingScale;
