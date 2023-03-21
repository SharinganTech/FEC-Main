import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RatingSummary from './RatingsSummary';
import RatingBreakdown from './RatingBreakdown';
import FactorBreakdown from './FactorBreakdown';

function Ratings({ prodID }) {
  const [reviewsMeta, setReviewsMeta] = useState({});

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${prodID}`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((response) => {
        setReviewsMeta(response.data);
      });
    // .catch((err) => console.log(err));
  }, []);

  return Object.keys(reviewsMeta).length ? (
    <div>
      <h3>RATINGS & REVIEWS</h3>
      <RatingSummary ratings={reviewsMeta.ratings} />
      <RatingBreakdown ratings={reviewsMeta.ratings} recommended={reviewsMeta.recommended} />
      <FactorBreakdown characteristics={reviewsMeta.characteristics} />
    </div>
  ) : null;
}

export default Ratings;
