import React from 'react';

function FactorScale({ factor, value }) {
  const factorPercentage = (value / 5) * 100;

  const factorVariables = {
    Size: ['A size too small', 'A size too wide'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs long'],
  };

  return (
    <div className="flex flex-col relative mb-6">
      <div className="text-s">{factor}</div>
      <div className="w-full h-2 mx-2 mt-2 bg-gray-400 relative">
        <span className="h-full block absolute transform -translate-y-2" style={{ left: `${factorPercentage}%` }}>&#9660;</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-between text-xs transform translate-y-8">
        <span>{factorVariables[factor][0]}</span>
        <span>{factorVariables[factor][1]}</span>
      </div>
    </div>
  );
}

export default FactorScale;
