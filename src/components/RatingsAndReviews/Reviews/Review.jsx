import React from 'react';
import Stars from '../../RIC/Stars';
import ReviewBody from './ReviewBody';
import HelpfulButtons from './HelpfulButtons';

function Review({ review, makeGetRequest }) {
  const date = new Date(review.date);
  return (
    <div className="flex flex-col">
      <div>
        <div className="text-[#798EA4] text-sm">
          <Stars rating={review.rating} numReviews={1} />
        </div>
        <div className="text-s float-right">
          {review.reviewer_name}
          {', '}
          {date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
      <ReviewBody
        reviewSummary={review.summary}
        reviewBody={review.body}
        reviewPhotos={review.photos}
        recommended={review.recommend}
      />
      <HelpfulButtons
        reviewID={review.review_id}
        helpfulness={review.helpfulness}
        makeGetRequest={makeGetRequest}
      />
      <hr className="h-0.5 bg-black mt-4 mb-5" />
    </div>
  );
}

export default Review;
