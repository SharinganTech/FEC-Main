/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import axios from 'axios';
import AList from '../Answers/AList';
import AModal from '../Modals/AModal';

function QListEntry({ prodInfo, eachQ, axGet }) {
  const [qHelpful, setQHelpful] = useState(eachQ.question_helpfulness);
  const [openA, setOpenA] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [isReported, setIsReported] = useState(false);

  function axPostAnswer(data) {
    console.log(data);
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${eachQ.question_id}/answers`, data, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then(() => {
        axGet();
      })
      .catch((err) => {
        throw new Error('Error posting new answer', err);
      });
  }

  function axPutQuestion(url, data) {
    axios.put(url, data, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    });
  }

  function handleQHelpful() {
    if (!helpfulClicked) {
      axPutQuestion(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${eachQ.question_id}/helpful`, { question_helpfulness: qHelpful + 1 });
      setQHelpful((state) => state + 1);
      setHelpfulClicked(true);
    }
  }

  function handleAddAnswerClick() {
    setOpenA(true);
  }

  function handleReportClick() {
    axPutQuestion(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${eachQ.question_id}/report`, { reported: true });
    setIsReported(true);
  }

  return (
    <>
      <div className="flex-row border-solid border-pastelGray border-2 my-2">
        <div className="flex justify-between items-center px-1 py-3">
          <div className="font-bold text-xl break-all">
            {`Q: ${eachQ.question_body} `}
          </div>
          <div className="text-xs space-x-2">
            <input className="text-blue-600" type="button" onClick={handleQHelpful} value="Helpful?" />
            <span className="underline">{`Yes (${qHelpful})`}</span>
            <span>  |</span>
            <input className="text-red-600 underline px-1" type="button" onClick={handleReportClick} value={isReported ? 'Reported' : 'Report'} />
            <button type="button" className="border-[1px] border-slate-600 font-semibold uppercase text-xs p-2 rounded-sm shadow-inner mr-1 mb-1" onClick={handleAddAnswerClick}>Add Answer</button>
          </div>
        </div>
        <AList eachQ={eachQ} />
      </div>
      {openA
        ? (
          <AModal
            prodInfo={prodInfo}
            question={eachQ.question_body}
            setOpenA={setOpenA}
            axPostAnswer={axPostAnswer}
          />
        )
        : null}
    </>
  );
}

export default QListEntry;
