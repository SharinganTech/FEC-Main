import React from 'react';
import generateAverage from '../lib/generateAverage';
import Stars from '../../RIC/Stars';

function RatingSummary({ ratings }) {
  return ratings ? (
    <div className="flex p-1">
      <div className="text-6xl font-bold">{(Math.round((generateAverage(ratings)) * 10) / 10).toFixed(1)}</div>
      <div className="text-[#798EA4] text-sm ml-3 mt-1">
        <Stars
          rating={generateAverage(ratings)}
          numReviews={1}
          color="EDF1FF"
        />
      </div>
    </div>
  ) : null;
}

export default RatingSummary;
