import React, { useState } from 'react';

function AddReview() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowModal(!showModal);
        }}
        className="text-black border-2 border-black font-bold py-4 px-4 rounded"
        type="button"
      >
        ADD A REVIEW +
      </button>
      {showModal ? (
        <div>Modal will be here</div>
      ) : null}
    </div>
  );
}

export default AddReview;
