import React from 'react';

function FactorScale({ factor, value }) {
  const factorPercentage = (value / 5) * 100;
  console.log(factorPercentage);

  return (
    <div className="flex flex-col">
      <div className="text-xs">{factor}</div>
      <div className="w-full h-2 mx-2 mt-4 bg-gray-400 relative">
        <span className="h-full block absolute transform -translate-y-2" style={{ left: `${factorPercentage}%` }}>&#9660;</span>
        {/* <div className="absolute inset-0 flex items-center justify-between">
          <span>Small</span>
          <span>Large</span>
        </div> */}
      </div>
    </div>
  );
}

export default FactorScale;
