import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Ratings from './Ratings/Ratings';
import ReviewList from './Reviews/ReviewList';
import { ProductContext } from '../../contexts/ProductContext';
import { FiltersContext } from './FiltersContext';

function RatingsAndReviews() {
  const { reviewsMeta, product } = useContext(ProductContext);
  // const prodDes = { product };
  // const prod = prodDes.product;
  // const [reviewsMeta, setReviewsMeta] = useState({});
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(2);
  const [sort, setSort] = useState('Relevant');
  const { filters } = useContext(FiltersContext);

  const makeGetRequest = (newCount, newSort, newFilters) => {
    const filtersToDisplay = newFilters || filters;
    const countToDisplay = newCount || count;
    const sortToSearch = newSort || sort;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${product.id}&count=${Number(reviewsMeta.recommended.true)
    + Number(reviewsMeta.recommended.false)}&sort=${sortToSearch}`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((response) => {
        if (filtersToDisplay.length) {
          const filteredData = response.data.results.filter(
            (review) => filtersToDisplay.includes(review.rating.toString()),
          );
          setReviews(filteredData.slice(0, countToDisplay));
        } else {
          setReviews(response.data.results.slice(0, countToDisplay));
        }
      })
      .catch((err) => {
        throw new Error('Error getting review data', err);
      });
  };

  // useEffect(() => {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${product.id}`, {
  //     headers: {
  //       Authorization: process.env.AUTH_TOKEN,
  //     },
  //   })
  //     .then((response) => {
  //       setReviewsMeta(response.data);
  //       // makeGetRequest();
  //     })
  //     .catch((err) => {
  //       throw new Error('Error getting review meta data', err);
  //     });
  // }, [product.id]);

  return Object.keys(reviewsMeta).length ? (
    <div id="RR" className="flex flex-col md:grid md:grid-cols-[1fr_3fr] md:gap-3 md:h-[80vh]">
      <Ratings reviewsMeta={reviewsMeta} makeGetRequest={makeGetRequest} />
      <ReviewList
        prodID={product.id}
        reviews={reviews}
        reviewsMeta={reviewsMeta}
        count={count}
        setCount={setCount}
        sort={sort}
        setSort={setSort}
        makeGetRequest={makeGetRequest}
      />
    </div>
  ) : null;
}

export default RatingsAndReviews;

// npm test -- --coverage --collectCoverageFrom="./src/**"
