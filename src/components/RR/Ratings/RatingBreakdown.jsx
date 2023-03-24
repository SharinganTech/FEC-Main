import React from 'react';
import RatingScale from './RatingScale';

function RatingBreakdown({ ratings, recommended, makeGetRequest }) {
  const recommendedPercentage = () => {
    const total = Number(recommended.true) + Number(recommended.false);
    return Math.round((Number(recommended.true) / total) * 100);
  };

  return ratings ? (
    <div>
      {Object.keys(ratings).reverse().map((key) => (
        <RatingScale
          key={key}
          stars={key}
          numReviews={ratings[key]}
          makeGetRequest={makeGetRequest}
          totalReviews={Number(recommended.true) + Number(recommended.false)}
        />
      ))}
      <div className="text-xs my-2">
        {recommendedPercentage()}
        % of reviews recommend this product
      </div>
    </div>
  ) : null;
}

export default RatingBreakdown;
