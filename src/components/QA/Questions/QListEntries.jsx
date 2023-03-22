import React, { useState } from 'react';
import AList from './Answers/AList';

function QListEntries({ eachQ }) {
  const [qHelpful, setQHelpful] = useState(eachQ.question_helpfulness);
  // console.log(eachQ);

  function handleQHelpful() {
    setQHelpful((state) => state + 1);
  }

  function handleAddAnswerClick() {}

  return (
    <div className="flex-row">
      <div className="flex justify-between items-center max-w-[800px]" style={{ border: '1px solid red' }}>
        <main className="font-bold">{`Q: ${eachQ.question_body} `}</main>
        <span className="text-xs">
          <input className="text-blue-600" type="button" onClick={handleQHelpful} value={`Helpful? Yes (${qHelpful})`} />
          <button type="button" className="text-blue-600" onClick={handleAddAnswerClick}>Add Answer</button>
        </span>
      </div>
      <AList eachQ={eachQ} />
    </div>
  );
}

export default QListEntries;
