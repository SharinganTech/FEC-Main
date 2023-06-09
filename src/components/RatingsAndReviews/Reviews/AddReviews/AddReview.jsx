import React, { useState } from 'react';
import WriteReviewModal from './WriteReviewModal';

function AddReview({ reviewsMeta }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowModal(!showModal);
        }}
        className="text-black border-2 border-black uppercase font-bold py-4 px-4 rounded"
        type="button"
      >
        ADD A REVIEW +
      </button>
      {showModal ? (
        <WriteReviewModal setShowModal={setShowModal} reviewsMeta={reviewsMeta} />
      ) : null}
    </div>
  );
}

export default AddReview;
