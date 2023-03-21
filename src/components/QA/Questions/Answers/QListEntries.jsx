import React, { useState } from 'react';
import AList from './AList';

function QListEntries({ eachQ }) {
  const [qHelpful, setQHelpful] = useState(eachQ.question_helpfulness);
  // console.log(eachQ);

  function handleQHelpful() {
    setQHelpful((state) => state + 1);
  }

  function handleAddAnswerClick() {}

  return (
    <div className="flex-col">
      <div className="flex justify-between items-center w-[500px]" style={{ border: '1px solid red' }}>
        {`Q: ${eachQ.question_body} `}
        <input className="flex text-blue-600" type="button" onClick={handleQHelpful} value="Helpful? " />
        <div className="flex">{`Yes (${qHelpful})`}</div>
        <button type="button" className="flex text-blue-600" onClick={handleAddAnswerClick}>Add Answer</button>
      </div>
      <AList eachQ={eachQ} />
    </div>
  );
}

export default QListEntries;
