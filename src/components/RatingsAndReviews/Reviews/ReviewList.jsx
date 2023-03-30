import React, { useEffect } from 'react';
import Review from './Review';
import AddReview from './AddReviews/AddReview';
import '../RR.css';

function ReviewList({
  prodID, reviews, reviewsMeta, count, setCount, sort, setSort, makeGetRequest,
}) {
  const totalReviews = Number(reviewsMeta.recommended.true)
  + Number(reviewsMeta.recommended.false);

  useEffect(() => {
    makeGetRequest();
  }, [prodID]);

  const dropdown = () => (
    <select
      className="underline bg-[#EDF1FF]"
      value={sort}
      onChange={(e) => {
        setSort(e.target.value);
        setCount(2);
        makeGetRequest(2, e.target.value);
      }}
    >
      <option value="relevant">relevance</option>
      <option value="helpful">helpfulness</option>
      <option value="newest">newest</option>
    </select>
  );

  return reviews.length ? (
    <div className="ml-4">
      <div className="flex mb-6 relative top-0">
        <div className="mr-1">
          {totalReviews}
          {' reviews, sorted by'}
        </div>
        {dropdown()}
      </div>
      <div className="mt-12 pb-12 h-[70vh] overflow-scroll scrollbar-hide">
        {reviews.map((review) => (
          <Review
            key={review.review_id}
            review={review}
            makeGetRequest={makeGetRequest}
          />
        ))}
      </div>
      <div className="flex flex-row relative bottom-4 my-6">
        {totalReviews > 2 ? (
          <button
            onClick={() => {
              setCount(count + 2);
              makeGetRequest(count + 2);
            }}
            className="text-black border-2 border-black uppercase font-bold py-4 px-4 mr-2 rounded"
            type="button"
          >
            MORE REVIEWS
          </button>
        ) : null}
        <AddReview reviewsMeta={reviewsMeta} />
      </div>
    </div>
  ) : (
    <div className="p-4">
      <h3 className="font-bold my-4 text-xl">There are currently no reviews, use the button to add one!</h3>
      <AddReview reviewsMeta={reviewsMeta} />
    </div>
  );
}

export default ReviewList;
