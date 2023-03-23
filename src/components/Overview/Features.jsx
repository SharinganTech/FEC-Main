import React from 'react';

function Features({ feature }) {
  return (
    <div>
      <p>{feature.feature}: {feature.value}</p>
    </div>
  );
}

export default Features;
