import React from 'react';
// import { format } from 'date-fns';
import Stars from '../Stars';
import ReviewBody from './ReviewBody';
import HelpfulButtons from './HelpfulButtons';

function Review({ review }) {
  const date = new Date(review.date);
  return (
    <div className="flex flex-col">
      <div>
        <Stars rating={review.rating} />
        <div className="text-s float-right">
          {review.reviewer_name}
          {' '}
          {date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
      <ReviewBody
        reviewSummary={review.summary}
        reviewBody={review.body}
        reviewPhotos={review.photos}
        recommended={review.recommend}
      />
      <HelpfulButtons reviewID={review.review_id} helpfulness={review.helpfulness} />
      <br />
    </div>
  );
}

export default Review;
