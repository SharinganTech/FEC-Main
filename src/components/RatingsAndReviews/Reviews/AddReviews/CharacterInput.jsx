import React from 'react';

function CharacterInput({ characteristic }) {
  const inputMeanings = {
    Size: ['A size too small', 'A size too wide'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs long'],
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-6 text-xs text-center my-2">
        <h4 className="font-bold flex justify-center items-center">{characteristic}</h4>
        {inputMeanings[characteristic].map((key, index) => (
          <div className="border-2 border-black rounded m-1 py-2 flex flex-col hover:bg-gray-300">
            <label className="mx-1" htmlFor={index + 1} key={key}>{index + 1}</label>
            <input type="radio" name={characteristic.toLowerCase()} value={index + 1} required />
          </div>
        ))}
      </div>
      <div className="ml-[16.67%] text-xs flex justify-between">
        <div>{inputMeanings[characteristic][0]}</div>
        <div>{inputMeanings[characteristic][1]}</div>
      </div>
    </div>
  );
}

export default CharacterInput;
