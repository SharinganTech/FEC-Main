import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Ratings from './Ratings/Ratings';
import ReviewList from './Reviews/ReviewList';
import ProductContext from '../../contexts/ProductContext';
import { FiltersContext } from './FiltersContext';

function RatingsAndReviews() {
  const product = useContext(ProductContext);
  const prodDes = { product };
  const prod = prodDes.product;
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(2);
  const [sort, setSort] = useState('Relevant');
  const { filters } = useContext(FiltersContext);

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
  }, [prod.id]);

  const makeGetRequest = (newCount, newSort, newFilters) => {
    const filtersToDisplay = newFilters || filters;
    const countToDisplay = newCount || count;
    const sortToSearch = newSort || sort;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${prod.id}&count=${Number(reviewsMeta.recommended.true)
    + Number(reviewsMeta.recommended.false)}&sort=${sortToSearch}`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((response) => {
        if (filtersToDisplay.length) {
          console.log('filters to be used in get ', filtersToDisplay);
          const filteredData = response.data.results.filter((review) => {
            return filtersToDisplay.includes(review.rating.toString())
          });
          console.log(response.data.results);
          console.log('filtered data ', filteredData);
          setReviews(filteredData.slice(0, countToDisplay));
        } else {
          setReviews(response.data.results.slice(0, countToDisplay));
        }
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };

  return Object.keys(reviewsMeta).length ? (
    <div className="grid grid-cols-[1fr_3fr] gap-3 mx-10">
      <Ratings reviewsMeta={reviewsMeta} makeGetRequest={makeGetRequest} />
      <ReviewList
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
