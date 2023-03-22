import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';

function AListEntries({ eachA }) {
  const [aHelpful, setAHelpful] = useState(eachA.helpfulness);
  const [isReported, setIsReported] = useState(false);
  // console.log(eachQ);

  function handleAHelpfulClick() {
    setAHelpful((state) => state + 1);
  }

  function formatDate(date) {
    const slicedDate = date.slice(0, 10);
    const dateObj = {
      month: Number(slicedDate.slice(5, 7)),
      day: Number(slicedDate.slice(8)),
      year: Number(slicedDate.slice(0, 4)),
    };
    // console.log(dateObj);
    return format(new Date(dateObj.year, dateObj.month - 1, dateObj.day), 'MMMM dd, yyyy');
  }

  function handleReportClick() {
    setIsReported(true);
  }

  return (
    <>
      <div id="answers-body" className="flex break-all">
        {`A: ${eachA.body} `}
      </div>
      <div id="answer-buttons" className="flex justify-between items-center w-[500px] text-sm">
        <span>{`by ${eachA.answerer_name}`}</span>
        {eachA.answerer_name.includes('Seller') ? <span className="font-bold">Seller</span> : null}
        <span>{formatDate(eachA.date)}</span>
        <input className="text-blue-600" type="button" onClick={handleAHelpfulClick} value="Helpful? " />
        <span>{`Yes (${aHelpful})`}</span>
        <input className="text-red-600" type="button" onClick={handleReportClick} value={isReported ? 'Reported' : 'Report'} />
      </div>
    </>
  );
}

export default AListEntries;
