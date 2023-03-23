import React, { useState } from 'react';
import AList from '../Answers/AList';
import AModal from '../Modals/AModal';

function QListEntry({ prodInfo, eachQ }) {
  const [qHelpful, setQHelpful] = useState(eachQ.question_helpfulness);
  const [openA, setOpenA] = useState(false);
  // console.log(eachQ);

  function handleQHelpful() {
    setQHelpful((state) => state + 1);
  }

  function handleAddAnswerClick() {
    setOpenA(true);
  }
  // style={{ border: '1px solid red' }}

  return (
    <>
      <div className="flex-row">
        <div className="flex justify-between items-center px-1 py-3">
          <div className="font-bold text-xl">
            {`Q: ${eachQ.question_body} `}
          </div>
          <div className="text-xs space-x-2">
            <input className="text-blue-600 underline" type="button" onClick={handleQHelpful} value="Helpful?" />
            <span>{`Yes (${qHelpful})`}</span>
            <button type="button" className="bg-pastelGray text-white font-bold uppercase px-2 py-1 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={handleAddAnswerClick}>ADD ANSWER</button>
          </div>
        </div>
        <AList eachQ={eachQ} />
      </div>
      {openA
        ? <AModal prodInfo={prodInfo} question={eachQ.question_body} setOpenA={setOpenA} />
        : null}
    </>
  );
}

export default QListEntry;
