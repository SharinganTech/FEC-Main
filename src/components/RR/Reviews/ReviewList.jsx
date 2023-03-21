import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { ProductContext } from '../../App';
import Review from './Review';

function ReviewList() {
  // const prodID = useContext(ProductContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=40344&count=2', {
      headers: {
        Authorization: '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',
      },
    })
      .then((response) => {
        setReviews(response.data.results);
      });
    // .catch((err) => console.log(err));
  }, []);

  return reviews.length ? (
    <div>
      {reviews.map((review) => (
        <Review
          key={review.review_id}
          body={review.body}
          rating={review.rating}
        />
      ))}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">MORE REVIEWS</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">ADD A REVIEW +</button>
    </div>
  ) : null;
}

export default ReviewList;
