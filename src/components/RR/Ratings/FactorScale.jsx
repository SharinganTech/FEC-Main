import React from 'react';

function FactorScale({ factor, value }) {
  return (
    <div>
      <div className="text-xs">
        {factor}
        {' '}
        {value}
      </div>
    </div>
  );
}

export default FactorScale;
