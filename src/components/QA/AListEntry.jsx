import React, { useState } from 'react';

function AListEntry({ eachA }) {
  const [aHelpful, setAHelpful] = useState(eachA.helpfulness);
  // console.log(eachQ);

  function handleAHelpfulClick() {
    setAHelpful((state) => state + 1);
  }

  return (
    <div>
      {`A: ${eachA.body} `}
      <div>
        <span>{eachA.answerer_name}</span>
        <span>{eachA.date}</span>
        <input type="button" onClick={handleAHelpfulClick} value="Helpful? " />
        <span>{`Yes (${aHelpful})`}</span>
      </div>

    </div>
  );
}

export default AListEntry;
