import React from 'react';
import FactorScale from './FactorScale';

function FactorBreakdown({ characteristics }) {
  return (
    <div>
      {Object.keys(characteristics).map((key) => (
        <FactorScale
          key={characteristics[key].id}
          factor={key}
          value={characteristics[key].value}
        />
      ))}
    </div>
  );
}

export default FactorBreakdown;
