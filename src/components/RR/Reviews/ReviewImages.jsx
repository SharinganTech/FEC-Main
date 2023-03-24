import React, { useState } from 'react';
import Modal from './Modal';

function ReviewImages({ reviewPhotos }) {
  const [fullImage, setFullImage] = useState(false);

  const fullImageContent = (source) => (
    <div className="max-h-[500px]">
      <button
        onClick={() => setFullImage('')}
        className="text-4xl font-bold"
        type="button"
      >
        X
      </button>
      <img className="max-h-100 w-full object-cover" src={source} alt="Review" />
    </div>
  );

  return (
    <div className="flex flex-row">
      {reviewPhotos.map((image) => (
        <div key={image.id}>
          <button onClick={() => setFullImage(image.url)} type="button">
            <img className="w-full h-40 object-contain" src={image.url} alt="Review" />
          </button>
          {fullImage === image.url ? <Modal modalContent={fullImageContent(image.url)} /> : null}
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
