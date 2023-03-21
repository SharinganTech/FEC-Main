import React, { useState } from 'react';
import AList from './AList';

function QAListEntry({ eachQ }) {
  const [qHelpful, setQHelpful] = useState(eachQ.question_helpfulness);
  console.log(eachQ);

  function handleQHelpful() {
    setQHelpful((state) => state + 1);
  }

  function handleAddAnswerClick() {}

  return (
    <div>
      <div>
        {`Q: ${eachQ.question_body} `}
        <input type="button" onClick={handleQHelpful} value="Helpful? " />
        <span>{`Yes (${qHelpful})`}</span>
        <button type="button" onClick={handleAddAnswerClick}>Add Answer</button>
      </div>
      <div>
        <AList eachQ={eachQ} />
      </div>
    </div>
  );
}

export default QAListEntry;
