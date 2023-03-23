import React from 'react';

function ReviewBody({
  reviewSummary, reviewBody, reviewPhotos, recommended,
}) {
  const images = () => (
    <div>
      {reviewPhotos.map((image) => (
        <img key={image.id} src={image.url} alt="Review" />
      ))}
    </div>
  );

  return (
    <div>
      {reviewSummary}
      {' '}
      {reviewBody}
      {images()}
      {recommended ? <div>I recommend this product</div> : null}
    </div>
  );
}

export default ReviewBody;
