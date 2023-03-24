import React, { useContext } from 'react';
import RatingScale from './RatingScale';
import { FiltersContext } from '../FiltersContext';

function RatingBreakdown({ ratings, recommended, makeGetRequest }) {
  const { filters, removeAllFilters } = useContext(FiltersContext);

  const recommendedPercentage = () => {
    const total = Number(recommended.true) + Number(recommended.false);
    return Math.round((Number(recommended.true) / total) * 100);
  };

  return ratings ? (
    <div className="py-3">
      {Object.keys(ratings).reverse().map((key) => (
        <RatingScale
          key={key}
          stars={key}
          numReviews={ratings[key]}
          makeGetRequest={makeGetRequest}
          totalReviews={Number(recommended.true) + Number(recommended.false)}
        />
      ))}

      <div className="text-xs my-2">
        {filters.length ? (
          `Filters applied: ${filters.sort().toString().split(',').join(', ')}`
        ) : 'No filters selected'}
      </div>
      <div>
        <button
          onClick={() => {
            removeAllFilters();
            makeGetRequest(null, null, []);
          }}
          type="button"
        >
          <div className="text-xs underline my-1">Remove all filters</div>
        </button>
      </div>
      <div className="text-xs my-2">
        {recommendedPercentage()}
        % of reviews recommend this product
      </div>
    </div>
  ) : null;
}

export default RatingBreakdown;
