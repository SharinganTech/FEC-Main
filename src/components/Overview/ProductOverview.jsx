import React from 'react';

function ProductOverview({ slogan, description }) {
  return (
    <div data-testid="des-slogan" className="flex flex-col items-center justify-evenly space-around h-[150px] w-[700px] pr-[15px] mr-[25px] border-r-2 border-solid border-pastelGray">
      <p className="font-semibold justify-self-start text-[25px]">{slogan}</p>
      <p className="self-start">{description}</p>
    </div>
  );
}

export default ProductOverview;
