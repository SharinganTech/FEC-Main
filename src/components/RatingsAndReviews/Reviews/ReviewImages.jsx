import React, { useState } from 'react';
import Modal from './Modal';

function ReviewImages({ reviewPhotos }) {
  const [fullImage, setFullImage] = useState(false);

  const fullImageContent = (source) => (
    <div className="max-h-[80vh]">
      <button
        onClick={() => setFullImage('')}
        className="text-4xl font-bold m-2 float-right"
        type="button"
      >
        X
      </button>
      <img className="w-full object-cover rounded-b" src={source} alt="Review" />
    </div>
  );

  return (
    <div className="flex flex-row gap-x-4">
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
