import React from 'react';

function RatingScale({ stars, numReviews, totalReviews }) {
  return (
    <div>
      <div>
        {stars}
        {' '}
        stars
      </div>
      {numReviews}
    </div>
  );
}

export default RatingScale;
