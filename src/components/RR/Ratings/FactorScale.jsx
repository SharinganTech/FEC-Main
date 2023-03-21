import React from 'react';

function RatingScale({ factor, value }) {
  return (
    <div>
      <div>
        {factor}
        {' '}
        {value}
      </div>
    </div>
  );
}

export default RatingScale;
