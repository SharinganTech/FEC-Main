import React from 'react';
import generateAverage from '../lib/generateAverage';
import Stars from '../Stars';

function RatingSummary({ ratings }) {
  return ratings ? (
    <div className="flex p-1">
      <div className="text-3xl font-bold">{(Math.round((generateAverage(ratings)) * 10) / 10).toFixed(1)}</div>
      <Stars />
    </div>
  ) : null;
}

export default RatingSummary;
