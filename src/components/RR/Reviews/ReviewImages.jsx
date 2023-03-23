import React from 'react';

function ReviewImages({ reviewPhotos }) {
  return (
    <div className="flex flex-row">
      {reviewPhotos.map((image) => (
        <img className="w-full h-40 object-contain" key={image.id} src={image.url} alt="Review" />
      ))}
    </div>
  );
}

export default ReviewImages;
