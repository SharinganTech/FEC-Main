import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { format, parseISO } from 'date-fns';

function AListEntry({ eachA }) {
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
    <div className="px-1 py-3">
      <b data-testid="answers-body" className="text-xl">
        {'A: '}
      </b>
      <span className="break-all text-lg">
        {`${eachA.body}`}
      </span>
      <div className="flex justify-between items-center relative">
        <div className="flex text-sm justify-start space-x-3">
          <div>{`by ${eachA.answerer_name} `}</div>
          {eachA.answerer_name.includes('Seller') ? <span className="font-bold">Seller</span> : null}
          <div>{format(parseISO(eachA.date), 'MMMM dd, yyyy')}</div>
        </div>
        <div className="flex text-xs space-x-2">
          <input data-testid="increment-btn" className="text-blue-600 underline" type="button" onClick={handleAHelpfulClick} value="Helpful?" />
          <span data-testid="helpful-span">{`Yes (${aHelpful})`}</span>
          <input className="text-red-600 underline" type="button" onClick={handleReportClick} value={isReported ? 'Reported' : 'Report'} />
        </div>
      </div>
    </div>
  );
}

export default AListEntry;
