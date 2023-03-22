import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Review from './Review';
import AddReview from './AddReview';

function ReviewList({ prodID }) {
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(2);

  const makeGetRequest = (newCount) => {
    const countToSearch = newCount || count;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${prodID}&count=${countToSearch}`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((response) => {
        setReviews(response.data.results);
      });
    // .catch((err) => console.log(err));
  };

  useEffect(() => {
    makeGetRequest();
  }, []);

  const dropdown = () => (
    <select>
      <option value="relevant">Relevance</option>
      <option value="helpful">Helpfulness</option>
      <option value="newest">Newest</option>
    </select>
  );

  return reviews.length ? (
    <div id="reviews-list">
      <div>
        <div>1532 reviews, sorted by</div>
        {dropdown()}
      </div>
      {reviews.map((review) => (
        <Review
          key={review.review_id}
          review={review}
        />
      ))}
      <div>
        <button
          onClick={() => {
            setCount(count + 2);
            makeGetRequest(count + 2);
          }}
          className="text-black border-2 border-black font-bold py-2 px-4 rounded"
          type="button"
        >
          MORE REVIEWS
        </button>
        <AddReview />
      </div>
    </div>
  ) : null;
}

export default ReviewList;
