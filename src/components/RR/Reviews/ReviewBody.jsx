import React from 'react';

function ReviewBody({
  reviewSummary, reviewBody, reviewPhotos, recommended,
}) {
  const images = () => (
    <div className="flex flex-row">
      {reviewPhotos.map((image) => (
        <img className="w-full h-40 object-contain" key={image.id} src={image.url} alt="Review" />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col">
      <h5 className="text-xl font-bold">{reviewSummary}</h5>
      <p className="py-3">{reviewBody}</p>
      <div>{images()}</div>
      <div>{recommended ? <div>&#x2713; I recommend this product</div> : null}</div>
    </div>
  );
}

export default ReviewBody;
