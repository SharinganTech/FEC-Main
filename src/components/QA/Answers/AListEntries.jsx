import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { format, parseISO } from 'date-fns';

function AListEntries({ eachA }) {
  const [aHelpful, setAHelpful] = useState(eachA.helpfulness);
  const [isReported, setIsReported] = useState(false);
  // console.log(eachQ);

  function handleAHelpfulClick() {
    setAHelpful((state) => state + 1);
  }

  // function formatDate(date) {
  //   return format(parseISO(date), 'MMMM dd, yyyy');
  // }

  function handleReportClick() {
    setIsReported(true);
  }

  return (
    <>
      <div data-testid="answers-body" className="flex break-all">
        {`A: ${eachA.body} `}
      </div>
      <div id="answer-buttons" className="flex justify-between items-center w-[500px] text-sm relative">
        <span>{`by ${eachA.answerer_name}`}</span>
        {eachA.answerer_name.includes('Seller') ? <span className="font-bold">Seller</span> : null}
        <span>{format(parseISO(eachA.date), 'MMMM dd, yyyy')}</span>
        <input data-testid="increment-btn" className="text-blue-600" type="button" onClick={handleAHelpfulClick} value="Helpful? " />
        <span data-testid="helpful-span">{`Yes (${aHelpful})`}</span>
        <input className="text-red-600" type="button" onClick={handleReportClick} value={isReported ? 'Reported' : 'Report'} />
      </div>
    </>
  );
}

export default AListEntries;
