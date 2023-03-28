import React from 'react';
import ReviewImages from './ReviewImages';

function ReviewBody({
  reviewSummary, reviewBody, reviewPhotos, recommended,
}) {
  return (
    <div className="flex flex-col">
      <h5 className="text-xl font-bold">{reviewSummary}</h5>
      <p className="w-full py-3 break-all">{reviewBody}</p>
      <div><ReviewImages reviewPhotos={reviewPhotos} /></div>
      <div>{recommended ? <div>&#x2713; I recommend this product</div> : null}</div>
    </div>
  );
}

export default ReviewBody;
