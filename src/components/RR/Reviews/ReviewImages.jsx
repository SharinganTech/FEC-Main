import React, { useState } from 'react';
import Modal from './Modal';

function ReviewImages({ reviewPhotos }) {
  const [showFullImage, setShowFullImage] = useState(false);

  const fullImage = (source) => (
    <div>
      <button
        onClick={() => setShowFullImage(false)}
        className="mr-auto text-4xl font-bold"
        type="button"
      >
        X
      </button>
      <img className="w-full h-full object-contain" src={source} alt="Review" />
    </div>
  );

  return (
    <div className="flex flex-row">
      {reviewPhotos.map((image) => (
        <div>
          <button onClick={() => setShowFullImage(true)} type="button">
            <img className="w-full h-40 object-contain" key={image.id} src={image.url} alt="Review" />
          </button>
          {showFullImage ? <Modal modalContent={fullImage(image.url)} /> : null}
        </div>
      ))}
    </div>
  );
}

export default ReviewImages;

// <button onClick={() => setShowFullImage(true)} type="button">
// <img className="w-full h-40 object-contain" key={image.id} src={image.url} alt="Review" />
// </button>
// {showFullImage ? <Modal modalContent={fullImage(image.url)} /> : null}
