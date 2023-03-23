import React from 'react';
import Features from './Features';

function ProductOverview({ slogan, description }) {
  return (
    <div data-testid="des-slogan" className="flex flex-col items-center justify-evenly space-around h-[150px] w-[700px] pr-[15px] border-r-4 border-solid border-black">
      <p className="font-semibold justify-self-start text-[25px]">{slogan}</p>
      <p className="self-start">{description}</p>
    </div>
  );
}

export default ProductOverview;
