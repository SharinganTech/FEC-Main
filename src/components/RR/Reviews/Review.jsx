import React from 'react';
// import { format } from 'date-fns';
import Stars from '../Stars';
import ReviewBody from './ReviewBody';
import HelpfulButtons from './HelpfulButtons';

function Review({ review }) {
  const date = new Date(review.date);
  return (
    <div>
      <Stars rating={review.rating} />
      <div>
        {review.reviewer_name}
        {' '}
        {date.toDateString()}
      </div>
      <ReviewBody
        reviewSummary={review.summary}
        reviewBody={review.body}
        reviewPhotos={review.photos}
        recommended={review.recommend}
      />
      <HelpfulButtons reviewId={review.review_id} helpfulness={review.helpfulness} />
      <br />
    </div>
  );
}

export default Review;
