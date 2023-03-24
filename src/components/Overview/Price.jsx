import React from 'react';

function Price({ currentStyle }) {
  if (!currentStyle.sale_price) {
    return (
      <div>
        $
        {currentStyle.original_price}
      </div>
    );
  }
  return (
    <div>
      <span className="line-through">
        $
        {currentStyle.original_price}
      </span>
      <span className="text-red-600">
        $
        {currentStyle.sale_price}
      </span>
    </div>
  );
}

export default Price;
