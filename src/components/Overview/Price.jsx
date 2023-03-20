import React from 'react';

function Price({ currentStyle }) {
  if (!currentStyle.sale_price) {
    return (
      <div className="text-red-600">
        ${currentStyle.original_price}
      </div>
    );
  }
  return (
    <div>
      <div class="line-through">${currentStyle.original_price}</div>
      <div class="text-red-600">${currentStyle.sale_price}</div>
    </div>
  );
}

export default Price;
