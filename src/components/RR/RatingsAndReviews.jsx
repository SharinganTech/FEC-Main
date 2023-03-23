import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Ratings from './Ratings/Ratings';
import ReviewList from './Reviews/ReviewList';
import ProductContext from '../../contexts/ProductContext';

function RatingsAndReviews() {
  const product = useContext(ProductContext);
  const prodDes = { product };
  const prod = prodDes.product;
  const [reviewsMeta, setReviewsMeta] = useState({});

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${prod.id}`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((response) => {
        setReviewsMeta(response.data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);

  return Object.keys(reviewsMeta).length ? (
    <div className="grid grid-cols-[1fr_3fr] gap-3 mx-10">
      <Ratings reviewsMeta={reviewsMeta} />
      <ReviewList
        prodID={prod.id}
        reviewsMeta={reviewsMeta}
        totalReviews={Number(reviewsMeta.recommended.true) + Number(reviewsMeta.recommended.false)}
      />
    </div>
  ) : null;
}

export default RatingsAndReviews;
