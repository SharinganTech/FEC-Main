import React from 'react';

function Features({ features }) {
  console.log('my features: ', features);
  return (
    <div className="flex flex-col justify-evenly">
      {features.map((feature) => (
        <div>
          <span className="font-lightbold text-[22px] text-pastelBlack">
            {feature.feature}
          </span>
          :&nbsp;
          <span className="font-bold text-[22px] text-black">{feature.value}</span>
        </div>
      ))}
    </div>
  );
}

export default Features;
