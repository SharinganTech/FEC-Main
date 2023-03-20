import React from 'react';
import generateAverage from '../lib/generateAverage';

function RatingSummary({ ratings }) {
  return ratings ? (
    <div>
      {(Math.round((generateAverage(ratings)) * 10) / 10).toFixed(1)}
      <div>Stars here</div>
    </div>
  ) : null;
}

export default RatingSummary;
