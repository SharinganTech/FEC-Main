import React from 'react';

function Features({ features }) {
  return (
    <div className="max-w-[200px] max-h-[100%] flex flex-col justify-evenly">
      {features.map((feature, index) => (
        <div key={index}>
          <span key={index} className="font-lightbold text-[1em] text-pastelBlack">
            {feature.feature}
          </span>
          :&nbsp;
          <span key={index + 1} className="font-bold text-[1em] text-black">{feature.value}</span>
        </div>
      ))}
    </div>
  );
}

export default Features;
