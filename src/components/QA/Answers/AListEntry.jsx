/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';
import axios from 'axios';

function AListEntry({ eachA }) {
  const [aHelpful, setAHelpful] = useState(eachA.helpfulness);
  const [isReported, setIsReported] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState(false);

  // console.log({
  //     'preDate': eachA.date.slice(0, 10).replace(/-/g, '/'),
  //     'parseISO': parseISO(eachA.date),
  //     'postDate': format(new Date(eachA.date.slice(0, 10).replace(/-/g, '/')), 'MMMM dd, yyyy'),
  //   });

  function axPutA(data) {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${eachA.id}/helpful`, data, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    });
  }

  function handleAHelpfulClick() {
    if (!helpfulClicked) {
      axPutA({ helpfulness: aHelpful + 1 });
      setAHelpful((state) => state + 1);
      setHelpfulClicked(true);
    }
  }

  function renderImages() {
    const photoURLs = eachA.photos;
    if (photoURLs) {
      return photoURLs.map((p, i) => (
        <img key={i} className="w-[100px] h-[100px] apsect-auto" alt="" src={p} />
      ));
    }
    return null;
  }

  function renderSeller() {
    const aSeller = eachA.answerer_name;
    if (aSeller.toLowerCase().includes('seller')) {
      return (
        <span>
          {'by '}
          <span className="font-bold">{aSeller}</span>
        </span>
      );
    }
    return <div>{`by ${aSeller} `}</div>;
  }

  function handleReportClick() {
    setIsReported(true);
  }

  return (
    <div className="px-1 py-3">
      <div>
        <b data-testid="answers-title" className="text-xl">
          {'A: '}
        </b>
        <span data-testid="answers-body" className="overflow-auto break-words text-lg">
          {`${eachA.body}`}
        </span>
      </div>
      <div className="flex pl-4 gap-x-6">
        {renderImages()}
      </div>
      <div className="flex justify-between items-center">
        <div data-testid="answerers-name" className="flex text-sm justify-start space-x-3">
          {renderSeller()}
          <div data-testid="answers-date">{format(new Date(eachA.date.slice(0, 10).replace(/-/g, '/')), 'MMMM dd, yyyy')}</div>
        </div>
        <div className="flex text-xs space-x-2">
          <input data-testid="increment-btn" className="text-blue-600" type="button" onClick={handleAHelpfulClick} value="Helpful?" />
          <span data-testid="helpful-span" className="underline">{`Yes (${aHelpful})`}</span>
          <input className="text-red-600 underline" type="button" onClick={handleReportClick} value={isReported ? 'Reported' : 'Report'} />
        </div>
      </div>
    </div>
  );
}

export default AListEntry;
