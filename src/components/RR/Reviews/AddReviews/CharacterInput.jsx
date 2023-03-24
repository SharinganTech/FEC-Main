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
    <div className="grid grid-cols-6 text-s">
      <h4 className="font-bold">{characteristic}</h4>
      {inputMeanings[characteristic].map((key, index) => (
        <label className="mx-1" htmlFor={index + 1} key={key}>
          {key}
          <input type="radio" name={characteristic.toLowerCase()} value={index + 1} />
        </label>
      ))}
    </div>
  );
}

export default CharacterInput;
