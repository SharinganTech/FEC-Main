import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RatingSummary from './RatingsSummary';
import RatingBreakdown from './RatingBreakdown';

function Ratings() {
  const [reviewsMeta, setReviewsMeta] = useState({});

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=40344', {
      headers: {
        Authorization: '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',
      },
    })
      .then((response) => {
        setReviewsMeta(response.data);
      });
    // .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>RATINGS & REVIEWS</h3>
      <RatingSummary ratings={reviewsMeta.ratings} />
      <RatingBreakdown ratings={reviewsMeta.ratings} recommended={reviewsMeta.recommended} />
    </div>
  );
}

export default Ratings;
