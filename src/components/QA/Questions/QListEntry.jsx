import React, { useState } from 'react';
import AList from '../Answers/AList';
import AModal from '../Modals/AModal';

function QListEntry({ prodName, eachQ }) {
  const [qHelpful, setQHelpful] = useState(eachQ.question_helpfulness);
  const [openA, setOpenA] = useState(false);
  // console.log(eachQ);

  function handleQHelpful() {
    setQHelpful((state) => state + 1);
  }

  function handleAddAnswerClick() {
    setOpenA(true);
  }

  return (
    <>
      <div className="flex-row">
        <div className="flex justify-between items-center" style={{ border: '1px solid red' }}>
          <div className="font-bold">
            {`Q: ${eachQ.question_body} `}
          </div>
          <div>
            <input className="text-blue-600 text-xs" type="button" onClick={handleQHelpful} value={`Helpful? Yes (${qHelpful})`} />
            <button type="button" className="bg-pastelGray text-white font-bold text-xs uppercase px-1 py-1 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={handleAddAnswerClick}>ADD ANSWER</button>
          </div>
        </div>
        <AList eachQ={eachQ} />
      </div>
      {openA ? <AModal name={prodName} question={eachQ.question_body} setOpenA={setOpenA} /> : null}
    </>
  );
}

export default QListEntry;
