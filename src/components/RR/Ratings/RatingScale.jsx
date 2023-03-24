import React, { useContext } from 'react';
import { FiltersContext } from '../FiltersContext';

function RatingScale({
  stars, numReviews, totalReviews, makeGetRequest,
}) {
  const { filters, addFilter, removeFilter } = useContext(FiltersContext);

  const calculatePercentage = Math.round((numReviews / totalReviews) * 100).toString();

  const handleFilterClick = () => {
    if (filters.includes(stars)) {
      removeFilter(stars);
    } else {
      addFilter(stars);
    }
    console.log(filters);
    makeGetRequest();
  };

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={() => handleFilterClick()} className="flex flex-row hover:bg-gray-300">
      <div className="whitespace-nowrap text-xs underline">
        {`${stars} stars`}
      </div>
      <div className="w-full h-2 mx-2 my-2 bg-gray-400 ">
        <span className="h-full bg-green-400 block relative" style={{ width: `${calculatePercentage}%` }} />
      </div>
      <div className="text-xs">
        {numReviews}
      </div>
    </div>
  );
}

export default RatingScale;
