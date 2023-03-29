import React from 'react';
import RatingSummary from './RatingsSummary';
import RatingBreakdown from './RatingBreakdown';
import FactorBreakdown from './FactorBreakdown';

function Ratings({ reviewsMeta, makeGetRequest }) {
  return (
    <div>
      <h3>RATINGS & REVIEWS</h3>
      <RatingSummary ratings={reviewsMeta.ratings} />
      <RatingBreakdown
        ratings={reviewsMeta.ratings}
        recommended={reviewsMeta.recommended}
        makeGetRequest={makeGetRequest}
      />
      <FactorBreakdown characteristics={reviewsMeta.characteristics} />
    </div>
  );
}

export default Ratings;
