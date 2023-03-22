import React, { useState } from 'react';
import AList from '../Answers/AList';
import AModal from '../Modals/AModal';

function QListEntry({ eachQ }) {
  const [qHelpful, setQHelpful] = useState(eachQ.question_helpfulness);
  const [openAModal, setOpenAModal] = useState(false);
  // console.log(eachQ);

  function handleQHelpful() {
    setQHelpful((state) => state + 1);
  }

  function handleAddAnswerClick() {
    setOpenAModal(true);
  }

  return (
    <>
      <div className="flex-row">
        <div className="flex justify-between items-center" style={{ border: '1px solid red' }}>
          <div className="font-bold">
            {`Q: ${eachQ.question_body} `}
          </div>
          <div className="text-xs">
            <input className="text-blue-600" type="button" onClick={handleQHelpful} value={`Helpful? Yes (${qHelpful})`} />
            <button type="button" className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={handleAddAnswerClick}>ADD ANSWER</button>
          </div>
        </div>
        <AList eachQ={eachQ} />
      </div>
      {openAModal ? <AModal question={eachQ.question_body} setOpenAModal={setOpenAModal} /> : null}
    </>
  );
}

export default QListEntry;
