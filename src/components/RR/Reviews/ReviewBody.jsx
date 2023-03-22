import React from 'react';

function ReviewBody({
  reviewSummary, reviewBody, reviewPhotos, recommended,
}) {
  const images = () => (
    <div className="flex flex-row">
      {reviewPhotos.map((image) => (
        <img className="w-40 h-40" key={image.id} src={image.url} alt="Review" />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col">
      <div className="font-bold">{reviewSummary}</div>
      <div>{reviewBody}</div>
      <div>{images()}</div>
      <div>{recommended ? <div>&#x2713; I recommend this product</div> : null}</div>
    </div>
  );
}

export default ReviewBody;
