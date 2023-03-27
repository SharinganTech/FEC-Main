import React, { useEffect } from 'react';
import Review from './Review';
import AddReview from './AddReviews/AddReview';
// import { FiltersContext } from '../FiltersContext';

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
      className="underline"
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
      <div className="flex my-4 absolute top-0">
        <div className="mr-1">
          {totalReviews}
          {' reviews, sorted by'}
        </div>
        {dropdown()}
      </div>
      <div className="mt-12 pb-12 h-screen overflow-scroll">
        {reviews.map((review) => (
          <Review
            key={review.review_id}
            review={review}
            makeGetRequest={makeGetRequest}
          />
        ))}
      </div>
      <div className="flex flex-row absolute bottom-0 mb-4">
        {totalReviews > 2 ? (
          <button
            onClick={() => {
              setCount(count + 2);
              makeGetRequest(count + 2);
            }}
            className="text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded"
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

// .MovieList::-webkit-scrollbar {
//   display: none;
// }