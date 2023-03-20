import React from 'react';

function ProductOverview({ prodDetails }) {
  return (
    <div>
      <p>{prodDetails.slogan}</p>
      <p>{prodDetails.description}</p>
      {prodDetails.features.map((feature, index) => (
        <Features feature={feature} key={index} />
      ))}
    </div>
  );
}

export default ProductOverview;
