import React from 'react';

function Features({ features }) {
  return (
    <div className="flex flex-col justify-evenly">
      {features.map((feature, index) => (
        <div key={index}>
          <span key={index} className="font-lightbold text-[22px] text-pastelBlack">
            {feature.feature}
          </span>
          :&nbsp;
          <span key={index + 1} className="font-bold text-[22px] text-black">{feature.value}</span>
        </div>
      ))}
    </div>
  );
}

export default Features;
