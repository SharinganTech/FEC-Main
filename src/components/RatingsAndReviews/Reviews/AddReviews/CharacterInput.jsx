import React from 'react';

function CharacterInput({ characteristic }) {
  const inputMeanings = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-6 text-xs text-center my-2">
        <h4 className="font-bold flex justify-center items-center">{characteristic}</h4>
        {inputMeanings[characteristic].map((key, index) => (
          <div key={characteristic + key} className="border-2 border-black bg-white rounded m-1 py-2 flex flex-col hover:bg-gray-300">
            <label className="mx-1" htmlFor={index + 1}>{index + 1}</label>
            <input type="radio" name={characteristic.toLowerCase()} value={index + 1} required />
          </div>
        ))}
      </div>
      <div className="ml-[16.67%] text-xs flex justify-between">
        <div>{inputMeanings[characteristic][0]}</div>
        <div>{inputMeanings[characteristic][4]}</div>
      </div>
    </div>
  );
}

export default CharacterInput;
