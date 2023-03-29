import React from 'react';
import RatingsAndReviews from './RatingsAndReviews';
import { FiltersProvider } from './FiltersContext';

function RatingsAndReviewsIndex() {
  return (
    <FiltersProvider>
      <RatingsAndReviews />
    </FiltersProvider>
  );
}

export default RatingsAndReviewsIndex;
