import React from 'react';
import FactorScale from './FactorScale';

function ProductBreakdown({ characteristics }) {
  console.log(characteristics);

  return (characteristics !== undefined) ? (
    <div>
      {/* {Object.keys(characteristics).map((key) => (
        <FactorScale
          key={characteristics.key.id}
          factor={key}
          // value={characteristics.key.value}
        />
      ))} */}
    </div>
  ) : null;
}

export default ProductBreakdown;
