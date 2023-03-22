import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Review from './Review';

function ReviewList({ prodID }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${prodID}&count=5&page=11`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((response) => {
        setReviews(response.data.results);
      });
    // .catch((err) => console.log(err));
  }, []);

  const dropdown = () => (
    <select>
      <option value="relevant">Relevance</option>
      <option value="helpful">Helpfulness</option>
      <option value="newest">Newest</option>
    </select>
  );

  return reviews.length ? (
    <div>
      <div>
        <div>total reviews, sorted by</div>
        {dropdown()}
      </div>
      {reviews.map((review) => (
        <Review
          key={review.review_id}
          review={review}
        />
      ))}
      <button className="text-black border-2 border-black font-bold py-2 px-4 rounded" type="button">MORE REVIEWS</button>
      <button className="text-black border-2 border-black font-bold py-2 px-4 rounded" type="button">ADD A REVIEW +</button>
    </div>
  ) : null;
}

export default ReviewList;
