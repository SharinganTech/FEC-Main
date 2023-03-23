import React, { useState, useContext } from 'react';

function ProductOverview({ slogan, description }) {
  return (
    <div data-testid="des-slogan" className="flex flex-col justify-center">
      <p>{slogan}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProductOverview;
